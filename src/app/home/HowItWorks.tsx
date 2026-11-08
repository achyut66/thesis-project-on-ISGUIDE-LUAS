import Reveal from "../components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Ask a question",
    desc: "Write your question in your own words, even if you are unsure of the official terminology.",
  },
  {
    number: "02",
    title: "Get a clear explanation",
    desc: "The AI assistant responds conversationally and can help explain unfamiliar concepts.",
  },
  {
    number: "03",
    title: "Check official guidance",
    desc: "Use the linked authorities to verify requirements and complete official procedures.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ================= SECTION HEADING ================= */}

        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Simple by design
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How FinGuide works
          </h2>
        </Reveal>

        {/* ================= STEPS ================= */}

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map(({ number, title, desc }) => (
            <Reveal key={number}>
              <div className="relative border-t-2 border-blue-200 pt-7">
                {/* Step Number */}
                <span className="text-5xl font-extrabold text-blue-100">
                  {number}
                </span>

                {/* Step Title */}
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {title}
                </h3>

                {/* Step Description */}
                <p className="mt-3 leading-7 text-slate-600">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
