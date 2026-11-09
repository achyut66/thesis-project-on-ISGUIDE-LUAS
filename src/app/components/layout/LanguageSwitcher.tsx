"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe2 } from "lucide-react";

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "fi", name: "Finnish", native: "Suomi" },
  { code: "sv", name: "Swedish", native: "Svenska" },
  { code: "ne", name: "Nepali", native: "नेपाली" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("en");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("finguide-language");

    const validLanguage = languages.find(
      (language) => language.code === savedLanguage,
    );

    if (validLanguage) {
      setSelectedLanguage(validLanguage.code);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const currentLanguage =
    languages.find((language) => language.code === selectedLanguage) ??
    languages[0];

  function changeLanguage(code: LanguageCode) {
    setSelectedLanguage(code);

    localStorage.setItem("finguide-language", code);

    window.dispatchEvent(
      new CustomEvent("finguide:language-change", {
        detail: { language: code },
      }),
    );

    setOpen(false);
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* Language Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="finguide-language-options"
        className="
          flex items-center gap-2
          rounded-xl border border-slate-200
          bg-white px-3 py-2.5
          text-sm font-medium text-slate-700
          shadow-sm
          transition-all duration-300
          hover:border-blue-300
          hover:bg-blue-50
          hover:text-blue-600
          hover:shadow-md
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-blue-600
        "
      >
        <Globe2 size={18} />

        <span>{currentLanguage.native}</span>

        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          id="finguide-language-options"
          className="
            absolute right-0 top-full z-50
            mt-3 w-52
            overflow-hidden rounded-2xl
            border border-slate-100
            bg-white p-2
            shadow-xl shadow-slate-200/60
          "
        >
          <div className="border-b border-slate-100 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Select Language
            </p>
          </div>

          <div className="mt-1 max-h-72 overflow-y-auto">
            {languages.map((language) => {
              const isSelected = selectedLanguage === language.code;

              return (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => changeLanguage(language.code)}
                  aria-pressed={isSelected}
                  className={`
                    flex w-full items-center justify-between
                    rounded-xl px-3 py-2.5
                    text-left text-sm
                    transition-all duration-200
                    ${
                      isSelected
                        ? "bg-blue-50 font-semibold text-blue-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    }
                  `}
                >
                  <div className="flex flex-col">
                    <span>{language.native}</span>

                    <span className="text-xs font-normal text-slate-400">
                      {language.name}
                    </span>
                  </div>

                  {isSelected && <Check size={17} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
