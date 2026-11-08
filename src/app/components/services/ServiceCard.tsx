"use client";

import {
  ArrowUpRight,
  MessageCircle,
  Globe2,
  IdCard,
  Landmark,
  ShieldCheck,
  BriefcaseBusiness,
  HeartPulse,
  GraduationCap,
  House,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

// Available service icons
const icons = {
  Globe2,
  IdCard,
  Landmark,
  ShieldCheck,
  BriefcaseBusiness,
  HeartPulse,
  GraduationCap,
  House,
  BookOpen,
} satisfies Record<string, LucideIcon>;

export type ServiceIconName = keyof typeof icons;

type ServiceCardProps = {
  name: string;
  category?: string;
  description: string;
  icon: ServiceIconName;
  website: string;
  question?: string;
};

export default function ServiceCard({
  name,
  category,
  description,
  icon,
  website,
  question,
}: ServiceCardProps) {
  const Icon = icons[icon];

  const openChat = () => {
    window.dispatchEvent(
      new CustomEvent("finguide:open-chat", {
        detail: {
          suggestion:
            question || `Can you explain ${name} services in Finland?`,
        },
      }),
    );
  };

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
      {/* Service Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={26} strokeWidth={1.8} />
      </div>

      {/* Service Category */}
      {category && (
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
          {category}
        </p>
      )}

      {/* Service Name */}
      <h3 className="text-xl font-bold text-slate-900">{name}</h3>

      {/* Service Description */}
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
        {description}
      </p>

      {/* Card Footer */}
      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
        >
          Official website
          <ArrowUpRight size={17} />
          <span className="sr-only">(opens in a new tab)</span>
        </a>

        <button
          type="button"
          onClick={openChat}
          className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
        >
          <MessageCircle size={16} />
          Ask AI
        </button>
      </div>
    </article>
  );
}
