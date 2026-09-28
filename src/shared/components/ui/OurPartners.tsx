import { PillBadge, SectionHeading } from "@/shared/components/ui";

export function OurPartners() {
  const partners = [
    {
      name: "UNICEF",
      sub: "Bangladesh",
    },
    {
      name: "BRAC",
      sub: "Humanitarian",
    },
    {
      name: "Save the Children",
      sub: "Bangladesh",
    },
    {
      name: "UN Women",
      sub: "Bangladesh",
    },
    {
      name: "Manusher Jonno",
      sub: "Foundation",
    },
    {
      name: "Prothom Alo",
      sub: "Trust",
    },
    {
      name: "UNFPA",
      sub: "Bangladesh",
    },
  ];

  return (
    <div className="mt-16 sm:mt-24 text-center space-y-2.5 sm:space-y-3 px-2 pb-10 sm:pb-14 lg:pb-20">
      {/* Top Pill Badge */}
      <PillBadge size="md">Partners</PillBadge>

      {/* Heading */}
      <SectionHeading size="h4">
        Those Who Stand With Us to Build a Safe Future
      </SectionHeading>

      {/* 7 Partner Badges / Cards */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-10">
        {partners.map((p, idx) => (
          <div
            key={idx}
            className="bg-slate-50 hover:bg-white border border-slate-100 rounded-2xl px-5 py-3 sm:px-6 sm:py-3.5 text-center whitespace-nowrap shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 cursor-default group"
          >
            <div className="text-body-md sm:text-body-lg font-bold text-secondary-lighter group-hover:text-primary transition-colors">
              {p.name}
            </div>
            <div className="text-body-sm sm:text-body-md text-secondary-text font-medium mt-0.5">
              {p.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
