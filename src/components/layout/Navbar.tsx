"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full text-white">
      <div className="container flex items-center justify-between h-20">
        {/* Left: ByteSpace Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-95"
          aria-label="ByteSpace Home"
        >
          <Image
            src="/icons/logo-white.svg"
            alt="ByteSpace"
            width={171}
            height={37}
            priority
            className="h-8 sm:h-9 w-auto"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-label-m inline-block transition-all duration-200 ease-out hover:-translate-y-0.5",
                  isActive
                    ? "text-white font-semibold"
                    : "text-white/90 hover:text-white"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Auth Actions & Shopping Bag */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/login"
            className="text-label-m text-white/90 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-label-m text-white/90 hover:text-white transition-colors"
          >
            Join Us
          </Link>
          <Link
            href="/cart"
            className="p-1.5 text-white hover:opacity-80 transition-opacity rounded-full focus:outline-hidden focus:ring-2 focus:ring-white/30"
            aria-label="Shopping Cart"
          >
            <Image
              src="/icons/cart.svg"
              alt=""
              width={22}
              height={22}
              className="w-5 h-5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Mobile Controls (Cart & Hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/cart"
            className="p-2 text-white hover:opacity-80 transition-opacity"
            aria-label="Shopping Cart"
          >
            <Image
              src="/icons/cart.svg"
              alt=""
              width={22}
              height={22}
              className="w-5 h-5"
              aria-hidden="true"
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-white hover:text-secondary transition-colors focus:outline-hidden"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={pathname}
      />
    </header>
  );
}
