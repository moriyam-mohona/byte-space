import Link from "next/link";
import { PillBadge, SectionHeading } from "@/shared/components/ui";

const PROCESS_STEPS = [
  {
    id: "step-1",
    number: "01",
    title: "Report or Apply",
    description: "Apply online, via hotline 16345, or through our volunteer network.",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-600",
    arrowColor: "text-purple-500",
  },
  {
    id: "step-2",
    number: "02",
    title: "Verification",
    description: "Our field team contacts within 24 hours to assess the situation.",
    badgeBg: "bg-pink-50",
    badgeText: "text-pink-600",
    arrowColor: "text-pink-500",
  },
  {
    id: "step-3",
    number: "03",
    title: "Emergency Assistance",
    description: "Immediate dispatch of medical aid, shelter, or blood donation.",
    badgeBg: "bg-cyan-50",
    badgeText: "text-cyan-600",
    arrowColor: "text-cyan-500",
  },
  {
    id: "step-4",
    number: "04",
    title: "Rehabilitation",
    description: "Long-term education, legal aid, and rehabilitation support.",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-600",
    arrowColor: "text-emerald-500",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          {/* Left Side: Badge, Heading, Subtitle & Action Buttons */}
          <div className="w-full lg:w-5/12 text-left space-y-4 sm:space-y-5">
            <div className="space-y-2.5 sm:space-y-3">
              {/* Pill Badge */}
              <PillBadge size="md">Process</PillBadge>

              {/* Heading & Subtitle */}
              <SectionHeading description="Connect with our support system in four simple steps.">
                How to Get Help?
              </SectionHeading>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              {/* Primary Video Button */}
              <button
                type="button"
                className="w-full sm:w-auto justify-center bg-primary hover:bg-primary-600 text-surface font-bold text-body-sm sm:text-body-md px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-2 text-center"
              >
                <span>Watch Video</span>
                <span className="w-5 h-5 rounded-full bg-surface/20 flex items-center justify-center text-xs">
                  ▶
                </span>
              </button>

              {/* Secondary Outlined Button */}
              <Link
                href="/blood"
                className="w-full sm:w-auto justify-center border-2 border-primary text-primary hover:bg-primary-25 font-bold text-body-sm sm:text-body-md px-5 sm:px-6 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer text-center"
              >
                <span>Join as a Blood Donor</span>
                <svg
                  className="w-4 h-4 shrink-0"
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

          {/* Right Side: 4 Process Cards (2x2 Grid) */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.id}
                className="bg-surface rounded-3xl p-5 sm:p-6 lg:p-7 border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3 sm:space-y-3.5">
                  {/* Step Number Badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-xl text-body-md sm:text-body-lg font-extrabold ${step.badgeBg} ${step.badgeText}`}
                  >
                    {step.number}
                  </span>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-h5 font-bold text-secondary group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-body-sm sm:text-body-md font-medium text-secondary-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Arrow Icon */}
                <div className="pt-3 text-right">
                  <span
                    className={`inline-block group-hover:translate-x-1 transition-transform ${step.arrowColor}`}
                  >
                    <svg
                      className="w-5 h-5"
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
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
