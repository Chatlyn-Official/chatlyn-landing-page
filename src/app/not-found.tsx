import type { Metadata } from "next";
import { Eyebrow, PillLink } from "@/components/landing/shared";

export const metadata: Metadata = { title: "Page not found | Chatlyn" };

export default function NotFound() {
  return (
    <main className="relative px-5 pt-[140px] pb-16 sm:pt-[170px] lg:pt-[200px]">
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-6 text-center">
        <Eyebrow className="text-ink">404</Eyebrow>
        <h1 className="font-manrope text-[36px] leading-[1.2] font-bold text-ink sm:text-[46px]">
          This page <span className="text-forest">isn’t here</span>
        </h1>
        <p className="font-dm text-lg leading-[1.3] font-medium text-body">
          The link may be old or mistyped. Head back home or browse the docs.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <PillLink href="/">Go home</PillLink>
          <PillLink href="/docs" variant="outline">
            Browse docs
          </PillLink>
        </div>
      </div>
    </main>
  );
}
