import Image from "next/image";
import Link from "next/link";
import { PillBadge, SectionHeading } from "@/shared/components/ui";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export function BloodDonationSection() {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      <div className="container relative z-10">
        {/* Main Card Container with Flush Right Border Integration */}
        <div className="bg-surface rounded-3xl sm:rounded-4xl lg:rounded-[40px] border border-border shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
          {/* Left Side: Content, Actions & Blood Group Filter Pills */}
          <div className="w-full lg:w-[52%] p-5 sm:p-7 lg:p-10 xl:p-12 space-y-4 sm:space-y-5 lg:space-y-6 text-left shrink-0">
            <div className="space-y-2.5 sm:space-y-3">
              {/* Pill Badge */}
              <PillBadge size="md">Blood Donation</PillBadge>

              {/* Heading & Description */}
              <SectionHeading
                className="leading-snug tracking-tight"
                description="Search for donors quickly in our verified network or register to save someone's life."
                descriptionClassName="mt-2.5 sm:mt-3"
              >
                <span>Someone needs </span>
                <SectionHeading.Highlight>
                  your blood{" "}
                </SectionHeading.Highlight>
                <br className="hidden sm:inline" />{" "}
                <SectionHeading.Highlight>
                  right now
                </SectionHeading.Highlight>
              </SectionHeading>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              {/* Primary Search Button */}
              <Link
                href="/blood"
                className="w-full sm:w-auto justify-center bg-primary hover:bg-primary-600 text-surface font-bold text-body-sm sm:text-body-md px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-2 text-center"
              >
                <span>Find Donor</span>
                <svg
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="7" strokeWidth="2.2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    d="M20 20l-3.5-3.5"
                  />
                </svg>
              </Link>

              {/* Secondary Outlined Button */}
              <Link
                href="/blood"
                className="w-full sm:w-auto justify-center border-2 border-primary text-primary hover:bg-primary-25 font-bold text-body-sm sm:text-body-md px-5 sm:px-6 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer text-center"
              >
                <span>Register as Donor</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
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

            {/* Blood Types Filter Pills: Symmetrical 4-col grid on mobile, flex on desktop */}
            <div className="pt-2 sm:pt-3">
              <div className="grid grid-cols-4 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5">
                {BLOOD_TYPES.map((type) => (
                  <Link
                    key={type}
                    href={`/blood?group=${encodeURIComponent(type)}`}
                    className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-surface-muted border border-border hover:border-primary hover:bg-primary-25 text-secondary-text hover:text-primary text-body-sm font-bold text-center transition-all duration-200 shadow-2xs"
                  >
                    {type}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Blood Campaign Graphic Poster with Floating Stat Card */}
          <div className="w-full lg:w-[48%] relative flex justify-end items-center self-stretch shrink-0">
            <div className="relative w-full aspect-4/3 sm:aspect-16/9 lg:aspect-auto lg:h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[460px] isolate">
              <Image
                src="/images/bloodcampaign.svg"
                alt="Blood Donation Campaign Poster"
                fill
                unoptimized
                priority
                className="object-cover object-center lg:object-right rounded-b-[24px] sm:rounded-b-[40px] lg:rounded-b-none lg:rounded-r-[32px] sm:lg:rounded-r-[40px] -z-10"
              />

              {/* Floating Monthly Collection Stat Overlay Card */}
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-30 bg-surface rounded-2xl p-3 sm:p-4.5 border border-border shadow-md sm:shadow-lg min-w-[160px] sm:min-w-[210px] pointer-events-auto">
                <div className="space-y-1 sm:space-y-1.5">
                  <span className="text-body-xs sm:text-body-sm font-bold text-secondary-text uppercase tracking-wide block">
                    This Month&apos;s Donors
                  </span>
                  <div className="text-body-md sm:text-h5 font-bold text-secondary">
                    8,719 Bags Distributed
                  </div>
                  {/* Pink Progress Bar */}
                  <div className="w-full bg-secondary-soft h-1.5 sm:h-2 rounded-full overflow-hidden mt-1">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
