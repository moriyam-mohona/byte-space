import Link from "next/link";

export const metadata = {
  title: "ByteSpace — Style Guide & Design System",
  description: "Official typography, color tokens, and 12-column layout grid for ByteSpace",
};

export default function DesignSystemPage() {
  const neutralColors = [
    { name: "50", hex: "#f5f5f6", textDark: true },
    { name: "100", hex: "#e5e6e8", textDark: true },
    { name: "200", hex: "#ced0d3", textDark: true },
    { name: "300", hex: "#abaeb5", textDark: true },
    { name: "400", hex: "#82868e", textDark: false },
    { name: "500", hex: "#666973", textDark: false },
    { name: "600", hex: "#585a62", textDark: false },
    { name: "700", hex: "#4b4c53", textDark: false },
    { name: "800", hex: "#424348", textDark: false },
    { name: "900", hex: "#3a3b3f", textDark: false },
    { name: "950", hex: "#242528", textDark: false },
  ];

  const primaryColors = [
    { name: "50", hex: "#e7f6ff", textDark: true },
    { name: "100", hex: "#d3eeff", textDark: true },
    { name: "200", hex: "#b0ddff", textDark: true },
    { name: "300", hex: "#81c5ff", textDark: true },
    { name: "400", hex: "#4f9dff", textDark: false },
    { name: "500", hex: "#2872ff", textDark: false },
    { name: "600", hex: "#0445ff", textDark: false },
    { name: "700", hex: "#0043ff", textDark: false },
    { name: "800", hex: "#003be2", textDark: false },
    { name: "900", hex: "#0b36a4", textDark: false },
    { name: "950", hex: "#071e5f", textDark: false },
  ];

  const secondaryColors = [
    { name: "50", hex: "#fdffe4", textDark: true },
    { name: "100", hex: "#faffc5", textDark: true },
    { name: "200", hex: "#f2ff92", textDark: true },
    { name: "300", hex: "#e4ff54", textDark: true },
    { name: "400", hex: "#d4fb20", textDark: true },
    { name: "500", hex: "#cbfc01", textDark: true },
    { name: "600", hex: "#8cb400", textDark: false },
    { name: "700", hex: "#6a8902", textDark: false },
    { name: "800", hex: "#546b09", textDark: false },
    { name: "900", hex: "#465a0d", textDark: false },
    { name: "950", hex: "#243300", textDark: false },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      {/* ─── Header ─── */}
      <div className="bg-black text-white px-6 sm:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[#38ef7d] font-mono text-sm">01</span>
          <span className="font-heading font-semibold text-lg">ByteSpace Style Guide</span>
        </div>
        <Link
          href="/"
          className="text-xs text-neutral-400 hover:text-white transition-colors"
        >
          ← Back to App
        </Link>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[120px] py-12 space-y-16">
        {/* ─── 01 Colors Section ─── */}
        <section className="space-y-10">
          <div>
            <div className="text-xs font-mono text-primary font-bold uppercase tracking-widest mb-1">
              01 Colors
            </div>
            <h2 className="text-heading-m">Color System</h2>
          </div>

          {/* Neutral / Black */}
          <div className="space-y-4">
            <div>
              <h3 className="font-heading font-semibold text-2xl">Neutral</h3>
              <p className="text-body-s text-neutral-500">Black Scale (#242528 to #f5f5f6)</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
              {neutralColors.map((c) => (
                <div key={c.name} className="flex flex-col gap-2">
                  <div
                    className="h-20 rounded-xl border border-neutral-200/50 shadow-xs flex items-end p-2.5"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <div className="text-label-s text-neutral-900">{c.name}</div>
                    <div className="text-body-xs font-mono text-neutral-500">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Primary / Electric Violet */}
          <div className="space-y-4">
            <div>
              <h3 className="font-heading font-semibold text-2xl">Primary</h3>
              <p className="text-body-s text-neutral-500">Electric Violet / Blue Scale (#071e5f to #e7f6ff)</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
              {primaryColors.map((c) => (
                <div key={c.name} className="flex flex-col gap-2">
                  <div
                    className="h-20 rounded-xl border border-neutral-200/50 shadow-xs flex items-end p-2.5"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <div className="text-label-s text-neutral-900">{c.name}</div>
                    <div className="text-body-xs font-mono text-neutral-500">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary / Crimson */}
          <div className="space-y-4">
            <div>
              <h3 className="font-heading font-semibold text-2xl">Secondary</h3>
              <p className="text-body-s text-neutral-500">Crimson / Lime Scale (#243300 to #fdffe4)</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
              {secondaryColors.map((c) => (
                <div key={c.name} className="flex flex-col gap-2">
                  <div
                    className="h-20 rounded-xl border border-neutral-200/50 shadow-xs flex items-end p-2.5"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <div className="text-label-s text-neutral-900">{c.name}</div>
                    <div className="text-body-xs font-mono text-neutral-500">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-neutral-200" />

        {/* ─── 02 Typography Section ─── */}
        <section className="space-y-12">
          <div>
            <div className="text-xs font-mono text-primary font-bold uppercase tracking-widest mb-1">
              02 Typography
            </div>
            <h2 className="text-heading-m">Poppins &amp; Satoshi Scale</h2>
          </div>

          {/* Headings */}
          <div className="space-y-8">
            <h3 className="font-heading font-semibold text-2xl text-neutral-800">
              Headings (Poppins SemiBold, Line height: 120%)
            </h3>

            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-6 space-y-2">
                <div className="text-body-xs text-neutral-500 font-mono">
                  Heading L • Poppins SemiBold • 72px / 120%
                </div>
                <h1 className="text-heading-l">
                  We ignite opportunity by setting the world in motion.
                </h1>
                <div className="text-heading-l text-neutral-400 font-mono">0123456789</div>
              </div>

              <div className="border-b border-neutral-200 pb-6 space-y-2">
                <div className="text-body-xs text-neutral-500 font-mono">
                  Heading M • Poppins SemiBold • 44px / 120%
                </div>
                <h2 className="text-heading-m">
                  We ignite opportunity by setting the world in motion.
                </h2>
                <div className="text-heading-m text-neutral-400 font-mono">0123456789</div>
              </div>

              <div className="border-b border-neutral-200 pb-6 space-y-2">
                <div className="text-body-xs text-neutral-500 font-mono">
                  Heading S • Poppins SemiBold • 36px / 120%
                </div>
                <h3 className="text-heading-s">
                  We ignite opportunity by setting the world in motion.
                </h3>
                <div className="text-heading-s text-neutral-400 font-mono">0123456789</div>
              </div>

              <div className="border-b border-neutral-200 pb-6 space-y-2">
                <div className="text-body-xs text-neutral-500 font-mono">
                  Heading XS • Poppins SemiBold • 20px / 120%
                </div>
                <h4 className="text-heading-xs">
                  We ignite opportunity by setting the world in motion.
                </h4>
                <div className="text-heading-xs text-neutral-400 font-mono">0123456789</div>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div className="space-y-8">
            <h3 className="font-heading font-semibold text-2xl text-neutral-800">
              Body (Satoshi Regular, Line height: 160%)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-body-xs text-neutral-500 font-mono">
                  Body L • Satoshi Regular • 18px / 160%
                </div>
                <p className="text-body-l text-neutral-900">
                  We ignite opportunity by setting the world in motion. Learn cutting-edge development, design, and data skills.
                </p>
                <div className="text-body-l text-neutral-400 font-mono">0123456789</div>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-body-xs text-neutral-500 font-mono">
                  Body M • Satoshi Regular • 16px / 160%
                </div>
                <p className="text-body-m text-neutral-900">
                  We ignite opportunity by setting the world in motion. Learn cutting-edge development, design, and data skills.
                </p>
                <div className="text-body-m text-neutral-400 font-mono">0123456789</div>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-body-xs text-neutral-500 font-mono">
                  Body S • Satoshi Regular • 14px / 160%
                </div>
                <p className="text-body-s text-neutral-900">
                  We ignite opportunity by setting the world in motion. Learn cutting-edge development, design, and data skills.
                </p>
                <div className="text-body-s text-neutral-400 font-mono">0123456789</div>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-body-xs text-neutral-500 font-mono">
                  Body XS • Satoshi Regular • 12px / 160%
                </div>
                <p className="text-body-xs text-neutral-900">
                  We ignite opportunity by setting the world in motion. Learn cutting-edge development, design, and data skills.
                </p>
                <div className="text-body-xs text-neutral-400 font-mono">0123456789</div>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="space-y-8">
            <h3 className="font-heading font-semibold text-2xl text-neutral-800">
              Labels (Satoshi Medium, Line height: 120%)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl border border-neutral-200 space-y-1">
                <div className="text-body-xs text-neutral-500 font-mono">Label L • 18px</div>
                <div className="text-label-l text-neutral-950">Button / Action Label</div>
              </div>
              <div className="p-5 rounded-xl border border-neutral-200 space-y-1">
                <div className="text-body-xs text-neutral-500 font-mono">Label M • 16px</div>
                <div className="text-label-m text-neutral-950">Form Field Label</div>
              </div>
              <div className="p-5 rounded-xl border border-neutral-200 space-y-1">
                <div className="text-body-xs text-neutral-500 font-mono">Label S • 14px</div>
                <div className="text-label-s text-neutral-950">Badge / Tag Label</div>
              </div>
              <div className="p-5 rounded-xl border border-neutral-200 space-y-1">
                <div className="text-body-xs text-neutral-500 font-mono">Label XS • 12px</div>
                <div className="text-label-xs text-neutral-950">Micro Caption</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-neutral-200" />

        {/* ─── 03 Layout Grid Section ─── */}
        <section className="space-y-8">
          <div>
            <div className="text-xs font-mono text-primary font-bold uppercase tracking-widest mb-1">
              03 Layout Grid
            </div>
            <h2 className="text-heading-m">12-Column Responsive Grid</h2>
            <p className="text-body-m text-neutral-500 mt-1">
              Count: 12 Columns • Margin: 120px • Gutter: 40px
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="grid-12">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="h-44 rounded-lg bg-secondary-300/40 border border-secondary-400 flex flex-col items-center justify-center text-xs font-mono font-semibold text-neutral-900"
                >
                  <span>Col</span>
                  <span>{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
