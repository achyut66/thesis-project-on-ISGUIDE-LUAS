"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import LanguageSwitcher from "././LanguageSwitcher";

const navigationLinks = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "How it works",
    href: "/#how-it-works",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openChat = () => {
    setMobileMenuOpen(false);

    window.dispatchEvent(new CustomEvent("finguide:open-chat"));
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="hidden items-center gap-2 text-[18px] font-medium text-slate-700 md:flex"
        aria-label="Main navigation"
      >
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="
        group relative
        rounded-xl
        px-4 py-2.5
        transition-all duration-300 ease-out
        hover:-translate-y-0.5
        hover:bg-blue-50/80
        hover:text-blue-600
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-blue-600
      "
          >
            {/* Navigation Text */}
            <span className="relative z-10">{link.label}</span>

            {/* Animated Underline */}
            <span
              className="
          absolute bottom-1.5 left-4 right-4
          h-[2px]
          origin-left scale-x-0
          rounded-full bg-gradient-to-r
          from-blue-600 to-cyan-400
          transition-transform duration-300 ease-out
          group-hover:scale-x-100
        "
              aria-hidden="true"
            />
          </a>
        ))}
      </nav>

      {/* New Language Selector */}
      <LanguageSwitcher />

      {/* Desktop AI Button + Mobile Menu */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={openChat}
          className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:inline-flex"
        >
          <MessageCircle size={17} />
          Ask AI
        </button>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full z-50 flex flex-col gap-4 border-t border-slate-100 bg-white px-6 py-5 text-sm font-medium shadow-lg md:hidden"
          aria-label="Mobile navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="transition-colors hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={openChat}
            className="flex items-center gap-2 text-left font-semibold text-blue-600 sm:hidden"
          >
            <MessageCircle size={17} />
            Ask the AI assistant
          </button>
        </nav>
      )}
    </>
  );
}
