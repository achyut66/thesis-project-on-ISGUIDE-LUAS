"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import FloatingChatButton from "./FloatingChatButton";
import ChatWindow, { type ChatMessage } from "./ChatWindow";

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const chatTriggerRef = useRef<HTMLButtonElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const messagesRef = useRef<ChatMessage[]>([]);
  const loadingRef = useRef(false);
  const wasOpenRef = useRef(false);

  const openChat = useCallback((suggestion?: string) => {
    if (suggestion) {
      setMessage(suggestion);
    }

    setChatOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setChatOpen(false);
  }, []);

  // Listen for chat requests from other components
  useEffect(() => {
    const handleOpenChat = (event: Event) => {
      const customEvent = event as CustomEvent<{
        suggestion?: string;
      }>;

      openChat(customEvent.detail?.suggestion);
    };

    window.addEventListener("finguide:open-chat", handleOpenChat);

    return () => {
      window.removeEventListener("finguide:open-chat", handleOpenChat);
    };
  }, [openChat]);

  // Focus input when chat opens and restore focus when it closes
  useEffect(() => {
    if (chatOpen) {
      wasOpenRef.current = true;

      const timeout = window.setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return () => window.clearTimeout(timeout);
    }

    if (wasOpenRef.current) {
      chatTriggerRef.current?.focus();
    }
  }, [chatOpen]);

  // Scroll to the latest message
  useEffect(() => {
    if (chatOpen) {
      chatEndRef.current?.scrollIntoView({
        behavior: loading ? "auto" : "smooth",
        block: "end",
      });
    }
  }, [messages, loading, chatOpen]);

  // Close chat with Escape
  useEffect(() => {
    if (!chatOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeChat();
      }

      if (event.key === "Tab" && chatRef.current) {
        const focusable = Array.from(
          chatRef.current.querySelectorAll<HTMLElement>(
            "button:not([disabled]), textarea:not([disabled]), a[href], input:not([disabled])",
          ),
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [chatOpen, closeChat]);

  // Send a message to the existing Ollama API
  const sendMessage = async () => {
    const question = message.trim();

    if (!question || loadingRef.current) return;

    loadingRef.current = true;
    setLoading(true);
    setMessage("");

    const conversation: ChatMessage[] = [
      ...messagesRef.current,
      {
        role: "user",
        content: question,
      },
    ];

    messagesRef.current = conversation;
    setMessages(conversation);

    const assistantIndex = conversation.length;

    const withAssistant: ChatMessage[] = [
      ...conversation,
      {
        role: "assistant",
        content: "",
      },
    ];

    messagesRef.current = withAssistant;
    setMessages(withAssistant);

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

      if (!response.ok) {
        throw new Error(`Chat request failed: ${response.status}`);
      }

      if (!response.body) {
        throw new Error("No response stream available.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let assistantResponse = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        assistantResponse += decoder.decode(value, {
          stream: true,
        });

        setMessages((previous) => {
          const updated = [...previous];

          updated[assistantIndex] = {
            role: "assistant",
            content: assistantResponse,
          };

          messagesRef.current = updated;

          return updated;
        });
      }

      assistantResponse += decoder.decode();

      setMessages((previous) => {
        const updated = [...previous];

        updated[assistantIndex] = {
          role: "assistant",
          content: assistantResponse,
        };

        messagesRef.current = updated;

        return updated;
      });
    } catch (error) {
      console.error("FinGuide chat error:", error);

      setMessages((previous) => {
        const updated = [...previous];

        updated[assistantIndex] = {
          role: "assistant",
          content:
            "Sorry, I couldn't connect to the AI assistant. Please try again.",
        };

        messagesRef.current = updated;

        return updated;
      });
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <>
      {!chatOpen && (
        <FloatingChatButton
          buttonRef={chatTriggerRef}
          onClick={() => openChat()}
        />
      )}

      {chatOpen && (
        <ChatWindow
          messages={messages}
          message={message}
          loading={loading}
          setMessage={setMessage}
          sendMessage={sendMessage}
          onClose={closeChat}
          chatRef={chatRef}
          chatEndRef={chatEndRef}
          inputRef={inputRef}
        />
      )}
    </>
  );
}
