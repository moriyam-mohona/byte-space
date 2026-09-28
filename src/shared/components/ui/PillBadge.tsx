import React from "react";

export interface PillBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Text or elements inside the badge */
  children: React.ReactNode;
  /** Whether to render the leading indicator dot (defaults to true) */
  showDot?: boolean;
  /** Custom color/class for the dot (defaults to "bg-primary") */
  dotColor?: string;
  /** Visual theme variant of the badge (defaults to "primary") */
  variant?: "primary" | "secondary" | "white" | "outline";
  /** Size of the badge (defaults to "sm") */
  size?: "sm" | "md";
  /** Optional icon to show before the text */
  icon?: React.ReactNode;
}

const variantStyles: Record<NonNullable<PillBadgeProps["variant"]>, { container: string; dot: string }> = {
  primary: {
    container: "bg-primary-soft text-primary",
    dot: "bg-primary",
  },
  secondary: {
    container: "bg-secondary-soft text-secondary",
    dot: "bg-secondary",
  },
  white: {
    container: "bg-white/15 text-white border border-white/30 backdrop-blur-sm",
    dot: "bg-white",
  },
  outline: {
    container: "bg-transparent text-primary border border-primary/30",
    dot: "bg-primary",
  },
};

const sizeStyles: Record<NonNullable<PillBadgeProps["size"]>, { container: string; dot: string }> = {
  sm: {
    container: "px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-body-sm font-semibold",
    dot: "w-1.5 h-1.5 sm:w-2 sm:h-2",
  },
  md: {
    container: "px-3.5 py-1 sm:px-4 sm:py-1.5 text-body-sm sm:text-body-md font-semibold",
    dot: "w-1.5 h-1.5 sm:w-2 sm:h-2",
  },
};

export function PillBadge({
  children,
  showDot = true,
  dotColor,
  variant = "primary",
  size = "sm",
  icon,
  className = "",
  ...props
}: PillBadgeProps) {
  const currentVariant = variantStyles[variant];
  const currentSize = sizeStyles[size];
  const dotClass = dotColor || currentVariant.dot;

  return (
    <div
      className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full ${currentSize.container} ${currentVariant.container} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}
      {showDot && !icon && (
        <span
          className={`${currentSize.dot} rounded-full shrink-0 ${dotClass}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </div>
  );
}

export default PillBadge;


/**
 
import { PillBadge } from "@/shared/components/ui";

// 1. Standard Section Pill Badge (default)
<PillBadge>{t("recentActivities.badge")}</PillBadge>

// 2. Without the leading dot
<PillBadge showDot={false}>{t("partners.badge")}</PillBadge>

// 3. White badge on dark or colored banners
<PillBadge variant="white">Emergency Relief</PillBadge>

// 4. Custom dot color or extra classes
<PillBadge dotColor="bg-emerald-500" className="mb-4">
  Active Now
</PillBadge>


 */