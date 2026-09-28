"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const emptySubscribe = () => () => {};

export function Navbar() {
  const pathname = usePathname();

  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lock body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  // Track scroll position for elevated fixed navbar
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mainNavItems = [
    { key: "home", label: "Home", href: "/" },
    { key: "about", label: "About Us", href: "/about" },
    { key: "programs", label: "Programs", href: "/programs" },
    { key: "campaigns", label: "Campaigns", href: "/campaigns" },
    { key: "missingChild", label: "Missing Children", href: "/missing-child" },
    { key: "bloodDonors", label: "Blood Donors", href: "/blood-donors" },
  ];

  const dropdownNavItems = [
    { key: "contact", label: "Contact Us", href: "/contact" },
    { key: "transparencyDashboard", label: "Transparency Dashboard", href: "/transparency" },
    { key: "partnerOrganizations", label: "Partner Organizations", href: "/partners" },
    { key: "legalAid", label: "Legal Aid", href: "/legal-aid" },
    { key: "helpCenter", label: "Help Center", href: "/help-center" },
    { key: "donation", label: "Donation", href: "/donation" },
    { key: "massSignature", label: "Petitions", href: "/petitions" },
  ];

  const isHomeActive = pathname === "/" || pathname === "";

  return (
    <nav
      className={`w-full border-b border-gray-100 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-surface-muted shadow-xs"
      }`}
    >
      <div className="container min-h-15 flex items-center justify-between py-2 sm:py-3 gap-4">
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-body-lg font-medium text-secondary">
          {mainNavItems.map((item) => {
            const isActive =
              item.key === "home"
                ? isHomeActive
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative py-1.5 transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary text-gray-800"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.75 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}

          {/* "More" Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              onMouseEnter={() => setIsMoreOpen(true)}
              className={`flex items-center gap-1 py-1.5 transition-colors cursor-pointer ${
                isMoreOpen
                  ? "text-primary font-medium"
                  : "hover:text-primary text-secondary"
              }`}
              aria-expanded={isMoreOpen}
              aria-haspopup="true"
            >
              <span>More</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMoreOpen ? "rotate-180 text-primary" : "text-secondary"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Popover */}
            {isMoreOpen && (
              <div
                onMouseLeave={() => setIsMoreOpen(false)}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-60 bg-surface-muted border-2 border-primary rounded-2xl p-4 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                {/* Arrow pointing UP */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-12 border-b-primary z-20" />

                <div className="flex flex-col space-y-3">
                  {dropdownNavItems.map((subItem) => (
                    <Link
                      key={subItem.key}
                      href={subItem.href}
                      onClick={() => setIsMoreOpen(false)}
                      className="text-body-lg font-medium text-secondary hover:text-primary transition-colors"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Right Side: Emergency Call Button */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <Link
            href="/report"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-4.5 py-2.5 xl:px-5 xl:py-2.5 rounded-full font-bold text-body-md shadow-md shadow-primary-500/25 hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M11.5266 13.807C11.6987 13.886 11.8926 13.9041 12.0764 13.8582C12.2601 13.8123 12.4227 13.7052 12.5375 13.5545L12.8333 13.167C12.9885 12.96 13.1898 12.792 13.4213 12.6763C13.6527 12.5606 13.9079 12.5003 14.1666 12.5003H16.6666C17.1087 12.5003 17.5326 12.6759 17.8451 12.9885C18.1577 13.301 18.3333 13.725 18.3333 14.167V16.667C18.3333 17.109 18.1577 17.5329 17.8451 17.8455C17.5326 18.1581 17.1087 18.3337 16.6666 18.3337C12.6884 18.3337 8.87307 16.7533 6.06002 13.9403C3.24698 11.1272 1.66663 7.31191 1.66663 3.33366C1.66663 2.89163 1.84222 2.46771 2.15478 2.15515C2.46734 1.84259 2.89127 1.66699 3.33329 1.66699L5.83329 1.66699C6.27532 1.66699 6.69924 1.84259 7.0118 2.15515C7.32436 2.46771 7.49996 2.89163 7.49996 3.33366L7.49996 5.83366C7.49996 6.0924 7.43972 6.34759 7.324 6.57901C7.20829 6.81044 7.04029 7.01175 6.83329 7.16699L6.44329 7.45949C6.29031 7.57631 6.18248 7.74248 6.13812 7.92978C6.09376 8.11709 6.11561 8.31397 6.19996 8.48699C7.33886 10.8002 9.21198 12.671 11.5266 13.807Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Emergency Help</span>
          </Link>
        </div>

        {/* Mobile Layout Header elements */}
        <div className="flex lg:hidden items-center justify-between w-full">
          {/* Logo on small devices */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/icons/logo.svg"
              alt="Byte Space Logo"
              width={95}
              height={38}
              className="w-12 sm:w-14 h-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Link
              href="/report"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-600 active:scale-95 text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-body-sm shadow-xs transition-all whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                className="w-4 h-4 shrink-0"
              >
                <path
                  d="M11.5266 13.807C11.6987 13.886 11.8926 13.9041 12.0764 13.8582C12.2601 13.8123 12.4227 13.7052 12.5375 13.5545L12.8333 13.167C12.9885 12.96 13.1898 12.792 13.4213 12.6763C13.6527 12.5606 13.9079 12.5003 14.1666 12.5003H16.6666C17.1087 12.5003 17.5326 12.6759 17.8451 12.9885C18.1577 13.301 18.3333 13.725 18.3333 14.167V16.667C18.3333 17.109 18.1577 17.5329 17.8451 17.8455C17.5326 18.1581 17.1087 18.3337 16.6666 18.3337C12.6884 18.3337 8.87307 16.7533 6.06002 13.9403C3.24698 11.1272 1.66663 7.31191 1.66663 3.33366C1.66663 2.89163 1.84222 2.46771 2.15478 2.15515C2.46734 1.84259 2.89127 1.66699 3.33329 1.66699L5.83329 1.66699C6.27532 1.66699 6.69924 1.84259 7.0118 2.15515C7.32436 2.46771 7.49996 2.89163 7.49996 3.33366L7.49996 5.83366C7.49996 6.0924 7.43972 6.34759 7.324 6.57901C7.20829 6.81044 7.04029 7.01175 6.83329 7.16699L6.44329 7.45949C6.29031 7.57631 6.18248 7.74248 6.13812 7.92978C6.09376 8.11709 6.11561 8.31397 6.19996 8.48699C7.33886 10.8002 9.21198 12.671 11.5266 13.807Z"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Emergency Help</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-200/60 active:scale-95 transition cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation: Rendered via Portal into document.body */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="lg:hidden">
            {/* Backdrop Overlay */}
            <div
              className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 ${
                isMobileMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Left Sliding Animated Sidebar Drawer */}
            <aside
              className={`fixed inset-y-0 left-0 z-50 w-screen max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col h-dvh max-h-dvh transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "translate-x-0 pointer-events-auto"
                  : "-translate-x-full pointer-events-none"
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              {/* Sidebar Top Header */}
              <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-surface-muted shrink-0">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/icons/logo.svg"
                    alt="Logo"
                    width={40}
                    height={38}
                    className="w-10 h-auto shrink-0"
                  />
                  <div>
                    <span className="font-bold text-secondary text-body-lg block leading-tight">
                      Byte Space
                    </span>
                    <span className="text-xs text-gray-500 block leading-tight mt-0.5">
                      Serving Humanity with Rights and Safety
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white hover:bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 flex items-center justify-center transition active:scale-95 cursor-pointer shadow-2xs"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Scrollable Navigation Body */}
              <div className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-5 py-4 space-y-4">
                {/* Main Navigation Links */}
                <div className="flex flex-col space-y-1">
                  {mainNavItems.map((item) => {
                    const isActive =
                      item.key === "home"
                        ? isHomeActive
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.key}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-body-md font-medium transition ${
                          isActive
                            ? "bg-primary text-white font-semibold shadow-xs"
                            : "text-secondary hover:bg-gray-100"
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 ${
                            isActive ? "text-white" : "text-gray-400"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    );
                  })}
                </div>

                {/* "More" Dropdown Accordion */}
                <div className="pt-2 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-body-md font-semibold text-secondary hover:bg-gray-100 transition cursor-pointer"
                  >
                    <span>More</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileMoreOpen ? "rotate-180 text-primary" : "text-gray-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isMobileMoreOpen && (
                    <div className="mt-1 pl-3 space-y-1 border-l-2 border-primary/25 ml-4 animate-in slide-in-from-top-2 duration-150">
                      {dropdownNavItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-3 py-2 rounded-lg text-body-sm font-medium transition ${
                            pathname === subItem.href
                              ? "text-primary font-semibold bg-primary-50"
                              : "text-gray-600 hover:text-primary hover:bg-gray-50"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar Footer: Contact & Social Info */}
              <div className="p-4 sm:p-5 border-t border-gray-100 bg-surface-muted space-y-3 shrink-0">
                <div className="flex flex-col gap-2 text-body-sm text-gray-600">
                  <a
                    href="tel:+2025550167"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 13 13"
                      fill="none"
                      className="text-primary shrink-0"
                    >
                      <path
                        d="M11.6638 12.998C12.4183 13.0392 13 12.4246 13 11.7158V10.0883C12.9999 9.3535 12.4151 8.83443 11.7939 8.74517C11.2557 8.66783 10.7508 8.50037 10.414 8.3681C9.93626 8.18043 9.35293 8.2605 8.95466 8.65883L7.17793 10.4355C5.21546 9.39603 3.60316 7.78397 2.56385 5.82143L4.3412 4.04535C4.73948 3.64706 4.81955 3.06375 4.63192 2.58603C4.49964 2.2492 4.33216 1.74435 4.25487 1.20605C4.16559 0.584893 3.64653 0.000126667 2.91171 0H1.28418C0.575449 0 -0.0392048 0.58176 0.00195517 1.33618C0.346022 7.61997 5.37999 12.654 11.6638 12.998Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>
                      <span className="font-normal">Talk with us:</span>{" "}
                      <span className="font-semibold text-secondary">
                        + 202-555-0167
                      </span>
                    </span>
                  </a>

                  <a
                    href="mailto:info@yourmail.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-primary shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.94666 1.85788C8.64466 1.82516 7.35533 1.82516 6.05332 1.85788L6.01454 1.85885C4.99799 1.88438 4.18001 1.90491 3.52446 2.01908C2.83813 2.1386 2.28031 2.36786 1.80907 2.84089C1.3398 3.31194 1.11175 3.86174 0.994501 4.53694C0.882854 5.17986 0.865847 5.97788 0.844787 6.96641L0.843947 7.00561C0.829787 7.66981 0.829787 8.33021 0.843954 8.99441L0.844787 9.03361C0.865854 10.0221 0.882854 10.8201 0.994501 11.4631C1.11175 12.1383 1.33981 12.6881 1.80907 13.1591C2.28031 13.6321 2.83813 13.8614 3.52446 13.9809C4.18 14.0951 4.99797 14.1157 6.01451 14.1411L6.05332 14.1421C7.35533 14.1749 8.64466 14.1749 9.94666 14.1421L9.98546 14.1411C11.002 14.1157 11.82 14.0951 12.4755 13.9809C13.1619 13.8614 13.7197 13.6321 14.1909 13.1591C14.6602 12.6881 14.8883 12.1383 15.0055 11.4631C15.1171 10.8201 15.1341 10.0221 15.1552 9.03354L15.1561 8.99441C15.1702 8.33021 15.1702 7.66981 15.1561 7.00561L15.1552 6.96648C15.1341 5.9779 15.1171 5.17987 15.0055 4.53696C14.8883 3.86175 14.6602 3.31196 14.1909 2.8409C13.7197 2.36787 13.1619 2.13862 12.4755 2.01909C11.82 1.90492 11.002 1.88438 9.98546 1.85886L9.94666 1.85788ZM4.92121 5.23636C4.68351 5.09582 4.37688 5.17458 4.23634 5.41228C4.0958 5.64999 4.17457 5.95662 4.41227 6.09716L6.37361 7.25674C6.95419 7.60001 7.45513 7.83341 8.00006 7.83341C8.54499 7.83341 9.04599 7.60001 9.62653 7.25674L11.5879 6.09716C11.8256 5.95662 11.9043 5.64999 11.7638 5.41228C11.6233 5.17458 11.3167 5.09582 11.0789 5.23636L9.11759 6.39598C8.55466 6.72881 8.25539 6.83341 8.00006 6.83341C7.74473 6.83341 7.44546 6.72881 6.88253 6.39598L4.92121 5.23636Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>
                      <span className="font-normal">Send us message:</span>{" "}
                      <span className="font-semibold text-secondary">
                        info@yourmail.com
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </nav>
  );
}
