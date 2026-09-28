import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="section-padding bg-transparent">
      <div className="container space-y-4 sm:space-y-6">
        {/* Main Hero Card Container */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl border-x-4 sm:border-x-8 border-y-2 sm:border-y-4 border-primary-400 bg-white shadow-sm overflow-hidden flex flex-col lg:flex-row lg:items-center min-h-[460px] lg:min-h-[520px]">
          {/* Mobile & Tablet Top Image: Bangladeshi Girl with Books */}
          <div className="relative w-full h-64 sm:h-76 md:h-84 lg:hidden overflow-hidden bg-primary-25/40">
            <Image
              src="/images/hero-banner-photo.png"
              alt="Byte Space Child with Books"
              fill
              className="object-cover object-[72%_15%]"
              priority
            />
            {/* Soft gradient fade into content */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none" />
          </div>

          {/* Desktop Background Image */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/hero-banner-photo.png"
              alt="Byte Space Banner"
              fill
              className="object-cover"
              priority
            />

            {/* Soft white gradient on left side to guarantee high contrast text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent max-w-xl pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-5 sm:p-8 lg:p-10 max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6">
            {/* Byte Space Foundation Logo */}
            <div>
              <Image
                src="/icons/logo.svg"
                alt="Byte Space Foundation Logo"
                width={136}
                height={130}
                className="w-24 sm:w-28 lg:w-34 h-auto"
                priority
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-[28px] sm:text-h3 lg:text-h2 font-bold leading-tight tracking-tight">
              <span className="text-secondary block">
                In Service of Humanity, Rights &amp;
              </span>
              <span className="text-primary mt-1 sm:mt-1.5 relative inline-block">
                <span>Safety—Building a Beautiful,</span>
                <span className="block mt-0.5">Prosperous &amp; Equal Bangladesh</span>
                {/* Decorative Pink Underline Accent */}
                <svg
                  className="absolute -bottom-2 right-0 w-44 sm:w-64 lg:w-72 h-2.5 sm:h-3 text-primary opacity-80 pointer-events-none"
                  viewBox="0 0 260 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7C45 3 130 2 258 5.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle with vertical left accent bar */}
            <div className="flex items-stretch gap-3 text-body-sm sm:text-body-lg text-secondary/80 leading-relaxed font-medium max-w-lg lg:max-w-xl pt-0.5 sm:pt-1">
              <span className="w-1 bg-primary rounded-full shrink-0" />
              <p className="py-0.5">
                Ensuring safe shelter, education, healthcare, and equal opportunities for all is our commitment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/donation"
                className="bg-primary hover:bg-primary-600 text-base-white font-semibold text-body-sm sm:text-body-md px-7 py-3 rounded-full shadow-md shadow-primary/25 hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center text-center"
              >
                Donate Now
              </Link>

              <Link
                href="/about"
                className="border border-primary text-primary hover:bg-primary-25 font-medium text-body-sm sm:text-body-md px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center"
              >
                <span>Join Us Today</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Banner Stats Strip */}
        <div className="bg-primary text-base-white rounded-2xl sm:rounded-3xl py-3.5 sm:py-7 px-3 sm:px-12 shadow-md shadow-primary/25">
          <div className="grid grid-cols-3 divide-x divide-white/20 sm:divide-x-0 sm:flex sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 text-center sm:text-left">
            {/* Stat 1: 64 Districts Active */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 px-1 sm:px-0">
              <Image
                src="/icons/herobanner/location.svg"
                alt="Districts Location Icon"
                width={32}
                height={32}
                className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 opacity-95"
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="text-body-md sm:text-h3 font-bold leading-tight">
                  64 Districts
                </span>
                <span className="text-xs sm:text-body-lg opacity-90 font-medium leading-tight sm:leading-normal">
                  Active
                </span>
              </div>
            </div>

            {/* Vertical Divider 1 */}
            <div className="hidden sm:block w-px h-6 bg-white/30 shrink-0" />

            {/* Stat 2: 22,000+ Volunteers */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 px-1 sm:px-0">
              <Image
                src="/icons/herobanner/users.svg"
                alt="Volunteers Icon"
                width={32}
                height={32}
                className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 opacity-95"
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="text-body-md sm:text-h3 font-bold leading-tight">
                  22,000+
                </span>
                <span className="text-xs sm:text-body-lg opacity-90 font-medium leading-tight sm:leading-normal">
                  Volunteers
                </span>
              </div>
            </div>

            {/* Vertical Divider 2 */}
            <div className="hidden sm:block w-px h-6 bg-white/30 shrink-0" />

            {/* Stat 3: 94% Success Rate */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 px-1 sm:px-0">
              <Image
                src="/icons/herobanner/rate.svg"
                alt="Success Rate Icon"
                width={32}
                height={32}
                className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 opacity-95"
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="text-body-md sm:text-h3 font-bold leading-tight">
                  94%
                </span>
                <span className="text-xs sm:text-body-lg opacity-90 font-medium leading-tight sm:leading-normal">
                  Success Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
