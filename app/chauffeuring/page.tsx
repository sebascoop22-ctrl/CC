import { CardGrid, HeroSection, InquiryCallout } from "@/components/sections";
import { images } from "@/components/content";

export default function ChauffeuringPage() {
  return (
    <>
      <HeroSection
        kicker="Elite Urban Logistics"
        title="Chauffeuring"
        description="A refined movement protocol for executives, private members, and high-priority itineraries."
        image={images.chauffeuringHero}
        primaryText="Request a Fleet"
      />
      <CardGrid
        kicker="The Curated Fleet"
        title="Vehicles & Service"
        cards={[
          {
            title: "Range Rover Autobiography",
            description: "Executive SUV comfort with secure, all-terrain reliability.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAj-tIJyDno5U_FE1pBLtkURoxa_2xWKwk_Vvior2MLS3yfp8_QROH3nFV6XI_SzHCuaKmq1PSRUQEcBVz7TujLeI8KTqVGdJ-6PWi8perX44Dwu_72o2NVdjElqwOzCp5R7-J-hoZsJI7xeOUA7shPbbW3cd5w9r2RBRfk89dCDjpL0-y5fKgW4-Nt7HQdYnH6abrVEPbrWsfusUOvIr0nY6t8QALRNBdqnqWv8P_S1HFw6WKJC4rRRzdkN9kJDa3LjUn_WwGG9Lg",
          },
          {
            title: "Mercedes S-Class",
            description: "Flagship sedan for discreet travel with a quiet, premium cabin.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuA34QaAz-3cQ_SKrL_akvoWexk6P-6yVbQ0FNTOjmToG0g62yfw4P1C4Jn-FafKEm1wdF1Z8OgUyWQRn5vj5M0q5cF3SJ9VWUyozA1tPa1wyJYDhcIb6Bti4QrQscvYXKuL5qkZ-BaIBT9mqpDm6AkDoVURbeJ6g_9gG1j_Ev5GbN5tQqvZM8HJpQsxYy7-_bODUi72ronxJN584R_89ufKKXDI688ATeHI41d1rRQ_a14QV2HVqOOPU7SGlvLQAI3o2wCHN86ILL8",
          },
          {
            title: "Rolls-Royce Ghost",
            description: "Bespoke luxury appointments for high-visibility arrivals.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuC0bxpEsbX-_Mq32NWVz1fhjPBSGtPI20fOzkJ2JN1GT6zo5zu5IWWVUdirP98O3Rhyx8H6hLPbh7tuw1tihPmVn-srncO9-f7wEsSLpxabH-A60Uuzgk0ym75DxZT_-f8zPAmkkFnqWhORYurbfLRTt2Gv-XE4Y8oscl0qLThZs1ZFq__fdkDsHjZqus_7rYby-l_93WZ4EbKg7-xH0xkvtAcmO_lnw8zvSATmG70vjyck3PiMmM1TlQTfIvjqzV0NwxGcEv_1Jsg",
          },
        ]}
      />
      <InquiryCallout />
    </>
  );
}
