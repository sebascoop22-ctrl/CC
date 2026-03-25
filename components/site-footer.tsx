import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#0e0e0e]">
      <div className="grid w-full max-w-[1920px] grid-cols-1 gap-12 border-t border-[#4b463d]/15 px-12 py-20 md:grid-cols-4 mx-auto">
        <div>
          <div className="mb-6 font-serif text-lg text-primary">Cooper Concierge</div>
          <p className="font-sans text-[10px] uppercase leading-relaxed tracking-[0.2em] text-[#cec5b9]">
            The Elite Concierge of the Urban Environment.
          </p>
        </div>
        <div>
          <h4 className="mb-6 font-sans text-[10px] uppercase tracking-[0.2em] text-[#d4c4a8]">
            Resources
          </h4>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80 transition-opacity hover:opacity-100 hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80 transition-opacity hover:opacity-100 hover:text-primary"
            >
              Portfolio
            </Link>
            <Link
              href="/chauffeuring"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80 transition-opacity hover:opacity-100 hover:text-primary"
            >
              Chauffeuring
            </Link>
            <Link
              href="/security"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80 transition-opacity hover:opacity-100 hover:text-primary"
            >
              Security
            </Link>
          </div>
        </div>
        <div>
          <h4 className="mb-6 font-sans text-[10px] uppercase tracking-[0.2em] text-[#d4c4a8]">
            Information
          </h4>
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
            <span className="cursor-default font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80 hover:text-primary">
              Instagram
            </span>
            <Link
              href="mailto:hello@cooperconcierge.com"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-80 transition-opacity hover:opacity-100 hover:text-primary"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1920px] px-12 pb-12">
        <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cec5b9] opacity-40">
          © 2023 Cooper Concierge. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
