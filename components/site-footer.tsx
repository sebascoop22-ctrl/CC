import Link from "next/link";

/** Mirrors `home_daily_featured_venue/code.html` footer */
export function SiteFooter() {
  return (
    <footer className="bg-[#0e0e0e]">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-12 border-t border-[#4b463d]/15 px-12 py-20 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-6 font-serif text-lg text-[#f1e0c3]">Cooper Concierge</div>
          <p className="font-sans text-[10px] uppercase leading-relaxed tracking-[0.2em] text-[#cec5b9]">
            The Silent Curator of the Urban Experience.
          </p>
        </div>
        <div>
          <h4 className="mb-6 font-sans text-[10px] uppercase tracking-[0.2em] text-[#d4c4a8]">Navigation</h4>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80 transition-opacity hover:opacity-100 hover:text-[#f1e0c3]"
            >
              Services
            </Link>
            <Link
              href="/nightlife"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80 transition-opacity hover:opacity-100 hover:text-[#f1e0c3]"
            >
              Nightlife
            </Link>
            <Link
              href="/chauffeuring"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80 transition-opacity hover:opacity-100 hover:text-[#f1e0c3]"
            >
              Chauffeuring
            </Link>
          </div>
        </div>
        <div>
          <h4 className="mb-6 font-sans text-[10px] uppercase tracking-[0.2em] text-[#d4c4a8]">Information</h4>
          <div className="flex flex-col gap-4">
            <span className="cursor-default font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80">
              Privacy
            </span>
            <span className="cursor-default font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80">
              Terms
            </span>
            <span className="cursor-default font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80">
              Legal
            </span>
          </div>
        </div>
        <div>
          <h4 className="mb-6 font-sans text-[10px] uppercase tracking-[0.2em] text-[#d4c4a8]">Connect</h4>
          <div className="flex flex-col gap-4">
            <span className="cursor-default font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80">
              Instagram
            </span>
            <span className="cursor-default font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80">
              Press
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1920px] px-12 pb-12">
        <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-40">
          © 2024 Cooper Concierge. The Silent Curator.
        </div>
      </div>
    </footer>
  );
}
