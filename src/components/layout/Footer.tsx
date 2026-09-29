import Link from "next/link";

export function Footer() {
  const footerLinks = {
    explore: [
      { label: "All Courses", href: "/courses" },
      { label: "UI/UX Design", href: "/courses" },
      { label: "Web Development", href: "/courses" },
      { label: "Data Science", href: "/courses" },
      { label: "AI & Machine Learning", href: "/courses" },
    ],
    company: [
      { label: "About Us", href: "/#about" },
      { label: "Careers", href: "/#careers" },
      { label: "Become an Instructor", href: "/#creators" },
      { label: "Style Guide", href: "/design-system" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/#privacy" },
      { label: "Terms of Service", href: "/#terms" },
      { label: "Cookie Policy", href: "/#cookies" },
    ],
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-heading font-bold text-lg">
                B
              </div>
              <span className="font-heading font-semibold text-2xl tracking-tight text-white">
                Byte<span className="text-primary-400">Space</span>
              </span>
            </Link>
            <p className="text-body-m text-neutral-400 max-w-sm">
              Empowering the next generation of builders, designers, and engineers with high-impact online courses.
            </p>
            <div className="flex items-center gap-3 pt-2 text-neutral-400">
              <span className="text-body-xs font-mono">© 2026 ByteSpace Inc. All rights reserved.</span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-label-l text-white">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-s text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-label-l text-white">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-s text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-label-l text-white">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-s text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
