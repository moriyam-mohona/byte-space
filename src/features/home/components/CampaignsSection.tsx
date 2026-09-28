import Image from "next/image";
import Link from "next/link";
import { PillBadge, SectionHeading } from "@/shared/components/ui";

interface CampaignItem {
  id: string;
  image: string;
}

const CAMPAIGNS: CampaignItem[] = [
  { id: "campaign-1", image: "/images/winter-dress.png" },
  { id: "campaign-2", image: "/images/winter-dress.png" },
  { id: "campaign-3", image: "/images/winter-dress.png" },
];

export function CampaignsSection() {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header: Left (Badge + Title), Right (View All Link) */}
        <div className="flex items-end justify-between gap-4 mb-6 sm:mb-10">
          {/* Left Side: Pill Badge & Heading */}
          <div className="space-y-2.5 sm:space-y-3 text-left">
            <PillBadge size="md">Campaigns</PillBadge>
            <SectionHeading titlePrefix="Support Ongoing Campaigns" />
          </div>

          {/* Right Side: View All Campaigns Link */}
          <div className="shrink-0 pb-1">
            <Link
              href="/campaigns"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-primary hover:text-primary-600 font-bold text-body-sm sm:text-body-md transition-colors group cursor-pointer"
            >
              <span>View All Campaigns</span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
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

        {/* 3 Active Campaigns: Mobile Swipeable Carousel | Desktop 3-col Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:pb-0 sm:overflow-visible">
          {CAMPAIGNS.map((campaign) => (
            <div
              key={campaign.id}
              className="w-[84vw] max-w-[340px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink bg-surface rounded-3xl border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Campaign Image with Category Overlay Badge */}
              <div className="relative w-full aspect-16/10 overflow-hidden">
                <Image
                  src={campaign.image}
                  alt="Warmth for Every Child in Winter"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10">
                  <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-warning text-surface text-body-xs sm:text-body-sm font-semibold shadow-xs">
                    Winter Clothing
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4 sm:gap-5 text-left">
                {/* Top: Title, Description, Meta details */}
                <div className="space-y-1.5">
                  <h3 className="text-h6 sm:text-h5 font-bold text-secondary group-hover:text-primary transition-colors line-clamp-1">
                    Warmth for Every Child in Winter
                  </h3>

                  <p className="text-body-sm sm:text-body-md text-secondary-text leading-relaxed line-clamp-2">
                    Distributing warm clothing, blankets, and nutrition to street children across northern Bangladesh.
                  </p>

                  {/* Date & Location Meta Row */}
                  <div className="flex items-center gap-3.5 sm:gap-4 text-body-xs sm:text-body-sm text-secondary-text/80 pt-0.5 font-medium">
                    {/* Date */}
                    <div className="flex items-center gap-1.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-secondary shrink-0"
                      >
                        <path
                          d="M9.33335 1.1665V3.49984M4.66669 1.1665V3.49984"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.58333 2.3335H6.41667C4.21678 2.3335 3.11684 2.3335 2.43342 3.01691C1.75 3.70033 1.75 4.80027 1.75 7.00016V8.16683C1.75 10.3667 1.75 11.4667 2.43342 12.1501C3.11684 12.8335 4.21678 12.8335 6.41667 12.8335H7.58333C9.7832 12.8335 10.8832 12.8335 11.5666 12.1501C12.25 11.4667 12.25 10.3667 12.25 8.16683V7.00016C12.25 4.80027 12.25 3.70033 11.5666 3.01691C10.8832 2.3335 9.7832 2.3335 7.58333 2.3335Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.75 5.8335H12.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.83333 10.7918L5.83333 8.07765C5.83333 7.96582 5.75356 7.87512 5.65517 7.87512H5.25M8.16667 10.7907L9.03321 8.10384C9.03881 8.08652 9.04167 8.06838 9.04167 8.05012C9.04167 7.95352 8.96333 7.87512 8.86667 7.87512L7.58333 7.875"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span>Jan 15, 2026</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-secondary shrink-0"
                      >
                        <g clipPath="url(#clip0_72_12583)">
                          <path
                            d="M12.25 5.8335C12.25 9.91683 7 13.4168 7 13.4168C7 13.4168 1.75 9.91683 1.75 5.8335C1.75 4.44111 2.30312 3.10575 3.28769 2.12119C4.27226 1.13662 5.60761 0.583496 7 0.583496C8.39239 0.583496 9.72774 1.13662 10.7123 2.12119C11.6969 3.10575 12.25 4.44111 12.25 5.8335Z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 7.5835C7.9665 7.5835 8.75 6.79999 8.75 5.8335C8.75 4.867 7.9665 4.0835 7 4.0835C6.0335 4.0835 5.25 4.867 5.25 5.8335C5.25 6.79999 6.0335 7.5835 7 7.5835Z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_72_12583">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <span>Kurigram &amp; Rangpur</span>
                    </div>
                  </div>
                </div>

                {/* Bottom: Progress Stats, Bar, & Donate Action */}
                <div className="space-y-3 pt-1">
                  {/* Financial Stats Row */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-body-xs sm:text-body-sm font-medium">
                      <div>
                        <span className="text-secondary-text font-normal">
                          Raised:
                        </span>
                        <span className="text-success font-bold text-body-sm sm:text-body-md ml-1">
                          ৳3,20,000
                        </span>
                      </div>
                      <div>
                        <span className="text-secondary-text font-normal">
                          Goal:
                        </span>
                        <span className="text-primary font-bold text-body-sm sm:text-body-md ml-1">
                          ৳5,00,000
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar Track & Fill */}
                    <div className="w-full bg-secondary-soft h-2 rounded-full overflow-hidden mt-1.5">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: "64%" }}
                      />
                    </div>

                    {/* Progress Percentage Text */}
                    <div className="mt-1">
                      <span className="text-body-xs text-primary font-semibold">
                        64% Completed
                      </span>
                    </div>
                  </div>

                  {/* Donate CTA Button */}
                  <div className="pt-1">
                    <Link
                      href="/donation"
                      className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-surface font-bold text-body-sm sm:text-body-md py-2.5 rounded-full text-center transition-all duration-200 block cursor-pointer"
                    >
                      Donate to Campaign
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
