import type { ReactNode } from "react";

/*
 * Same component names as whatsapp-saas so the policy text could be copied unchanged.
 * Styles follow Figma node 312:719 — see design/figma-context/legal-content-312-719.md
 * (spacing between blocks lives in globals.css under `.legal-content`).
 */

export function LegalH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-manrope text-[30px] leading-[1.2] font-bold text-ink sm:text-[36px] lg:text-[42px] lg:leading-normal">
      {children}
    </h1>
  );
}

export function LegalH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-manrope text-[24px] leading-[1.2] font-bold text-ink lg:text-[30px]">
      {children}
    </h2>
  );
}

export function LegalH3({ children }: { children: ReactNode }) {
  return <h3 className="font-manrope text-lg leading-[1.2] font-bold text-ink lg:text-xl">{children}</h3>;
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className="legal-p">{children}</p>;
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="legal-list">{children}</ul>;
}

export function LegalDivider() {
  return (
    <div className="legal-divider relative h-px w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <img src="/images/legal-divider.svg" alt="" className="block size-full max-w-none" />
      </div>
    </div>
  );
}
