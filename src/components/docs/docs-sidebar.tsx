"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";
import { DOC_CATEGORIES, type DocPage } from "@/content/docs";
import { cn } from "@/lib/utils";

function searchableText(page: DocPage) {
  const text = page.blocks.flatMap((block) => ("items" in block ? block.items : [block.text]));
  return [page.title, page.description, ...text].join(" ").toLowerCase();
}

/** Docs navigation with search. On phones it folds into a "Browse docs" button. */
export function DocsSidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const categories = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return DOC_CATEGORIES;
    return DOC_CATEGORIES.map((category) => ({
      ...category,
      pages: category.pages.filter((page) => {
        const text = searchableText(page);
        return words.every((word) => text.includes(word));
      }),
    })).filter((category) => category.pages.length > 0);
  }, [query]);

  return (
    <aside className="lg:sticky lg:top-[110px] lg:max-h-[calc(100vh-130px)] lg:w-[260px] lg:shrink-0 lg:overflow-y-auto lg:pr-1" data-lenis-prevent>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="docs-nav"
        className="flex w-full items-center justify-between rounded-full border border-[rgba(79,180,146,0.24)] bg-white px-5 py-3 font-dm text-base font-semibold text-ink shadow-[0px_0px_10px_0px_rgba(27,107,82,0.1)] lg:hidden"
      >
        Browse docs
        <ChevronDown className={cn("size-4 transition-transform duration-300", open && "rotate-180")} />
      </button>

      <div id="docs-nav" className={cn("mt-4 flex-col gap-6 lg:mt-0 lg:flex", open ? "flex" : "hidden")}>
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-body" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs"
            aria-label="Search docs"
            className="h-11 w-full rounded-full border-2 border-[#e3ddcf] bg-white pr-4 pl-10 font-dm text-sm text-ink outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-black/40 focus:border-forest focus:shadow-[0_0_0_4px_rgba(0,73,48,0.08)]"
          />
        </div>

        {categories.length === 0 && <p className="px-3 font-dm text-sm text-body">Nothing found.</p>}

        {categories.map((category) => (
          <div key={category.title}>
            <p className="mb-2 px-3 font-dm text-xs font-semibold tracking-[0.08em] text-body uppercase">{category.title}</p>
            <ul className="flex flex-col gap-0.5">
              {category.pages.map((page) => {
                const href = `/docs/${page.slug}`;
                const active = pathname === href;
                return (
                  <li key={page.slug}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-[10px] px-3 py-2 font-dm text-[15px] leading-[1.3] transition-colors duration-200",
                        active ? "bg-[rgba(0,73,48,0.1)] font-semibold text-forest" : "text-ink hover:bg-white hover:text-forest",
                      )}
                    >
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
