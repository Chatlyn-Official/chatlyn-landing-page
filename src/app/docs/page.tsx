import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/landing/shared";
import { DOC_CATEGORIES } from "@/content/docs";

export const metadata: Metadata = {
  title: "Docs | Chatlyn",
  description: "Learn how to use Chatlyn: WhatsApp inbox, templates, broadcasts, flows, team and billing.",
  alternates: { canonical: "/docs" },
};

export default function DocsHomePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Eyebrow className="text-ink">Docs</Eyebrow>
        <h1 className="font-manrope text-[34px] leading-[1.2] font-bold text-ink sm:text-[42px]">
          Chatlyn <span className="text-forest">Docs</span>
        </h1>
        <p className="font-dm text-lg leading-[1.3] font-medium text-body">Step-by-step guides for everything in Chatlyn.</p>
      </div>

      {DOC_CATEGORIES.map((category) => (
        <section key={category.title} className="flex flex-col gap-4">
          <h2 className="font-manrope text-xl leading-[1.2] font-bold text-ink">{category.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {category.pages.map((page) => (
              <Link
                key={page.slug}
                href={`/docs/${page.slug}`}
                className="group/doc flex flex-col gap-2 rounded-[16px] border border-[#e9e9e9] bg-white p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[rgba(79,180,146,0.5)] hover:shadow-[0px_10px_30px_-12px_rgba(0,73,48,0.25)]"
              >
                <span className="flex items-center justify-between gap-2 font-dm text-base leading-[1.25] font-semibold text-ink group-hover/doc:text-forest">
                  {page.title}
                  <ArrowRight className="size-4 shrink-0 -translate-x-1 opacity-0 transition-[opacity,transform] duration-300 group-hover/doc:translate-x-0 group-hover/doc:opacity-100" />
                </span>
                <span className="font-dm text-sm leading-[1.4] text-body">{page.description}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
