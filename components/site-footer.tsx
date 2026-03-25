import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-outline/20 bg-surface-lowest">
      <div className="page-shell flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-lg text-primary">Cooper Concierge</p>
        <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em] text-muted/80">
          <Link href="/inquiry" className="hover:text-primary">
            Inquiry
          </Link>
          <Link href="mailto:hello@cooperconcierge.com" className="hover:text-primary">
            Contact
          </Link>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted/50">
          © 2026 Cooper Concierge
        </p>
      </div>
    </footer>
  );
}
