"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  House,
  Globe2,
  IdCard,
} from "lucide-react";

import Reveal from "../components/ui/Reveal";

// Service configuration: routes and icons remain unchanged.
// All visible text is retrieved from JSON dictionaries.
const serviceCategories = [
  {
    id: "immigration",
    icon: IdCard,
    slug: "immigration-and-registration",
    services: ["Migri", "DVV", "Suomi.fi", "Finnish Police"],
  },
  {
    id: "employment",
    icon: BriefcaseBusiness,
    slug: "employment-and-taxation",
    services: ["Job Market Finland", "Vero", "Work in Finland"],
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    slug: "healthcare-and-social-security",
    services: ["Kela", "MyKanta", "Omaolo"],
  },
  {
    id: "education",
    icon: GraduationCap,
    slug: "education-and-integration",
    services: ["Studyinfo", "EDUFI"],
  },
  {
    id: "housing",
    icon: House,
    slug: "housing-and-everyday-life",
    services: [],
  },
  {
    id: "general",
    icon: Globe2,
    slug: "general-information",
    services: ["InfoFinland"],
  },
] as const;

export default function Services() {
  const { t } = useLanguage();

  // Open existing FinGuide AI chatbot
  const openChat = (suggestion?: string) => {
    window.dispatchEvent(
      new CustomEvent("finguide:open-chat", {
        detail: suggestion ? { suggestion } : undefined,
      }),
    );
  };

  // Translate generic service tags while preserving official names.
  const getServiceTags = (id: string, officialServices: readonly string[]) => {
    const additionalTags: Record<string, string[]> = {
      immigration: [],
      employment: [],
      healthcare: [],
      education: [t("home.services.tags.integrationServices")],
      housing: [
        t("home.services.tags.municipalServices"),
        t("home.services.tags.housing"),
        t("home.services.tags.transport"),
      ],
      general: [
        t("home.services.tags.multilingualGuidance"),
        t("home.services.tags.checklists"),
      ],
    };

    return [...officialServices, ...(additionalTags[id] ?? [])];
  };

  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ================= SECTION HEADING ================= */}

        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {t("home.services.sectionBadge")}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {t("home.services.sectionTitle")}
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                {t("home.services.sectionDescription")}
              </p>
            </div>

            {/* Ask AI Button */}
            <button
              type="button"
              onClick={() =>
                openChat("Which Finnish public service should I contact?")
              }
              className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
            >
              {t("home.services.guidanceButton")}
              <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>

        {/* ================= CATEGORY CARDS ================= */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map(({ id, icon: Icon, slug, services }) => {
            const categoryKey = `services.categories.${id}`;

            const serviceTags = getServiceTags(id, services);

            return (
              <Reveal key={slug} className="h-full">
                <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-lg">
                  {/* Category Icon */}
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={25} />
                  </span>

                  {/* Category Label */}
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    {t(`${categoryKey}.label`)}
                  </p>

                  {/* Category Name */}
                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {t(`${categoryKey}.title`)}
                  </h3>

                  {/* Category Description */}
                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {t(`${categoryKey}.description`)}
                  </p>

                  {/* Included Services */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {serviceTags.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Explore Services */}
                  <Link
                    href={`/services/${slug}`}
                    className="mt-7 inline-flex items-center gap-2 border-t border-slate-200 pt-5 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    {t("home.services.exploreCard")}

                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ================= BOTTOM NOTE ================= */}

        <Reveal>
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              {t("home.services.bottomNote")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
