import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const footerNavigation = [
    [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/courses" },
      { label: "Business", href: "/courses" },
      { label: "IT", href: "/courses" },
      { label: "Design", href: "/courses" },
    ],
    [
      { label: "Development", href: "/courses" },
      { label: "Marketing", href: "/courses" },
      { label: "Photography", href: "/courses" },
      { label: "Finance", href: "/courses" },
      { label: "Sport", href: "/courses" },
    ],
    [
      { label: "Become a Creator", href: "/creators" },
      { label: "Affiliate Program", href: "/creators" },
      { label: "Contact", href: "/#contact" },
      { label: "Help", href: "/#help" },
      { label: "About", href: "/#about" },
    ],
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/#privacy" },
    { label: "Terms of Service", href: "/#terms" },
    { label: "Cookies Settings", href: "/#cookies" },
  ];

  return (
    <footer className="w-full bg-white border-t border-neutral-200/80">
      <div className="container pt-16 pb-12">
        {/* Top / Main Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Left Column: Brand & Newsletter (5 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Brand Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/icons/logo.svg"
                alt="ByteSpace"
                width={171}
                height={37}
                className="h-9 w-auto"
              />
            </Link>

            {/* Newsletter Headline */}
            <p className="text-body-s text-neutral-700">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Input + Button */}
            <form
              action="#"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address for newsletter"
                suppressHydrationWarning
                className="flex-1 px-5 py-3 rounded-full border border-neutral-300 text-body-m placeholder:text-neutral-400 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-secondary text-neutral-950 text-label-l font-semibold hover:bg-secondary-400 active:scale-95 transition-all shadow-xs cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Disclaimer */}
            <p className="text-body-xs text-neutral-500 max-w-md leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Navigation Columns (6 Cols) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-6 gap-8">
            {footerNavigation.map((column, colIndex) => (
              <div key={colIndex} className="space-y-3.5">
                {column.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-s text-neutral-950 hover:text-primary transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-neutral-200 mb-8" />

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-body-xs text-neutral-600">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-neutral-950 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
