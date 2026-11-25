"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";
import { Logo } from "./logo";

type FooterLink = { label: string; href: string };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Inbox", href: "/#features" },
      { label: "Al Agents", href: "/#features" },
      { label: "Automation", href: "/#automation" },
      { label: "Analytics", href: "/#features" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Marketing", href: "/#industries" },
      { label: "Sales", href: "/#industries" },
      { label: "Support", href: "/#industries" },
      { label: "Al Automation", href: "/#automation" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Industries", href: "/#industries" },
      { label: "Integrations", href: "/#integrations" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Resources", href: "/#faqs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Condition", href: "/terms-and-conditions" },
      { label: "Security", href: "/privacy-policy" },
      { label: "Cancellation Policy", href: "/cancellation-policy" },
    ],
  },
];

const CONTACT = [
  { icon: "/images/icon-email.svg", label: "contact@chatlyn.in", href: "mailto:contact@chatlyn.in" },
  { icon: "/images/icon-phone.svg", label: "+91 99999 88888", href: "tel:+919999988888" },
  { icon: "/images/icon-location.svg", label: "Ahmedabad, Gujarat", href: undefined },
];

const SOCIAL = [
  { name: "X (Twitter)", src: "/images/social-x.svg", mask: "/images/social-x-mask.svg" },
  { name: "Facebook", src: "/images/social-facebook.svg" },
  { name: "YouTube", src: "/images/social-youtube.svg" },
  { name: "Instagram", src: "/images/social-instagram.svg" },
  { name: "LinkedIn", src: "/images/social-linkedin.svg" },
  { name: "Telegram", src: "/images/social-telegram.svg" },
];

export function Footer() {
  return (
    <footer className="relative overflow-clip rounded-t-[30px] border-t border-[#b4b4b4]">
      <div className="mx-auto w-full max-w-[1240px] px-5 pt-[79px] pb-20">
        <Reveal className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand + contact */}
          <div className="flex flex-col">
            <Link href="/" aria-label="Chatlyn home" className="w-fit">
              <Logo />
            </Link>
            <p className="mt-5 max-w-[315px] font-dm text-base leading-normal font-medium text-ink">
              Better customer conversations start here. Bring your people, messages and intelligence together.
            </p>
            <ul className="mt-[27px] flex w-[259px] flex-col gap-2">
              {CONTACT.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group/ct flex items-center gap-2.5 font-dm text-base leading-[1.2] font-medium text-[#111] transition-colors hover:text-forest"
                  >
                    <img src={c.icon} alt="" className="size-6 shrink-0 transition-transform duration-300 group-hover/ct:scale-110" />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-[30px] flex flex-wrap items-center gap-2">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  whileHover={{ y: -3, backgroundColor: "rgba(255,199,30,0.4)" }}
                  whileTap={{ scale: 0.92 }}
                  className="flex items-center overflow-clip rounded-[8px] bg-[rgba(255,199,30,0.2)] p-[9px]"
                >
                  {s.mask ? (
                    <span className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                      <span
                        className="relative col-1 row-1 mt-[0.94px] h-[18.126px] w-5"
                        style={{
                          maskImage: `url("${s.mask}")`,
                          WebkitMaskImage: `url("${s.mask}")`,
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "0px -0.938px",
                          WebkitMaskPosition: "0px -0.938px",
                          maskSize: "20px 20px",
                          WebkitMaskSize: "20px 20px",
                        }}
                      >
                        <img src={s.src} alt="" className="absolute inset-0 block size-full max-w-none" />
                      </span>
                    </span>
                  ) : (
                    <img src={s.src} alt="" className="size-5" />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:flex lg:gap-6">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-3 leading-[1.2] lg:w-[125px] lg:last:w-auto">
                <p className="font-dm text-base font-bold text-pine">{col.title}</p>
                <ul className="flex flex-col gap-1">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="inline-block font-dm text-base font-medium text-[#676767] sm:whitespace-nowrap transition-[color,transform] duration-300 hover:translate-x-1 hover:text-forest"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-[59px] h-px w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <img src="/images/footer-line.svg" alt="" className="block size-full max-w-none" />
          </div>
        </div>
        <p className="pt-[22px] font-dm text-sm leading-[1.2] font-medium text-ink">@ 2026 Chatlyn. All rights reserved.</p>
      </div>
    </footer>
  );
}
