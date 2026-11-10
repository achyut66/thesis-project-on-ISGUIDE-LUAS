"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const translationCache = new Map<string, string>();

type TranslationResult = {
  key: string;
  value: string;
};

export function useTranslation(text: string) {
  const { language } = useLanguage();

  const cacheKey = `${language}:${text}`;

  const [result, setResult] = useState<TranslationResult | null>(null);

  useEffect(() => {
    if (language === "en" || translationCache.has(cacheKey)) {
      return;
    }

    const controller = new AbortController();

    async function translate() {
      try {
        const response = await fetch("/api/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal,
          body: JSON.stringify({
            text,
            targetLanguage: language,
          }),
        });

        if (!response.ok) {
          throw new Error("Translation failed");
        }

        const data = await response.json();

        if (typeof data.translatedText !== "string") {
          throw new Error("Invalid translation response");
        }

        translationCache.set(cacheKey, data.translatedText);

        if (!controller.signal.aborted) {
          setResult({
            key: cacheKey,
            value: data.translatedText,
          });
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Translation error:", error);
        }
      }
    }

    translate();

    return () => controller.abort();
  }, [text, language, cacheKey]);

  const cachedTranslation = translationCache.get(cacheKey);

  const translatedText =
    language === "en"
      ? text
      : (cachedTranslation ?? (result?.key === cacheKey ? result.value : text));

  const loading =
    language !== "en" && !cachedTranslation && result?.key !== cacheKey;

  return {
    translatedText,
    loading,
  };
}
