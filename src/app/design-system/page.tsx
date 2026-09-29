import Link from "next/link";

export const metadata = {
  title: "ByteSpace — Design System & Style Guide",
  description:
    "Figma style guide reference for typography, colors, and layout grid",
};

export default function DesignSystemPage() {
  const neutralColors = [
    { name: "50", hex: "#f5f5f6" },
    { name: "100", hex: "#e5e6e8" },
    { name: "200", hex: "#ced0d3" },
    { name: "300", hex: "#abaeb5" },
    { name: "400", hex: "#82868e" },
    { name: "500", hex: "#666973" },
    { name: "600", hex: "#585a62" },
    { name: "700", hex: "#4b4c53" },
    { name: "800", hex: "#424348" },
    { name: "900", hex: "#3a3b3f" },
    { name: "950", hex: "#242528" },
  ];

  const primaryColors = [
    { name: "50", hex: "#e7f6ff" },
    { name: "100", hex: "#d3eeff" },
    { name: "200", hex: "#b0ddff" },
    { name: "300", hex: "#81c5ff" },
    { name: "400", hex: "#4f9dff" },
    { name: "500", hex: "#2872ff" },
    { name: "600", hex: "#0445ff" },
    { name: "700", hex: "#0043ff" },
    { name: "800", hex: "#003be2" },
    { name: "900", hex: "#0b36a4" },
    { name: "950", hex: "#071e5f" },
  ];

  const secondaryColors = [
    { name: "50", hex: "#fdffe4" },
    { name: "100", hex: "#faffc5" },
    { name: "200", hex: "#f2ff92" },
    { name: "300", hex: "#e4ff54" },
    { name: "400", hex: "#d4fb20" },
    { name: "500", hex: "#cbfc01" },
    { name: "600", hex: "#8cb400" },
    { name: "700", hex: "#6a8902" },
    { name: "800", hex: "#546b09" },
    { name: "900", hex: "#465a0d" },
    { name: "950", hex: "#243300" },
  ];

  const typographyItems = [
    {
      level: "Heading L",
      family: "Poppins SemiBold",
      size: "72px",
      lineHeight: "120%",
      className: "text-heading-l",
    },
    {
      level: "Heading M",
      family: "Poppins SemiBold",
      size: "44px",
      lineHeight: "120%",
      className: "text-heading-m",
    },
    {
      level: "Heading S",
      family: "Poppins SemiBold",
      size: "36px",
      lineHeight: "120%",
      className: "text-heading-s",
    },
    {
      level: "Heading XS",
      family: "Poppins SemiBold",
      size: "20px",
      lineHeight: "120%",
      className: "text-heading-xs",
    },
    {
      level: "Body L",
      family: "Satoshi Reguler",
      size: "18px",
      lineHeight: "160%",
      className: "text-body-l",
    },
    {
      level: "Body M",
      family: "Satoshi Reguler",
      size: "16px",
      lineHeight: "160%",
      className: "text-body-m",
    },
    {
      level: "Body S",
      family: "Satoshi Reguler",
      size: "14px",
      lineHeight: "160%",
      className: "text-body-s",
    },
    {
      level: "Body XS",
      family: "Satoshi Reguler",
      size: "12px",
      lineHeight: "160%",
      className: "text-body-xs",
    },
    {
      level: "Label L",
      family: "Satoshi Medium",
      size: "18px",
      lineHeight: "120%",
      className: "text-label-l",
    },
    {
      level: "Label M",
      family: "Satoshi Medium",
      size: "16px",
      lineHeight: "120%",
      className: "text-label-m",
    },
    {
      level: "Label S",
      family: "Satoshi Medium",
      size: "14px",
      lineHeight: "120%",
      className: "text-label-s",
    },
    {
      level: "Label XS",
      family: "Satoshi Medium",
      size: "12px",
      lineHeight: "120%",
      className: "text-label-xs",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      {/* ─── 01 Colors Frame ─── */}
      <section className="border-b border-neutral-200">
        <div className="bg-black text-white px-8 sm:px-16 py-4">
          <div className="flex items-center gap-2">
            <span className="text-[#38ef7d] font-mono text-sm font-semibold">
              01
            </span>
            <span className="font-heading font-semibold text-lg">Colors</span>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-16 space-y-12">
          {/* Neutral */}
          <div className="space-y-4">
            <div>
              <h2 className="font-heading font-bold text-2xl text-neutral-950">
                Neutral
              </h2>
              <p className="text-xs text-neutral-500">Black</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
              {neutralColors.map((c) => (
                <div key={c.name} className="space-y-2">
                  <div
                    className="h-16 rounded-xl border border-neutral-200 shadow-xs"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="text-xs">
                    <div className="font-medium text-neutral-900">{c.name}</div>
                    <div className="text-neutral-500 font-mono text-[11px]">
                      {c.hex}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Primary */}
          <div className="space-y-4">
            <div>
              <h2 className="font-heading font-bold text-2xl text-neutral-950">
                Primary
              </h2>
              <p className="text-xs text-neutral-500">Electric Violet</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
              {primaryColors.map((c) => (
                <div key={c.name} className="space-y-2">
                  <div
                    className="h-16 rounded-xl border border-neutral-200/50 shadow-xs"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="text-xs">
                    <div className="font-medium text-neutral-900">{c.name}</div>
                    <div className="text-neutral-500 font-mono text-[11px]">
                      {c.hex}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary */}
          <div className="space-y-4">
            <div>
              <h2 className="font-heading font-bold text-2xl text-neutral-950">
                Secondary
              </h2>
              <p className="text-xs text-neutral-500">Crimson</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
              {secondaryColors.map((c) => (
                <div key={c.name} className="space-y-2">
                  <div
                    className="h-16 rounded-xl border border-neutral-200/50 shadow-xs"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="text-xs">
                    <div className="font-medium text-neutral-900">{c.name}</div>
                    <div className="text-neutral-500 font-mono text-[11px]">
                      {c.hex}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02 Layout Grid Frame ─── */}
      <section>
        <div className="bg-black text-white px-8 sm:px-16 py-4">
          <div className="flex items-center gap-2">
            <span className="text-[#38ef7d] font-mono text-sm font-semibold">
              02
            </span>
            <span className="font-heading font-semibold text-lg">
              Layout Grid
            </span>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[120px] py-16 space-y-6">
          <div>
            <h2 className="font-heading font-bold text-2xl text-neutral-950">
              Style
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Count: <strong className="text-neutral-900">12 Columns</strong>{" "}
              &nbsp;•&nbsp; Margin:{" "}
              <strong className="text-neutral-900">120px</strong> &nbsp;•&nbsp;
              Gutter: <strong className="text-neutral-900">40px</strong>
            </p>
          </div>

          <div className="p-6 border border-neutral-200 rounded-2xl bg-white shadow-xs">
            <div className="grid-12">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 rounded-md bg-[#faffc5] border border-[#e4ff54] flex flex-col items-center justify-center text-xs font-mono font-medium text-neutral-800"
                >
                  <span>Col {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 03 Typography Frame ─── */}
      <section className="border-b border-neutral-200">
        {/* Banner */}
        <div className="bg-black text-white px-8 sm:px-16 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#38ef7d] font-mono text-sm font-semibold">
              03
            </span>
            <span className="font-heading font-semibold text-lg">
              Typography
            </span>
          </div>
          <Link
            href="/"
            className="text-xs text-neutral-400 hover:text-white transition-colors"
          >
            ← Back to App
          </Link>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-16 space-y-16">
          {/* Header & Font Download Info */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-neutral-200">
            <div className="space-y-1">
              <h1 className="font-heading font-bold text-5xl tracking-tight text-neutral-950">
                Poppins
              </h1>
              <h2 className="font-heading font-bold text-5xl tracking-tight text-neutral-950">
                Satoshi
              </h2>
            </div>

            <div className="max-w-xs space-y-1.5 text-right md:text-left">
              <div className="font-semibold text-sm text-neutral-900">
                Download
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Make sure you have the right version of Satoshi installed.
              </p>
              <p className="text-xs text-neutral-500">
                You can download Satoshi from:{" "}
                <a
                  href="https://www.fontshare.com/fonts/satoshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.fontshare.com/fonts/satoshi
                </a>
              </p>
            </div>
          </div>

          {/* Typography Scale List */}
          <div className="space-y-14">
            {typographyItems.map((item) => (
              <div key={item.level} className="space-y-4">
                <div>
                  <h3 className="font-heading font-semibold text-xl text-neutral-950">
                    {item.level}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mt-1">
                    <span>
                      Family:{" "}
                      <strong className="font-medium text-neutral-700">
                        {item.family}
                      </strong>
                    </span>
                    <span>
                      Size:{" "}
                      <strong className="font-medium text-neutral-700">
                        {item.size}
                      </strong>
                    </span>
                    <span>
                      Line height:{" "}
                      <strong className="font-medium text-neutral-700">
                        {item.lineHeight}
                      </strong>
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className={item.className}>
                    We ignite opportunity by setting the world in motion.
                  </div>
                  <div className={item.className}>0123456789</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
