"use client";

import { useRef, useState, type ComponentProps, type ReactNode } from "react";
import { AnimatePresence, motion, useAnimationFrame, useInView, useMotionValue, useTransform } from "motion/react";
import { EASE, Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./shared";

const STEP_MS = 4500;

const STEPS: { title: string; body: ReactNode; width?: number }[] = [
  {
    title: "Connect WhatsApp API.",
    body: (
      <>
        Link your business number in <span className="font-medium text-ink">one click</span> and get instant approval.
      </>
    ),
  },
  {
    title: "Invite Your Team.",
    body: <>Add unlimited agents to your <span className="font-medium text-ink">Shared Inbox</span> with custom roles.</>,
  },
  {
    title: "Build & Automate.",
    body: <>Set up <span className="font-medium text-ink">AI Copilot</span> and drag-and-drop flows for 24/7 support.</>,
  },
  {
    title: "Launch Campaigns.",
    width: 240,
    body: <>Send <span className="font-medium text-ink">broadcasts</span> to targeted segments and watch your ROI grow.</>,
  },
];

/* ---------------------------------------------------------- illustrations */

/** Step 1 — WhatsApp tile → API card, exactly as composed in Figma (225 × 141). */
function ConnectIllustration() {
  return (
    <div className="relative h-[141px] w-[226px]">
      {/* dashed link */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
        className="absolute top-[68.86px] left-[107.51px] h-0 w-[23.953px] origin-left"
      >
        <div className="absolute inset-[-1px_0]">
          <img src="/images/step1-line.svg" alt="" className="block size-full max-w-none" />
        </div>
      </motion.div>
      {/* soft green glow */}
      <motion.div
        className="absolute top-0 left-[39.85px] size-[140.486px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-[-35.59%]">
          <img src="/images/step1-glow.svg" alt="" className="block size-full max-w-none" />
        </div>
      </motion.div>
      {/* WhatsApp tile */}
      <motion.div
        initial={{ opacity: 0, y: 12, rotate: -14 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="absolute top-[9.68px] left-0"
      >
        <div className="animate-float relative size-[113.917px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex-none -rotate-8">
              <div className="relative size-[100.862px]">
                <img src="/images/step1-wa-bg.svg" alt="" className="absolute inset-0 block size-full max-w-none" />
              </div>
            </div>
          </div>
          <div className="absolute top-[28.14px] left-[28.14px] size-[56.735px] overflow-clip">
            <div className="absolute inset-[0.51%_0.21%_0_0.72%]">
              <img src="/images/wa-v1.svg" alt="" className="absolute inset-0 block size-full max-w-none" />
            </div>
            <div className="absolute inset-[0_0.72%_0.51%_0.21%]">
              <img src="/images/wa-v2.svg" alt="" className="absolute inset-0 block size-full max-w-none" />
            </div>
            <div className="absolute inset-[8.32%_9.04%_9.71%_8.95%]">
              <img src="/images/wa-v3.svg" alt="" className="absolute inset-0 block size-full max-w-none" />
            </div>
            <div className="absolute inset-[26.54%_24.99%_27.03%_24.9%]">
              <img src="/images/wa-v4.svg" alt="" className="absolute inset-0 block size-full max-w-none" />
            </div>
          </div>
        </div>
      </motion.div>
      {/* API card */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
        className="absolute top-[42.33px] left-[130.8px] flex h-[52.232px] w-[81.95px] items-center justify-center rounded-[10px] border border-[#e9e5d8] bg-[#fffdf7] drop-shadow-[0px_4px_5px_rgba(104,105,105,0.1)]"
      >
        <p className="font-inter text-[21px] leading-normal font-bold text-[#17543f]">API</p>
      </motion.div>
      {/* verified check */}
      <motion.img
        src="/images/step1-check.svg"
        alt=""
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.25, 1] }}
        transition={{ delay: 0.85, duration: 0.45 }}
        className="absolute top-[80.15px] left-[201.05px] size-6"
      />
    </div>
  );
}

const AVATARS = [
  { left: 13.05, top: 13.69, delay: 0.15 },
  { left: 209, top: 0, delay: 0.3 },
  { left: 67.33, top: 130.97, delay: 0.45 },
];

/** Step 2 — agent card with teammates wired in, exactly as composed in Figma (247 × 169). */
function TeamIllustration() {
  const wire = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay, duration: 0.5, ease: EASE },
  });
  return (
    <div className="relative h-[169px] w-[247px]">
      {/* dashed wires */}
      <motion.div {...wire(0.35)} className="absolute top-[114.71px] left-[103.72px] flex h-[40.134px] w-[62.599px] items-center justify-center">
        <div className="flex-none -scale-y-100 rotate-[-89.21deg] skew-x-[0.06deg]">
          <div className="relative h-[62.059px] w-[39.339px]">
            <div className="absolute inset-[-1.41%_-2.54%_-1.61%_-2.54%]">
              <img src="/images/step2-line-74.svg" alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div {...wire(0.5)} className="absolute top-[37.08px] left-[126.49px] flex h-[50.919px] w-[101.511px] items-center justify-center">
        <div className="flex-none -scale-y-100 rotate-90">
          <div className="relative h-[101.512px] w-[50.919px]">
            <div className="absolute inset-[-0.7%_-1.96%_-0.99%_-1.96%]">
              <img src="/images/step2-line-75.svg" alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div {...wire(0.2)} className="absolute top-[31.73px] left-[48.28px] flex h-[48.269px] w-[35.89px] items-center justify-center">
        <div className="flex-none rotate-[90.39deg] skew-x-[0.09deg]">
          <div className="relative h-[35.56px] w-[48.084px]">
            <div className="absolute inset-[-2.65%_-2.08%_-2.81%_-2.08%]">
              <img src="/images/step2-line-76.svg" alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* agent card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="absolute top-[75px] left-0 flex h-[49px] w-[242px] items-center justify-between overflow-clip rounded-[12px] border-[0.6px] border-[#eee9dc] bg-white px-2 py-1.5 shadow-[0px_4px_10px_0px_rgba(3,24,20,0.16)]"
      >
        <div className="flex w-[225px] items-center justify-between">
          <div className="flex w-[180px] items-center gap-3">
            <div className="flex shrink-0 items-center overflow-clip rounded-full bg-[#e8e8e8]">
              <img src="/images/step2-avatar-card.svg" alt="" className="size-9" />
            </div>
            <div className="flex w-[132px] flex-col items-start gap-1.5">
              <div className="h-[7px] w-full rounded-full bg-[#dadada]" />
              <div className="h-[7px] w-[95px] rounded-full bg-[#f2f2f2]" />
            </div>
          </div>
          <motion.img
            src="/images/step2-plus.svg"
            alt=""
            className="size-[24.613px] shrink-0"
            animate={{ rotate: [0, 90, 90, 0], scale: [1, 1.15, 1.15, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.2 }}
          />
        </div>
      </motion.div>

      {/* teammates joining */}
      {AVATARS.map((a) => (
        <motion.div
          key={a.left}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: a.delay, type: "spring", stiffness: 320, damping: 16 }}
          className="absolute size-[37.34px]"
          style={{ left: a.left, top: a.top }}
        >
          <div className="absolute inset-[-16.07%_-26.78%_-37.49%_-26.78%]">
            <img src="/images/step2-avatar.svg" alt="" className="block size-full max-w-none" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/** A layer sliced from the Figma export (2x PNG), placed at its exact 1x position. */
function Layer({
  src,
  left,
  top,
  w,
  h,
  ...motionProps
}: { src: string; left: number; top: number; w: number; h: number } & ComponentProps<typeof motion.img>) {
  return (
    <motion.img
      src={src}
      alt=""
      draggable={false}
      className="absolute block max-w-none select-none"
      style={{ left, top, width: w, height: h }}
      {...motionProps}
    />
  );
}

/** Step 3 — message → bot → result flow with an AI spark (Figma variant 404:1151, 270 × 230). */
function AutomateIllustration() {
  return (
    <div className="relative h-[230px] w-[270px]">
      <Layer
        src="/images/step3-lines.png"
        left={0}
        top={0}
        w={270}
        h={230}
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
        transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }}
      />
      <Layer src="/images/step3-msg.png" left={0} top={14} w={67} h={62} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: EASE }} />
      <Layer src="/images/step3-bot.png" left={61} top={75} w={77.5} h={76} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 16 }} />
      <Layer
        src="/images/step3-spark.png"
        left={161}
        top={35}
        w={40}
        h={37}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: [0, 1.2, 1, 1.08, 1], rotate: [0, 0, 0, 12, 0] }}
        transition={{ delay: 0.75, duration: 2.6, times: [0, 0.15, 0.25, 0.6, 1], repeat: Infinity, repeatDelay: 0.8 }}
      />
      <Layer src="/images/step3-result.png" left={122} top={159} w={139} h={62} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.95, duration: 0.5, ease: EASE }} />
    </div>
  );
}

