import React from "react";

interface SwatchProps {
  name: string;
  hex: string;
  className: string;
  isStandard?: boolean;
  border?: boolean;
  textColor?: string;
}

function Swatch({ name, hex, className, isStandard, border, textColor = "text-gray-600 dark:text-gray-400" }: SwatchProps) {
  return (
    <div className="flex flex-col items-center p-2 rounded-xl bg-gray-50/70 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 text-center shadow-2xs">
      <div
        className={`w-full h-12 rounded-lg relative transition-transform hover:scale-105 ${className} ${
          border ? "border border-gray-300 dark:border-gray-700" : ""
        }`}
      >
        {isStandard && (
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-white ring-1 ring-black/20"
            title="Standard Brand Token"
          />
        )}
      </div>
      <span className="mt-2 text-xs font-medium text-gray-900 dark:text-white leading-none">
        {name}
      </span>
      <span className={`text-[10px] font-mono mt-1 ${textColor}`}>
        {hex}
      </span>
    </div>
  );
}

export function ColorPalettePreview() {
  const baseColors = [
    { name: "White", hex: "#FFFFFF", className: "bg-base-white", border: true },
    { name: "Black", hex: "#000000", className: "bg-base-black" },
  ];

  const primaryScale = [
    { name: "25", hex: "#FFEAF3", className: "bg-primary-25", border: true },
    { name: "50", hex: "#FFCDE3", className: "bg-primary-50" },
    { name: "100", hex: "#FF8FC1", className: "bg-primary-100" },
    { name: "200", hex: "#FF58A2", className: "bg-primary-200" },
    { name: "300", hex: "#FF318B", className: "bg-primary-300" },
    { name: "400", hex: "#FF0B76", className: "bg-primary-400" },
    { name: "500", hex: "#f2006a", className: "bg-primary-500" },
    { name: "600", hex: "#EA0067", className: "bg-primary-600" },
    { name: "700", hex: "#DA0060", className: "bg-primary-700" },
    { name: "800", hex: "#CB0059", className: "bg-primary-800" },
    { name: "900", hex: "#C20055", className: "bg-primary-900" },
  ];

  const primaryAliases = [
    { name: "Soft", hex: "#fedeec", className: "bg-primary-soft", border: true },
    { name: "Lighter", hex: "#FF0B76", className: "bg-primary-lighter" },
    { name: "Primary", hex: "#F2006A", className: "bg-primary", isStandard: true },
    { name: "Darker", hex: "#C20055", className: "bg-primary-darker" },
  ];

  const secondaryColors = [
    { name: "Soft", hex: "#EEF3FA", className: "bg-secondary-soft", border: true },
    { name: "Lighter", hex: "#0B1A40", className: "bg-secondary-lighter" },
    { name: "Secondary", hex: "#0F172A", className: "bg-secondary", isStandard: true },
    { name: "Darker", hex: "#000000", className: "bg-secondary-darker" },
  ];

  const feedbackColors = [
    { name: "Success", hex: "#22C55E", className: "bg-success" },
    { name: "Warning", hex: "#E17100", className: "bg-warning" },
    { name: "Error", hex: "#EF4444", className: "bg-error" },
    { name: "Info", hex: "#06B6D4", className: "bg-info" },
  ];

  return (
    <section className="space-y-6 pt-6 border-t border-gray-200 dark:border-gray-800">
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Product Color System
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Active design tokens registered in <code className="font-mono text-primary">globals.css</code> and Tailwind v4 inline theme.
        </p>
      </div>

      {/* Base */}
      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Base Colors
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {baseColors.map((color) => (
            <Swatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      {/* Primary Aliases */}
      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Primary / Brand (Shorthand)
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {primaryAliases.map((color) => (
            <Swatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      {/* Secondary */}
      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Secondary / Brand (Navy / Dark Slate)
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {secondaryColors.map((color) => (
            <Swatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      {/* Primary 25-900 Scale */}
      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Primary Scale (25 — 900)
        </h4>
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-11 gap-2.5">
          {primaryScale.map((color) => (
            <Swatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      {/* Feedback */}
      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Feedback Colors
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {feedbackColors.map((color) => (
            <Swatch key={color.name} {...color} />
          ))}
        </div>
      </div>
    </section>
  );
}
