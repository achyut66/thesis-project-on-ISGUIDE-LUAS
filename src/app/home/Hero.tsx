"use client";

import { useLanguage } from "../context/LanguageContext";

import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Send,
  Sparkles,
} from "lucide-react";

import Reveal from "../components/ui/Reveal";

export default function Hero() {
  // Get translation function from LanguageContext
  const { t } = useLanguage();

  // Open the existing FinGuide AI chatbot
  const openChat = (suggestion?: string) => {
    window.dispatchEvent(
      new CustomEvent("finguide:open-chat", {
        detail: suggestion ? { suggestion } : undefined,
      }),
    );
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-white to-[#e7f4f4]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-28 top-4 h-[430px] w-[430px] rounded-full bg-blue-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-teal-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        {/* ================= LEFT CONTENT ================= */}

        <Reveal>
          {/* Hero Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm">
            <Sparkles size={15} />
            {t("home.hero.badge")}
          </div>

          {/* Hero Title */}
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.13] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            {t("home.hero.titleFirst")} {t("home.hero.titleSecond")}{" "}
            <span className="text-blue-600">
              {t("home.hero.titleHighlight")}
            </span>
          </h1>

          {/* Hero Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            {t("home.hero.description")}
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openChat()}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              {t("home.hero.askAIButton")}
              <ArrowRight size={18} />
            </button>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-200"
            >
              {t("home.hero.exploreButton")}
              <ChevronDown size={18} />
            </a>
          </div>

          {/* Features */}
          <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
            <CheckCircle2 className="shrink-0 text-teal-600" size={18} />

            <span>{t("home.hero.features")}</span>
          </div>
        </Reveal>

        {/* ================= RIGHT AI PREVIEW ================= */}

        <Reveal className="lg:pl-6">
          <div className="relative mx-auto max-w-lg rounded-[2rem] border border-white bg-white/90 p-5 shadow-[0_30px_90px_-35px_rgba(37,99,235,0.35)] sm:p-7">
            {/* AI Preview Header */}
            <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Sparkles size={24} />
              </span>

              <div>
                <p className="font-bold text-slate-900">FinGuide AI</p>

                <p className="text-xs text-slate-500">
                  {t("home.hero.aiPreview.subtitle")}
                </p>
              </div>

              <span className="ml-auto flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                {t("home.hero.aiPreview.status")}
              </span>
            </div>

            {/* AI Preview Conversation */}
            <div className="space-y-4">
              {/* Assistant Message */}
              <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-slate-100 p-4 text-sm leading-6 text-slate-700">
                {t("home.hero.aiPreview.assistantGreeting")}
              </div>

              {/* User Message */}
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-blue-600 p-4 text-sm leading-6 text-white">
                {t("home.hero.aiPreview.userQuestion")}
              </div>

              {/* Assistant Response */}
              <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-slate-100 p-4 text-sm leading-6 text-slate-700">
                {t("home.hero.aiPreview.assistantResponse")}
              </div>
            </div>

            {/* Ask Question Button */}
            <button
              type="button"
              onClick={() =>
                openChat("How do I register my address in Finland?")
              }
              className="mt-7 flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-500 transition hover:border-blue-300"
            >
              <span>{t("home.hero.aiPreview.askPlaceholder")}</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Send size={16} />
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
