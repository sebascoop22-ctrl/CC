"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Services" },
  { href: "/nightlife", label: "Nightlife" },
  { href: "/chauffeuring", label: "Chauffeuring" },
  { href: "/inquiry", label: "Registry" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/5 bg-[#131313]/80 backdrop-blur-2xl">
      <div className="page-shell relative flex items-center justify-between py-6">
        <Link
          href="/"
          className="font-serif text-2xl italic tracking-tighter text-primary md:flex-shrink-0"
        >
          Cooper Concierge
        </Link>
        <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex md:items-center md:gap-12">
          {links.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-headline text-lg font-bold tracking-tight transition-colors duration-300 ${
                  active
                    ? "border-b border-primary/30 pb-1 text-primary"
                    : "text-on-surface/70 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="mailto:hello@cooperconcierge.com"
            className="hidden rounded-md bg-primary px-6 py-2 font-label text-xs uppercase tracking-widest text-on-primary transition-all duration-300 hover:opacity-80 active:scale-95 md:inline-flex"
          >
            Contact Concierge
          </Link>
          <span className="material-symbols-outlined cursor-pointer text-primary md:hidden">menu</span>
        </div>
      </div>
    </nav>
  );
}
