"use client";

import { Languages, MessageCircle, ShieldCheck } from "lucide-react";

import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../context/LanguageContext";

// Feature configuration
// Text is loaded dynamically from multilingual JSON files.
const features = [
  {
    id: "clearInformation",
    icon: Languages,
  },
  {
    id: "conversationalAssistance",
    icon: MessageCircle,
  },
  {
    id: "officialResources",
    icon: ShieldCheck,
  },
];

export default function About() {
  // Get translation function from LanguageContext
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ================= ABOUT HEADING ================= */}

        <Reveal className="mx-auto max-w-3xl text-center">
          {/* Section Badge */}
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            {t("home.about.badge")}
          </p>

          {/* Main Heading */}
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("home.about.title")}
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("home.about.description")}
          </p>
        </Reveal>

        {/* ================= FEATURE CARDS ================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map(({ id, icon: Icon }) => {
            // Translation path for each feature
            const featureKey = `home.about.cards.${id}`;

            return (
              <Reveal key={id}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Icon */}
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={26} />
                  </span>

                  {/* Feature Title */}
                  <h3 className="text-xl font-bold">
                    {t(`${featureKey}.title`)}
                  </h3>

                  {/* Feature Description */}
                  <p className="mt-3 leading-7 text-slate-600">
                    {t(`${featureKey}.description`)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
