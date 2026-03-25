import { CardGrid, HeroSection, InquiryCallout } from "@/components/sections";
import { images } from "@/components/content";

export default function SecurityPage() {
  return (
    <>
      <HeroSection
        kicker="Elite Protection Protocol"
        title="Discreet Protection"
        description="Security-trained specialists delivering private, precise, and adaptive protection services."
        image={images.securityHero}
        primaryText="Request Deployment"
      />
      <CardGrid
        kicker="Operational Specialties"
        title="VIP Close Protection"
        cards={[
          {
            title: "Executive Protection Teams",
            description: "24/7 shift-based coverage with route planning and threat response.",
            image: images.securityHero,
          },
          {
            title: "Tactical Driver Specialists",
            description: "Defensive driving expertise integrated with principal protection.",
            image: images.chauffeuringHero,
          },
          {
            title: "International Travel Escorts",
            description: "Global operations support with local intelligence and logistics.",
            image: images.homeHero,
          },
        ]}
      />
      <InquiryCallout />
    </>
  );
}
