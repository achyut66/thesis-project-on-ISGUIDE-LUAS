import { dictionaries, type SupportedLanguage } from "./dictionaries";

export function translate(language: SupportedLanguage, key: string): string {
  const keys = key.split(".");

  function getValue(object: unknown): unknown {
    return keys.reduce<unknown>((current, property) => {
      if (
        current !== null &&
        typeof current === "object" &&
        !Array.isArray(current)
      ) {
        return (current as Record<string, unknown>)[property];
      }

      return undefined;
    }, object);
  }

  const translated = getValue(dictionaries[language]);

  if (typeof translated === "string" && translated.trim()) {
    return translated;
  }

  const english = getValue(dictionaries.en);

  if (typeof english === "string") {
    return english;
  }

  return key;
}
