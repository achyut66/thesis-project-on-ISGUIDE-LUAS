"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Globe2,
  HeartHandshake,
  Languages,
  Loader2,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const services = [
  {
    name: "Migri",
    label: "Immigration",
    detail:
      "Understand residence permits, applications, and immigration-related services.",
    icon: Globe2,
    link: "https://migri.fi/en/home",
  },
  {
    name: "DVV",
    label: "Registration & Identity",
    detail:
      "Find guidance about personal identity codes, addresses, and population information.",
    icon: ShieldCheck,
    link: "https://dvv.fi/en/individuals",
  },
  {
    name: "Kela",
    label: "Social Security",
    detail:
      "Explore general information about social security and available benefits.",
    icon: HeartHandshake,
    link: "https://www.kela.fi/main-page",
  },
  {
    name: "Vero",
    label: "Taxation",
    detail:
      "Learn where to find information about tax cards, tax numbers, and taxation.",
    icon: BookOpen,
    link: "https://www.vero.fi/en/",
  },
];

// Scroll reveal animation
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("revealed");
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatTriggerRef = useRef<HTMLButtonElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Focus management
  useEffect(() => {
    if (chatOpen) {
      inputRef.current?.focus();
    } else {
      chatTriggerRef.current?.focus();
    }
  }, [chatOpen]);

  // Automatically scroll chat
  useEffect(() => {
    if (!chatOpen) return;

    chatEndRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, [messages, chatOpen]);

  // Escape key and keyboard navigation
  useEffect(() => {
    if (!chatOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setChatOpen(false);
      }

      if (event.key === "Tab" && chatRef.current) {
        const elements = Array.from(
          chatRef.current.querySelectorAll<HTMLElement>(
            "button:not(:disabled), textarea:not(:disabled), a[href]",
          ),
        );

        if (!elements.length) return;

        const first = elements[0];
        const last = elements[elements.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [chatOpen]);

  const openChat = (suggestion?: string) => {
    setChatOpen(true);

    if (suggestion) {
      setMessage(suggestion);
    }
  };

  // Send message to existing Ollama API
  const sendMessage = async () => {
    const text = message.trim();

    if (!text || loading) return;

    const conversation: Message[] = [
      ...messages.filter(
        (msg) =>
          msg.content.trim() &&
          !msg.content.startsWith("Sorry, something went wrong"),
      ),
      {
        role: "user",
        content: text,
      },
    ];

    setMessages([
      ...conversation,
      {
        role: "assistant",
        content: "",
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: conversation.slice(-19),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("AI request failed");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, {
          stream: true,
        });

        if (chunk) {
          setMessages((prev) =>
            prev.map((msg, index) =>
              index === prev.length - 1
                ? {
                    ...msg,
                    content: msg.content + chunk,
                  }
                : msg,
            ),
          );
        }
      }

      const remaining = decoder.decode();

      if (remaining) {
        setMessages((prev) =>
          prev.map((msg, index) =>
            index === prev.length - 1
              ? {
                  ...msg,
                  content: msg.content + remaining,
                }
              : msg,
          ),
        );
      }
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? {
                ...msg,
                content: msg.content
                  ? msg.content +
                    "\n\n*Response interrupted. Please try again.*"
                  : "Sorry, something went wrong. Please try again.",
              }
            : msg,
        ),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            className="flex items-center gap-3 font-bold tracking-tight"
            aria-label="FinGuide home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Globe2 size={23} />
            </span>

            <span className="text-xl">
              Fin<span className="text-blue-600">Guide</span>
              <span className="ml-2 align-middle text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                Beta
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex"
            aria-label="Main navigation"
          >
            <a href="#about" className="hover:text-blue-600">
              About
            </a>

            <a href="#services" className="hover:text-blue-600">
              Services
            </a>

            <a href="#how-it-works" className="hover:text-blue-600">
              How it works
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openChat()}
              className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:inline-flex"
            >
              <MessageCircle size={17} />
              Ask AI
            </button>

            <button
              className="rounded-xl p-2 text-slate-700 md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            className="flex flex-col gap-4 border-t border-slate-100 bg-white px-6 py-5 text-sm font-medium md:hidden"
            aria-label="Mobile navigation"
          >
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["How it works", "#how-it-works"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openChat();
              }}
              className="text-left font-semibold text-blue-600"
            >
              Ask the AI assistant →
            </button>
          </nav>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}

      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#e7f4f4]"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-28 top-4 h-[430px] w-[430px] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-teal-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          {/* Left content */}
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm">
              <Sparkles size={15} />
              Making public services easier to understand
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.13] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Finding your way in Finland,{" "}
              <span className="text-blue-600">made simpler.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              New to Finland? Understanding public services can feel
              complicated. FinGuide helps international residents find clear
              information, explore useful resources, and ask questions in
              everyday language.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() => openChat()}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Ask the AI assistant
                <ArrowRight size={18} />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-200"
              >
                Explore services
                <ChevronDown size={18} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
              <CheckCircle2 className="text-teal-600" size={18} />
              Independent guidance • Simple language • Official links
            </div>
          </Reveal>

          {/* Right preview */}
          <Reveal className="lg:pl-6">
            <div className="relative mx-auto max-w-lg rounded-[2rem] border border-white bg-white/90 p-5 shadow-[0_30px_90px_-35px_rgba(37,99,235,0.35)] sm:p-7">
              <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Sparkles />
                </span>

                <div>
                  <p className="font-bold">FinGuide AI</p>
                  <p className="text-xs text-slate-500">
                    Your digital guidance companion
                  </p>
                </div>

                <span className="ml-auto flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  AI assistant
                </span>
              </div>

              <div className="space-y-4">
                <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-slate-100 p-4 text-sm leading-6 text-slate-700">
                  Hi! 👋 I can help you understand where to find information
                  about public services in Finland.
                </div>

                <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-blue-600 p-4 text-sm leading-6 text-white">
                  How do I find information about registering my address?
                </div>

                <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-slate-100 p-4 text-sm leading-6 text-slate-700">
                  A good place to start is the Digital and Population Data
                  Services Agency (DVV). I can help you find the relevant
                  official guidance.
                </div>
              </div>

              <button
                onClick={() =>
                  openChat("How do I register my address in Finland?")
                }
                className="mt-7 flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-500 transition hover:border-blue-300"
              >
                <span>Ask your own question...</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Send size={16} />
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section id="about" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              About FinGuide
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Public services should be easier to understand.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Moving to a new country brings many questions. Finding the right
              information should not be another challenge. FinGuide is a student
              research prototype exploring how accessible information and
              conversational AI can support international residents navigating
              Finnish public services.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Languages,
                title: "Clear information",
                desc: "Understand unfamiliar services and terminology through simple explanations.",
              },
              {
                icon: MessageCircle,
                title: "Conversational assistance",
                desc: "Ask questions naturally and receive guidance through an AI-powered assistant.",
              },
              {
                icon: ShieldCheck,
                title: "Official resources",
                desc: "Find links to the relevant Finnish authorities and verify important information.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Reveal key={title}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={26} />
                  </span>

                  <h3 className="text-xl font-bold">{title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}

      <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  Explore public services
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Not sure where to start?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Explore some of the main authorities international residents
                  may encounter in Finland.
                </p>
              </div>

              <button
                onClick={() =>
                  openChat("Which Finnish public service should I contact?")
                }
                className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
              >
                Ask for guidance
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ name, label, detail, icon: Icon, link }) => (
              <Reveal key={name}>
                <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-lg">
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                    <Icon size={25} />
                  </span>

                  <h3 className="text-2xl font-bold">{name}</h3>

                  <p className="mt-1 text-sm font-semibold text-blue-600">
                    {label}
                  </p>

                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {detail}
                  </p>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-blue-600"
                  >
                    Official website
                    <ArrowUpRight size={16} />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Simple by design
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How FinGuide works
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Ask a question",
                desc: "Write your question in your own words, even if you are unsure of the official terminology.",
              },
              {
                number: "02",
                title: "Get a clear explanation",
                desc: "The AI assistant responds conversationally and can help explain unfamiliar concepts.",
              },
              {
                number: "03",
                title: "Check official guidance",
                desc: "Use the linked authorities to verify requirements and complete official procedures.",
              },
            ].map(({ number, title, desc }) => (
              <Reveal key={number}>
                <div className="relative border-t-2 border-blue-200 pt-7">
                  <span className="text-5xl font-extrabold text-blue-100">
                    {number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">{title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="bg-blue-700 py-20 text-white">
        <Reveal className="mx-auto max-w-4xl px-5 text-center">
          <Sparkles className="mx-auto text-blue-200" size={34} />

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Have a question? Start a conversation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            From everyday questions to finding the right public authority,
            FinGuide is here to help you take the next step.
          </p>

          <button
            onClick={() => openChat()}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Chat with FinGuide
            <ArrowRight size={18} />
          </button>
        </Reveal>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:px-8">
          <p className="font-semibold text-slate-800">
            FinGuide{" "}
            <span className="font-normal text-slate-500">
              — An independent student research prototype
            </span>
          </p>

          <p>
            Not an official government service. Always verify important
            information with the relevant authority.
          </p>
        </div>
      </footer>

      {/* ================= FLOATING CHAT BUTTON ================= */}

      {!chatOpen && (
        <button
          ref={chatTriggerRef}
          onClick={() => openChat()}
          className="fixed bottom-6 right-5 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-4 font-semibold text-white shadow-2xl shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-700 sm:right-8"
          aria-label="Open AI chat assistant"
        >
          <MessageCircle size={21} />

          <span className="hidden sm:inline">Ask FinGuide AI</span>
        </button>
      )}

      {/* ================= AI CHATBOT ================= */}

      {chatOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end bg-slate-900/30 p-0 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setChatOpen(false);
            }
          }}
        >
          <div
            ref={chatRef}
            role="dialog"
            aria-modal="true"
            aria-label="FinGuide AI assistant"
            className="flex h-[min(100dvh,720px)] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:h-[min(85vh,690px)] sm:max-w-[450px] sm:rounded-3xl"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 border-b border-slate-100 bg-white px-5 py-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Sparkles size={22} />
              </span>

              <div className="min-w-0 flex-1">
                <h2 className="font-bold">FinGuide AI</h2>

                <p className="text-xs text-slate-500">
                  Independent guidance assistant
                </p>
              </div>

              <button
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
                className="rounded-xl p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={22} />
              </button>
            </div>

            {/* Chat messages */}
            <div
              className="flex-1 space-y-4 overflow-y-auto bg-[#f8fafc] px-4 py-5"
              role="log"
              aria-label="Conversation"
              aria-live="off"
            >
              {/* Welcome screen */}
              {messages.length === 0 && (
                <div className="py-8 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-blue-600">
                    <MessageCircle size={30} />
                  </span>

                  <h3 className="mt-5 text-xl font-bold">
                    How can I help you?
                  </h3>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    Ask about Finnish public services or choose a question
                    below.
                  </p>

                  <div className="mt-6 flex flex-col gap-2">
                    {[
                      "What is DVV?",
                      "Where can I learn about residence permits?",
                      "How do I get a tax card?",
                    ].map((question) => (
                      <button
                        key={question}
                        onClick={() => {
                          setMessage(question);
                          inputRef.current?.focus();
                        }}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Conversation */}
              {messages.map((msg, index) => {
                const isStreaming =
                  loading &&
                  msg.role === "assistant" &&
                  index === messages.length - 1;

                return (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        min-w-0 max-w-[88%]
                        rounded-2xl px-4 py-3
                        text-sm leading-6 shadow-sm
                        animate-[messageAppear_0.3s_ease-out]
                        ${
                          msg.role === "user"
                            ? "rounded-br-md bg-blue-600 text-white"
                            : "rounded-bl-md bg-white text-slate-800"
                        }
                      `}
                    >
                      {msg.content ? (
                        msg.role === "assistant" ? (
                          /* Markdown AI response */
                          <div
                            className={`markdown-content ${
                              isStreaming ? "is-streaming" : ""
                            }`}
                          >
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                p: ({ children }) => (
                                  <p className="my-2 first:mt-0 last:mb-0">
                                    {children}
                                  </p>
                                ),

                                ul: ({ children }) => (
                                  <ul className="my-2 list-disc space-y-1 pl-5">
                                    {children}
                                  </ul>
                                ),

                                ol: ({ children }) => (
                                  <ol className="my-2 list-decimal space-y-1 pl-5">
                                    {children}
                                  </ol>
                                ),

                                a: ({ href, children }) => (
                                  <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="break-all font-semibold text-blue-600 underline"
                                  >
                                    {children}
                                  </a>
                                ),

                                pre: ({ children }) => (
                                  <pre className="my-2 overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-white">
                                    {children}
                                  </pre>
                                ),

                                table: ({ children }) => (
                                  <div className="my-2 overflow-x-auto">
                                    <table className="w-full border-collapse text-xs">
                                      {children}
                                    </table>
                                  </div>
                                ),

                                th: ({ children }) => (
                                  <th className="border border-slate-200 p-2 text-left">
                                    {children}
                                  </th>
                                ),

                                td: ({ children }) => (
                                  <td className="border border-slate-200 p-2">
                                    {children}
                                  </td>
                                ),
                              }}
                            >
                              {msg.content.trimEnd()}
                            </ReactMarkdown>
                          </div>
                        ) : (
                          /* User message */
                          <span className="whitespace-pre-wrap break-words">
                            {msg.content}
                          </span>
                        )
                      ) : isStreaming ? (
                        /* Thinking animation */
                        <div
                          role="status"
                          aria-label="AI is generating a response"
                          className="flex items-center gap-2 text-slate-500"
                        >
                          <span>Thinking</span>

                          <span className="flex gap-1">
                            {[0, 1, 2].map((number) => (
                              <span
                                key={number}
                                className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500"
                                style={{
                                  animationDelay: `${number * 150}ms`,
                                }}
                              />
                            ))}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}

              <div ref={chatEndRef} />
            </div>

            {/* Chat input */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                void sendMessage();
              }}
              className="border-t border-slate-100 bg-white p-4"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={message}
                  maxLength={2000}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      !event.shiftKey &&
                      !event.nativeEvent.isComposing
                    ) {
                      event.preventDefault();
                      void sendMessage();
                    }
                  }}
                  placeholder="Ask your question..."
                  aria-label="Type your question"
                  className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  disabled={loading || !message.trim()}
                  aria-label={loading ? "Generating response" : "Send message"}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                </button>
              </div>

              <p className="mt-2 text-center text-[11px] text-slate-400">
                AI can make mistakes. Verify official requirements with the
                relevant authority.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
