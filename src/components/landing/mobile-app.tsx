"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EASE, Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { Eyebrow, SectionHeading } from "./shared";

/**
 * Soft green glow behind the phone, matched to the Figma render (screenshot 11-mobile-app.png):
 * a faint wide halo, a tall blurred core, and a brighter band hugging the phone's right edge
 * around mid-height. (Figma's "Warp" shader renders very differently per browser, so the
 * look is rebuilt with CSS.)
 */
function PhoneGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* wide halo */}
      <motion.div
        className="absolute top-[38%] left-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
        style={{ background: "radial-gradient(closest-side, rgba(20,120,62,0.28), rgba(10,70,40,0.12) 55%, transparent 100%)" }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* tall core behind the phone */}
      <div
        className="absolute top-[40%] left-[54%] h-[440px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[48px]"
        style={{ background: "radial-gradient(closest-side, rgba(38,170,86,0.55), rgba(24,120,62,0.25) 60%, transparent 100%)" }}
      />
      {/* bright rim on the right edge */}
      <motion.div
        className="absolute top-[42%] left-[93%] h-[300px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px]"
        style={{ background: "radial-gradient(closest-side, rgba(52,214,110,0.75), rgba(30,150,80,0.3) 60%, transparent 100%)" }}
        animate={{ opacity: [0.8, 1, 0.8], scaleY: [1, 1.06, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* faint rim on the left edge */}
      <div
        className="absolute top-[45%] left-[7%] h-[200px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px]"
        style={{ background: "radial-gradient(closest-side, rgba(40,170,90,0.4), transparent 100%)" }}
      />
    </div>
  );
}

function StoreBadge({ icon, iconClass, store }: { icon: string; iconClass: string; store: string }) {
  return (
    <motion.a
      href="#"
      aria-label={`Coming soon on ${store}`}
      whileHover={{ y: -3, backgroundColor: "rgba(248,245,238,0.08)" }}
      whileTap={{ scale: 0.97 }}
      className="relative flex h-[54px] w-[164px] items-center justify-center overflow-clip rounded-[8px] border border-cream"
    >
      <span className="flex items-center gap-2.5">
        <img src={icon} alt="" className={cn("relative shrink-0", iconClass)} />
        <span className="flex flex-col gap-0.5 font-dm leading-[1.15] font-medium whitespace-nowrap text-white">
          <span className="text-[11px] text-white/80">Coming Soon on</span>
          <span className="text-lg font-semibold">{store}</span>
        </span>
      </span>
    </motion.a>
  );
}

export function MobileApp() {
  return (
    <section className="relative overflow-clip bg-ink lg:h-[701px]">
      {/* Starfield */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/app-stars-bg.png" alt="" fill sizes="100vw" className="object-cover opacity-50" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-5 pt-16 lg:block lg:h-full lg:p-0">
        {/* Copy */}
        <Reveal className="relative z-10 flex w-full max-w-[557px] flex-col gap-8 lg:absolute lg:top-[calc(50%+0.5px)] lg:left-[120px] lg:-translate-y-1/2">
          <div className="flex flex-col gap-[26px]">
            <Eyebrow dot="/images/dot-light.svg" className="text-cream">
              Coming Soon
            </Eyebrow>
            <SectionHeading
              align="left"
              className="gap-4"
              titleClassName="text-cream"
              subtitleClassName="text-[#adadad]"
              title={
                <>
                  Your Business. <br />
                  Your Conversations. Anywhere.
                </>
              }
              subtitle="The Chatlyn mobile app is almost here. Experience smarter customer communication, seamless automation and complete control, right from your pocket."
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <StoreBadge icon="/images/icon-apple.svg" iconClass="h-7 w-[22px]" store="App Store" />
            <StoreBadge icon="/images/icon-play.svg" iconClass="h-[25px] w-[22px]" store="Play Store" />
          </div>
        </Reveal>

        {/* Phone + glows */}
        <div className="relative h-[460px] w-[280px] sm:h-[520px] sm:w-[330px] lg:absolute lg:top-[90px] lg:left-[calc(50%+166px)] lg:h-[681px] lg:w-[330px]">
          <PhoneGlow />

          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="relative aspect-[330/681] w-full"
          >
            <div className="animate-float relative size-full [animation-duration:7s]">
              <div className="absolute inset-0 overflow-hidden rounded-[19.7%/9.54%]">
                <Image
                  src="/images/app-phone.png"
                  alt="Chatlyn mobile app home screen with conversations overview"
                  width={1080}
                  height={1080}
                  sizes="(max-width: 1024px) 330px, 780px"
                  className="absolute top-[-7.2%] left-[-67.87%] h-[114.4%] w-[235.96%] max-w-none"
                />
              </div>
              {/* App-header logo patch (Figma "Frame 427322670") */}
              <div className="absolute top-[7.05%] left-[7.88%] h-[3.82%] w-[25.45%] overflow-clip bg-[#f2f0fd]">
                <div className="absolute top-[11.5%] right-[1.19%] left-[30.14%] h-[76.5%]">
                  <div className="absolute inset-[-0.63%_0_-0.63%_-0.22%]">
                    <img src="/images/app-badge-text.svg" alt="" className="block size-full max-w-none" />
                  </div>
                </div>
                <div className="absolute inset-[11.54%_76.18%_11.94%_1.19%]">
                  <div className="absolute inset-[-0.63%_-0.66%]">
                    <img src="/images/app-badge-mark.svg" alt="" className="block size-full max-w-none" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
