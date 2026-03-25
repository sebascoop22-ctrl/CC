export default function ChauffeuringPage() {
  return (
    <div className="pt-24">
      <section className="relative flex h-screen items-end overflow-hidden px-8 pb-24">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwuXsIaHTrCZ74xqHQN-TZTuTB8p7gP6kOhZQj9ovv_F_snRxjAsZ3I8-ZhCDa8EN0gT9u0F7PgmQwC1mg08muIHrz662WJXJz66fSyrT0Ls9asCCuMTIOtSwsR3gj5B8EzicfwlYBKakZKl-1H7M-vrEbqZPb_ujLWjywxspBrca3vXp5Qp0pCGtQENSWegL4_CAqqa2b4NWpu3OlUGNJCSyNDlutUYYwWrAqM3uY2lJ6p2amgsf3WK-u-FkMM1WUnAwbGkjkkcQ" alt="Chauffeuring Hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 page-shell">
          <h1 className="font-serif text-6xl leading-none text-primary md:text-8xl">Elite Urban <span className="italic">Logistics</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-on-surface-variant">A refined choreography of movement for high-priority urban itineraries.</p>
        </div>
      </section>
      <section className="bg-surface py-24">
        <div className="page-shell">
          <h2 className="mb-12 font-headline text-5xl text-primary">The Curated Fleet</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="overflow-hidden rounded-lg md:col-span-8"><img className="aspect-[16/9] h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj-tIJyDno5U_FE1pBLtkURoxa_2xWKwk_Vvior2MLS3yfp8_QROH3nFV6XI_SzHCuaKmq1PSRUQEcBVz7TujLeI8KTqVGdJ-6PWi8perX44Dwu_72o2NVdjElqwOzCp5R7-J-hoZsJI7xeOUA7shPbbW3cd5w9r2RBRfk89dCDjpL0-y5fKgW4-Nt7HQdYnH6abrVEPbrWsfusUOvIr0nY6t8QALRNBdqnqWv8P_S1HFw6WKJC4rRRzdkN9kJDa3LjUn_WwGG9Lg" alt="Range Rover" /></div>
            <div className="overflow-hidden rounded-lg md:col-span-4"><img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA34QaAz-3cQ_SKrL_akvoWexk6P-6yVbQ0FNTOjmToG0g62yfw4P1C4Jn-FafKEm1wdF1Z8OgUyWQRn5vj5M0q5cF3SJ9VWUyozA1tPa1wyJYDhcIb6Bti4QrQscvYXKuL5qkZ-BaIBT9mqpDm6AkDoVURbeJ6g_9gG1j_Ev5GbN5tQqvZM8HJpQsxYy7-_bODUi72ronxJN584R_89ufKKXDI688ATeHI41d1rRQ_a14QV2HVqOOPU7SGlvLQAI3o2wCHN86ILL8" alt="Mercedes S class" /></div>
            <div className="overflow-hidden rounded-lg md:col-span-5"><img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL1atKBNihh7YALyKjjGlg7PvNXMGX6mdw0XVOVCBG_Nlhyp2eAcq5u_6288Nadip1Tjw8iMFDOeqRst_F0kgNne7jdGopy-btiJQAOubZ5YzL-5l0npoKStkhAx3tqphPHBsrgT5Vn31FsgX0RVHMUklb6WbtAR5atBxOWnNPvAKKTm5KHV3rzNQewuDiaGd5s_XPKQ8wMa5yf4s3BhHeVeXdU95CxZjHx2hiKg-t7vheqdQc3_x0ZkpgpjDZkddH85ovey-vK2Q" alt="V Class" /></div>
            <div className="overflow-hidden rounded-lg md:col-span-7"><img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0bxpEsbX-_Mq32NWVz1fhjPBSGtPI20fOzkJ2JN1GT6zo5zu5IWWVUdirP98O3Rhyx8H6hLPbh7tuw1tihPmVn-srncO9-f7wEsSLpxabH-A60Uuzgk0ym75DxZT_-f8zPAmkkFnqWhORYurbfLRTt2Gv-XE4Y8oscl0qLThZs1ZFq__fdkDsHjZqus_7rYby-l_93WZ4EbKg7-xH0xkvtAcmO_lnw8zvSATmG70vjyck3PiMmM1TlQTfIvjqzV0NwxGcEv_1Jsg" alt="Rolls Royce" /></div>
          </div>
          <div className="mt-12">
            <a className="rounded-md bg-primary px-12 py-4 text-sm uppercase tracking-[0.2em] text-on-primary" href="mailto:hello@cooperconcierge.com">Request a Fleet</a>
          </div>
        </div>
      </section>
    </div>
  );
}
