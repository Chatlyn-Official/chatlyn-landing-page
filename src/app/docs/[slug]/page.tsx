import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { DOC_PAGES, findDocPage, type DocBlock } from "@/content/docs";

export function generateStaticParams() {
  return DOC_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/docs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = findDocPage(slug);
  if (!page) return {};
  return {
    title: `${page.title} | Chatlyn Docs`,
    description: page.description,
    alternates: { canonical: `/docs/${page.slug}` },
  };
}

const anchor = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function Block({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={anchor(block.text)} className="scroll-mt-[120px] pt-4 font-manrope text-[22px] leading-[1.25] font-bold text-ink">
          {block.text}
        </h2>
      );
    case "p":
      return <p className="font-dm text-base leading-[1.7] text-[#3c3c3c]">{block.text}</p>;
    case "steps":
      return (
        <ol className="flex flex-col gap-2.5">
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-3 font-dm text-base leading-[1.6] text-[#3c3c3c]">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[rgba(0,73,48,0.1)] font-dm text-xs font-bold text-forest">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-2 pl-1">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 font-dm text-base leading-[1.6] text-[#3c3c3c]">
              <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-forest" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "note":
      return (
        <div className="flex gap-3 rounded-[12px] border border-[rgba(216,162,52,0.35)] bg-[rgba(255,199,30,0.1)] p-4 font-dm text-[15px] leading-[1.6] text-ink">
          <Info className="mt-0.5 size-4 shrink-0 text-mustard" aria-hidden />
          <p>{block.text}</p>
        </div>
      );
  }
}

export default async function DocArticlePage({ params }: PageProps<"/docs/[slug]">) {
  const { slug } = await params;
  const page = findDocPage(slug);
  if (!page) notFound();

  const index = DOC_PAGES.indexOf(page);
  const previous = DOC_PAGES[index - 1];
  const next = DOC_PAGES[index + 1];

  return (
    <article className="overflow-clip rounded-[24px] border border-[#e9e9e9] bg-white px-5 pt-8 pb-8 sm:px-8 lg:px-10 lg:pt-10">
      <div className="flex max-w-[760px] flex-col gap-4">
        <Link href="/docs" className="w-fit font-dm text-sm font-semibold text-forest underline-offset-4 hover:underline">
          Docs
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="font-manrope text-[30px] leading-[1.2] font-bold text-ink sm:text-[36px]">{page.title}</h1>
          <p className="font-dm text-lg leading-[1.4] font-medium text-body">{page.description}</p>
        </div>

        {page.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      <nav aria-label="Other docs" className="mt-10 grid gap-3 border-t border-[#ececec] pt-6 sm:grid-cols-2">
        {previous ? (
          <Link
            href={`/docs/${previous.slug}`}
            className="group/nav flex flex-col gap-1 rounded-[14px] border border-[#e9e9e9] p-4 transition-colors hover:border-[rgba(79,180,146,0.5)]"
          >
            <span className="flex items-center gap-1.5 font-dm text-xs font-semibold tracking-[0.06em] text-body uppercase">
              <ArrowLeft className="size-3.5" /> Previous
            </span>
            <span className="font-dm text-base font-semibold text-ink group-hover/nav:text-forest">{previous.title}</span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next && (
          <Link
            href={`/docs/${next.slug}`}
            className="group/nav flex flex-col items-end gap-1 rounded-[14px] border border-[#e9e9e9] p-4 text-right transition-colors hover:border-[rgba(79,180,146,0.5)]"
          >
            <span className="flex items-center gap-1.5 font-dm text-xs font-semibold tracking-[0.06em] text-body uppercase">
              Next <ArrowRight className="size-3.5" />
            </span>
            <span className="font-dm text-base font-semibold text-ink group-hover/nav:text-forest">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
