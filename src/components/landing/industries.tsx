"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { SectionHeading } from "./shared";

type Icon = { src: string; inset?: string; pad?: string };

const INDUSTRIES: { title: string; body: string; icon: Icon }[] = [
  {
    title: "E-commerce",
    body: "From product questions to post-purchase support.",
    icon: { src: "/images/ind-bag.svg" },
  },
  {
    title: "Healthcare",
    body: "Help patients navigate appointments and updates.",
    icon: { src: "/images/ind-heart.svg", inset: "15.38% 11.39% 15.25% 11.54%", pad: "-5.56% -4.99% -5.54% -4.99%" },
  },
  {
    title: "Education",
    body: "Keep students and families informed at every step.",
    icon: { src: "/images/ind-school.svg", inset: "19.23% 8.97% 22.44% 7.69%", pad: "-6.59% -4.62%" },
  },
  {
    title: "Real Estate",
    body: "Follow up with interested buyers while interest is high.",
    icon: { src: "/images/ind-home.svg", inset: "11.54% 13.46% 12.46% 11.54%", pad: "-5.06% -5.13%" },
  },
  {
    title: "Travel",
    body: "Be there with timely answers throughout the journey.",
    icon: { src: "/images/ind-plane.svg" },
  },
  {
    title: "Financial Services",
    body: "Deliver more responsive, personalized communication.",
    icon: { src: "/images/ind-card.svg", inset: "19.23% 8.97% 18.27% 7.69%", pad: "-6.15% -4.62%" },
  },
];

function IndustryIcon({ icon }: { icon: Icon }) {
  if (!icon.inset) return <img src={icon.src} alt="" className="absolute inset-0 block size-full max-w-none" />;
  return (
    <div className="absolute" style={{ inset: icon.inset }}>
      <div className="absolute" style={{ inset: icon.pad }}>
        <img src={icon.src} alt="" className="block size-full max-w-none" />
      </div>
    </div>
  );
}

export function Industries() {
  return (
    <section id="industries" className="relative py-16 lg:pt-20 lg:pb-20">
      <div className="mx-auto w-full max-w-[1238px] px-5">
        <Reveal>
          <SectionHeading
            className="max-w-[691px]"
            title="Good conversations move every industry forward."
            subtitle="Bring the speed and familiarity of WhatsApp to the moments that matter in your business."
            subtitleClassName="max-w-[560px]"
          />
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-3" amount={0.15}>
          {INDUSTRIES.map((item, i) => (
            <motion.article
              key={item.title}
              variants={staggerChild}
              className="group/ind relative h-[170px] rounded-[10px] border border-[#c7c7c7] bg-cream shadow-[0px_4px_30px_1px_rgba(222,222,222,0.4)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(0,73,48,0.28),0_4px_30px_1px_rgba(222,222,222,0.4)]"
            >
              <div className="ind-icon absolute top-[25px] left-[25px] size-[26px] overflow-clip">
                <IndustryIcon icon={item.icon} />
              </div>
              <h3 className="absolute top-[75px] left-[25px] font-dm text-lg leading-[1.2] font-semibold whitespace-nowrap text-ink">
                {item.title}
              </h3>
              <p className="absolute top-[105px] left-[25px] w-[min(330px,calc(100%-50px))] font-dm text-sm leading-[1.2] font-normal text-[#505050]">
                {item.body}
              </p>

              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-clip rounded-[9px]">
                {/* Decorative arcs (top-right); on hover they fill solid sage (Figma "Property 1=Hover") */}
                <div className="pointer-events-none absolute top-[-135.68px] right-[-129.67px] flex size-[241.398px] items-center justify-center">
                  <div className="flex-none rotate-[-113.1deg]">
                    <div className="relative size-[183.976px]">
                      <div className="absolute inset-[-5.44%_-4.41%_34.47%_-5.44%]">
                        <img src="/images/ind-arc-1.svg" alt="" className="block size-full max-w-none" />
                        <img
                          src="/images/ind-arc-1-hover.svg"
                          alt=""
                          className="absolute inset-0 block size-full max-w-none opacity-0 transition-opacity duration-500 ease-out group-hover/ind:opacity-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute top-[-171px] right-[-164.25px] flex size-[310.253px] items-center justify-center">
                  <div className="flex-none rotate-[-121.58deg]">
                    <div className="relative size-[225.538px]">
                      <div className="absolute inset-[-45.23%_-45.15%_2.1%_-45.23%]">
                        <img src="/images/ind-arc-2.svg" alt="" className="block size-full max-w-none" />
                        <img
                          src="/images/ind-arc-2-hover.svg"
                          alt=""
                          className="absolute inset-0 block size-full max-w-none opacity-0 transition-opacity duration-500 ease-out group-hover/ind:opacity-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover border: 1px gradient ring (Figma hover export). Drawn as an SVG stroke so it
                  anti-aliases evenly on all sides at any display scaling. */}
              <svg
                aria-hidden
                className="pointer-events-none absolute -inset-px size-[calc(100%+2px)] overflow-visible opacity-0 transition-opacity duration-500 ease-out group-hover/ind:opacity-100"
              >
                <defs>
                  <linearGradient id={`ind-border-${i}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3f907d" />
                    <stop offset="50%" stopColor="#35806d" />
                    <stop offset="100%" stopColor="#2f6f5f" />
                  </linearGradient>
                </defs>
                <rect
                  x="0.5"
                  y="0.5"
                  width="calc(100% - 1px)"
                  height="calc(100% - 1px)"
                  rx="9.5"
                  fill="none"
                  stroke={`url(#ind-border-${i})`}
                  strokeWidth="1"
                />
              </svg>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
