import { CardGrid, HeroSection, InquiryCallout } from "@/components/sections";
import { images } from "@/components/content";

export default function NightlifePage() {
  return (
    <>
      <HeroSection
        kicker="Private Access Arranged"
        title="Nightlife"
        description="A curated shortlist of high-demand venues with seamless arrival, table, and evening coordination."
        image={images.nightlifeHero}
        primaryText="Request Access"
      />
      <CardGrid
        kicker="Recommended for Tonight"
        title="Elite Venues"
        cards={[
          {
            title: "The Obsidian Room",
            description: "London members-only club with private entry and VIP service.",
            image: images.nightlifeHero,
          },
          {
            title: "Crestwood Social",
            description: "New York rooftop destination with curated table experiences.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAw2XexfnlWqG5jLhPy8Wawi-7mBgfaP3rzaaf7I-VO308uPK4P4GJjEvz8fE7FzCxAasPA9chCh7N1hXcTn2pbDRGCUj1kIJ9S7fj0qC_WnZwqVFUZfJ55m65MBhh0DGshkHB60HXI2H1orrHdGwKSnAnCouSDUB-hNQ-jTjSmc4AEjiGDDnftYRxMvPC9NX-wBeazchCNH46sEyDdflh_D3NNaGbnD6gaAc8X87ocNy062SXW2eHEEGS0YWJa6-AH3cGmssxRRpY",
          },
          {
            title: "Elysium Lounge",
            description: "Paris underground venue balancing discretion with atmosphere.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD6nPZrUFQewPFe1YQBgz7E2XDvd9SRQNX975O3lxIsYDYPajMhSYr2FqBhsjnEcT60DYHXLQ_8PzOT7fz6G0Ttn6pW-fp5I4GffLqTj7mIGM-tXKy9G6bg3H3Dl_gdF0GPfwTLTMj8BPvSdMrzZ4_XXApl_EGShUnCY5X-6VgcFoEshxRXoaTMOUXikflIj2BMaMdmX_XJ718SAVP2IDBId7FdaSnlJ8G8Ecz3DzTzJa84nqFpkVi99PmkfPIb2Y9r2siJb-0gVIk",
          },
        ]}
      />
      <InquiryCallout />
    </>
  );
}
