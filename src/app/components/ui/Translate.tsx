"use client";

import { useTranslation } from "../../hooks/useTranslation";

type TranslateProps = {
  text: string;
};

export default function Translate({ text }: TranslateProps) {
  const { translatedText } = useTranslation(text);

  return <>{translatedText}</>;
}
