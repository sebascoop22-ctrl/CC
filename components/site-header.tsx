"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Mirrors `home_daily_featured_venue/code.html` nav — Services / Nightlife / Chauffeuring / Inquiry */
const links = [
  { href: "/", label: "Services" },
  { href: "/nightlife", label: "Nightlife" },
  { href: "/chauffeuring", label: "Chauffeuring" },
  { href: "/inquiry", label: "Inquiry" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#131313]/80 bg-[#1c1b1b]/50 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between px-12 py-6">
        <Link href="/" className="text-2xl font-serif italic tracking-tighter text-primary">
          Cooper Concierge
        </Link>
        <div className="hidden items-center gap-12 font-headline font-bold tracking-tight md:flex">
          {links.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "border-b border-[#f1e0c3]/30 pb-1 text-[#f1e0c3] transition-colors duration-300 hover:text-[#f1e0c3]"
                    : "text-[#e5e2e1]/70 transition-colors duration-300 hover:text-[#f1e0c3]"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="mailto:hello@cooperconcierge.com"
            className="rounded-md bg-primary px-6 py-2 font-label text-xs uppercase tracking-widest text-on-primary transition-all duration-300 hover:opacity-80 active:scale-95"
          >
            Contact Concierge
          </Link>
          <span className="material-symbols-outlined cursor-pointer text-primary md:hidden">menu</span>
        </div>
      </div>
    </nav>
  );
}
