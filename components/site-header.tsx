import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Services" },
  { href: "/nightlife", label: "Nightlife" },
  { href: "/chauffeuring", label: "Chauffeuring" },
  { href: "/security", label: "Security" },
  { href: "/inquiry", label: "Inquiry" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline/20 bg-background/85 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/cc_logo.jpeg"
            alt="Cooper Concierge logo"
            width={44}
            height={44}
            className="rounded-sm object-cover"
          />
          <span className="font-serif text-xl tracking-tight text-primary">
            Cooper Concierge
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/70 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="cta-primary px-5 py-2" href="mailto:hello@cooperconcierge.com">
          Contact
        </Link>
      </div>
    </header>
  );
}
