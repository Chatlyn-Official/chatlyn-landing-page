"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, type Variants } from "motion/react";
import { EASE, Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./shared";

/* Rows inside each card's preview panel slide up one after another. */
const panelParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
};
const panelRow: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

function Row({
  className,
  children,
  tone = "neutral",
}: {
  className?: string;
  children: ReactNode;
  tone?: "neutral" | "green" | "sage" | "blue";
}) {
  const tones = {
    neutral: "border-[#d9d9d9] shadow-[0px_4px_10px_0px_#e6e6e6]",
    green: "border-[#c3d8ca] shadow-[0px_4px_10px_0px_#ccead6]",
    sage: "border-[#bac4ba] shadow-[0px_4px_10px_0px_#dcefdc]",
    blue: "border-[#bbbdca] shadow-[0px_4px_10px_0px_#dee4fd]",
  };
  return (
    <motion.div
      variants={panelRow}
      className={cn(
        "relative overflow-clip rounded-[6px] border-[0.5px] bg-white transition-transform duration-300 hover:-translate-y-0.5",
        tones[tone],
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div
      variants={panelParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        "relative mx-3 mt-auto h-[222px] overflow-clip rounded-t-[12px] border-[0.5px] border-b-0 px-3 pt-[19.5px] sm:mr-[31px] sm:ml-[28px] sm:px-5",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

function Card({
  index,
  title,
  description,
  children,
}: {
  index: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <motion.article
      variants={staggerChild}
      className="group/card relative flex min-h-[414px] flex-col overflow-clip rounded-[12px] border border-[#d9d9d9] bg-white transition-[box-shadow,transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#c9d6cf] hover:shadow-[0_24px_50px_-24px_rgba(3,24,20,0.25)]"
    >
      <div className="flex flex-col gap-5 px-5 pt-[31px] pb-[69px] leading-[1.2] [word-break:break-word] sm:px-[31px]">
        <p className="font-manrope text-xs font-bold text-brand">{index} / THE PLATFORM</p>
        <div className="flex flex-col gap-2">
          <h3 className="font-manrope text-[26px] font-bold text-black">{title}</h3>
          <p className="font-manrope text-sm font-medium text-[#676767]">{description}</p>
        </div>
      </div>
      {children}
    </motion.article>
  );
}

/* ------------------------------------------------------------- previews */

function EngagePreview() {
  return (
    <Panel className="flex flex-col gap-[14px] border-[#d9d9d9] bg-[#edeff4]">
      <Row className="flex h-[50px] shrink-0 items-center justify-between gap-3 px-3 sm:px-[17.5px]">
        <p className="min-w-0 font-dm text-xs leading-[1.2] font-bold text-black lg:whitespace-nowrap">Campaign audience</p>
        <span className="relative shrink-0 rounded-[4px] bg-[#dfffeb] px-2.5 py-1.5 font-dm text-xs leading-[1.2] font-semibold whitespace-nowrap text-brand">
          <span className="absolute inset-0 animate-ping rounded-[4px] bg-[#dfffeb] opacity-60 [animation-duration:2.4s]" />
          <span className="relative">Ready to send</span>
        </span>
      </Row>
      <Row className="flex h-[50px] shrink-0 items-center gap-[9px] px-3 sm:px-[17.5px]">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#fff8d3] font-dm text-xs leading-[1.2] font-semibold text-[#db9300]">
          SC
        </span>
        <p className="line-clamp-2 font-dm text-xs leading-[1.2] font-medium text-[#2f2f2f]">
          Hi Sarah, here’s something picked just for you...
        </p>
      </Row>
      <Row className="flex h-[50px] shrink-0 items-center justify-between gap-3 px-3 sm:px-[17.5px]">
        <p className="font-dm text-xs leading-[1.2] font-medium whitespace-nowrap text-[#494949]">Audience selected</p>
        <p className="shrink-0 font-dm text-xs leading-[1.2] font-bold whitespace-nowrap text-brand">
          <CountUp to={2450} format /> contacts
        </p>
      </Row>
    </Panel>
  );
}

function Connector({ src }: { src: string }) {
  return (
    <motion.div
      variants={{
        hidden: { scaleY: 0, opacity: 0 },
        show: { scaleY: 1, opacity: 1, transition: { duration: 0.4, ease: EASE } },
      }}
      className="relative mx-auto flex h-[23px] w-0 origin-top items-center justify-center"
    >
      <div className="flex-none rotate-90">
        <div className="relative h-0 w-[23px]">
          <div className="absolute inset-[-2px_0_0_0]">
            <img src={src} alt="" className="block size-full max-w-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AutomateStep({ icon, label, plainIcon }: { icon: ReactNode; label: string; plainIcon?: boolean }) {
  return (
    <Row tone="green" className="h-[50px] shrink-0">
      <div className="absolute top-[8.5px] left-[16.5px] flex items-center gap-2.5" style={plainIcon ? undefined : { top: 9.5, left: 17.5 }}>
        {icon}
        <p className="font-dm text-xs leading-[1.2] font-bold whitespace-nowrap text-black">{label}</p>
      </div>
    </Row>
  );
}

function AutomatePreview() {
  return (
    <Panel className="flex flex-col gap-[3.5px] border-[#d9d9d9] bg-[rgba(37,211,102,0.1)]">
      <AutomateStep
        plainIcon
        label="24 conversations resolved"
        icon={<img src="/images/icon-electricity.svg" alt="" className="size-8 shrink-0" />}
      />
      <Connector src="/images/line-dashed-1.svg" />
      <AutomateStep
        label="AI qualifies the lead"
        icon={
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[rgba(10,56,40,0.08)]">
            <span className="relative size-4 overflow-clip">
              <span className="absolute inset-[16.67%_8.33%]">
                <span className="absolute inset-[-7.03%_-5.62%_-7.03%_-5.63%]">
                  <img src="/images/icon-bot.svg" alt="" className="block size-full max-w-none" />
                </span>
              </span>
            </span>
          </span>
        }
      />
      <Connector src="/images/line-dashed-2.svg" />
      <AutomateStep
        label="Assign to sales team"
        icon={
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[rgba(10,56,40,0.08)]">
            <img src="/images/icon-users.svg" alt="" className="size-4" />
          </span>
        }
      />
    </Panel>
  );
}

/** Animated number that counts up once it scrolls into view. */
function CountUp({ to, suffix = "", format = false }: { to: number; suffix?: string; format?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {format ? value.toLocaleString("en-US") : value}
      {suffix}
    </span>
  );
}

const JOURNEY = ["#c2d3ce", "#abc3bb", "#96b4aa", "#85a89c", "#739b8e", "#618e7f", "#4c7f6e", "#3d7462", "#1f5f4a", "#0a5038"];

function Stat({ label, value, icon, note }: { label: string; value: ReactNode; icon: string; note: string }) {
  return (
    <Row tone="sage" className="h-[98px]">
      <div className="absolute top-[12.5px] left-2.5 flex w-[66px] flex-col gap-4 sm:left-[12.5px]">
        <p className="font-dm text-[10px] leading-[1.2] font-medium text-[#494949]">{label}</p>
        <div className="flex flex-col gap-px">
          <p className="font-manrope text-[26px] leading-[1.2] font-bold text-brand">{value}</p>
          <div className="flex items-center gap-0.5">
            <img src={icon} alt="" className="size-[11px] shrink-0" />
            <p className="font-dm text-[10px] leading-[1.2] font-medium whitespace-nowrap text-[#494949]">{note}</p>
          </div>
        </div>
      </div>
    </Row>
  );
}

function ConvertPreview() {
  return (
    <Panel className="border-[#d9d9d9] bg-[#edf4ed]">
      <div className="grid grid-cols-2 gap-3">
        <Stat label="New leads" value={<CountUp to={248} />} icon="/images/icon-growth.svg" note="This month" />
        <Stat label="Qualified" value={<CountUp to={86} suffix="%" />} icon="/images/icon-arrow-up-right.svg" note="On track" />
      </div>
      <Row tone="sage" className="mt-[17px] h-[60px]">
        <div className="absolute inset-x-[9.5px] top-[9.5px] flex flex-col gap-5">
          <p className="font-dm text-[10px] leading-[1.2] font-medium text-[#494949]">Lead journey</p>
          <div className="flex items-center gap-[3px]">
            {JOURNEY.map((c, i) => (
              <motion.span
                key={c}
                className="h-2 max-w-10 flex-1 origin-left rounded-full"
                style={{ backgroundColor: c }}
                variants={{
                  hidden: { scaleX: 0, opacity: 0 },
                  show: { scaleX: 1, opacity: 1, transition: { delay: 0.3 + i * 0.07, duration: 0.4, ease: EASE } },
                }}
              />
            ))}
          </div>
        </div>
      </Row>
    </Panel>
  );
}

function SupportPreview() {
  return (
    <Panel className="flex flex-col gap-[17px] border-[#ccc] bg-[rgba(37,72,211,0.1)]">
      <Row tone="blue" className="flex h-[50px] w-full shrink-0 items-center gap-[11px] px-[17.5px] lg:w-[73.5%]">
        <span className="grid size-[30px] shrink-0 place-items-center rounded-full bg-[#fff6b3] font-dm text-xs leading-[1.2] font-semibold text-[#d8a200]">
          JS
        </span>
        <p className="line-clamp-2 font-dm text-xs leading-[1.2] font-medium text-[#2f2f2f]">Where is my order?</p>
      </Row>
      <Row tone="blue" className="ml-auto flex h-[50px] w-full shrink-0 items-center gap-[5px] px-[11.5px] lg:w-[73.3%]">
        <span className="grid size-9 shrink-0 place-items-center">
          <motion.img
            src="/images/icon-ai-sparkle-20.svg"
            alt=""
            className="size-5"
            animate={{ rotate: [0, 18, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
          />
        </span>
        <p className="line-clamp-2 font-dm text-xs leading-[1.2] font-medium text-[#2f2f2f]">
          Your order is on the way! Here&apos;s your tracking link.
        </p>
      </Row>
      <Row tone="blue" className="ml-auto flex h-[50px] w-full shrink-0 items-center gap-2.5 px-[13.5px] lg:w-[73.3%]">
        <span className="rounded-[4px] bg-[#dfffeb] px-2.5 py-1.5 font-dm text-xs leading-[1.2] font-semibold whitespace-nowrap text-brand">
          Human handoff
        </span>
        <p className="line-clamp-2 font-dm text-xs leading-[1.2] font-medium text-[#2f2f2f]">Assigned to Maya</p>
      </Row>
    </Panel>
  );
}

export function Platform() {
  return (
    <section id="features" className="relative bg-cream py-16 lg:pt-20 lg:pb-20">
      <div className="mx-auto w-full max-w-[1176px] px-5">
        <Reveal>
          <SectionHeading
            className="max-w-[787px]"
            title="One platform for every customer conversation."
            subtitle="From the first hello to the follow-up, connect every moment with the right tools and the right people."
            subtitleClassName="max-w-[732px]"
          />
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-[60px] lg:gap-[42px]" amount={0.1}>
          <Card index="01" title="Engage" description="Start meaningful conversations with customers, wherever they are.">
            <EngagePreview />
          </Card>
          <Card index="02" title="Automate" description="Build powerful workflows without complicated coding.">
            <AutomatePreview />
          </Card>
          <Card index="03" title="Convert" description="Qualify leads and move customers through the sales journey.">
            <ConvertPreview />
          </Card>
          <Card index="04" title="Support" description="Give customers fast, personalized support with AI and human agents.">
            <SupportPreview />
          </Card>
        </Stagger>
      </div>
    </section>
  );
}
