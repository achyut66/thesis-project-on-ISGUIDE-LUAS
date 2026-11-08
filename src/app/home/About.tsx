import { Languages, MessageCircle, ShieldCheck } from "lucide-react";

import Reveal from "../components/ui/Reveal";

const features = [
  {
    icon: Languages,
    title: "Clear information",
    desc: "Understand unfamiliar services and terminology through simple explanations.",
  },
  {
    icon: MessageCircle,
    title: "Conversational assistance",
    desc: "Ask questions naturally and receive guidance through an AI-powered assistant.",
  },
  {
    icon: ShieldCheck,
    title: "Official resources",
    desc: "Find links to the relevant Finnish authorities and verify important information.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* About Heading */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            About FinGuide
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Public services should be easier to understand.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Moving to a new country brings many questions. Finding the right
            information should not be another challenge. FinGuide is a student
            research prototype exploring how accessible information and
            conversational AI can support international residents navigating
            Finnish public services.
          </p>
        </Reveal>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <Reveal key={title}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Icon */}
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={26} />
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold">{title}</h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-slate-600">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
