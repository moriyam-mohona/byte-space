import React from "react";

interface BangladeshMapBackgroundProps {
  children: React.ReactNode;
  /** Opacity of the repeating map watermark (defaults to 0.7) */
  opacity?: number;
  /** Additional classes for the outer wrapper */
  className?: string;
}

/**
 * Continuous Full-Device Bangladesh Map Watermark Background Wrapper.
 *
 * Provides a responsive, full-bleed repeating Bangladesh map pattern from the top
 * of the viewport to the bottom across the entire vertical scroll height, while
 * keeping child content on top with proper stacking contexts.
 */
export function BangladeshMapBackground({
  children,
  opacity = 1,
  className = "",
}: BangladeshMapBackgroundProps) {
  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-surface ${className}`}
    >
      {/* Full-width continuous repeating Bangladesh Map Watermark */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/images/bangladeshmap.svg')] bg-repeat-y bg-top"
        style={{
          backgroundSize: "100% auto",
          opacity,
        }}
        aria-hidden="true"
      />

      {/* Page Content Layer */}
      <div className="relative z-10 w-full flex-1 flex flex-col">{children}</div>
    </div>
  );
}

export default BangladeshMapBackground;
