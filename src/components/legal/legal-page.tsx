import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

/** Shared legal page shell: white card (Figma 312:719) between the site header and the CTA. */
export function LegalPage({ children }: { children: ReactNode }) {
  return (
    <main className="relative px-5 pt-[100px] sm:pt-[130px] lg:pt-[164px]">
      <Reveal y={30} amount={0.05} className="mx-auto w-full max-w-[1080px]">
        <article className="legal-content overflow-clip rounded-[24px] border border-[#e9e9e9] bg-white px-5 pt-8 pb-10 sm:px-8 lg:px-[41px] lg:pt-12 lg:pb-16">
          {children}
        </article>
      </Reveal>
    </main>
  );
}
