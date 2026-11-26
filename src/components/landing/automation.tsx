"use client";

import { motion, type Variants } from "motion/react";
import { EASE, Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { ScaleToFit } from "@/components/motion/scale-to-fit";
import { Eyebrow, SectionHeading } from "./shared";

const POINTS = ["Build workflows visually", "Route conversations intelligently", "Keep follow-ups moving"];

/* The flow builds itself: trigger → wire → message → wire → end. */
const flow: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.28, delayChildren: 0.15 } } };
const node: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
};
const wire: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  show: { clipPath: "inset(0% 0 0 0)", transition: { duration: 0.7, ease: "easeInOut" } },
};

/** Animated dashed connector marching from source handle to target handle. */
function FlowWire({
  left,
  top,
  width,
  height,
  d,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  d: string;
}) {
  const pad = 4;
  return (
    <motion.div
      variants={wire}
      aria-hidden
      className="pointer-events-none absolute"
      style={{ left: left - pad, top: top - pad, width: width + pad * 2, height: height + pad * 2 }}
    >
      <svg
        viewBox={`${left - pad} ${top - pad} ${width + pad * 2} ${height + pad * 2}`}
        fill="none"
        className="block size-full overflow-visible"
      >
        <motion.path
          d={d}
          stroke="#10B981"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3.5 6.5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -10 }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </motion.div>
  );
}

/** Illustration box = Figma bounds x 623→1340, y 129→528 (717 × 399). */
function FlowIllustration() {
  return (
    <motion.div
      variants={flow}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative h-[399px] w-[717px]"
    >
      {/* Trigger node + "Universal Trigger" pill */}
      <motion.div variants={node} className="absolute top-[141px] left-0 h-[145px] w-[208px]">
        <div className="absolute top-[6px] left-0 h-[139px] w-[208px] rounded-[10px] shadow-[0px_4px_10px_0px_rgba(184,184,184,0.25)] transition-transform duration-500 hover:-translate-y-1">
          <div className="absolute inset-0 overflow-hidden rounded-[10px]">
            <img src="/images/flow-trigger.png" alt="Keyword Matcher trigger node" className="absolute top-[-5.04%] left-[-1.52%] h-[110.07%] w-[101.6%] max-w-none" />
          </div>
        </div>
        <div className="absolute top-0 left-[9px] flex h-3 w-[100px] items-center justify-center rounded-full bg-gradient-to-r from-[#096] to-[#019967] px-3 drop-shadow-[0px_10px_7.5px_rgba(255,199,30,0.1)]">
          <p className="font-inter text-[5px] leading-normal font-bold whitespace-nowrap text-white uppercase">Universal Trigger</p>
        </div>
      </motion.div>

      {/* Wire: trigger → message */}
      <FlowWire
        left={207}
        top={20}
        width={57}
        height={245}
        d="M 207 265 H 225 A 10 10 0 0 0 235 255 V 30 A 10 10 0 0 1 245 20 H 264"
      />

      {/* Wire: message → end */}
      <FlowWire
        left={461}
        top={208}
        width={61}
        height={173}
        d="M 461 380.5 H 481 A 10 10 0 0 0 491 370.5 V 218.5 A 10 10 0 0 1 501 208.5 H 522"
      />

      {/* Message node */}
      <motion.div variants={node} className="absolute top-0 left-[262px] h-[399px] w-[200px]">
        <div className="absolute top-0 left-[2px] h-[399px] w-[198px] rounded-[8px] border border-[#e0e0e0] shadow-[0px_4px_10px_0px_rgba(213,213,213,0.25)]">
          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
            <img src="/images/flow-message.png" alt="Message node with AI keywords, buttons and delay settings" className="absolute top-[-0.02%] left-[-1.52%] h-[100.28%] w-[104.04%] max-w-none" />
          </div>
        </div>
        <span className="absolute top-4 left-0 size-2 rounded-full bg-ink" />
      </motion.div>

      {/* End node */}
      <motion.div
        variants={node}
        className="absolute top-[169px] left-[520px] h-[87px] w-[197px] rounded-[8px] border border-[#e0e0e0] shadow-[0px_4px_10px_0px_rgba(184,184,184,0.25)] transition-transform duration-500 hover:-translate-y-1"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img src="/images/flow-end.png" alt="End Flow node" className="absolute top-[-0.01%] left-[-1.52%] h-[102.33%] w-[102.54%] max-w-none" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Automation() {
  return (
    <section id="automation" className="relative overflow-x-clip py-16 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 px-5 lg:flex-row lg:items-start lg:gap-[99px]">
        <div className="flex w-full max-w-[404px] shrink-0 flex-col gap-10 lg:gap-12">
          <Reveal className="flex flex-col gap-[26px]">
            <Eyebrow className="text-ink">No-code automation</Eyebrow>
            <SectionHeading
              align="left"
              title="Automate the work behind every conversation."
              subtitle="Create thoughtful journeys that greet, understand and guide customers, without adding more to your team's plate."
            />
          </Reveal>
          <Stagger className="flex w-[244px] flex-col gap-3" amount={0.6}>
            {POINTS.map((p) => (
              <motion.div key={p} variants={staggerChild} className="flex items-center gap-3">
                <img src="/images/icon-check.svg" alt="" className="size-[17px] shrink-0" />
                <p className="font-inter text-sm leading-normal whitespace-nowrap text-[#424242]">{p}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        <ScaleToFit width={717} height={399} className="lg:mt-[9px]">
          <FlowIllustration />
        </ScaleToFit>
      </div>
    </section>
  );
}
