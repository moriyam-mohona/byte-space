import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "soft";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      primary: "bg-primary text-white hover:bg-primary-600 shadow-xs",
      secondary: "bg-secondary text-neutral-950 hover:bg-secondary-400 font-semibold",
      outline: "border border-neutral-200 bg-transparent hover:bg-neutral-50 text-neutral-900",
      ghost: "bg-transparent hover:bg-neutral-100 text-neutral-900",
      soft: "bg-primary-50 text-primary hover:bg-primary-100",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-label-s rounded-lg",
      md: "h-11 px-5 text-label-m rounded-xl",
      lg: "h-13 px-7 text-label-l rounded-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
