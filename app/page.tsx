import { CardGrid, HeroSection, InquiryCallout } from "@/components/sections";
import { images } from "@/components/content";

export default function Home() {
  return (
    <>
      <HeroSection
        kicker="Imperial Onyx Services"
        title="The Silent Curator of the Urban Experience"
        description="Bespoke solutions across nightlife access, local chauffeuring, and executive security."
        image={images.homeHero}
        primaryText="Book the Evening"
        secondaryText="View Services"
        secondaryHref="/nightlife"
      />
      <CardGrid
        kicker="Our Portfolio"
        title="Curated Essentials"
        cards={[
          {
            title: "Elite Nightlife",
            description:
              "VIP table bookings, preferred access, and evening planning at sought-after venues.",
            image: images.nightlifeHero,
          },
          {
            title: "Local Chauffeuring",
            description:
              "Luxury fleet and professional drivers with discreet, seamless coordination.",
            image: images.chauffeuringHero,
          },
          {
            title: "VIP Close Protection",
            description:
              "Security-trained teams with confidential protocol design for travel and events.",
            image: images.securityHero,
          },
        ]}
      />
      <InquiryCallout />
    </>
  );
}
