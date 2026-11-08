"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "../components/ui/Reveal";

export default function CTA() {
  // Open the existing FinGuide AI chatbot
  const openChat = () => {
    window.dispatchEvent(new CustomEvent("finguide:open-chat"));
  };

  return (
    <section className="bg-blue-700 py-20 text-white">
      <Reveal className="mx-auto max-w-4xl px-5 text-center">
        {/* CTA Icon */}
        <Sparkles className="mx-auto text-blue-200" size={34} />

        {/* CTA Heading */}
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
          Have a question? Start a conversation.
        </h2>

        {/* CTA Description */}
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
          From everyday questions to finding the right public authority,
          FinGuide is here to help you take the next step.
        </p>

        {/* Chat Button */}
        <button
          type="button"
          onClick={openChat}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
        >
          Chat with FinGuide
          <ArrowRight size={18} />
        </button>
      </Reveal>
    </section>
  );
}
