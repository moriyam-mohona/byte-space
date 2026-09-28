import Image from "next/image";
import Link from "next/link";
import { PillBadge, SectionHeading } from "@/shared/components/ui";

export function VolunteerSection() {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side (Desktop) / 2nd (Mobile): Volunteers Poster Graphic */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 relative flex items-center justify-center">
            <Image
              src="/images/volentiars.svg"
              alt="Byte Space Volunteers"
              width={536}
              height={402}
              unoptimized
              priority
              className="w-full max-w-[500px] lg:max-w-none h-auto rounded-2xl sm:rounded-3xl shadow-xs border border-border"
            />
          </div>

          {/* Right Side (Desktop) / Dissolved via `contents` on Mobile */}
          <div className="contents lg:flex lg:flex-col lg:order-2 lg:w-1/2 lg:gap-6 text-left">
            {/* 1st on Mobile: Header Block (Pill Badge & Section Heading) */}
            <div className="order-1 lg:order-none space-y-2.5 sm:space-y-3 w-full">
              {/* Pill Badge */}
              <PillBadge size="md">Volunteers</PillBadge>

              {/* Heading & Subtitle */}
              <SectionHeading
                className="leading-snug tracking-tight"
                description="Join our nationwide community of over 12,000 active volunteers creating real change in people's lives."
                descriptionClassName="mt-2.5 sm:mt-3"
              >
                <span>Become a volunteer, stand </span>
                <SectionHeading.Highlight>
                  by their side{" "}
                </SectionHeading.Highlight>
                <br className="hidden sm:inline" />{" "}
                <SectionHeading.Highlight>
                  today
                </SectionHeading.Highlight>
              </SectionHeading>
            </div>

            {/* 3rd on Mobile: Feature Pills & Volunteer CTA */}
            <div className="order-3 lg:order-none space-y-4 sm:space-y-5 lg:space-y-6 w-full">
              {/* 4 Feature Pills Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
                {/* Feature 1 */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-surface-muted border border-border text-secondary text-body-xs sm:text-body-sm font-semibold shadow-2xs">
                  <svg
                    className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Verified ID Card</span>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-surface-muted border border-border text-secondary text-body-xs sm:text-body-sm font-semibold shadow-2xs">
                  <svg
                    className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Professional Training</span>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-surface-muted border border-border text-secondary text-body-xs sm:text-body-sm font-semibold shadow-2xs">
                  <svg
                    className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Emergency Response Experience</span>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-surface-muted border border-border text-secondary text-body-xs sm:text-body-sm font-semibold shadow-2xs">
                  <svg
                    className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Certificate &amp; Recognition</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-1 sm:pt-2">
                <Link
                  href="/volunteer"
                  className="w-full sm:w-auto justify-center bg-primary hover:bg-primary-600 text-surface font-bold text-body-sm sm:text-body-md px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-2 text-center"
                >
                  <span>Join as a Volunteer</span>
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
