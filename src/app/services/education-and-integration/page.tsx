import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  HelpCircle,
  Info,
  BookOpen,
  Languages,
} from "lucide-react";

import ServiceCard, {
  type ServiceIconName,
} from "../../components/services/ServiceCard";

// ================= SERVICE DATA =================

type EducationService = {
  name: string;
  category: string;
  description: string;
  icon: ServiceIconName;
  website: string;
  question: string;
};

const educationServices: EducationService[] = [
  {
    name: "Studyinfo",
    category: "Education & Admissions",
    description:
      "Studyinfo (Opintopolku) is Finland's national education information and application service. It helps students explore study programmes, admission requirements, application periods, and educational opportunities offered by Finnish institutions.",
    icon: "GraduationCap",
    website: "https://studyinfo.fi/",
    question:
      "How can I find and apply for study programmes in Finland through Studyinfo?",
  },
  {
    name: "EDUFI",
    category: "Education System & Qualifications",
    description:
      "The Finnish National Agency for Education (EDUFI) provides information about Finland's education system, international education cooperation, and the recognition of foreign qualifications for certain purposes.",
    icon: "Landmark",
    website: "https://www.oph.fi/en",
    question:
      "How can I get my foreign educational qualifications recognised in Finland?",
  },
  {
    name: "Integration Services",
    category: "Integration & Language Learning",
    description:
      "Integration services help newcomers understand Finnish society, explore language learning opportunities, and find guidance about education, employment, and everyday life. Services are provided through municipalities and other responsible organizations.",
    icon: "Globe2",
    website: "https://kotoutuminen.fi/en/frontpage",
    question:
      "What integration services and Finnish language courses are available for international residents in Finland?",
  },
];

// ================= RESPONSIBILITIES =================

const responsibilities = [
  {
    title: "Finding study programmes",
    authority: "Studyinfo",
    description:
      "Explore universities, universities of applied sciences, vocational education, and other educational opportunities.",
  },
  {
    title: "Applying to educational institutions",
    authority: "Studyinfo & Educational Institutions",
    description:
      "Find admission requirements, application periods, and instructions for submitting applications.",
  },
  {
    title: "Recognition of foreign qualifications",
    authority: "EDUFI",
    description:
      "Find information about recognition decisions and the responsible authority for your qualification or profession.",
  },
  {
    title: "Finnish language learning",
    authority: "Municipalities & Education Providers",
    description:
      "Explore Finnish or Swedish language courses, integration training, and other learning opportunities.",
  },
  {
    title: "Integration guidance",
    authority: "Municipal Integration Services",
    description:
      "Find guidance about integration services, assessments, and individual integration plans where applicable.",
  },
  {
    title: "Understanding Finnish education",
    authority: "EDUFI",
    description:
      "Learn about the structure of Finland's education system and available educational pathways.",
  },
];

// ================= FREQUENTLY ASKED QUESTIONS =================

const faqs = [
  {
    question: "How can I apply to universities in Finland?",
    answer:
      "You can explore higher education programmes and application information through Studyinfo. Depending on the programme, applications may be submitted through a joint application or a separate application process. Always check the institution's official admission requirements, application deadlines, and tuition fee information.",
  },
  {
    question:
      "What is the difference between a university and a university of applied sciences?",
    answer:
      "Finnish universities generally emphasize scientific research and research-based education. Universities of applied sciences (UAS) focus on professionally oriented higher education, practical learning, and cooperation with working life. Both offer recognised higher education qualifications.",
  },
  {
    question: "Can international residents study in English in Finland?",
    answer:
      "Yes. Many Finnish universities and universities of applied sciences offer degree programmes taught in English. Programme availability, admission requirements, tuition fees, and scholarship opportunities vary between institutions.",
  },
  {
    question: "Where can I learn Finnish?",
    answer:
      "Finnish language courses are offered by adult education centres, educational institutions, private providers, and other organizations. Some newcomers may also access language training through integration services. Availability and eligibility depend on your municipality and personal circumstances.",
  },
  {
    question: "What are integration services in Finland?",
    answer:
      "Integration services support eligible newcomers in settling into Finnish society. Depending on individual circumstances, they may include guidance, an assessment of skills and service needs, integration planning, language training, and support related to education or employment.",
  },
  {
    question: "Do I need to recognise my foreign degree in Finland?",
    answer:
      "Not every foreign qualification requires a formal recognition decision. Recognition may be necessary for certain regulated professions, public-sector positions, or other specific purposes. EDUFI provides information about qualification recognition, while some professions are regulated by other competent authorities.",
  },
  {
    question: "Can international students access Finnish language courses?",
    answer:
      "Yes. International students can explore Finnish language courses offered by their educational institutions and other providers. Some courses may be included in their degree programmes, while others may be available separately. Eligibility for publicly funded integration training depends on individual circumstances.",
  },
];

// ================= PAGE COMPONENT =================

export default function EducationAndIntegrationPage() {
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
            <GraduationCap size={16} />
            Public Services in Finland
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Education & <span className="text-blue-600">Integration</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Education and integration play an important role in building a new
            life in Finland. Whether you are planning to study, develop your
            professional skills, learn Finnish, or understand Finnish society,
            finding the right information is an essential first step.
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            FinGuide helps international residents explore educational
            opportunities, understand the Finnish education system, and discover
            available integration and language learning services.
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
              Essential Education & Integration Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore the following services to understand where to find
              information about educational opportunities, qualification
              recognition, language learning, and integration support in
              Finland.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {educationServices.map((service) => (
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
              Different organizations are responsible for education,
              qualification recognition, language training, and integration
              support. Here is a quick overview.
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

      {/* ================= LANGUAGE LEARNING SECTION ================= */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Languages size={27} />
              </span>

              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">
                Language & Integration
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Learning Finnish can open new opportunities.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Learning Finnish or Swedish can make everyday communication
                easier and improve access to education, employment, and local
                services.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Language courses are available through different educational
                institutions, adult education centres, and other providers. Some
                newcomers may also be eligible for integration training.
              </p>

              <a
                href="https://www.infofinland.fi/en/finnish-and-swedish/finnish-language"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Explore Finnish language learning
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Right Information Card */}
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BookOpen size={24} />
                </span>

                <h3 className="text-xl font-bold">Ways to Learn Finnish</h3>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: "University Language Courses",
                    description:
                      "Explore Finnish language courses offered by universities and universities of applied sciences.",
                  },
                  {
                    title: "Adult Education Centres",
                    description:
                      "Find language courses offered by adult education institutions and local education providers.",
                  },
                  {
                    title: "Integration Training",
                    description:
                      "Eligible newcomers may access language and integration training through responsible public services.",
                  },
                  {
                    title: "Online Learning",
                    description:
                      "Use online courses, digital resources, and independent learning materials to practise Finnish.",
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
              Find answers to common questions about studying, learning Finnish,
              and integration services in Finland.
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
                Admission requirements, tuition fees, qualification recognition
                procedures, and integration service eligibility may vary
                depending on your circumstances. Always verify current
                information with the relevant educational institution or
                official authority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
