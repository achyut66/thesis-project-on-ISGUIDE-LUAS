import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  HelpCircle,
  Info,
} from "lucide-react";

import ServiceCard, {
  type ServiceIconName,
} from "../../components/services/ServiceCard";

// ================= SERVICE DATA =================

type EmploymentService = {
  name: string;
  category: string;
  description: string;
  icon: ServiceIconName;
  website: string;
  question: string;
};

const employmentServices: EmploymentService[] = [
  {
    name: "Job Market Finland",
    category: "Employment Services",
    description:
      "Job Market Finland (Työmarkkinatori) is Finland's national employment services platform. It helps jobseekers explore vacancies, find career guidance, and access information about employment services and unemployment-related procedures.",
    icon: "BriefcaseBusiness",
    website: "https://tyomarkkinatori.fi/en",
    question:
      "How can I search for jobs and access employment services through Job Market Finland?",
  },
  {
    name: "Vero",
    category: "Taxation",
    description:
      "The Finnish Tax Administration (Vero) provides information about tax cards, tax numbers, income taxation, tax returns, and tax obligations for people living or working in Finland.",
    icon: "Landmark",
    website: "https://www.vero.fi/en/",
    question:
      "How do I apply for a Finnish tax card, and what should I know about income taxation?",
  },
  {
    name: "Work in Finland",
    category: "International Employment",
    description:
      "Work in Finland provides information for international professionals interested in working in Finland, including career opportunities, recruitment, and practical guidance about Finnish working life.",
    icon: "Globe2",
    website: "https://www.workinfinland.com/en/",
    question:
      "What resources are available for international professionals looking for work in Finland?",
  },
];

// ================= RESPONSIBILITIES =================

const responsibilities = [
  {
    title: "Finding employment",
    authority: "Job Market Finland",
    description:
      "Explore job vacancies, jobseeker services, career guidance, and employment support.",
  },
  {
    title: "Applying for a tax card",
    authority: "Vero",
    description:
      "Find instructions for obtaining or updating a tax card and understanding income tax withholding.",
  },
  {
    title: "International career opportunities",
    authority: "Work in Finland",
    description:
      "Explore information about working in Finland and opportunities for international professionals.",
  },
  {
    title: "Understanding tax obligations",
    authority: "Vero",
    description:
      "Learn about tax returns, taxable income, and your responsibilities when working in Finland.",
  },
];

// ================= FREQUENTLY ASKED QUESTIONS =================

const faqs = [
  {
    question: "How can I find a job in Finland?",
    answer:
      "You can search for job vacancies through Job Market Finland and other recruitment platforms. Job Market Finland also provides information about employment services and career guidance. Some positions require Finnish or Swedish language skills, while others may accept English.",
  },
  {
    question: "What is a Finnish tax card?",
    answer:
      "A tax card (verokortti) contains information used to calculate tax withholding from your income. Employers generally need your tax card information to withhold the appropriate amount of tax from your salary. You can find instructions for obtaining or updating a tax card through Vero.",
  },
  {
    question: "Can international students work in Finland?",
    answer:
      "International students may have the right to work in Finland, but the conditions depend on their residence permit and immigration status. Students holding a residence permit for studies generally have restrictions on the average number of working hours. Always check the current conditions of your permit through Migri.",
  },
  {
    question: "Do I need to register as a jobseeker?",
    answer:
      "Registering as a jobseeker may be necessary to access certain employment services or unemployment-related support. The requirements depend on your situation. Job Market Finland provides information about registration and available services.",
  },
  {
    question:
      "What is the difference between Job Market Finland and Work in Finland?",
    answer:
      "Job Market Finland is a national platform for job vacancies and employment services. Work in Finland focuses on attracting and supporting international professionals and employers interested in international recruitment.",
  },
  {
    question: "How do I change my tax card?",
    answer:
      "If your income or circumstances change, you may need to request a revised tax card. Vero provides instructions for updating tax card information, including through the MyTax online service.",
  },
];

// ================= PAGE COMPONENT =================

export default function EmploymentAndTaxationPage() {
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
            <BriefcaseBusiness size={16} />
            Public Services in Finland
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Employment & <span className="text-blue-600">Taxation</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Finding employment and understanding taxation are important parts of
            settling into life in Finland. International residents may need
            guidance about job opportunities, employment services, tax cards,
            and their responsibilities as employees.
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            FinGuide helps you explore the main employment and taxation services
            available in Finland and directs you toward relevant official
            information.
          </p>

          {/* Quick Information */}
          <div className="mt-9 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <CheckCircle2 size={17} className="text-teal-600" />3 Essential
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
              Essential Employment & Taxation Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore the following services to understand where to search for
              jobs, access employment support, and find reliable information
              about taxation in Finland.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {employmentServices.map((service) => (
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
              Finding the Right Service
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Who should you contact?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Different organizations provide different employment and taxation
              services. Here is a quick overview to help you identify the right
              starting point.
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
              Find answers to common questions about employment and taxation in
              Finland.
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
                Employment rights, residence permit conditions, taxation rules,
                and eligibility requirements may vary depending on your
                circumstances. Always verify current requirements with the
                relevant Finnish authority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
