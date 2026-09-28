"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/shared/components/ui";

const AMOUNTS = [
  { key: "a100", label: "৳100" },
  { key: "a500", label: "৳500" },
  { key: "a1000", label: "৳1,000" },
  { key: "a5000", label: "৳5,000" },
];

export function DonationBannerSection() {
  const [selectedAmount, setSelectedAmount] = useState<string>("a1000");

  return (
    <section className="relative overflow-hidden py-14 lg:py-20 bg-primary-darker">
      {/* Background image: donationbanner.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/donationbanner.png"
          alt="Donation Call to Action Background"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        {/* Subtle vignette gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/15 pointer-events-none" />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
        <SectionHeading
          className="text-white leading-snug tracking-tight"
          titlePrefix="Your donation can change a life."
          description="Support our mission with a one-time or monthly donation according to your means."
          descriptionClassName="text-white/90"
        />

        {/* Donation Amount Chips (Interactive) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-1">
          {AMOUNTS.map((amount) => {
            const isSelected = selectedAmount === amount.key;
            return (
              <button
                key={amount.key}
                type="button"
                onClick={() => setSelectedAmount(amount.key)}
                className={`px-5 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-body-md sm:text-body-lg transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-white text-primary shadow-md scale-105"
                    : "bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm"
                }`}
              >
                {amount.label}
              </button>
            );
          })}
        </div>

        {/* Call to Action Button */}
        <div className="pt-2 sm:pt-3">
          <Link
            href="/donation"
            className="inline-flex items-center justify-center bg-white hover:bg-secondary-soft text-primary font-bold text-body-md sm:text-body-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}
