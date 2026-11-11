"use client";

import { Globe2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        {/* ================= LEFT: BRAND ================= */}

        <div className="flex items-center gap-3">
          {/* Brand Icon */}
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Globe2 size={23} />
          </span>

          {/* Brand Text */}
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900">
              Fin<span className="text-blue-600">Guide</span>
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {t("common.footer.subtitle")}
            </p>
          </div>
        </div>

        {/* ================= RIGHT: DISCLAIMER ================= */}

        <div className="max-w-xl text-sm leading-7 text-slate-500 md:text-right">
          <p>{t("common.footer.disclaimer")}</p>

          <p>{t("common.footer.verification")}</p>
        </div>
      </div>
    </footer>
  );
}
