"use client";

import { MessageCircle } from "lucide-react";
import type { RefObject } from "react";

type FloatingChatButtonProps = {
  onClick: () => void;
  buttonRef?: RefObject<HTMLButtonElement | null>;
};

export default function FloatingChatButton({
  onClick,
  buttonRef,
}: FloatingChatButtonProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-4 font-semibold text-white shadow-2xl shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-700 sm:right-8"
      aria-label="Open AI chat assistant"
    >
      <MessageCircle size={21} />

      <span className="hidden sm:inline">Ask FinGuide AI</span>
    </button>
  );
}
