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
    <section className="w-full bg-neutral-50 py-10 sm:py-12 lg:py-14">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer select-none"
            >
              <Image
                src={partner.iconSrc}
                alt=""
                width={40}
                height={40}
                className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 object-contain"
                aria-hidden="true"
              />
              <span className="font-heading font-semibold text-xl sm:text-2xl tracking-tight text-neutral-700 hover:text-neutral-950 transition-colors">
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
