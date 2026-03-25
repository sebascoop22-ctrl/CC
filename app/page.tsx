import Image from "next/image";
import Link from "next/link";

const mailto = "mailto:hello@cooperconcierge.com";

export default function Home() {
  return (
    <>
      {/* Hero – matches Stitch home_daily_featured_venue */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pb-20 pt-24">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            className="h-full w-full object-cover opacity-70"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC16evs2XQfwlUp-tn5pMDm9LyK85GoUCWvTkEKEgi0SbEgVcw9FGwrU-T0Hg0mfY6XtqaK6eq8pUvI1Ozx8T4mWmuPiTTXcFPXF21gVfW7p4jPLujU6Kzs2OmQhp-iYcc1AFbeQ-YUlqWXn3qv1k2W-DnbQXg0-cel79DDmapGM69WhLuZrJsOEFoNC672-LiFt-qD3fafdg1GQ00IwXPUubpcvkssYjedVFptd4C8hrHSF7ND8QK4kODIXpg654pkToz_CJamUs"
          />
          <img
            alt=""
            className="h-full w-full object-cover opacity-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgLvJ5Y8Wl7LQJbTBzEqlvCsJMxV6el8ox7AL6Kti3L0hx25bs7yPL0wzlEDG1jkjAodTQkUFBlAiA38lhMhfAL8gJEY3IM3BizYbtY7lMTt8y_gPOgcM-AHMyyYd9UeZ1weiDu8kLt77ywsN6Qo5FsXvaUe3ek7ud6MLjigxcqbwz-6EXdT10Zs_hi7vUR10rEm278gZ0n5j6ULdVbdZuiHaDFA1BYB3e11Q01OLyd9OVh3X9N9CogdgIHxUI21HMYGHV44Uz8W0"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 px-6 text-center">
          <span className="mb-2 block font-label text-xs uppercase tracking-[0.4em] text-primary">
            Imperial Elite Services
          </span>
          <div className="mb-4 flex justify-center">
            <Image
              alt="Cooper Concierge"
              className="h-48 w-auto object-contain md:h-[24rem]"
              src="/cc_logo.jpeg"
              width={480}
              height={480}
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <a
              className="rounded-md bg-primary px-10 py-4 font-label text-sm uppercase tracking-widest text-on-primary transition-all hover:opacity-90"
              href={mailto}
            >
              Book the Evening
            </a>
            <Link
              className="rounded-md border border-outline-variant/15 px-10 py-4 font-label text-sm uppercase tracking-widest text-primary transition-all hover:bg-white/5"
              href="/chauffeuring"
            >
              View Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Tonight's featured venue */}
      <section className="border-y border-outline-variant/5 bg-surface-container-low py-12">
        <div className="mx-auto max-w-7xl px-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-8">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-outline-variant/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="The Vault Lounge"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC16evs2XQfwlUp-tn5pMDm9LyK85GoUCWvTkEKEgi0SbEgVcw9FGwrU-T0Hg0mfY6XtqaK6eq8pUvI1Ozx8T4mWmuPiTTXcFPXF21gVfW7p4jPLujU6Kzs2OmQhp-iYcc1AFbeQ-YUlqWXn3qv1k2W-DnbQXg0-cel79DDmapGM69WhLuZrJsOEFoNC672-LiFt-qD3fafdg1GQ00IwXPUubpcvkssYjedVFptd4C8hrHSF7ND8QK4kODIXpg654pkToz_CJamUs"
                />
              </div>
              <div>
                <span className="mb-1 block font-label text-[10px] uppercase tracking-[0.3em] text-primary">
                  Tonight&apos;s Featured Venue
                </span>
                <h3 className="mb-1 font-headline text-2xl text-on-surface">The Vault Lounge</h3>
                <p className="text-xs font-light italic text-on-surface-variant">
                  Underground sophistication with world-class mixology and private table service.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/20 text-primary transition-colors hover:border-primary/50"
                  aria-label="Previous"
                >
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <span className="px-4 font-label text-[10px] uppercase tracking-widest text-on-surface">
                  Mon, Oct 24
                </span>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/20 text-primary transition-colors hover:border-primary/50"
                  aria-label="Next"
                >
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
              <button
                type="button"
                className="rounded-md border border-primary/20 bg-primary/10 px-6 py-2 font-label text-[10px] uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-on-primary"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Essentials masonry-style grid */}
      <section id="portfolio" className="bg-surface-container-low py-32 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-12">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="mb-4 block font-label text-xs uppercase tracking-[0.3em] text-primary">
                Our Portfolio
              </span>
              <h2 className="font-headline text-4xl text-on-surface md:text-5xl">Curated Essentials</h2>
            </div>
            <div className="text-left md:text-right">
              <p className="max-w-xs text-sm font-light text-on-surface-variant">
                Bespoke solutions for high-end transit, nightlife event management, and private
                documentation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-6">
            <Link
              href="/nightlife"
              className="group relative min-h-[400px] overflow-hidden rounded-lg bg-surface-container-highest md:col-span-4 md:row-span-2 lg:col-span-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Elite Nightlife"
                className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC16evs2XQfwlUp-tn5pMDm9LyK85GoUCWvTkEKEgi0SbEgVcw9FGwrU-T0Hg0mfY6XtqaK6eq8pUvI1Ozx8T4mWmuPiTTXcFPXF21gVfW7p4jPLujU6Kzs2OmQhp-iYcc1AFbeQ-YUlqWXn3qv1k2W-DnbQXg0-cel79DDmapGM69WhLuZrJsOEFoNC672-LiFt-qD3fafdg1GQ00IwXPUubpcvkssYjedVFptd4C8hrHSF7ND8QK4kODIXpg654pkToz_CJamUs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <h3 className="mb-2 font-headline text-3xl text-primary">Elite Nightlife Services</h3>
                <p className="mb-6 max-w-md text-sm font-light text-on-surface-variant">
                  VIP club access, preferred table bookings, and full event management at the
                  world&apos;s most sought-after venues.
                </p>
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface">
                  <span className="material-symbols-outlined text-sm">nightlife</span>
                  Secure a Table
                </span>
              </div>
            </Link>

            <Link
              href="/chauffeuring"
              className="group relative aspect-square overflow-hidden rounded-lg bg-surface-container-highest md:col-span-2 lg:col-span-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Local Chauffeuring"
                className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa5FhVxbPtNLbcQcfCI3bviFQngAuK8JRQHcLwuQIMmo9CaGjzZRgR4Uu2M17E_MIdtUHS9eBBSMHIZjGTLdCEEM5ViqDTFeDUuL2WLjj1c2vt-g6fF8mbzQaru1RRSVWeLa6pSLH6e-VfouUjubv44-dZyMcT30nEaTibDkNrxbq7t4_g_ODv1DdzfbDYFz9hx_6jX6Y7pOYivgZD08kjwQ32OWGtVaMN7cUbbVEGGegya9BM3cFNB9fa_p2-wW-birSxJnL_JRE"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="mb-1 font-headline text-xl text-primary">Local Chauffeuring</h3>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                  Luxury Fleet &amp; Professional Drivers
                </span>
              </div>
            </Link>

            <Link
              href="/security"
              className="group relative aspect-square overflow-hidden rounded-lg bg-surface-container-highest md:col-span-2 lg:col-span-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Photography and Videography"
                className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgLvJ5Y8Wl7LQJbTBzEqlvCsJMxV6el8ox7AL6Kti3L0hx25bs7yPL0wzlEDG1jkjAodTQkUFBlAiA38lhMhfAL8gJEY3IM3BizYbtY7lMTt8y_gPOgcM-AHMyyYd9UeZ1weiDu8kLt77ywsN6Qo5FsXvaUe3ek7ud6MLjigxcqbwz-6EXdT10Zs_hi7vUR10rEm278gZ0n5j6ULdVbdZuiHaDFA1BYB3e11Q01OLyd9OVh3X9N9CogdgIHxUI21HMYGHV44Uz8W0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="mb-1 font-headline text-xl text-primary">Photography &amp; Videography</h3>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                  Discreet Private Documentation
                </span>
              </div>
            </Link>

            <Link
              href="/inquiry"
              className="group relative h-[300px] overflow-hidden rounded-lg bg-surface-container-highest md:col-span-2 lg:col-span-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Fine Dining"
                className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYHLoT1StUOpFVRjxQ7Dn3Cn7wH2Gnz3dTWfEkVFceaRyKI_UVWpWbSC6u-qlQBMSjFiR-V7w6wB9Ai3UYPALw_DpETB8-ME8giiKrGcCoUtj5zSRkUTbnijMPVxTF18KTHPLBdICoBBftD7t7vtO-oeHHUkbixXl7JEzhIDWpZd_v7tJo-9QlLgaqNrEh94hXkCstBLPNvCCw7vRbnHHjuxGtnS8dHsWz-nYotJaNthM7Jy9YhoJDHvjCEteKYcXQtEwWfMyVwF0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="mb-1 font-headline text-xl text-primary">Pre-Event Dining</h3>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                  Priority Reservations
                </span>
              </div>
            </Link>

            <Link
              href="/inquiry"
              className="group relative h-[300px] overflow-hidden rounded-lg bg-surface-container-highest md:col-span-4 lg:col-span-3"
            >
              <div className="flex h-full">
                <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
                  <h3 className="mb-2 font-headline text-2xl text-primary">Bespoke Event Production</h3>
                  <p className="text-sm font-light text-on-surface-variant">
                    Private celebrations managed from initial concept to final encore.
                  </p>
                  <div className="mt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 text-primary transition-all group-hover:bg-primary group-hover:text-on-primary">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Member testimonials */}
      <section className="bg-surface py-40">
        <div className="mx-auto max-w-7xl px-12">
          <div className="mb-24 text-center">
            <span className="mb-6 block font-label text-xs uppercase tracking-[0.5em] text-primary/60">
              Confidential Accounts
            </span>
            <h2 className="font-headline text-4xl text-on-surface md:text-6xl">Member Experiences</h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                quote:
                  "The discretion is absolute. In a city where everyone is looking, Cooper ensures we remain seen only by those we choose. Their chauffeurs are the gold standard.",
                name: "Verified Member",
                title: "Private Family Office",
              },
              {
                quote:
                  "Last-minute table access at a sold-out venue is one thing, but the seamless transition from the vehicle to the booth is where their true mastery lies.",
                name: "Elite Client",
                title: "Hospitality Executive",
              },
              {
                quote:
                  "They handle the logistics so I can handle the night. For anyone serious about their time and privacy, Cooper is the only concierge worth considering.",
                name: "Platinum Member",
                title: "Venture Capitalist",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="relative rounded-lg border border-outline-variant/5 bg-surface-container-low p-12"
              >
                <span className="material-symbols-outlined absolute left-10 top-10 text-4xl text-primary/30">
                  format_quote
                </span>
                <p className="mb-10 pt-4 font-light italic leading-relaxed text-on-surface-variant">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="mb-1 font-headline text-on-surface">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-primary">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private access CTA */}
      <section className="relative overflow-hidden bg-surface py-40">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-12 text-center">
          <span className="mb-8 block font-label text-xs uppercase tracking-[0.5em] text-primary">
            By Invitation Only
          </span>
          <h2 className="mb-12 font-headline text-5xl leading-tight text-on-surface md:text-7xl">
            Secure Your Private Access
          </h2>
          <p className="mb-16 text-xl font-light leading-relaxed text-on-surface-variant">
            We maintain a limited roster of clients to ensure an unparalleled level of attention.
            Inquire today for engagement consideration.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <input
              className="w-full border-b border-outline-variant bg-transparent px-2 py-4 font-light text-on-surface focus:border-primary focus:outline-none md:w-80"
              placeholder="Your Professional Email"
              type="email"
              name="email"
              autoComplete="email"
            />
            <a
              className="w-full rounded-md bg-primary px-12 py-4 font-label text-sm uppercase tracking-widest text-on-primary transition-all hover:opacity-90 md:w-auto"
              href={`${mailto}?subject=Inquiry`}
            >
              Request Inquiry
            </a>
          </div>
          <div className="mt-20 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              Live Concierge Available 24/7
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
