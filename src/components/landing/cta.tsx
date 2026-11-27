"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, PillLink } from "./shared";
import { LOGIN_URL } from "@/lib/api";

/** Decorative rings in the CTA banner (Ellipse 18–21), each slowly drifting. */
const ARCS = [
  { src: "/images/cta-ellipse-19.svg", box: 815.352, left: -407.89, top: -270.67, rot: 112.75, size: 622.928, inset: "-16.05% -15.98% 31.27% -16.05%", drift: 6 },
  { src: "/images/cta-ellipse-20.svg", box: 749.08, left: 928, top: 150.4, rot: -52.25, size: 533.95, inset: "-1.87% -1.8% 45.45% -1.87%", drift: -6 },
  { src: "/images/cta-ellipse-18.svg", box: 928.24, left: -467.85, top: -326.85, rot: 104.26, size: 763.653, inset: "-13.09% -13.02% 34.23% -13.09%", drift: -4 },
  { src: "/images/cta-ellipse-21.svg", box: 891, left: 857, top: 80, rot: -60.74, size: 654.573, inset: "-15.28% -15.21% 32.05% -15.28%", drift: 4 },
];

export function Cta() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1239px] px-5">
        <Reveal y={40} amount={0.3}>
          <div className="relative flex min-h-[447px] flex-col items-center justify-center overflow-clip rounded-[24px] bg-[#072c1a] px-5 py-16 text-center lg:block lg:p-0">
            {ARCS.map((a) => (
              <motion.div
                key={a.src}
                aria-hidden
                className="pointer-events-none absolute flex items-center justify-center"
                style={{
                  width: a.box,
                  height: a.box,
                  top: a.top,
                  ...(a.left > 0 ? { left: `calc(100% - ${1199 - a.left}px)` } : { left: a.left }),
                }}
                animate={{ rotate: [0, a.drift, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex-none" style={{ transform: `rotate(${a.rot}deg)` }}>
                  <div className="relative" style={{ width: a.size, height: a.size }}>
                    <div className="absolute" style={{ inset: a.inset }}>
                      <img src={a.src} alt="" className="block size-full max-w-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <Eyebrow dot="/images/dot-cream.svg" className="relative justify-center text-[#fffae9] lg:absolute lg:top-[84px] lg:left-1/2 lg:-translate-x-1/2">
              Let’s Get Started
            </Eyebrow>
            <h2 className="relative mt-4 font-manrope text-[32px] leading-[1.2] font-bold text-[#fffae9] sm:text-[40px] lg:absolute lg:top-[119px] lg:left-[calc(50%+0.5px)] lg:mt-0 lg:-translate-x-1/2 lg:text-[48px] lg:whitespace-nowrap">
              Ready to turn conversations
              <br />
              into customers?
            </h2>
            <p className="relative mt-5 max-w-[732px] font-dm text-base leading-[1.2] font-medium text-[#d5d5d5] sm:text-xl lg:absolute lg:top-[259px] lg:left-[calc(50%+0.5px)] lg:mt-0 lg:w-[732px] lg:-translate-x-1/2">
              Start building smarter WhatsApp experiences with Chatlyn.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:absolute lg:top-[323px] lg:left-[calc(50%+0.5px)] lg:mt-0 lg:-translate-x-1/2 lg:flex-nowrap">
              <PillLink href={LOGIN_URL} variant="cream">
                Get Started
              </PillLink>
              <PillLink href="/contact" variant="cream">
                Book a Demo
              </PillLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
