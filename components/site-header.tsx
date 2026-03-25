"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Services" },
  { href: "/nightlife", label: "Nightlife" },
  { href: "/chauffeuring", label: "Chauffeuring" },
  { href: "/security", label: "Security" },
  { href: "/inquiry", label: "Inquiry" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full glass-nav">
      <div className="page-shell flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/cc_logo.jpeg"
            alt="Cooper Concierge logo"
            width={52}
            height={52}
            className="h-11 w-11 rounded-sm object-cover"
          />
          <span className="font-headline text-2xl italic tracking-tight text-primary">
            Cooper Concierge
          </span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-headline text-lg tracking-tight transition-colors ${
                pathname === item.href || (item.href === "/" && pathname === "/")
                  ? "border-b border-primary/30 pb-1 text-primary"
                  : "text-on-surface/70 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="rounded-md bg-primary px-6 py-2 text-[11px] uppercase tracking-[0.2em] text-on-primary hover:opacity-90"
          href="mailto:hello@cooperconcierge.com"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
