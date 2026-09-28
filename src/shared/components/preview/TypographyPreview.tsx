import React from "react";

export function TypographyPreview() {
  const headings = [
    { name: "Hero Text", className: "text-hero", weight: "Semi Bold (600)", size: "66px", leading: "72px", tracking: "-1%" },
    { name: "Heading 1", className: "text-heading-1", weight: "Semi Bold (600)", size: "48px", leading: "52px", tracking: "-1%" },
    { name: "Heading 2", className: "text-heading-2", weight: "Semi Bold (600)", size: "40px", leading: "44px", tracking: "-1%" },
    { name: "Heading 3", className: "text-heading-3", weight: "Semi Bold (600)", size: "32px", leading: "36px", tracking: "-1%" },
    { name: "Heading 4", className: "text-heading-4", weight: "Semi Bold (600)", size: "24px", leading: "28px", tracking: "-1%" },
    { name: "Heading 5", className: "text-heading-5", weight: "Semi Bold (600)", size: "20px", leading: "24px", tracking: "-1%" },
  ];

  const bodySizes = [
    { name: "2 X Large", className: "text-body-2xl", size: "20px", leading: "28px", spacing: "0px" },
    { name: "Extra Large", className: "text-body-xl", size: "18px", leading: "26px", spacing: "0px" },
    { name: "Large", className: "text-body-lg", size: "16px", leading: "24px", spacing: "0px" },
    { name: "Medium", className: "text-body-md", size: "14px", leading: "20px", spacing: "0px" },
    { name: "Small", className: "text-body-sm", size: "12px", leading: "16px", spacing: "0px" },
  ];

  const weights = [
    { label: "Regular", weightClass: "font-normal", code: "400" },
    { label: "Medium", weightClass: "font-medium", code: "500" },
    { label: "Semi Bold", weightClass: "font-semibold", code: "600" },
    { label: "Bold", weightClass: "font-bold", code: "700" },
  ];

  return (
    <section className="space-y-8 pt-6 border-t border-gray-200 dark:border-gray-800">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Typography System
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Registered in <code className="font-mono text-primary">globals.css</code> with full Tailwind utility generation.
        </p>
      </div>

      {/* Headings Table */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          Heading Scale
        </h4>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 shadow-xs">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-800/40 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <tr>
                <th className="p-4 sm:p-5">Heading</th>
                <th className="p-4 sm:p-5">Weight</th>
                <th className="p-4 sm:p-5">Size</th>
                <th className="p-4 sm:p-5">Line Height</th>
                <th className="p-4 sm:p-5">Letter Spacing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60">
              {headings.map((item) => (
                <tr key={item.name} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
                  <td className="p-4 sm:p-5">
                    <span className={`${item.className} text-gray-950 dark:text-white block leading-tight`}>
                      {item.name}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 mt-1 block">
                      .{item.className}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap">
                    {item.weight}
                  </td>
                  <td className="p-4 sm:p-5 text-gray-600 dark:text-gray-300 font-mono text-xs whitespace-nowrap">
                    {item.size}
                  </td>
                  <td className="p-4 sm:p-5 text-gray-600 dark:text-gray-300 font-mono text-xs whitespace-nowrap">
                    {item.leading}
                  </td>
                  <td className="p-4 sm:p-5 text-gray-600 dark:text-gray-300 font-mono text-xs whitespace-nowrap">
                    {item.tracking}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Body Scale */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          Body Scale
        </h4>
        <div className="space-y-4">
          {bodySizes.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 shadow-xs flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
            >
              <div className="min-w-48">
                <h5 className="text-base font-bold text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <div className="text-[11px] font-mono text-gray-400 mt-1 flex flex-wrap gap-x-3">
                  <span>Size: {item.size}</span>
                  <span>Line: {item.leading}</span>
                  <span>Spacing: {item.spacing}</span>
                </div>
                <span className="text-[11px] font-mono text-primary mt-0.5 block">
                  .{item.className}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
                {weights.map((w) => (
                  <div key={w.label} className="p-3 rounded-xl bg-gray-50/70 dark:bg-gray-800/30 text-center">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide block">
                      {w.label} ({w.code})
                    </span>
                    <p className={`mt-2 ${item.className} ${w.weightClass} text-gray-900 dark:text-white`}>
                      Aa বাংলা
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
