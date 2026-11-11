"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  // Open the existing FinGuide AI chatbot
  const openChat = () => {
    window.dispatchEvent(new CustomEvent("finguide:open-chat"));
  };

  return (
    <section className="relative overflow-hidden bg-blue-700 py-20 text-white sm:py-24">
      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
        {/* Sparkle Icon */}
        <div className="mb-6 flex justify-center">
          <Sparkles size={36} className="text-blue-200" />
        </div>

        {/* CTA Heading */}
        <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
          {t("home.cta.title")}
        </h2>

        {/* CTA Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          {t("home.cta.description")}
        </p>

        {/* Chat Button */}
        <button
          type="button"
          onClick={openChat}
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
        >
          {t("home.cta.button")}
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
