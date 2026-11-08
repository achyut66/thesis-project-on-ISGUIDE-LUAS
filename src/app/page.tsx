"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "./home/Hero";
import About from "./home/About";
import Service from "./home/Service";
import HowItWorks from "./home/HowItWorks";
import CTA from "./home/CTA";
import ChatWidget from "./components/chat/ChatWidget";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
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
  // chat handle
  useEffect(() => {
    const handleOpenChat = () => {
      setChatOpen(true);
    };

    window.addEventListener("finguide:open-chat", handleOpenChat);

    return () => {
      window.removeEventListener("finguide:open-chat", handleOpenChat);
    };
  }, []);

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

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* ================= HERO SECTION ================= */}

      <Hero />

      {/* ================= ABOUT SECTION ================= */}

      <About />

      {/* ================= SERVICES SECTION ================= */}

      <Service />

      {/* ================= HOW IT WORKS ================= */}

      <HowItWorks />

      {/* ================= CALL TO ACTION ================= */}

      <CTA />

      {/* ================= FLOATING CHAT BUTTON ================= */}

      <ChatWidget />
    </main>
  );
}
