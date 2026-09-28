"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-footer-bg text-base-white pt-10 sm:pt-14 lg:pt-20 pb-8 border-t border-base-white/10 font-sans">
      <div className="container">
        {/* Main 5-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-8 lg:gap-2">
          {/* Column 1: Brand & 24/7 Hotline */}
          <div className="col-span-1 sm:col-span-2 md:col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-stretch gap-6 md:gap-8 lg:gap-0 pr-0 lg:pr-4 border-b border-base-white/10 pb-8 sm:pb-8 md:pb-8 lg:border-b-0 lg:pb-0">
            <div className="sm:max-w-xs md:max-w-md lg:max-w-none">
              {/* Brand Logo & Tagline */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-base-white p-1 flex items-center justify-center shrink-0 shadow-sm">
                  <Image
                    src="/icons/logo.svg"
                    alt="Byte Space"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-h5 font-bold text-base-white block leading-tight tracking-tight">
                    Byte Space
                  </span>
                  <span className="text-body-sm text-secondary-soft/70 block mt-0.5">
                    Non-Profit Humanitarian Foundation
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-body-md text-secondary-soft/70 leading-relaxed max-w-sm mt-5">
                Committed to ensuring safe shelter, education, healthcare, and equal opportunities across Bangladesh.
              </p>
            </div>

            {/* 24/7 Emergency Hotline Card */}
            <div className="bg-secondary-lighter border border-base-white/10 rounded-2xl p-4 sm:p-5 mt-5 sm:mt-0 lg:mt-5 w-full max-w-sm sm:max-w-72 shrink-0 shadow-lg">
              <p className="text-body-md text-secondary-soft font-medium">
                24/7 Emergency Hotline
              </p>
              <p className="text-h3 font-bold text-primary tracking-wider my-1.5">
                16345
              </p>
              <a
                href="tel:16345"
                className="w-full bg-primary hover:bg-primary-600 text-base-white font-bold text-body-md py-2.5 px-4 rounded-full flex items-center justify-center gap-2 transition-all active:scale-98 shadow-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M13.1664 14.4995C13.9209 14.5407 14.5026 13.926 14.5026 13.2173V11.5898C14.5025 10.855 13.9177 10.3359 13.2965 10.2466C12.7583 10.1693 12.2534 10.0018 11.9166 9.86957C11.4389 9.6819 10.8555 9.76196 10.4573 10.1603L8.68052 11.937C6.71806 10.8975 5.10576 9.28543 4.06645 7.3229L5.84379 5.54681C6.24208 5.14852 6.32214 4.56522 6.13451 4.08749C6.00224 3.75066 5.83476 3.24581 5.75746 2.70752C5.66818 2.08636 5.14912 1.50159 4.4143 1.50146H2.78677C2.07804 1.50146 1.46339 2.08322 1.50455 2.83764C1.84862 9.12143 6.88259 14.1554 13.1664 14.4995Z"
                    fill="white"
                  />
                </svg>
                <span>Call 16345 Now</span>
              </a>
            </div>
          </div>

          {/* Column 2: Organization */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h3 className="text-body-md font-bold text-base-white tracking-wide mb-4">
              Organization
            </h3>
            <ul className="space-y-2.5 text-body-md">
              <li>
                <Link
                  href="/about"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/report"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Annual Report
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h3 className="text-body-md font-bold text-base-white tracking-wide mb-4">
              Programs
            </h3>
            <ul className="space-y-2.5 text-body-md">
              <li>
                <Link
                  href="/programs"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Women & Child Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/missing-child"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Find Missing Child
                </Link>
              </li>
              <li>
                <Link
                  href="/emergency"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Emergency Relief
                </Link>
              </li>
              <li>
                <Link
                  href="/blood-donors"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Blood Donor Network
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-aid"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Legal Aid Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Involved */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h3 className="text-body-md font-bold text-base-white tracking-wide mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2.5 text-body-md">
              <li>
                <Link
                  href="/volunteer"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/blood-donor-register"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Register as Blood Donor
                </Link>
              </li>
              <li>
                <Link
                  href="/donation"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Donate Now
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Corporate Partnership
                </Link>
              </li>
              <li>
                <Link
                  href="/transparency"
                  className="text-secondary-soft/70 hover:text-base-white transition-colors block py-0.5"
                >
                  Transparency Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h3 className="text-body-md font-bold text-base-white tracking-wide mb-4">
              Contact
            </h3>
            <div className="space-y-3.5 text-body-md">
              {/* Address */}
              <div className="flex items-start gap-2.5 text-secondary-soft/70">
                <svg
                  className="w-4 h-4 text-base-white shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="leading-snug">
                  House #12, Road #4, Dhanmondi, Dhaka-1205, Bangladesh
                </span>
              </div>

              {/* Email */}
              <a
                href="mailto:info@bytespace.org"
                className="flex items-center gap-2.5 text-secondary-soft/70 hover:text-base-white transition-colors"
              >
                <Image
                  src="/icons/navicon/mail-02.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="w-4 h-4 shrink-0"
                />
                <span className="break-all">
                  info@bytespace.org
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+880961000000"
                className="flex items-center gap-2.5 text-secondary-soft/70 hover:text-base-white transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M13.1664 14.4995C13.9208 14.5407 14.5026 13.926 14.5026 13.2173V11.5898C14.5024 10.855 13.9177 10.3359 13.2965 10.2466C12.7582 10.1693 12.2534 10.0018 11.9166 9.86957C11.4388 9.6819 10.8555 9.76196 10.4572 10.1603L8.68049 11.937C6.71802 10.8975 5.10573 9.28543 4.06642 7.3229L5.84376 5.54681C6.24205 5.14852 6.32211 4.56522 6.13448 4.08749C6.00221 3.75066 5.83473 3.24581 5.75743 2.70752C5.66815 2.08636 5.14909 1.50159 4.41427 1.50146H2.78674C2.07801 1.50146 1.46336 2.08322 1.50452 2.83764C1.84859 9.12143 6.88256 14.1554 13.1664 14.4995Z"
                    fill="white"
                  />
                </svg>
                <span>+880 9610-000000</span>
              </a>

              {/* Social Media Links */}
              <div className="flex items-center gap-3 md:gap-1.5 lg:gap-2 pt-3 md:pt-2.5 flex-wrap">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src="/icons/navicon/linkedin.svg"
                    alt="LinkedIn"
                    width={36}
                    height={36}
                    className="w-9 h-9 md:w-7 md:h-7"
                  />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src="/icons/navicon/facebook.svg"
                    alt="Facebook"
                    width={36}
                    height={36}
                    className="w-9 h-9 md:w-7 md:h-7"
                  />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src="/icons/navicon/instagram.svg"
                    alt="Instagram"
                    width={36}
                    height={36}
                    className="w-9 h-9 md:w-7 md:h-7"
                  />
                </Link>
                <Link
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src="/icons/navicon/x.svg"
                    alt="X"
                    width={36}
                    height={36}
                    className="w-9 h-9 md:w-7 md:h-7"
                  />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src="/icons/navicon/youtube.svg"
                    alt="YouTube"
                    width={36}
                    height={36}
                    className="w-9 h-9 md:w-7 md:h-7"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="border-t border-base-white/10 mt-12 sm:mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-body-sm text-secondary-soft/70">
          <p className="text-center sm:text-left">
            © 2026 Byte Space Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center sm:justify-end">
            <Link
              href="/privacy"
              className="hover:text-base-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-base-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
