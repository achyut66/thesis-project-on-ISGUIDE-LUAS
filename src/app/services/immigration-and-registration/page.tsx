import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  IdCard,
  Landmark,
  ShieldCheck,
  Info,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

import ServiceCard from "../../components/services/ServiceCard";

// Immigration and Registration Services
const immigrationServices = [
  {
    name: "Migri",
    category: "Immigration",
    description:
      "The Finnish Immigration Service handles residence permits, residence permit extensions, citizenship applications, and other immigration-related matters.",
    icon: "Globe2",
    website: "https://migri.fi/en/home",
    question: "How can I apply for or extend my residence permit in Finland?",
  },
  {
    name: "DVV",
    category: "Population Registration",
    description:
      "The Digital and Population Data Services Agency manages population information, municipality of residence registration, and personal identity information.",
    icon: "IdCard",
    website: "https://dvv.fi/en/individuals",
    question:
      "How do I register my address and municipality of residence in Finland?",
  },
  {
    name: "Suomi.fi",
    category: "Digital Public Services",
    description:
      "Suomi.fi helps residents find public services, access digital identification services, and manage authorizations for dealing with Finnish authorities.",
    icon: "Landmark",
    website: "https://www.suomi.fi/frontpage",
    question: "What is Suomi.fi and how can I use its digital services?",
  },
  {
    name: "Finnish Police",
    category: "Identity & Permits",
    description:
      "The Finnish Police provides services related to identity cards, passports, and certain other permits. Eligibility and required documents depend on your situation.",
    icon: "ShieldCheck",
    website: "https://poliisi.fi/en/frontpage",
    question: "How can a foreign resident apply for a Finnish identity card?",
  },
];

// Common questions
const faqs = [
  {
    question: "How do I apply for a residence permit in Finland?",
    answer:
      "Residence permit applications are generally handled by the Finnish Immigration Service (Migri). You can find information about permit types, requirements, and application procedures on Migri's official website.",
  },
  {
    question: "What is a Finnish personal identity code?",
    answer:
      "A Finnish personal identity code is a unique identifier used in Finland's population information system. It is commonly needed when dealing with authorities and accessing various services.",
  },
  {
    question: "How do I register my address in Finland?",
    answer:
      "Address registration depends on your circumstances. You can find instructions through DVV and the official moving notification service. Registering an address and obtaining a municipality of residence are related but distinct matters.",
  },
  {
    question: "What is Suomi.fi?",
    answer:
      "Suomi.fi is a Finnish public service platform that provides information about government services and supports electronic identification and authorizations.",
  },
  {
    question: "Can international residents apply for a Finnish identity card?",
    answer:
      "Some foreign citizens residing in Finland may be eligible for an identity card issued by the Finnish Police. Eligibility depends on specific conditions, so check the official Police instructions.",
  },
];

// Authority responsibilities
const responsibilities = [
  {
    title: "Residence permits & immigration",
    authority: "Migri",
    description: "Applications, extensions, and immigration-related decisions.",
  },
  {
    title: "Population & address registration",
    authority: "DVV",
    description:
      "Population information, personal identity data, and municipality of residence.",
  },
  {
    title: "Digital government services",
    authority: "Suomi.fi",
    description:
      "Finding public services, electronic identification, and authorizations.",
  },
  {
    title: "Identity cards & police permits",
    authority: "Finnish Police",
    description: "Identity card applications and other police-related permits.",
  },
];

export default function ImmigrationAndRegistrationPage() {
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
            Back to Services
          </Link>

          {/* Category Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <Globe2 size={16} />
            Public Services in Finland
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Immigration & <span className="text-blue-600">Registration</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Moving to Finland involves several important steps, from applying
            for a residence permit to registering your personal information and
            accessing digital public services.
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            FinGuide brings together essential information about the Finnish
            authorities responsible for immigration, registration, identity
            services, and digital government services.
          </p>

          {/* Quick Information */}
          <div className="mt-9 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <CheckCircle2 size={17} className="text-teal-600" />4 Essential
              Services
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <CheckCircle2 size={17} className="text-teal-600" />
              Official Resources
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
              Explore Services
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Essential Immigration & Registration Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Each authority has different responsibilities. Explore the
              services below to understand which organization can help with your
              situation.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {immigrationServices.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESPONSIBILITIES SECTION ================= */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Finding the Right Authority
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Who should you contact?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Different authorities handle different registration and
              immigration matters. Here is a quick overview.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {responsibilities.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <CheckCircle2 size={21} />
                  </span>

                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>

                    <p className="mt-2 text-sm font-semibold text-blue-600">
                      {item.authority}
                    </p>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
              Common Questions
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Find answers to common questions about immigration and
              registration in Finland.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  {faq.question}

                  <span className="shrink-0 text-blue-600 transition-transform group-open:rotate-90">
                    <ArrowRight size={19} />
                  </span>
                </summary>

                <p className="mt-5 border-t border-slate-100 pt-5 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INFORMATION NOTICE ================= */}

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
            <Info size={24} className="mt-1 shrink-0 text-blue-600" />

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Important Information
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                FinGuide is an independent student research prototype and is not
                affiliated with Finnish government authorities. Information is
                provided for general guidance only.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Always verify official requirements, eligibility criteria, and
                application procedures directly with the relevant Finnish
                authority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
