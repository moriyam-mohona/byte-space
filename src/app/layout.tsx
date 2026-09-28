import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header, Footer, BangladeshMapBackground } from "@/shared/components/layout";

const ubuntuSans = Ubuntu_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Byte Space | Non-Profit Humanitarian Foundation",
  description: "Byte Space non-profit humanitarian foundation in Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ubuntuSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Providers>
          <Header />
          <BangladeshMapBackground opacity={0.8}>{children}</BangladeshMapBackground>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
