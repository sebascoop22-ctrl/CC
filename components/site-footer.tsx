import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-surface-container-lowest">
      <div className="page-shell border-t border-outline-variant/20 py-14">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="font-headline text-xl text-primary">Cooper Concierge</p>
          <div className="flex flex-wrap gap-8 font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/80">
            <Link href="/inquiry" className="hover:text-primary">
              Inquiry
            </Link>
            <Link href="/nightlife" className="hover:text-primary">
              Nightlife
            </Link>
            <Link href="/chauffeuring" className="hover:text-primary">
              Chauffeuring
            </Link>
            <Link href="/security" className="hover:text-primary">
              Security
            </Link>
            <Link href="mailto:hello@cooperconcierge.com" className="hover:text-primary">
              Contact
            </Link>
          </div>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/40">
            © 2026 Cooper Concierge
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="mailto:hello@cooperconcierge.com" className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/50 hover:text-primary">
            Inquiry
          </Link>
        </div>
      </div>
    </footer>
  );
}