/** Step 4 — broadcast card, paper plane and megaphone tile (Figma variant 404:1150, 270 × 230). */
function CampaignIllustration() {
  return (
    <div className="relative h-[230px] w-[270px]">
      <Layer src="/images/step4-card.png" left={0} top={153} w={259} h={67} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }} />
      <Layer
        src="/images/step4-plane.png"
        left={25}
        top={90}
        w={59}
        h={63}
        initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      />
      <motion.div
        className="absolute"
        style={{ left: 82, top: 20, width: 141, height: 121 }}
        initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 220, damping: 14 }}
      >
        <motion.img
          src="/images/step4-tile.png"
          alt=""
          draggable={false}
          className="block size-full max-w-none select-none"
          animate={{ y: [0, -5, 0] }}
          transition={{ delay: 1.2, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}

const ILLUSTRATIONS = [ConnectIllustration, TeamIllustration, AutomateIllustration, CampaignIllustration];

/* ------------------------------------------------------------------ list */

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [manual, setManual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const running = inView && !paused && !manual;
  const showFull = manual || (paused && active === 0);

  // One progress value (0 → 1) drives the bar every frame. Pausing (hover / scrolled away)
  // simply stops adding to it, so the bar freezes in place and resumes from the same spot
  // with no restarts and no jumps. Manual selection (or hovering on step 1) fills the bar
  // completely until hover ends.
  const progress = useMotionValue(0);
  const barHeight = useTransform(progress, (v) => `${v * 100}%`);

  useAnimationFrame((_, delta) => {
    if (!running) return;
    // clamp long frames (e.g. after switching browser tabs) so the bar never leaps ahead
    const next = progress.get() + Math.min(delta, 50) / STEP_MS;
    if (next >= 1) {
      progress.set(0);
      setActive((a) => (a + 1) % STEPS.length);
    } else {
      progress.set(next);
    }
  });

  const goTo = (i: number) => {
    setManual(true);
    progress.set(0);
    setActive(i);
  };

  const Illustration = ILLUSTRATIONS[active];

  return (
    <section id="how-it-works" className="relative py-16 lg:pt-20 lg:pb-20">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <Reveal>
          <SectionHeading
            className="max-w-[612px]"
            title="How to launch Chatlyn"
            subtitle="From your first setup to going live, discover how easy it is to automate conversations and create better customer experiences with Chatlyn."
          />
        </Reveal>

        <Reveal
          ref={ref}
          delay={0.1}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            if (manual) {
              setManual(false);
              progress.set(0);
            }
          }}
          className="mx-auto mt-12 flex w-full max-w-[615px] flex-col items-center gap-10 sm:min-h-[230px] sm:flex-row sm:justify-between sm:gap-6 lg:mt-[100px]"
        >
          <div className="flex h-[230px] w-[270px] shrink-0 items-center justify-center sm:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <Illustration />
              </motion.div>
            </AnimatePresence>
          </div>

          <ol className="flex w-full max-w-[264px] flex-col gap-3">
            {STEPS.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={isActive ? "step" : undefined}
                    className="group/step flex w-full cursor-pointer items-stretch gap-5 text-left"
                  >
                    <span className="relative w-1 shrink-0 overflow-hidden rounded-full bg-[#d9d9d9]">
                      {isActive ? (
                        <motion.span
                          className={cn("absolute inset-x-0 top-0 rounded-full bg-forest", showFull && "!h-full")}
                          style={{ height: barHeight }}
                        />
                      ) : null}
                    </span>
                    <span className={cn("flex min-h-9 flex-col justify-center gap-2 transition-[min-height] duration-300", isActive && "min-h-[86px]")}>
                      <span
                        className={cn(
                          "font-dm text-base leading-[1.2] font-semibold transition-colors duration-300",
                          isActive ? "text-forest" : "text-[#777] group-hover/step:text-ink",
                        )}
                      >
                        {s.title}
                      </span>
                      <AnimatePresence initial={false}>
                        {isActive ? (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            style={{ width: s.width ?? 224 }}
                            className="block overflow-hidden font-inter text-sm leading-normal font-normal text-[#777]"
                          >
                            <span className="block pb-[2px]">{s.body}</span>
                          </motion.span>
                        ) : null}
                      </AnimatePresence>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
