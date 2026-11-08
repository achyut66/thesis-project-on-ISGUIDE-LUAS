import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  HeartPulse,
  CheckCircle2,
  HelpCircle,
  Info,
} from "lucide-react";

import ServiceCard, {
  type ServiceIconName,
} from "../../components/services/ServiceCard";

// ================= SERVICE DATA =================

type HealthcareService = {
  name: string;
  category: string;
  description: string;
  icon: ServiceIconName;
  website: string;
  question: string;
};

const healthcareServices: HealthcareService[] = [
  {
    name: "Kela",
    category: "Social Security & Benefits",
    description:
      "The Social Insurance Institution of Finland (Kela) provides information about social security, health insurance, reimbursements, student financial aid, housing-related benefits, and other financial support. Eligibility depends on your circumstances.",
    icon: "HeartPulse",
    website: "https://www.kela.fi/main-page",
    question:
      "What Kela benefits and health insurance services might international residents be eligible for in Finland?",
  },
  {
    name: "MyKanta",
    category: "Digital Health Records",
    description:
      "MyKanta (OmaKanta) is an online service where individuals can view health records, prescriptions, laboratory results, and other information recorded by participating healthcare providers.",
    icon: "IdCard",
    website: "https://www.kanta.fi/en/mykanta",
    question:
      "How can I access MyKanta to view my medical records and prescriptions in Finland?",
  },
  {
    name: "Omaolo",
    category: "Digital Health Guidance",
    description:
      "Omaolo is a digital health and social care service that provides symptom assessments, self-care guidance, and information about accessing appropriate healthcare services.",
    icon: "Globe2",
    website: "https://www.omaolo.fi/",
    question:
      "What is Omaolo, and how can I use it to assess symptoms or find healthcare guidance?",
  },
];

// ================= RESPONSIBILITIES =================

const responsibilities = [
  {
    title: "Social security and financial benefits",
    authority: "Kela",
    description:
      "Find information about health insurance, social security coverage, and available financial benefits.",
  },
  {
    title: "Accessing prescriptions and medical records",
    authority: "MyKanta",
    description:
      "View recorded prescriptions, healthcare information, and medical records through the digital service.",
  },
  {
    title: "Checking symptoms and receiving guidance",
    authority: "Omaolo",
    description:
      "Use digital symptom assessments and self-care guidance to understand possible next steps.",
  },
  {
    title: "Healthcare services and appointments",
    authority: "Local Healthcare Provider",
    description:
      "Contact your wellbeing services county, occupational healthcare provider, student healthcare service, or private provider, depending on your eligibility and circumstances.",
  },
];

// ================= FREQUENTLY ASKED QUESTIONS =================

const faqs = [
  {
    question: "How does healthcare work in Finland?",
    answer:
      "Healthcare in Finland is provided through public and private services. Public healthcare is organized mainly by wellbeing services counties. Access and fees depend on your circumstances, including your municipality of residence and healthcare entitlements. Occupational healthcare and student healthcare may also be available.",
  },
  {
    question: "Can international students use public healthcare in Finland?",
    answer:
      "International students may have access to different healthcare services depending on their study programme, residence status, and eligibility. Students pursuing qualifying higher education degrees may be entitled to use the Finnish Student Health Service (FSHS/YTHS). Check the relevant provider's eligibility requirements.",
  },
  {
    question: "What is Kela, and can international residents receive benefits?",
    answer:
      "Kela is Finland's social insurance institution. It administers several social security benefits and health insurance-related services. Eligibility depends on factors such as residence, employment, immigration status, and the particular benefit.",
  },
  {
    question: "What is MyKanta?",
    answer:
      "MyKanta is a digital service where individuals can view prescriptions and healthcare information stored in the Kanta Services. Access generally requires supported electronic identification.",
  },
  {
    question: "How can I find a doctor in Finland?",
    answer:
      "You can contact the public healthcare provider responsible for your area if you are entitled to use its services. Depending on your situation, you may also have access to occupational healthcare, student healthcare, or private healthcare. Omaolo may help you assess symptoms and identify appropriate next steps.",
  },
  {
    question: "What should I do in a medical emergency?",
    answer:
      "For a life-threatening emergency in Finland, call 112. For urgent medical problems that are not life-threatening, you can seek guidance through Medical Helpline 116117, where the service is available, or contact the appropriate urgent care provider.",
  },
];

// ================= PAGE COMPONENT =================

export default function HealthcareAndSocialSecurityPage() {
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
            <HeartPulse size={16} />
            Public Services in Finland
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Healthcare & <span className="text-blue-600">Social Security</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Understanding healthcare and social security is an important part of
            living in Finland. International residents may need information
            about medical services, health insurance, prescriptions, and
            financial support.
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            FinGuide helps you explore essential healthcare and social security
            services, understand their purposes, and find the appropriate
            official resources.
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
              Essential Healthcare & Social Security Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore the following services to understand where to find
              information about healthcare, social security benefits, and
              digital health services in Finland.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {healthcareServices.map((service) => (
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
              Different organizations provide different healthcare and social
              security services. Here is a quick overview to help you identify
              the appropriate starting point.
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
              Find answers to common questions about healthcare and social
              security in Finland.
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

      {/* ================= EMERGENCY INFORMATION ================= */}

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-6 flex items-start gap-4 rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8">
            <HeartPulse size={24} className="mt-1 shrink-0 text-red-600" />

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Medical Emergency Information
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                In a life-threatening emergency in Finland, call{" "}
                <strong>112</strong> immediately.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                For urgent medical problems that are not life-threatening,
                Medical Helpline <strong>116117</strong> can provide guidance
                where the service is available.
              </p>
            </div>
          </div>

          {/* General Notice */}
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
                Healthcare access, insurance coverage, and social security
                eligibility depend on individual circumstances. Always verify
                current requirements with the relevant official authority or
                healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
