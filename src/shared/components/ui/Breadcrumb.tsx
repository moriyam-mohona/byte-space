import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Array of breadcrumb items to render in sequence */
  items?: BreadcrumbItem[];
  /** Optional custom separator between items (defaults to ">") */
  separator?: React.ReactNode;
  /** Whether to automatically show a home icon for the first link (defaults to true) */
  showHomeIcon?: boolean;
  /** Direct children if using custom/compound markup */
  children?: React.ReactNode;
  /** Additional classes for the container `<nav>` */
  className?: string;
}

function DefaultHomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 1 20 18"
      fill="currentColor"
      className="w-4 h-4 shrink-0 text-primary"
      aria-hidden="true"
    >
      <path
        d="M8.00521 17.3326V12.3291H11.9907V17.3326C11.9907 17.883 12.4391 18.3333 12.9871 18.3333H15.9762C16.5242 18.3333 16.9725 17.883 16.9725 17.3326V10.3277H18.6664C19.1247 10.3277 19.3439 9.75732 18.9952 9.45711L10.6655 1.92184C10.2869 1.5816 9.709 1.5816 9.33038 1.92184L1.00074 9.45711C0.661973 9.75732 0.871211 10.3277 1.32954 10.3277H3.02337V17.3326C3.02337 17.883 3.47173 18.3333 4.01974 18.3333H7.00884C7.55685 18.3333 8.00521 17.883 8.00521 17.3326Z"
      />
    </svg>
  );
}

function DefaultSeparator() {
  return (
    <svg
      className="w-3.5 h-3.5 text-slate-400 shrink-0 select-none"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function Breadcrumb({
  items,
  separator,
  showHomeIcon = true,
  children,
  className = "",
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-body-sm sm:text-body-md font-medium text-secondary-text pt-2 ${className}`}
      {...props}
    >
      {children ? (
        children
      ) : (
        items?.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <span
                  className="shrink-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  {separator ? (
                    typeof separator === "string" ? (
                      <span className="text-slate-400 text-xs select-none">{separator}</span>
                    ) : (
                      separator
                    )
                  ) : (
                    <DefaultSeparator />
                  )}
                </span>
              )}

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors text-secondary/80"
                >
                  {isFirst && showHomeIcon && (
                    <span className="shrink-0 flex items-center justify-center -translate-y-[1.5px]">
                      {item.icon || <DefaultHomeIcon />}
                    </span>
                  )}
                  {!isFirst && item.icon && (
                    <span className="shrink-0 flex items-center justify-center -translate-y-[1.5px]">
                      {item.icon}
                    </span>
                  )}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span
                  className="text-primary font-semibold"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })
      )}
    </nav>
  );
}

export default Breadcrumb;
