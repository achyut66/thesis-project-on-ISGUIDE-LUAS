import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  CheckCircle2,
  HelpCircle,
  Info,
  Languages,
  BookOpen,
  MapPinned,
  ExternalLink,
} from "lucide-react";

import ServiceCard, {
  type ServiceIconName,
} from "../../components/services/ServiceCard";

// ================= SERVICE DATA =================

type GeneralService = {
  name: string;
  category: string;
  description: string;
  icon: ServiceIconName;
  website: string;
  question: string;
};

const generalServices: GeneralService[] = [
  {
    name: "InfoFinland",
    category: "Multilingual Information",
    description:
      "InfoFinland provides practical information about moving to Finland, residence, employment, education, healthcare, housing, and everyday life. Information is available in several languages.",
    icon: "Globe2",
    website: "https://www.infofinland.fi/en",
    question:
      "What is InfoFinland, and how can it help international residents?",
  },
  {
    name: "Suomi.fi",
    category: "Public Service Guidance",
    description:
      "Suomi.fi helps residents find information about Finnish public services, authorities, electronic identification, digital messages, and authorizations.",
    icon: "Landmark",
    website: "https://www.suomi.fi/frontpage",
    question:
      "How can I use Suomi.fi to find and access public services in Finland?",
  },
  {
    name: "Finland.fi",
    category: "Finnish Society & Culture",
    description:
      "Finland.fi is a resource for learning about Finnish society, culture, education, innovation, nature, and everyday life in Finland.",
    icon: "BookOpen",
    website: "https://finland.fi/",
    question:
      "What should newcomers know about Finnish society, culture, and everyday life?",
  },
  {
    name: "Newcomer Guidance",
    category: "Getting Started in Finland",
    description:
      "Find practical information about important steps after arriving in Finland, including registration, housing, banking, healthcare, and other essential arrangements.",
    icon: "IdCard",
    website: "https://www.infofinland.fi/en/moving-to-finland",
    question:
      "What are the most important things I should do after arriving in Finland?",
  },
];

// ================= RESPONSIBILITIES =================

const responsibilities = [
  {
    title: "Finding multilingual information",
    authority: "InfoFinland",
    description:
      "Explore practical guidance about Finnish services and everyday life in several languages.",
  },
  {
    title: "Accessing public services",
    authority: "Suomi.fi",
    description:
      "Find public authorities, government services, and information about electronic identification.",
  },
  {
    title: "Understanding Finnish society",
    authority: "Finland.fi",
    description:
      "Learn about Finnish culture, social practices, education, and society.",
  },
  {
    title: "Planning your first steps",
    authority: "InfoFinland & Relevant Authorities",
    description:
      "Find information about registration, residence permits, housing, healthcare, and other important arrangements.",
  },
  {
    title: "Finding the correct authority",
    authority: "Suomi.fi",
    description:
      "Identify relevant public organizations and find their official services and contact information.",
  },
  {
    title: "Understanding everyday responsibilities",
    authority: "InfoFinland",
    description:
      "Explore practical information about living, working, studying, and managing daily responsibilities in Finland.",
  },
];

// ================= FREQUENTLY ASKED QUESTIONS =================

const faqs = [
  {
    question: "What should I do first after arriving in Finland?",
    answer:
      "Your first steps depend on your residence status and reason for moving. Common tasks include checking residence permit conditions, registering personal information when required, arranging accommodation, obtaining access to banking services, and understanding healthcare arrangements. InfoFinland provides guidance for different situations.",
  },
  {
    question: "Where can I find information about Finland in English?",
    answer:
      "Several official Finnish services provide information in English, including InfoFinland, Suomi.fi, Migri, DVV, Kela, and Vero. InfoFinland is particularly useful because it brings together practical information about living in Finland in several languages.",
  },
  {
    question: "What is InfoFinland?",
    answer:
      "InfoFinland is a multilingual information service that provides guidance about moving to Finland, employment, education, housing, healthcare, family life, and everyday matters. It helps newcomers understand Finnish services and find relevant information.",
  },
  {
    question: "What is Suomi.fi used for?",
    answer:
      "Suomi.fi provides information about Finnish public services and supports digital government functions such as electronic authorizations and official messages. Access to some electronic services requires supported identification methods.",
  },
  {
    question: "Do I need a Finnish personal identity code?",
    answer:
      "A Finnish personal identity code is commonly used when accessing public and private services in Finland. Whether and how you obtain one depends on your circumstances. Migri, DVV, and the Finnish Tax Administration may issue personal identity codes in certain situations.",
  },
  {
    question: "How can I open a bank account in Finland?",
    answer:
      "Banks have their own account-opening procedures and identification requirements. You may need valid identification and documents explaining your banking needs. Access to Finnish online banking credentials and strong electronic identification may involve additional requirements.",
  },
  {
    question: "Can I access Finnish public services without speaking Finnish?",
    answer:
      "Many Finnish authorities provide information in English and sometimes other languages. However, language availability differs between services. InfoFinland can help you find multilingual information, and some authorities may provide interpretation or other language assistance when applicable.",
  },
  {
    question:
      "Where can I get help if I do not know which authority to contact?",
    answer:
      "You can begin with InfoFinland or Suomi.fi to identify the appropriate service. Municipal advisory services may also help. FinGuide can provide general guidance and direct you to relevant official resources, but important information should always be verified with the responsible authority.",
  },
];

