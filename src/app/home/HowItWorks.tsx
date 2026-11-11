"use client";

import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../context/LanguageContext";

// Step configuration
// Titles and descriptions are retrieved from multilingual JSON files.
const steps = [
  {
    id: "step1",
    number: "01",
  },
  {
    id: "step2",
    number: "02",
  },
  {
    id: "step3",
    number: "03",
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ================= SECTION HEADING ================= */}

        <Reveal className="text-center">
          {/* Section Badge */}
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            {t("home.howItWorks.badge")}
          </p>

          {/* Main Heading */}
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("home.howItWorks.title")}
          </h2>
        </Reveal>

        {/* ================= STEPS ================= */}

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map(({ id, number }) => {
            // Translation key for each step
            const stepKey = `home.howItWorks.steps.${id}`;

            return (
              <Reveal key={id}>
                <div className="relative border-t-2 border-blue-200 pt-7">
                  {/* Step Number */}
                  <span className="text-5xl font-extrabold text-blue-100">
                    {number}
                  </span>

                  {/* Step Title */}
                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {t(`${stepKey}.title`)}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-3 leading-7 text-slate-600">
                    {t(`${stepKey}.description`)}
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
