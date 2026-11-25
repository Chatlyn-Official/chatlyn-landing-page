"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { SectionHeading } from "./shared";

const MODULES = ["Inbox", "Contacts", "Campaigns", "Automation", "AI Agents", "Analytics", "Integrations", "Settings"];

/** Small #eee pills that mask text in the inbox screenshot (positions as % of the 930×440 inner frame). */
const MASKS = [
  { left: "24.62%", top: "10.23%", width: "4.41%", height: "1.14%" },
  { left: "91.18%", top: "25.68%", width: "4.62%", height: "1.14%" },
  { left: "87.53%", top: "38.41%", width: "4.73%", height: "1.36%" },
];

export function Workspace() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="relative overflow-clip bg-ink py-16 lg:pt-20 lg:pb-20">
      <div ref={ref} className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5">
        <Reveal>
          <SectionHeading
            className="max-w-[751px]"
            titleClassName="text-mustard"
            subtitleClassName="max-w-[732px] text-[#c3c3c3]"
            title="Everything your team needs. In one workspace."
            subtitle="An inbox built for real teamwork, with the context, intelligence and tools to move every conversation forward."
          />
        </Reveal>

        <motion.div style={{ y }} className="mt-10 w-full max-w-[938px] lg:mt-[60px]">
          <Reveal y={50} amount={0.2}>
            <div className="relative aspect-[938/448] w-full overflow-clip rounded-[10px] border-2 border-[#d8efeb] bg-cream shadow-[4px_4px_50px_0px_rgba(239,194,73,0.17),-4px_-4px_40px_0px_rgba(239,194,73,0.17)] transition-shadow duration-700 hover:shadow-[4px_4px_70px_0px_rgba(239,194,73,0.3),-4px_-4px_60px_0px_rgba(239,194,73,0.3)] sm:rounded-[17.034px] sm:border-4">
              <div className="absolute top-[1.364%] left-[-0.215%] h-[99.09%] w-[101.29%]">
                <Image
                  src="/images/inbox.png"
                  alt="Chatlyn shared team inbox with conversations, chat thread and contact details"
                  fill
                  sizes="(max-width: 980px) 100vw, 942px"
                  className="pointer-events-none object-cover"
                />
              </div>
              {MASKS.map((m) => (
                <div key={m.left} className="absolute rounded-full bg-[#eee]" style={m} />
              ))}
            </div>
          </Reveal>
        </motion.div>

        <Stagger className="mt-[30px] flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2" amount={0.5}>
          {MODULES.map((m) => (
            <motion.div
              key={m}
              variants={staggerChild}
              whileHover={{ y: -2 }}
              className="flex cursor-default items-center gap-[3px]"
            >
              <img src="/images/dot-yellow.svg" alt="" className="size-2 shrink-0" />
              <p className="font-dm text-xs leading-[1.2] font-medium whitespace-nowrap text-[#ffc71e]">{m}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
