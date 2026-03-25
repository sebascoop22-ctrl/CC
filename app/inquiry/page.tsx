export default function InquiryPage() {
  return (
    <div className="pt-32">
      <section className="page-shell pb-16 text-center">
        <div className="mb-8 inline-block rounded-full border border-outline-variant/20 px-4 py-1.5">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary/80">Bespoke Membership Only</span>
        </div>
        <h1 className="gold-gradient-text mb-8 font-headline text-5xl leading-tight md:text-7xl">Private Access Inquiries</h1>
        <p className="mx-auto max-w-2xl text-lg font-light text-on-surface-variant">Your request will be handled with absolute discretion by our senior concierge team.</p>
      </section>
      <section className="bg-surface-container-low py-20">
        <div className="page-shell max-w-4xl">
          <div className="glass-card relative overflow-hidden rounded-xl p-10 md:p-16">
            <form className="space-y-10">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-primary/60">Full Name</label>
                  <input className="w-full border-0 border-b border-outline-variant/30 bg-transparent px-0 py-3 text-on-surface focus:border-primary focus:ring-0" placeholder="ALEXANDER VANCE" type="text" />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-primary/60">Email Address</label>
                  <input className="w-full border-0 border-b border-outline-variant/30 bg-transparent px-0 py-3 text-on-surface focus:border-primary focus:ring-0" placeholder="CONTACT@COOPERCONCIERGE.COM" type="email" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-primary/60">Requirements</label>
                <textarea className="w-full resize-none border-0 border-b border-outline-variant/30 bg-transparent px-0 py-3 text-on-surface focus:border-primary focus:ring-0" rows={4} placeholder="PLEASE DESCRIBE YOUR SPECIFIC NEEDS..." />
              </div>
              <a className="inline-flex rounded-md bg-primary px-12 py-4 text-[11px] uppercase tracking-[0.3em] text-on-primary hover:bg-primary-container" href="mailto:hello@cooperconcierge.com?subject=Private%20Inquiry">
                Submit Request
              </a>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
