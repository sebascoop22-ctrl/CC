export default function Home() {
  return (
    <div className="pt-24">
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pb-20 pt-24">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury concierge atmosphere"
            className="h-full w-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgLvJ5Y8Wl7LQJbTBzEqlvCsJMxV6el8ox7AL6Kti3L0hx25bs7yPL0wzlEDG1jkjAodTQkUFBlAiA38lhMhfAL8gJEY3IM3BizYbtY7lMTt8y_gPOgcM-AHMyyYd9UeZ1weiDu8kLt77ywsN6Qo5FsXvaUe3ek7ud6MLjigxcqbwz-6EXdT10Zs_hi7vUR10rEm278gZ0n5j6ULdVbdZuiHaDFA1BYB3e11Q01OLyd9OVh3X9N9CogdgIHxUI21HMYGHV44Uz8W0"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 text-center">
          <span className="mb-3 block font-label text-xs uppercase tracking-[0.4em] text-primary">
            Imperial Onyx Services
          </span>
          <h1 className="mb-8 font-headline text-5xl text-on-surface md:text-7xl">
            Cooper Concierge
          </h1>
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
            <a
              className="rounded-md bg-primary px-10 py-4 font-label text-sm uppercase tracking-widest text-on-primary hover:opacity-90"
              href="mailto:hello@cooperconcierge.com"
            >
              Book the Evening
            </a>
            <a
              className="rounded-md border border-outline-variant/20 px-10 py-4 font-label text-sm uppercase tracking-widest text-primary hover:bg-white/5"
              href="/nightlife"
            >
              View Nightlife
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="page-shell">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block font-label text-xs uppercase tracking-[0.3em] text-primary">
                Our Portfolio
              </span>
              <h2 className="font-headline text-4xl text-on-surface md:text-6xl">Curated Essentials</h2>
            </div>
            <p className="max-w-sm text-sm font-light text-on-surface-variant">
              Bespoke solutions for nightlife access, private transportation, and close protection.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a className="group relative min-h-[360px] overflow-hidden rounded-lg" href="/nightlife">
              <img className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC16evs2XQfwlUp-tn5pMDm9LyK85GoUCWvTkEKEgi0SbEgVcw9FGwrU-T0Hg0mfY6XtqaK6eq8pUvI1Ozx8T4mWmuPiTTXcFPXF21gVfW7p4jPLujU6Kzs2OmQhp-iYcc1AFbeQ-YUlqWXn3qv1k2W-DnbQXg0-cel79DDmapGM69WhLuZrJsOEFoNC672-LiFt-qD3fafdg1GQ00IwXPUubpcvkssYjedVFptd4C8hrHSF7ND8QK4kODIXpg654pkToz_CJamUs" alt="Elite Nightlife" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="mb-2 font-headline text-3xl text-primary">Elite Nightlife</h3>
                <p className="text-sm text-on-surface-variant">VIP access, preferred tables, and evening logistics.</p>
              </div>
            </a>
            <a className="group relative min-h-[360px] overflow-hidden rounded-lg" href="/chauffeuring">
              <img className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa5FhVxbPtNLbcQcfCI3bviFQngAuK8JRQHcLwuQIMmo9CaGjzZRgR4Uu2M17E_MIdtUHS9eBBSMHIZjGTLdCEEM5ViqDTFeDUuL2WLjj1c2vt-g6fF8mbzQaru1RRSVWeLa6pSLH6e-VfouUjubv44-dZyMcT30nEaTibDkNrxbq7t4_g_ODv1DdzfbDYFz9hx_6jX6Y7pOYivgZD08kjwQ32OWGtVaMN7cUbbVEGGegya9BM3cFNB9fa_p2-wW-birSxJnL_JRE" alt="Chauffeuring" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="mb-2 font-headline text-3xl text-primary">Local Chauffeuring</h3>
                <p className="text-sm text-on-surface-variant">Luxury fleet and professional drivers on demand.</p>
              </div>
            </a>
            <a className="group relative min-h-[360px] overflow-hidden rounded-lg" href="/security">
              <img className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC_s8_Tt02RWafEvLkYN3lvvNE4bZe7osvO1N8lPp0xZQy7dPv0jAzlgrmwIwd7M-5sU5SrO6EJ1kcovaSzy2_slNHEm5wVoRWYzUSTOQ-JcuoM5DfARf8Y9PwYQCfEabFku9sLJdZHn1zNhysCBNYiwblMQ30QEMtcjipqhbMjP0leix7rOVGLB_vT19Bp2N8dFejHfBDfzdbHkQnPaGbwoHpUJvsFsI-OWnDbWNFc-tykeW009vUI2yYPu5S1dhuV2YbloP64qI" alt="Security Services" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="mb-2 font-headline text-3xl text-primary">VIP Close Protection</h3>
                <p className="text-sm text-on-surface-variant">Discreet security protocol for people and events.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
