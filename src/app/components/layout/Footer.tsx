import { Globe2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div
        className="
          mx-auto flex max-w-7xl
          flex-col justify-between gap-6
          px-5 sm:flex-row sm:items-center sm:px-8
        "
      >
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <span
            className="
              flex h-10 w-10
              shrink-0 items-center justify-center
              rounded-xl bg-blue-600 text-white
            "
          >
            <Globe2 size={20} />
          </span>

          <div>
            <p className="font-bold text-slate-900">
              Fin
              <span className="text-blue-600">Guide</span>
            </p>

            <p className="mt-1 text-xs text-slate-500">
              An independent student research prototype
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
          <p>FinGuide is not an official Finnish government service.</p>

          <p className="mt-1">
            Always verify important information with the relevant authority.
          </p>
        </div>
      </div>
    </footer>
  );
}
