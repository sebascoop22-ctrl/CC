import Link from "next/link";
import { HeroSection } from "@/components/sections";
import { images } from "@/components/content";

export default function InquiryPage() {
  return (
    <>
      <HeroSection
        kicker="Bespoke Membership"
        title="Private Access Inquiries"
        description="Your request is handled with discretion by our concierge team. Use direct email for first contact."
        image={images.homeHero}
        primaryText="Email Concierge"
      />
      <section className="py-16">
        <div className="page-shell">
          <div className="rounded-xl border border-outline/25 bg-surface-low p-8 md:p-12">
            <span className="section-kicker">Direct Contact</span>
            <h2 className="section-title mb-4">Start Your Request</h2>
            <p className="mb-8 max-w-2xl text-muted">
              Include preferred service, date, location, and any requirements. Our team
              replies quickly with next steps.
            </p>
            <Link
              href="mailto:hello@cooperconcierge.com?subject=Private%20Inquiry"
              className="cta-primary"
            >
              hello@cooperconcierge.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
