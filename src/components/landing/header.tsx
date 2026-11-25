"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { PillLink } from "./shared";

/** `section` items scroll to a block on the home page; `page` items are their own routes. */
const NAV: { label: string; section?: string; page?: string }[] = [
  { label: "Home", section: "home" },
  { label: "Feature", section: "features" },
  { label: "How it work", section: "how-it-works" },
  { label: "Pricing", section: "pricing" },
  { label: "FAQs", section: "faqs" },
  { label: "Blog", section: "blog" },
  { label: "Contact", page: "/contact" },
];

/** On the home page link straight to the section; elsewhere go home first ("/#pricing"). */
function hrefFor(item: (typeof NAV)[number], onHome: boolean) {
  if (item.page) return item.page;
  if (item.section === "home") return onHome ? "#home" : "/";
  return onHome ? `#${item.section}` : `/#${item.section}`;
}

/** Highlights the link for the section under the header (home) or the current page. */
function useActiveItem(pathname: string) {
  const [section, setSection] = useState("home");
  const onHome = pathname === "/";
  useEffect(() => {
    if (!onHome) return;
    const els = NAV.filter((n) => n.section)
      .map((n) => document.getElementById(n.section!))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setSection(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);
  return (item: (typeof NAV)[number]) =>
    item.page ? pathname === item.page : onHome && item.section === section;
}

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const isActive = useActiveItem(pathname);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6"
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1094px] items-center justify-between overflow-clip rounded-full border border-[rgba(79,180,146,0.24)] px-4 py-2.5 transition-[background-color,box-shadow,backdrop-filter] duration-500 sm:px-8 sm:py-3",
          scrolled
            ? "bg-cream/85 shadow-[0px_8px_30px_0px_rgba(27,107,82,0.18)] backdrop-blur-md"
            : "bg-cream shadow-[0px_0px_10px_0px_rgba(27,107,82,0.17)]",
        )}
      >
        <Link href={onHome ? "#home" : "/"} aria-label="Chatlyn home" className="transition-transform duration-300 hover:scale-[1.03]">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={hrefFor(item, onHome)}
              className="group/nav relative font-dm text-base leading-[1.2] font-semibold whitespace-nowrap text-black"
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-0.5 w-full origin-left rounded-full bg-forest transition-transform duration-300 ease-out",
                  isActive(item) ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PillLink href={onHome ? "#pricing" : "/#pricing"} className="hidden sm:inline-flex">
            Get Started
          </PillLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-full bg-pine text-white transition-transform active:scale-95 lg:hidden"
            >
              <MenuIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86%] max-w-sm bg-cream p-6">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo />
              <nav className="mt-8 flex flex-col">
                {NAV.map((item, i) => (
                  <SheetClose
                    key={item.label}
                    nativeButton={false}
                    render={
                      <motion.a
                        href={hrefFor(item, onHome)}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                      />
                    }
                    className={cn(
                      "border-b border-[#e6e1d4] py-4 font-dm text-lg font-semibold text-ink",
                      isActive(item) && "text-forest",
                    )}
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <PillLink href={onHome ? "#pricing" : "/#pricing"} size="lg" className="mt-auto w-full" onClick={() => setOpen(false)}>
                Get Started
              </PillLink>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
