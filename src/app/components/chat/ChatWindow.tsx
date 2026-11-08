"use client";

import type { KeyboardEvent, RefObject } from "react";

import { Loader2, MessageCircle, Send, Sparkles, X } from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatWindowProps = {
  messages: ChatMessage[];
  message: string;
  loading: boolean;
  setMessage: (value: string) => void;
  sendMessage: () => void | Promise<void>;
  onClose: () => void;
  chatRef: RefObject<HTMLDivElement | null>;
  chatEndRef: RefObject<HTMLDivElement | null>;
  inputRef: RefObject<HTMLTextAreaElement | null>;
};

export default function ChatWindow({
  messages,
  message,
  loading,
  setMessage,
  sendMessage,
  onClose,
  chatRef,
  chatEndRef,
  inputRef,
}: ChatWindowProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      void sendMessage();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-end bg-slate-900/30 p-0 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
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
        {/* Chat Header */}
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
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="rounded-xl p-2 text-slate-500 hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Chat Messages */}
        <div
          className="flex-1 space-y-4 overflow-y-auto bg-[#f8fafc] px-4 py-5"
          role="log"
          aria-label="Conversation"
          aria-live="off"
        >
          {/* Welcome Screen */}
          {messages.length === 0 && (
            <div className="py-8 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-blue-600">
                <MessageCircle size={30} />
              </span>

              <h3 className="mt-5 text-xl font-bold">How can I help you?</h3>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                Ask about Finnish public services or choose a question below.
              </p>

              <div className="mt-6 flex flex-col gap-2">
                {[
                  "What is DVV?",
                  "Where can I learn about residence permits?",
                  "How do I get a tax card?",
                ].map((question) => (
                  <button
                    key={question}
                    type="button"
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
                      <span className="whitespace-pre-wrap break-words">
                        {msg.content}
                      </span>
                    )
                  ) : isStreaming ? (
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

        {/* Chat Input */}
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
              onKeyDown={handleKeyDown}
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
            AI can make mistakes. Verify official requirements with the relevant
            authority.
          </p>
        </form>
      </div>
    </div>
  );
}
