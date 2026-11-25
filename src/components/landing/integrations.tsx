"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
import { EASE, Reveal } from "@/components/motion/reveal";
import { ScaleToFit } from "@/components/motion/scale-to-fit";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./shared";

/* Hub bounds = Figma "Group 29": x 453→955, y 265→783 (502 × 518). */

type Glyph = {
  src: string;
  /** glyph box inside the 28px icon cell */
  w: number;
  h: number;
  ml?: number;
  mt?: number;
  /** optional alpha mask (Figma clip-path groups) */
  mask?: string;
  maskPos?: string;
  maskSize?: string;
};

function Bubble({
  name,
  style,
  counter,
  children,
}: {
  name: string;
  style: CSSProperties;
  /** CSS class that counter-rotates the bubble so the logo stays upright while its ring orbits */
  counter?: string;
  children: ReactNode;
}) {
  return (
    <div className="absolute size-[60px]" style={style}>
      <div className={cn("size-full", counter)}>
        <motion.div
          title={name}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 380, damping: 18 }}
          className="flex size-full items-center justify-center overflow-clip rounded-full border border-[#e3e3e3] bg-white p-2.5 shadow-[0px_4px_4px_0px_#e4e4e4]"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

function MaskedGlyph({ g }: { g: Glyph }) {
  return (
    <div className="inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
      <div
        className="relative col-1 row-1"
        style={{
          width: g.w,
          height: g.h,
          marginLeft: g.ml ?? 0,
          marginTop: g.mt ?? 0,
          ...(g.mask
            ? {
                maskImage: `url("${g.mask}")`,
                WebkitMaskImage: `url("${g.mask}")`,
                maskMode: "alpha",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: g.maskPos ?? "0 0",
                WebkitMaskPosition: g.maskPos ?? "0 0",
                maskSize: g.maskSize,
                WebkitMaskSize: g.maskSize,
              }
            : null),
        }}
      >
        <img src={g.src} alt="" className="absolute inset-0 block size-full max-w-none" />
      </div>
    </div>
  );
}

const M28 = "/images/int-mask-28.svg";
const M2825 = "/images/int-mask-28x25.svg";

/* Frosted-ring look from the Figma render: white glow inside each edge (strongest on the
   inner ring), faint light fill and a soft outer halo. */
const RING_GLOW = {
  outer: "inset 0 0 14px 2px rgba(255,255,255,0.75), 0 0 18px 0 rgba(3,24,20,0.05)",
  middle: "inset 0 0 18px 4px rgba(255,255,255,0.85), 0 0 14px 0 rgba(3,24,20,0.05)",
  inner: "inset 0 0 22px 10px rgba(255,255,255,0.95), 0 0 12px 0 rgba(3,24,20,0.06)",
};

function Ring({
  size,
  left,
  top,
  glow,
  className,
  children,
}: {
  size: number;
  left: number;
  top: number;
  glow: keyof typeof RING_GLOW;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute rounded-full border border-[#e3e3e3] bg-[rgba(255,255,255,0.12)]",
        className,
      )}
      style={{ width: size, height: size, left, top, boxShadow: RING_GLOW[glow] }}
    >
      {children}
    </div>
  );
}

