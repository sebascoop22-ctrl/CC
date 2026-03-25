import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  kicker: string;
  title: string;
  description: string;
  image: string;
  primaryText: string;
  secondaryText?: string;
  secondaryHref?: string;
};

export function HeroSection(props: HeroProps) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src={props.image}
        alt={props.title}
        fill
        className="object-cover opacity-45"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="page-shell relative z-10 flex min-h-[70vh] flex-col items-start justify-end pb-16">
        <span className="section-kicker">{props.kicker}</span>
        <h1 className="mb-5 max-w-3xl font-serif text-5xl leading-tight text-primary md:text-7xl">
          {props.title}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-muted">{props.description}</p>
        <div className="flex flex-wrap gap-4">
          <Link href="mailto:hello@cooperconcierge.com" className="cta-primary">
            {props.primaryText}
          </Link>
          {props.secondaryText && props.secondaryHref ? (
            <Link href={props.secondaryHref} className="cta-secondary">
              {props.secondaryText}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type Card = { title: string; description: string; image: string };

export function CardGrid({
  title,
  kicker,
  cards,
}: {
  title: string;
  kicker: string;
  cards: Card[];
}) {
  return (
    <section className="py-20">
      <div className="page-shell">
        <span className="section-kicker">{kicker}</span>
        <h2 className="section-title mb-10">{title}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-lg border border-outline/25 bg-surface-low"
            >
              <div className="relative h-52">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-serif text-2xl text-primary">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InquiryCallout() {
  return (
    <section className="py-20">
      <div className="page-shell">
        <div className="rounded-xl border border-outline/25 bg-surface-low p-10 md:p-14">
          <span className="section-kicker">By Invitation Only</span>
          <h2 className="section-title mb-5 max-w-3xl">Secure Your Private Access</h2>
          <p className="mb-8 max-w-2xl text-muted">
            We maintain a limited roster to ensure exceptional attention and discretion.
            Contact the concierge team directly to begin your request.
          </p>
          <Link href="mailto:hello@cooperconcierge.com" className="cta-primary">
            Request Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
