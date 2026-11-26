"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { EASE } from "@/components/motion/reveal";
import { PillLink } from "./shared";

const TITLE: { text: string; className: string; br?: boolean }[] = [
  { text: "WhatsApp,", className: "text-ink" },
  { text: "Supercharged", className: "text-forest", br: true },
  { text: "for", className: "text-ink" },
  { text: "Business.", className: "text-ink" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-x-clip pt-[112px] pb-12 sm:pt-[150px] lg:pt-[190px] lg:pb-[62px]">
      {/* Background grid (Figma "Group 5"), anchored to the 1440 frame */}
      <div aria-hidden className="pointer-events-none absolute top-[-27px] left-[calc(50%-720px)] h-[1096px] w-[1584px]">
        <div className="absolute inset-[-0.73%_-0.57%_-0.82%_-0.51%]">
          <img src="/images/hero-grid.svg" alt="" className="block size-full max-w-none" />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="flex items-end gap-2.5 rounded-full border-[0.5px] border-[#eee] bg-cream px-4 py-2 drop-shadow-[0px_4px_5px_rgba(1,107,70,0.2)] sm:px-5"
        >
          <motion.img
            src="/images/icon-ai-sparkle.svg"
            alt=""
            className="size-5 shrink-0"
            animate={{ rotate: [0, 14, -8, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.2 }}
          />
          <p className="font-dm text-[11px] leading-[1.2] font-semibold text-[#112c23] sm:text-sm">
            THE CONVERSATION PLATFORM FOR MODERN TEAMS
          </p>
        </motion.div>

        {/* Title + subtitle */}
        <div className="mt-7 flex w-full max-w-[920px] flex-col items-center gap-3 text-center [word-break:break-word]">
          <h1 className="font-manrope text-[32px] leading-[1.2] font-bold min-[380px]:text-[40px] sm:text-[52px] lg:text-[64px]">
            {TITLE.map((w, i) => (
              <span key={w.text}>
                <motion.span
                  className={`inline-block ${w.className}`}
                  initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.25 + i * 0.09 }}
                >
                  {w.text}
                </motion.span>
                {w.br ? <br /> : " "}
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
            className="max-w-[610px] font-manrope text-base leading-[1.2] font-semibold text-body sm:text-lg"
          >
            Automate conversations, empower your team, and turn WhatsApp interactions into meaningful business growth.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-start justify-center gap-2.5 lg:mt-[46px]"
        >
          <PillLink href="#pricing" size="lg">
            Get Started
          </PillLink>
          <PillLink href="/contact" variant="outline" size="lg">
            Book Demo
          </PillLink>
        </motion.div>

        {/* Product shot */}
        <div className="mt-12 w-full max-w-[938px] lg:mt-[108px]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.9 }}
            className="relative aspect-[938/457] w-full overflow-clip rounded-[10px] border border-ink bg-ink shadow-[4px_4px_30px_0px_rgba(3,24,20,0.5),-4px_-4px_30px_0px_rgba(0,73,48,0.5)] sm:rounded-[17.034px] sm:border-2"
          >
            <HeroVideo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Product video in the dashboard frame. The dashboard screenshot is the poster, so the
 * frame is never empty while the video loads; with "reduce motion" on, the video stays paused.
 */
function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Only play while the frame is on screen, to save battery and bandwidth.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src="/hero-video.mp4"
      poster="/images/hero-video-poster.jpg"
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Chatlyn dashboard walkthrough"
      className="absolute inset-0 size-full object-cover"
    />
  );
}
