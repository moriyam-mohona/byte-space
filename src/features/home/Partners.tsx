import Image from "next/image";

export function Partners() {
  const partners = [
    { name: "Logoipsum 1", iconSrc: "/icons/landingLogo/logo-one.svg" },
    { name: "Logoipsum 2", iconSrc: "/icons/landingLogo/logo-two.svg" },
    { name: "Logoipsum 3", iconSrc: "/icons/landingLogo/logo-three.svg" },
    { name: "Logoipsum 4", iconSrc: "/icons/landingLogo/logo-four.svg" },
    { name: "Logoipsum 5", iconSrc: "/icons/landingLogo/logo-five.svg" },
  ];

  return (
    <section className="w-full bg-neutral-50 py-10 sm:py-12 xl:py-14">
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-6 sm:gap-8 xl:gap-12">
          {/* First Row of 3 logos (mobile/tablet), inline on desktop */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 xl:gap-12 flex-wrap">
            {partners.slice(0, 3).map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-2.5 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer select-none"
              >
                <Image
                  src={partner.iconSrc}
                  alt=""
                  width={40}
                  height={40}
                  className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 object-contain"
                  aria-hidden="true"
                />
                <span className="font-heading font-semibold text-base sm:text-xl lg:text-2xl tracking-tight text-neutral-700 hover:text-neutral-950 transition-colors">
                  Logoipsum
                </span>
              </div>
            ))}
          </div>

          {/* Second Row of 2 logos (mobile/tablet), inline on desktop */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 xl:gap-12 flex-wrap">
            {partners.slice(3).map((partner, index) => (
              <div
                key={index + 3}
                className="flex items-center gap-2 sm:gap-2.5 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer select-none"
              >
                <Image
                  src={partner.iconSrc}
                  alt=""
                  width={40}
                  height={40}
                  className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 object-contain"
                  aria-hidden="true"
                />
                <span className="font-heading font-semibold text-base sm:text-xl lg:text-2xl tracking-tight text-neutral-700 hover:text-neutral-950 transition-colors">
                  Logoipsum
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
