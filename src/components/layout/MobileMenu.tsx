"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
  currentPath: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  currentPath,
}: MobileMenuProps) {
  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out",
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible",
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      aria-hidden={!isOpen}
    >
      {/* Backdrop with smooth fade */}
      <div
        className={cn(
          "fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel with smooth slide-in and slide-out */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-full max-w-xs bg-primary-800 text-white shadow-2xl flex flex-col p-6 z-10 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header: Logo & Close Button */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <Link href="/" onClick={onClose} className="inline-block">
            <Image
              src="/icons/logo-white.svg"
              alt="ByteSpace"
              width={140}
              height={30}
              className="h-7 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white hover:text-secondary transition-colors focus:outline-hidden"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-8 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive =
              currentPath === link.href ||
              (link.href !== "/" && currentPath.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "text-heading-xs py-2 transition-colors",
                  isActive
                    ? "text-secondary font-semibold"
                    : "text-white/90 hover:text-white",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Auth Links & Action */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <Link
            href="/login"
            onClick={onClose}
            className="w-full py-3 text-center text-label-m text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            onClick={onClose}
            className="w-full py-3 text-center text-label-m font-semibold text-neutral-950 bg-secondary rounded-full hover:bg-secondary-400 transition-colors shadow-xs"
          >
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
}