function Hub() {
  const outer = "animate-orbit-reverse [--orbit-duration:36s]";
  const inner = "animate-orbit [--orbit-duration:28s]";

  return (
    <div
      className="relative h-[518px] w-[502px]"
    >
      {/* Outer ring (488) — Magento, Google Drive, Google Ads, Spotify, Zoom */}
      <Ring size={488} left={14} top={30} glow="outer" className="animate-orbit [--orbit-duration:36s]">
        <Bubble name="Magento" style={{ left: 368, top: 403 }} counter={outer}>
          <MaskedGlyph g={{ src: "/images/int-magento.svg", w: 23.852, h: 28, ml: 2.07, mask: "/images/int-magento-mask.svg", maskPos: "-2.074px 0px", maskSize: "28px 28px" }} />
        </Bubble>
        <Bubble name="Google Drive" style={{ left: 448, top: 136 }} counter={outer}>
          <MaskedGlyph g={{ src: "/images/int-drive.svg", w: 27.999, h: 24.884, mask: M2825, maskPos: "-0.001px -0.002px", maskSize: "28px 24.889px" }} />
        </Bubble>
        <Bubble name="Google Ads" style={{ left: 42, top: 391 }} counter={outer}>
          <MaskedGlyph g={{ src: "/images/int-ads.svg", w: 27.999, h: 24.889, mask: M2825, maskSize: "28px 24.889px" }} />
        </Bubble>
        <Bubble name="Spotify" style={{ left: -15, top: 142 }} counter={outer}>
          <MaskedGlyph g={{ src: "/images/int-spotify.svg", w: 28, h: 28, mask: M28, maskSize: "28px 28px" }} />
        </Bubble>
        <Bubble name="Zoom" style={{ left: 213, top: -31 }} counter={outer}>
          <MaskedGlyph g={{ src: "/images/int-zoom.svg", w: 25.667, h: 25.667, ml: 1.17, mt: 1.17, mask: M28, maskPos: "-1.166px -1.167px", maskSize: "28px 28px" }} />
        </Bubble>
      </Ring>

      {/* Middle ring (382) */}
      <Ring size={382} left={67} top={83} glow="middle" />

      {/* Inner ring (286) — GitHub, Slack, HubSpot, Gmail, Flutter */}
      <Ring size={286} left={115} top={129} glow="inner" className="animate-orbit-reverse [--orbit-duration:28s]">
        <Bubble name="GitHub" style={{ left: 44, top: -15 }} counter={inner}>
          <MaskedGlyph g={{ src: "/images/int-github.svg", w: 27.892, h: 27.964, mask: M28, maskSize: "28px 28px" }} />
        </Bubble>
        <Bubble name="Slack" style={{ left: 211, top: -1 }} counter={inner}>
          <MaskedGlyph g={{ src: "/images/int-slack.svg", w: 28, h: 28, mask: M28, maskSize: "28px 28px" }} />
        </Bubble>
        <div className="absolute size-[60px]" style={{ left: 255, top: 155 }} title="HubSpot">
          <div className={cn("size-full", inner)}>
            <motion.div whileHover={{ scale: 1.15 }} className="relative size-full">
              <div className="absolute inset-[0_-6.67%_-13.33%_-6.67%]">
                <img src="/images/int-hubspot.svg" alt="" className="block size-full max-w-none" />
              </div>
            </motion.div>
          </div>
        </div>
        <Bubble name="Gmail" style={{ left: -16, top: 138 }} counter={inner}>
          <img src="/images/int-gmail.svg" alt="" className="size-7 shrink-0" />
        </Bubble>
        <Bubble name="Flutter" style={{ left: 112, top: 245 }} counter={inner}>
          <MaskedGlyph g={{ src: "/images/int-flutter.svg", w: 22.522, h: 27.955, mt: 0.02, mask: "/images/int-flutter-mask.svg", maskPos: "0px -0.022px", maskSize: "22.522px 28px" }} />
        </Bubble>
      </Ring>

      {/* Center: soft gradient disc + Chatlyn mark */}
      <div
        className="absolute h-[191px] w-[190px] rounded-full border-[0.1px] border-[#f3f3f3] shadow-[0_0_0_3px_rgba(255,255,255,0.7),0_10px_30px_0_rgba(3,24,20,0.10),inset_0_0_18px_4px_rgba(255,255,255,0.55)] blur-[1px]"
        style={{
          left: 163,
          top: 177,
          backgroundImage: "linear-gradient(145.58deg, rgba(255,199,30,0.104) 16.281%, rgba(0,73,48,0.1) 88.705%)",
        }}
      />
      <span className="pointer-events-none absolute rounded-full border border-[#d8a234]/40" style={{ left: 163, top: 177, width: 190, height: 191, animation: "pulse-ring 3.2s ease-out infinite" }} />
      <motion.div
        className="absolute h-[93px] w-[90px]"
        style={{ left: 213, top: 227 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-[-0.13%_-0.14%]">
          <img src="/images/int-center-logo.svg" alt="Chatlyn" className="block size-full max-w-none" />
        </div>
      </motion.div>
    </div>
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="relative overflow-x-clip bg-cream py-16 lg:pt-20 lg:pb-20">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <Reveal>
          <SectionHeading
            className="max-w-[720px]"
            title="One Hub. Endless Possibilities."
            subtitle="Chatlyn connects with your essential business tools to make communication, automation and customer management effortless."
            subtitleClassName="max-w-[732px]"
          />
        </Reveal>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto mt-12 flex justify-center lg:mt-[70px]"
        >
          <ScaleToFit width={502} height={518}>
            <Hub />
          </ScaleToFit>
        </motion.div>
      </div>
    </section>
  );
}
