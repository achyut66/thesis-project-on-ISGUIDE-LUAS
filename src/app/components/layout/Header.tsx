import { Globe2 } from "lucide-react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-40
        border-b border-slate-200/80
        bg-white/85 backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto flex h-20 max-w-7xl
          items-center justify-between
          px-5 sm:px-8
        "
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 font-bold tracking-tight"
          aria-label="FinGuide home"
        >
          <span
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-2xl bg-blue-600 text-white
              shadow-sm transition-transform duration-300
              hover:rotate-6
            "
          >
            <Globe2 size={23} />
          </span>

          <span className="text-xl text-slate-900">
            Fin
            <span className="text-blue-600">Guide</span>
            <span
              className="
                ml-2 align-middle
                text-[10px] font-semibold
                uppercase tracking-widest
                text-slate-400
              "
            >
              Beta
            </span>
          </span>
        </a>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
}
