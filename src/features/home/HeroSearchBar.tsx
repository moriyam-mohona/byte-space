"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function HeroSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mt-6 sm:mt-15 w-full max-w-145.25 flex items-center justify-center gap-2 md:gap-4"
    >
      {/* White Input Pill (W: 461px, H: 52px, Px: 24px, Gap: 8px) */}
      <div className="w-full sm:w-145.25 h-11 md:h-13 bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-md border border-white/20 transition-all focus-within:ring-2 focus-within:ring-white/40">
        {/* Search Lens Icon */}
        <Image
          src="/icons/search.svg"
          alt=""
          width={20}
          height={20}
          className="w-5 h-5 shrink-0"
          aria-hidden="true"
        />

        {/* Input field */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Course, topic, creator"
          aria-label="Search for courses, topics, or creators"
          className="w-full bg-transparent text-neutral-900 text-body-m md:text-body-l font-body focus:outline-hidden"
        />
      </div>

      {/* Lime Search Button Pill (W: 104px, H: 46px/52px, Px: 24px) */}
      <button
        type="submit"
        className="w-fit h-11 md:h-11.5 px-6 py-3 rounded-full bg-secondary text-neutral-950 text-label-m md:text-label-l font-body flex items-center justify-center hover:bg-secondary-400 active:scale-95 transition-all shadow-xs cursor-pointer shrink-0"
      >
        Search
      </button>
    </form>
  );
}
