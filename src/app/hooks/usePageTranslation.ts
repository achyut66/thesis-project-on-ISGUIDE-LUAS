"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

type TranslationContent = Record<string, string>;

type TranslationState = {
  key: string;
  content: TranslationContent;
};

const CACHE_VERSION = "v1";

export function usePageTranslation<T extends TranslationContent>(content: T) {
  const { language } = useLanguage();

  const contentKey = JSON.stringify(content);

  const stableContent = useMemo(
    () => JSON.parse(contentKey) as T,
    [contentKey],
  );

  const cacheKey = `finguide:page:${CACHE_VERSION}:${language}:${contentKey}`;

  const [result, setResult] = useState<TranslationState | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (language === "en") {
      return;
    }

    const controller = new AbortController();

    async function translatePage() {
      try {
        const cached = localStorage.getItem(cacheKey);

        if (cached) {
          const parsed = JSON.parse(cached) as TranslationContent;

          setResult({
            key: cacheKey,
            content: parsed,
          });

          return;
        }

        setLoading(true);

        const response = await fetch("/api/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal,
          body: JSON.stringify({
            text: JSON.stringify(stableContent),
            targetLanguage: language,
          }),
        });

        if (!response.ok) {
          throw new Error("Page translation failed");
        }

        const data = await response.json();

        const translated = JSON.parse(
          data.translatedText,
        ) as TranslationContent;

        if (
          !translated ||
          typeof translated !== "object" ||
          Array.isArray(translated) ||
          Object.keys(stableContent).some(
            (key) => typeof translated[key] !== "string",
          )
        ) {
          throw new Error("Invalid translation structure");
        }

        localStorage.setItem(cacheKey, JSON.stringify(translated));

        if (!controller.signal.aborted) {
          setResult({
            key: cacheKey,
            content: translated,
          });
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Page translation error:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    translatePage();

    return () => controller.abort();
  }, [cacheKey, language, stableContent]);

  const translatedContent =
    language === "en"
      ? stableContent
      : result?.key === cacheKey
        ? (result.content as T)
        : stableContent;

  return {
    content: translatedContent,
    loading: language !== "en" && result?.key !== cacheKey && loading,
  };
}
