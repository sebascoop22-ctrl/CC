export default function SecurityPage() {
  return (
    <div className="pt-24">
      <section className="relative flex h-[870px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC_s8_Tt02RWafEvLkYN3lvvNE4bZe7osvO1N8lPp0xZQy7dPv0jAzlgrmwIwd7M-5sU5SrO6EJ1kcovaSzy2_slNHEm5wVoRWYzUSTOQ-JcuoM5DfARf8Y9PwYQCfEabFku9sLJdZHn1zNhysCBNYiwblMQ30QEMtcjipqhbMjP0leix7rOVGLB_vT19Bp2N8dFejHfBDfzdbHkQnPaGbwoHpUJvsFsI-OWnDbWNFc-tykeW009vUI2yYPu5S1dhuV2YbloP64qI" alt="Security Professional" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        </div>
        <div className="page-shell relative z-10">
          <span className="mb-6 block font-label text-xs uppercase tracking-[0.3em] text-primary">Elite Protection Protocol</span>
          <h1 className="mb-8 font-headline text-6xl leading-tight tracking-tighter md:text-8xl">Discreet <span className="italic font-normal">Protection.</span></h1>
          <p className="mb-10 max-w-xl text-lg font-light text-on-surface-variant">Providing an invisible shield of safety for high-net-worth individuals and private events.</p>
          <a className="rounded-md bg-primary px-10 py-4 text-sm uppercase tracking-widest text-on-primary" href="mailto:hello@cooperconcierge.com">Request Deployment</a>
        </div>
      </section>
      <section className="bg-surface py-24">
        <div className="page-shell grid grid-cols-1 gap-12 md:grid-cols-3">
          {[
            ["Security-Trained Personnel","Former elite military and law enforcement professionals vetted for integrity.","verified_user"],
            ["Bespoke Event Production","Integrated security logistics for private galas and closed-door summits.","event_seat"],
            ["International Standards","Global operational capability with local intelligence support.","language"],
          ].map(([title,desc,icon]) => (
            <article key={title} className="text-center">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant/25">
                <span className="material-symbols-outlined text-3xl text-primary">{icon}</span>
              </div>
              <h3 className="mb-4 font-headline text-xl text-primary">{title}</h3>
              <p className="text-sm font-light leading-relaxed text-on-surface-variant">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
