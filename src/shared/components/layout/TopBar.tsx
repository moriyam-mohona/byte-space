import Image from "next/image";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="hidden md:block bg-secondary text-white text-body-sm border-b border-white/10">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-2 sm:py-2.5 gap-2">
        {/* Left Side: Contact Info */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
          <a
            href="tel:+2025550167"
            className="flex items-center gap-2 hover:text-primary-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M11.6638 12.998C12.4183 13.0392 13 12.4246 13 11.7158V10.0883C12.9999 9.3535 12.4151 8.83443 11.7939 8.74517C11.2557 8.66783 10.7508 8.50037 10.414 8.3681C9.93626 8.18043 9.35293 8.2605 8.95466 8.65883L7.17793 10.4355C5.21546 9.39603 3.60316 7.78397 2.56385 5.82143L4.3412 4.04535C4.73948 3.64706 4.81955 3.06375 4.63192 2.58603C4.49964 2.2492 4.33216 1.74435 4.25487 1.20605C4.16559 0.584893 3.64653 0.000126667 2.91171 0H1.28418C0.575449 0 -0.0392048 0.58176 0.00195517 1.33618C0.346022 7.61997 5.37999 12.654 11.6638 12.998Z"
                fill="white"
              />
            </svg>
            <span className="font-sans">
              <span className="font-normal">Talk with us:</span>{" "}
              <span className="font-semibold">+ 202-555-0167</span>
            </span>
          </a>

          <span className="hidden sm:inline border border-surface-muted h-2.5" />

          <a
            href="mailto:info@yourmail.com"
            className="flex items-center gap-2 hover:text-primary-200 transition-colors"
          >
            <Image
              src="/icons/navicon/mail-02.svg"
              alt="Email"
              width={16}
              height={16}
              className="w-4 h-4 shrink-0"
            />
            <span className="font-sans">
              <span className="font-normal">Send us message:</span>{" "}
              <span className="font-semibold">info@yourmail.com</span>
            </span>
          </a>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-2">
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
              width={28}
              height={28}
              className="w-7 h-7"
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
              width={28}
              height={28}
              className="w-7 h-7"
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
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src="/icons/navicon/x.svg"
              alt="X"
              width={28}
              height={28}
              className="w-7 h-7"
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
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
