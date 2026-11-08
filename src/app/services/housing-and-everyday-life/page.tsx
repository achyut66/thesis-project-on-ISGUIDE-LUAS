import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  House,
  CheckCircle2,
  HelpCircle,
  Info,
  MapPin,
  BusFront,
  KeyRound,
  Lightbulb,
} from "lucide-react";

import ServiceCard, {
  type ServiceIconName,
} from "../../components/services/ServiceCard";

// ================= SERVICE DATA =================

type HousingService = {
  name: string;
  category: string;
  description: string;
  icon: ServiceIconName;
  website: string;
  question: string;
};

const housingServices: HousingService[] = [
  {
    name: "Municipal Services",
    category: "Local Public Services",
    description:
      "Finnish municipalities provide local services such as libraries, recreational facilities, education, and community information. Suomi.fi can help you find public services and the relevant local authority.",
    icon: "Landmark",
    website: "https://www.suomi.fi/frontpage",
    question:
      "What municipal services are available to international residents in Finland?",
  },
  {
    name: "Housing Guidance",
    category: "Renting & Accommodation",
    description:
      "Find information about renting an apartment, tenancy agreements, rental deposits, tenant responsibilities, and practical matters related to housing in Finland.",
    icon: "House",
    website: "https://www.infofinland.fi/en/housing",
    question:
      "How can I rent an apartment in Finland, and what should I know before signing a rental agreement?",
  },
  {
    name: "Public Transportation",
    category: "Travel & Mobility",
    description:
      "Explore public transportation services, route planning, travel tickets, and information about buses, trains, trams, and other transport options. HSL serves the Helsinki metropolitan area.",
    icon: "Globe2",
    website: "https://www.hsl.fi/en",
    question:
      "How does public transportation work in Finland, and how can I buy tickets?",
  },
  {
    name: "Everyday Life Guidance",
    category: "Practical Living",
    description:
      "Find practical guidance about banking, electricity, internet connections, consumer rights, and other everyday responsibilities when settling into life in Finland.",
    icon: "IdCard",
    website: "https://www.infofinland.fi/en",
    question:
      "What important things should I arrange when moving into my first apartment in Finland?",
  },
];

// ================= RESPONSIBILITIES =================

const responsibilities = [
  {
    title: "Finding rental accommodation",
    authority: "Housing Providers & Rental Services",
    description:
      "Search for available apartments, compare rental conditions, and contact landlords or housing providers.",
  },
  {
    title: "Understanding tenancy agreements",
    authority: "InfoFinland & Consumer Guidance",
    description:
      "Learn about rental agreements, deposits, housing responsibilities, and where to seek advice about housing disputes.",
  },
  {
    title: "Accessing local public services",
    authority: "Municipalities",
    description:
      "Find information about libraries, recreational facilities, local education, and community services.",
  },
  {
    title: "Using public transportation",
    authority: "Regional Transport Providers",
    description:
      "Find transport routes, schedules, ticket information, and travel guidance through your regional transport provider.",
  },
  {
    title: "Setting up electricity and internet",
    authority: "Utility & Internet Providers",
    description:
      "Arrange electricity and internet services when required by your housing agreement.",
  },
  {
    title: "Understanding consumer rights",
    authority: "Finnish Competition and Consumer Authority",
    description:
      "Find guidance about consumer protection, purchases, contracts, and resolving consumer-related problems.",
  },
];

// ================= FREQUENTLY ASKED QUESTIONS =================

