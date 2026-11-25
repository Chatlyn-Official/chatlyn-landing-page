import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- buttons */

export const pillVariants = cva(
  "group/pill relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-dm font-semibold leading-[1.2] whitespace-nowrap transition-[transform,box-shadow,background-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none select-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-3 focus-visible:ring-forest/40",
  {
    variants: {
      variant: {
        /** Dark green — "Get Started" */
        primary:
          "bg-pine text-white hover:shadow-[0_10px_24px_-8px_rgba(10,56,40,0.55)]",
        /** Cream with dark outline — "Book Demo" */
        outline:
          "border border-ink bg-cream text-[#3c3c3c] shadow-[inset_0px_4px_10px_0px_rgba(0,73,48,0.1)] hover:bg-white hover:shadow-[inset_0px_4px_10px_0px_rgba(0,73,48,0.1),0_10px_24px_-10px_rgba(3,24,20,0.35)]",
        /** Plain cream — CTA banner buttons */
        cream:
          "bg-cream text-[#3c3c3c] hover:bg-white hover:shadow-[0_10px_28px_-8px_rgba(255,199,30,0.45)]",
        /** Forest — "Contact Chatlyn" */
        forest:
          "border-[0.7px] border-[rgba(3,24,20,0.49)] bg-forest text-[#f2f2f2] hover:shadow-[0_10px_24px_-8px_rgba(0,73,48,0.55)]",
        /** Grey — pricing cards */
        muted:
          "border border-[#cecece] bg-[#ededed] text-[#3c3c3c] hover:border-pine hover:bg-pine hover:text-white",
        /** Gold — highlighted pricing card */
        gold: "border border-[#7d5e00] bg-gold text-[#053121] hover:shadow-[0_10px_28px_-6px_rgba(255,199,30,0.6)]",
      },
      size: {
        md: "h-10 px-8 py-2.5 text-base",
        lg: "h-12 px-[42px] py-3.5 text-lg sm:text-xl",
        block: "h-[42px] w-full px-[42px] py-2.5 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type PillLinkProps = ComponentProps<"a"> & VariantProps<typeof pillVariants>;

/** Pill-shaped call-to-action link with a soft sheen on hover. */
export function PillLink({
  className,
  variant,
  size,
  children,
  ...props
}: PillLinkProps) {
  return (
    <a className={cn(pillVariants({ variant, size }), className)} {...props}>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity group-hover/pill:animate-[shimmer_0.9s_ease] group-hover/pill:opacity-100"
      />
      <span className="relative">{children}</span>
    </a>
  );
}

/* --------------------------------------------------------------- headings */

/** Centered section title (Manrope 46) + subtitle (DM Sans 20) — the "Main Text" component. */
export function SectionHeading({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  align = "center",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 leading-[1.2] [word-break:break-word]",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className,
      )}
    >
      <h2
        className={cn(
          "w-full font-manrope text-[32px] font-bold text-ink sm:text-[40px] lg:text-[46px]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "font-dm text-base font-medium text-body sm:text-lg lg:text-xl",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

/** Small dot + label used above section titles ("No-code automation", "Coming Soon"…). */
export function Eyebrow({
  children,
  dot = "/images/dot-dark.svg",
  className,
}: {
  children: ReactNode;
  dot?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <img src={dot} alt="" className="size-2.5 shrink-0" />
      <p className="font-dm text-base leading-[1.2] font-bold whitespace-nowrap capitalize">
        {children}
      </p>
    </div>
  );
}

/** Horizontal page container matching the 1200px content width (120px gutters at 1440). */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-5", className)}
      {...props}
    />
  );
}
