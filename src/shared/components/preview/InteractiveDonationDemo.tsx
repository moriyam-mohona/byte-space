"use client";

import React, { useState } from "react";

const AMOUNTS = [10, 25, 50, 100];

export function InteractiveDonationDemo() {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const selected = AMOUNTS[selectedIndex] ?? AMOUNTS[0];

  return (
    <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-xs space-y-5">
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
        <h4 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">
          Interactive Donation Calculator
        </h4>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300 font-medium">
          Live Updates
        </span>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
          Select your donation amount:
        </p>

        <div className="flex flex-wrap gap-2.5">
          {AMOUNTS.map((amount, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={amount}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-secondary text-white dark:bg-white dark:text-secondary shadow-xs ring-2 ring-primary"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                ${amount}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
          Selected pledge: ${selected}
        </p>
        <button
          type="button"
          className="text-xs font-semibold px-3 py-1.5 rounded-md bg-primary text-white hover:bg-primary-600 transition cursor-pointer"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}
