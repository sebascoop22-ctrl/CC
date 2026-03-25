export default function NightlifePage() {
  return (
    <div className="pt-24">
      <section className="relative flex h-[75vh] items-center justify-center overflow-hidden bg-surface-container-lowest">
        <div className="relative z-20 mt-12 text-center">
          <h2 className="mb-6 font-label text-[10px] uppercase tracking-[0.4em] text-primary">Private Access Arranged</h2>
          <h1 className="font-headline text-7xl tracking-tighter md:text-9xl">Nightlife</h1>
          <a className="bronze-gradient mt-10 inline-flex rounded-md px-10 py-4 font-label text-xs uppercase tracking-[0.2em] text-on-primary" href="mailto:hello@cooperconcierge.com">Request Access</a>
        </div>
      </section>
      <div className="w-full border-y border-outline-variant/10 bg-background">
        <div className="page-shell no-scrollbar flex items-center justify-center gap-8 overflow-x-auto py-6">
          {["Mon 18","Tue 19","Wed 20","Thu 21","Fri 22","Sat 23","Sun 24"].map((day) => (
            <span key={day} className="min-w-[60px] text-center font-label text-[10px] uppercase tracking-widest text-on-surface-variant/70">{day}</span>
          ))}
        </div>
      </div>
      <section className="bg-surface-container-low py-24">
        <div className="page-shell">
          <h2 className="mb-12 font-headline text-5xl">Elite Venues</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {[
              ["The Obsidian Room","London • Members Only","https://lh3.googleusercontent.com/aida-public/AB6AXuBDOI7KHCrA76HcikQ1U6ICsu3nPzewkzjeO7b3Tflj4nT1GMaD0DImTm9HagHVFALRYaZHAWQQrkB8orAKeKeQykTGkv3uiqKA3yVPpsj9HFyWC1psfwlmy8CsYYMWGvJ4JE8WuxeXCus8L_f69p3n5ehULuWVTwPUJ8LBlzGm_rZIZx7YR72pep1vgG1XFHiiurY-63u7rjscDpiEzgrEwJqDIm3MVrSvnxAxq4o1tKeykHrrdcWfXVrW232sZQleuBGuQb37DUg"],
              ["Crestwood Social","New York • Rooftop","https://lh3.googleusercontent.com/aida-public/AB6AXuAw2XexfnlWqG5jLhPy8Wawi-7mBgfaP3rzaaf7I-VO308uPK4P4GJjEvz8fE7FzCxAasPA9chCh7N1hXcTn2pbDRGCUj1kIJ9S7fj0qC_WnZwqVFUZfJ55m65MBhh0DGshkHB60HXI2H1orrHdGwKSnAnCouSDUB-hNQ-jTjSmc4AEjiGDDnftYRxMvPC9NX-wBeazchCNH46sEyDdflh_D3NNaGbnD6gaAc8X87ocNy062SXW2eHEEGS0YWJa6-AH3cGmssxRRpY"],
              ["Elysium Lounge","Paris • Underground","https://lh3.googleusercontent.com/aida-public/AB6AXuD6nPZrUFQewPFe1YQBgz7E2XDvd9SRQNX975O3lxIsYDYPajMhSYr2FqBhsjnEcT60DYHXLQ_8PzOT7fz6G0Ttn6pW-fp5I4GffLqTj7mIGM-tXKy9G6bg3H3Dl_gdF0GPfwTLTMj8BPvSdMrzZ4_XXApl_EGShUnCY5X-6VgcFoEshxRXoaTMOUXikflIj2BMaMdmX_XJ718SAVP2IDBId7FdaSnlJ8G8Ecz3DzTzJa84nqFpkVi99PmkfPIb2Y9r2siJb-0gVIk"]
            ].map(([title,meta,image]) => (
              <article key={title} className="overflow-hidden rounded-lg bg-surface-container-highest">
                <div className="relative aspect-[16/10]">
                  <img className="h-full w-full object-cover opacity-75" src={image} alt={title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="font-headline text-3xl text-primary">{title}</h3>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{meta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
