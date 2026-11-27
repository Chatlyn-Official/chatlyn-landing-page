import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter, Manrope } from "next/font/google";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--nf-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--nf-dm-sans",
  subsets: ["latin"],
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--nf-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Chatlyn | WhatsApp, Supercharged for Business",
  description:
    "Automate conversations, empower your team, and turn WhatsApp interactions into meaningful business growth.",
};

export const viewport: Viewport = {
  themeColor: "#f8f5ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSans.variable} ${inter.variable} antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full overflow-x-clip bg-cream text-ink">
        <SmoothScroll />
        <Header />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
