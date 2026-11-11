"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Change this whenever you update the translation prompt or model.
const CACHE_VERSION = "v1";

type TranslationResult = {
  key: string;
  value: string;
};

function getCachedTranslation(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function saveTranslation(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn("Unable to cache translation:", error);
  }
}

export function useTranslation(text: string) {
  const { language } = useLanguage();

  const cacheKey = `finguide:${CACHE_VERSION}:${language}:${text}`;

  const [result, setResult] = useState<TranslationResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (language === "en" || !text.trim()) {
      return;
    }

    const cached = getCachedTranslation(cacheKey);

    if (cached !== null) {
      setResult({ key: cacheKey, value: cached });
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function translate() {
      setLoading(true);

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
          throw new Error(`Translation failed: ${response.status}`);
        }

        const data = await response.json();

        if (
          typeof data.translatedText !== "string" ||
          !data.translatedText.trim()
        ) {
          throw new Error("Invalid translation response");
        }

        saveTranslation(cacheKey, data.translatedText);

        if (!controller.signal.aborted) {
          setResult({
            key: cacheKey,
            value: data.translatedText,
          });
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("FinGuide translation error:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    translate();

    return () => controller.abort();
  }, [cacheKey, language, text]);

  const translatedText =
    language === "en" ? text : result?.key === cacheKey ? result.value : text;

  return {
    translatedText,
    loading,
  };
}
