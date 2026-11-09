"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const supportedLanguages = {
  en: "English",
  fi: "Finnish",
  sv: "Swedish",
  ne: "Nepali",
} as const;

export type LanguageCode = keyof typeof supportedLanguages;

type LanguageContextType = {
  language: LanguageCode;
  changeLanguage: (language: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

function isLanguageCode(value: string | null): value is LanguageCode {
  return value !== null && value in supportedLanguages;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("finguide-language");

    if (isLanguageCode(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: LanguageCode) => {
    setLanguage(newLanguage);

    localStorage.setItem("finguide-language", newLanguage);

    window.dispatchEvent(
      new CustomEvent("finguide:language-change", {
        detail: { language: newLanguage },
      }),
    );
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
