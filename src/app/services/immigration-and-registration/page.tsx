"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  Info,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

import ServiceCard from "../../components/services/ServiceCard";
import { useLanguage } from "../../context/LanguageContext";

// Immigration and Registration Services
// Keep official names, links and icons unchanged.
// Translate category, description and question using JSON.

const immigrationServices = [
  {
    id: "migri",
    name: "Migri",
    icon: "Globe2",
    website: "https://migri.fi/en/home",
  },
  {
    id: "dvv",
    name: "DVV",
    icon: "IdCard",
    website: "https://dvv.fi/en/individuals",
  },
  {
    id: "suomi",
    name: "Suomi.fi",
    icon: "Landmark",
    website: "https://www.suomi.fi/frontpage",
  },
  {
    id: "police",
    name: "Finnish Police",
    icon: "ShieldCheck",
    website: "https://poliisi.fi/en/frontpage",
  },
];

// FAQ IDs match the JSON keys.
const faqs = ["q1", "q2", "q3", "q4", "q5"];

// Authority IDs match the JSON keys.
const responsibilities = [
  {
    id: "migri",
    authority: "Migri",
  },
  {
    id: "dvv",
    authority: "DVV",
  },
  {
    id: "suomi",
    authority: "Suomi.fi",
  },
  {
    id: "police",
    authority: "Finnish Police",
  },
];

export default function ImmigrationAndRegistrationPage() {
  const { t } = useLanguage();

  const translationKey = "services.immigrations";

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 sm:py-24">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Back Navigation */}
          <Link
            href="/#services"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
          >
            <ArrowLeft size={17} />

            {t(`${translationKey}.hero.back`)}
          </Link>

          {/* Category Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <Globe2 size={16} />

            {t(`${translationKey}.hero.badge`)}
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {t(`${translationKey}.hero.titleFirst`)}{" "}
            <span className="text-blue-600">
              {t(`${translationKey}.hero.titleHighlight`)}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            {t(`${translationKey}.hero.description1`)}
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            {t(`${translationKey}.hero.description2`)}
          </p>

          {/* Quick Information */}
          <div className="mt-9 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <CheckCircle2 size={17} className="text-teal-600" />

              {t(`${translationKey}.hero.serviceCount`)}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <CheckCircle2 size={17} className="text-teal-600" />

              {t(`${translationKey}.hero.officialResources`)}
            </span>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Section Heading */}
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              {t(`${translationKey}.serviceSection.badge`)}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t(`${translationKey}.serviceSection.title`)}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {t(`${translationKey}.serviceSection.description`)}
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {immigrationServices.map((service) => {
              const key = `${translationKey}.serviceCards.${service.id}`;

              return (
                <ServiceCard
                  key={service.id}
                  name={service.name}
                  icon={service.icon}
                  website={service.website}
                  category={t(`${key}.category`)}
                  description={t(`${key}.description`)}
                  question={t(`${key}.question`)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= RESPONSIBILITIES SECTION ================= */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              {t(`${translationKey}.responsibilities.badge`)}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t(`${translationKey}.responsibilities.title`)}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {t(`${translationKey}.responsibilities.description`)}
            </p>
          </div>

          {/* Authority Cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {responsibilities.map((item) => {
              const key = `${translationKey}.responsibilities.items.${item.id}`;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <CheckCircle2 size={21} />
                    </span>

                    <div>
                      {/* Translated Title */}
                      <h3 className="text-lg font-bold">{t(`${key}.title`)}</h3>

                      {/* Official Authority Name */}
                      <p className="mt-2 text-sm font-semibold text-blue-600">
                        {item.authority}
                      </p>

                      {/* Translated Description */}
                      <p className="mt-3 leading-7 text-slate-600">
                        {t(`${key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <HelpCircle size={27} />
            </span>

            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">
              {t(`${translationKey}.faq.badge`)}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t(`${translationKey}.faq.title`)}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {t(`${translationKey}.faq.description`)}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((id) => {
              const key = `${translationKey}.faq.items.${id}`;

              return (
                <details
                  key={id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                    {/* Translated Question */}
                    {t(`${key}.question`)}

                    <span className="shrink-0 text-blue-600 transition-transform group-open:rotate-90">
                      <ArrowRight size={19} />
                    </span>
                  </summary>

                  {/* Translated Answer */}
                  <p className="mt-5 border-t border-slate-100 pt-5 leading-7 text-slate-600">
                    {t(`${key}.answer`)}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INFORMATION NOTICE ================= */}

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
            <Info size={24} className="mt-1 shrink-0 text-blue-600" />

            <div>
              {/* Notice Title */}
              <h3 className="text-lg font-bold text-slate-900">
                {t(`${translationKey}.notice.title`)}
              </h3>

              {/* Notice Description */}
              <p className="mt-3 leading-7 text-slate-600">
                {t(`${translationKey}.notice.description1`)}
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                {t(`${translationKey}.notice.description2`)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