const faqs = [
  {
    question: "How can I find an apartment in Finland?",
    answer:
      "You can search for rental apartments through housing companies, private landlords, municipal housing providers, and rental websites. Before applying, check the rent, location, rental deposit, contract conditions, and any additional costs.",
  },
  {
    question: "What documents are needed to rent an apartment?",
    answer:
      "Requirements vary between landlords and housing providers. You may be asked for identification, contact information, proof of income, or other documents. Some housing providers may also review credit information. Always check the specific requirements before applying.",
  },
  {
    question: "What is a rental deposit in Finland?",
    answer:
      "A rental deposit is security provided under a tenancy agreement. It may be used to cover unpaid rent or other justified costs under the agreement. Under Finnish residential tenancy law, agreed security cannot exceed the equivalent of three months' rent. Check the contract and document the apartment's condition when moving in.",
  },
  {
    question: "How does public transportation work in Finland?",
    answer:
      "Public transportation varies by region. Larger cities commonly offer buses, and some regions also have trains, trams, metro services, or other transport options. Ticket prices, zones, and purchasing methods depend on the local transport provider.",
  },
  {
    question: "What is HSL?",
    answer:
      "HSL (Helsinki Regional Transport Authority) organizes public transportation in the Helsinki metropolitan area. Its services include route planning, ticket information, and travel guidance for buses, trains, trams, the metro, and ferries within its network.",
  },
  {
    question: "Do I need to arrange electricity and internet separately?",
    answer:
      "It depends on your housing agreement. Some apartments include certain utilities or internet services, while others require tenants to arrange their own electricity contract or internet connection. Check your tenancy agreement and ask the landlord or housing provider.",
  },
  {
    question: "How do I register my new address in Finland?",
    answer:
      "When moving, you may need to submit a notification of move to update your address information. The official moving notification service provides instructions. Address registration and municipality of residence are separate matters, so check DVV guidance if you are unsure about your situation.",
  },
  {
    question: "Where can I get help with housing problems?",
    answer:
      "If you experience problems with your rental accommodation, first review your tenancy agreement and contact your landlord or housing provider. Depending on the issue, tenant advisory services, legal advice services, or other relevant organizations may be able to help.",
  },
];

// ================= PAGE COMPONENT =================

export default function HousingAndEverydayLifePage() {
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
            <House size={16} />
            Public Services in Finland
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Housing & <span className="text-blue-600">Everyday Life</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Finding accommodation and managing everyday responsibilities are
            important parts of settling into life in Finland. International
            residents may need guidance about renting an apartment, using public
            transportation, accessing municipal services, and arranging
            essential household services.
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            FinGuide brings together practical information and useful resources
            to help you understand housing arrangements, local services, and
            everyday life in Finland.
          </p>

          {/* Quick Information */}
          <div className="mt-9 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <CheckCircle2 size={17} className="text-teal-600" />4 Essential
              Services
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <CheckCircle2 size={17} className="text-teal-600" />
              Useful Resources
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
              Essential Housing & Everyday Life Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore the following resources to find information about
              accommodation, municipal services, public transportation, and
              practical matters related to living in Finland.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {housingServices.map((service) => (
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
              Finding the Right Service
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Who should you contact?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Different organizations provide housing, transportation, and
              everyday services. Here is a quick overview to help you identify
              the appropriate starting point.
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

      {/* ================= EVERYDAY LIFE CHECKLIST ================= */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Lightbulb size={27} />
              </span>

              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">
                Settling into Finland
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Make your everyday life easier.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Moving to a new country often involves learning unfamiliar
                procedures and arranging practical services.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                From understanding rental agreements to finding local
                transportation, preparing a simple checklist can help you stay
                organized while settling into your new home.
              </p>

              <a
                href="https://www.infofinland.fi/en"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Explore everyday life guidance
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Right Information Card */}
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <KeyRound size={24} />
                </span>

                <h3 className="text-xl font-bold">New Resident Checklist</h3>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: "Review Your Rental Agreement",
                    description:
                      "Understand rent, deposits, payment dates, and tenant responsibilities.",
                  },
                  {
                    title: "Update Your Address",
                    description:
                      "Check whether you need to submit a moving notification and update your contact information.",
                  },
                  {
                    title: "Arrange Household Services",
                    description:
                      "Check electricity, internet, insurance, and other services required for your apartment.",
                  },
                  {
                    title: "Explore Public Transportation",
                    description:
                      "Find local routes, ticket options, and travel information.",
                  },
                  {
                    title: "Discover Municipal Services",
                    description:
                      "Explore libraries, recreational facilities, and other local services.",
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

      {/* ================= FAQ SECTION ================= */}

      <section className="bg-white py-20 sm:py-24">
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
              Find answers to common questions about housing, transportation,
              and everyday life in Finland.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 shadow-sm transition hover:border-blue-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  {faq.question}

                  <span className="shrink-0 text-blue-600 transition-transform group-open:rotate-90">
                    <ArrowRight size={19} />
                  </span>
                </summary>

                <p className="mt-5 border-t border-slate-200 pt-5 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INFORMATION NOTICE ================= */}

      <section className="bg-[#f8fafc] py-14">
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
                Housing arrangements, rental conditions, municipal services, and
                transportation options vary depending on your location and
                personal circumstances. Always verify current requirements with
                the relevant service provider or authority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