// ================= NEWCOMER CHECKLIST =================

const newcomerChecklist = [
  {
    title: "Check Your Residence Status",
    description:
      "Understand the conditions of your residence permit or other legal basis for staying in Finland.",
  },
  {
    title: "Register Your Personal Information",
    description:
      "Check whether you need to register with DVV or update your address and municipality of residence information.",
  },
  {
    title: "Arrange Accommodation",
    description:
      "Review your rental agreement, housing costs, and practical arrangements for your home.",
  },
  {
    title: "Explore Banking Services",
    description:
      "Find out what identification and documents banks require to open an account.",
  },
  {
    title: "Understand Healthcare Access",
    description:
      "Check which healthcare services and insurance arrangements apply to your situation.",
  },
  {
    title: "Learn About Taxes and Employment",
    description:
      "Understand your right to work and check whether you need a Finnish tax card.",
  },
  {
    title: "Explore Local Services",
    description:
      "Find information about public transportation, libraries, education, and municipal services.",
  },
  {
    title: "Start Learning Finnish",
    description:
      "Explore language courses and other opportunities to learn Finnish or Swedish.",
  },
];

// ================= PAGE COMPONENT =================

export default function GeneralInformationPage() {
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
            General <span className="text-blue-600">Information</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Moving to a new country often means learning unfamiliar systems,
            understanding new responsibilities, and finding reliable information
            about everyday life.
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            FinGuide helps international residents discover useful information
            about Finnish society, public services, multilingual resources, and
            important steps for settling into life in Finland.
          </p>

          {/* Quick Information */}
          <div className="mt-9 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <CheckCircle2 size={17} className="text-teal-600" />4 Essential
              Resources
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <CheckCircle2 size={17} className="text-teal-600" />
              Multilingual Guidance
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
              Explore Resources
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Essential Information & Guidance
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore the following resources to understand Finnish public
              services, discover multilingual information, and find practical
              guidance about living in Finland.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {generalServices.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESPONSIBILITIES SECTION ================= */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Finding the Right Information
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Where should you start?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Different information services serve different purposes. Here is a
              quick overview to help you find the right starting point.
            </p>
          </div>

          {/* Responsibility Cards */}
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

      {/* ================= MULTILINGUAL GUIDANCE SECTION ================= */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Languages size={27} />
              </span>

              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">
                Multilingual Information
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Understanding services should be easier.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Language barriers can make public services difficult to
                understand, especially when navigating unfamiliar administrative
                procedures.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Several Finnish information services provide guidance in English
                and other languages. InfoFinland is particularly useful for
                newcomers looking for practical information in their preferred
                language.
              </p>

              <a
                href="https://www.infofinland.fi/en"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Explore multilingual information
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Right Information Card */}
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BookOpen size={24} />
                </span>

                <h3 className="text-xl font-bold">
                  Finding Accessible Information
                </h3>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: "Multilingual Resources",
                    description:
                      "Look for official information available in English or other supported languages.",
                  },
                  {
                    title: "Clear Service Instructions",
                    description:
                      "Identify the responsible authority and review the steps required for your situation.",
                  },
                  {
                    title: "Official Information Sources",
                    description:
                      "Verify important requirements through the relevant Finnish authority.",
                  },
                  {
                    title: "Local Guidance",
                    description:
                      "Explore municipal advisory services and other support available in your area.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-teal-600"
                    />

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEWCOMER CHECKLIST ================= */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Heading */}
          <div className="mb-12 max-w-3xl">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <MapPinned size={26} />
            </span>

            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">
              Getting Started
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Your Newcomer Checklist
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Moving to Finland involves several practical arrangements. This
              checklist highlights common steps international residents may need
              to consider.
            </p>
          </div>

          {/* Checklist Grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {newcomerChecklist.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:border-blue-200 hover:shadow-md"
              >
                {/* Step Number */}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-slate-500">
            This checklist is intended as general guidance. The steps you need
            to complete depend on your personal circumstances, residence status,
            and reason for moving to Finland.
          </p>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* FAQ Heading */}
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
              Find answers to common questions about public services,
              multilingual information, and settling into life in Finland.
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
                Public service procedures, eligibility requirements, and
                administrative responsibilities may change. Always verify
                important information directly with the relevant Finnish
                authority or official service provider.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
