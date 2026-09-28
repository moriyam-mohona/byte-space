import React from "react";

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** The semantic heading tag to render (defaults to "h2") */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /** Text/node before the highlighted segment */
  titlePrefix?: React.ReactNode;

  /** Highlighted text/node (styled in primary color by default) */
  highlight?: React.ReactNode;

  /** Text/node after the highlighted segment */
  titleSuffix?: React.ReactNode;

  /** Optional subtitle or description text below the heading */
  description?: React.ReactNode;

  /** Custom styling for the optional description */
  descriptionClassName?: string;

  /** Optional container class name when wrapping heading and description */
  containerClassName?: string;

  /** Direct children (alternative to titlePrefix/highlight props) */
  children?: React.ReactNode;

  /** Typography size preset (defaults to "section": text-h3 sm:text-h2) */
  size?: "section" | "h1" | "h2" | "h3" | "h4" | "h5";

  /** Color variant of the heading (defaults to "default": text-secondary) */
  variant?: "default" | "white" | "primary";

  /** Custom class for the highlight span (defaults to "text-primary") */
  highlightClassName?: string;

  /** Additional classes for the container heading */
  className?: string;
}

const sizeStyles: Record<NonNullable<SectionHeadingProps["size"]>, string> = {
  section: "text-[28px] leading-[1.2] sm:text-h2 font-bold tracking-tight",
  h1: "text-h2 sm:text-h1 font-bold tracking-tight",
  h2: "text-h3 sm:text-h2 font-bold tracking-tight",
  h3: "text-h4 sm:text-h3 font-bold tracking-tight",
  h4: "text-h5 sm:text-h4 font-bold tracking-tight",
  h5: "text-h5 font-bold tracking-tight",
};

const variantStyles: Record<
  NonNullable<SectionHeadingProps["variant"]>,
  { text: string; highlight: string; description: string }
> = {
  default: {
    text: "text-secondary",
    highlight: "text-primary",
    description: "text-body-md sm:text-body-lg text-secondary-text leading-relaxed font-normal",
  },
  white: {
    text: "text-white",
    highlight: "text-primary-soft",
    description: "text-body-md sm:text-body-xl text-white/90 leading-relaxed font-normal",
  },
  primary: {
    text: "text-primary",
    highlight: "text-secondary",
    description: "text-body-sm sm:text-body-md text-primary-soft leading-relaxed font-normal",
  },
};

/**
 * Subcomponent for highlighting text inline when using direct children.
 * Example:
 * <SectionHeading>
 *   Recent <SectionHeading.Highlight>Activities</SectionHeading.Highlight>
 * </SectionHeading>
 */
export function SectionHeadingHighlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`text-primary ${className}`}>{children}</span>;
}

export function SectionHeading({
  as: Component = "h2",
  titlePrefix,
  highlight,
  titleSuffix,
  description,
  descriptionClassName = "",
  containerClassName,
  children,
  size = "section",
  variant = "default",
  highlightClassName,
  className = "",
  ...props
}: SectionHeadingProps) {
  const currentSize = sizeStyles[size];
  const currentVariant = variantStyles[variant];
  const activeHighlightClass =
    highlightClassName || currentVariant.highlight;

  const content = (
    <>
      <Component
        className={`${currentSize} ${currentVariant.text} ${className}`}
        {...props}
      >
        {children ? (
          children
        ) : (
          <>
            {titlePrefix && <span>{titlePrefix}</span>}
            {highlight && (
              <span className={activeHighlightClass}>
                {titlePrefix ? ` ${highlight}` : highlight}
              </span>
            )}
            {titleSuffix && <span> {titleSuffix}</span>}
          </>
        )}
      </Component>

      {description && (
        <p
          className={`${currentVariant.description} ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </>
  );

  if (containerClassName) {
    return <div className={containerClassName}>{content}</div>;
  }

  return content;
}

// Attach subcomponent for compound usage
SectionHeading.Highlight = SectionHeadingHighlight;

// Alias export for convenience
export const Heading = SectionHeading;

export default SectionHeading;

/**
 * Examples:
 * 
 * import { SectionHeading } from "@/shared/components/ui";
 * 
 * // 1. Heading with prefix, highlight, and optional description
 * <SectionHeading
 *   titlePrefix={t("recentActivities.titlePrefix")}
 *   highlight={t("recentActivities.titleHighlight")}
 *   description={t("recentActivities.subtitle")}
 * />
 * 
 * // 2. Plain heading with description
 * <SectionHeading
 *   as="h3"
 *   size="h3"
 *   description="Partner organizations supporting our mission"
 * >
 *   {t("partners.title")}
 * </SectionHeading>
 * 
 * // 3. Compound with Highlight subcomponent and description
 * <SectionHeading description="Discover how we make a difference">
 *   আমাদের সাম্প্রতিক{" "}
 *   <SectionHeading.Highlight>কার্যক্রম</SectionHeading.Highlight>
 * </SectionHeading>
 * 
 * // 4. White variant on colored/dark banners
 * <SectionHeading
 *   variant="white"
 *   description={t("donationBanner.subtitle")}
 * >
 *   {t("donationBanner.title")}
 * </SectionHeading>
 */