"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE, Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { PillLink, SectionHeading } from "./shared";

const TERMS = [
  { id: "monthly", label: "Monthly", discount: 0 },
  { id: "quarterly", label: "Quarterly", discount: 0.1 },
  { id: "half", label: "6 Month", discount: 0.2 },
  { id: "yearly", label: "Yearly", discount: 0.3 },
] as const;

type TermId = (typeof TERMS)[number]["id"];

type Plan = {
  name: string;
  seats: string;
  monthly: number | null;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Basic",
    seats: "1 Owner + 2 Agents",
    monthly: 1499,
    features: [
      "WhatsApp API setup + Blue Tick application",
      "Shared Team Inbox",
      "Meta-approved templates",
      "Unlimited contacts & broadcasts",
      "1 automation flow + 5 keyword replies",
    ],
    cta: "Get Started",
  },
  {
    name: "Advance",
    seats: "1 Owner + 5 Agents",
    monthly: 1999,
    features: [
      "Everything in Basic",
      "Campaign scheduling & click tracking",
      "Audience retargeting",
      "Smart agent routing",
      "Shopify & payment integrations",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    seats: "1 Owner + 9 Agents (up to 200)",
    monthly: 2999,
    featured: true,
    features: [
      "Everything in Advance",
      "AI Agent (2,000 AI replies/month)",
      "Unlimited automation flows",
      "REST API & webhooks",
      "CRM integrations",
      "Priority support",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    seats: "Unlimited users",
    monthly: null,
    features: [
      "Everything in Pro",
      "Unlimited team seats & WhatsApp numbers",
      "Unlimited AI agents & AI brains",
      "Multiple workspaces",
      "Dedicated implementation team",
      "4-hour SLA",
    ],
    cta: "Talk to Sales",
  },
];

const inr = (n: number) => n.toLocaleString("en-IN");

function TermToggle({ value, onChange }: { value: TermId; onChange: (t: TermId) => void }) {
  return (
    <div
      role="tablist"
      aria-label="Billing term"
      className="grid w-full max-w-[680px] grid-cols-2 gap-1 rounded-[28px] border-[0.667px] border-[#e2e8f0] bg-white p-[8.667px] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)] sm:flex sm:h-[55px] sm:items-center sm:gap-0 sm:rounded-full"
    >
      {TERMS.map((t) => {
        const active = t.id === value;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={active}
            type="button"
            onClick={() => onChange(t.id)}
            className="relative flex cursor-pointer flex-col items-center justify-center gap-1 rounded-[20px] px-3 py-2 sm:flex-row sm:gap-2 sm:rounded-full sm:px-6 sm:py-2.5"
          >
            {active ? (
              <motion.span
                layoutId="term-pill"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                className="absolute inset-0 rounded-[20px] sm:rounded-full bg-ink drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]"
              />
            ) : null}
            <span
              className={cn(
                "relative font-dm text-sm leading-5 font-semibold whitespace-nowrap transition-colors duration-300",
                active ? "text-white" : "text-ink",
              )}
            >
              {t.label}
            </span>
            {t.discount ? (
              <span className="relative flex h-[22px] items-center justify-center rounded-full border-[0.667px] border-[#b9f8cf] bg-[#dcfce7] px-2 font-dm text-[10px] leading-normal font-semibold whitespace-nowrap text-[#008236] sm:w-[76px]">
                Save {t.discount * 100}%
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

function Price({ plan, term }: { plan: Plan; term: TermId }) {
  if (plan.monthly == null) {
    return <p className="font-dm text-4xl leading-[51px] font-bold whitespace-nowrap text-ink">Custom</p>;
  }
  const discount = TERMS.find((t) => t.id === term)!.discount;
  const amount = Math.round(plan.monthly * (1 - discount));
  return (
    <div className="flex items-end gap-[5px]">
      <div className="relative h-[44px] overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.p
            key={amount}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className={cn(
              "font-inter text-4xl leading-normal font-bold whitespace-nowrap",
              plan.featured ? "text-gold" : "text-ink",
            )}
          >
            ₹{inr(amount)}
          </motion.p>
        </AnimatePresence>
      </div>
      <p
        className={cn(
          "flex h-[35px] w-[38px] flex-col justify-center font-inter text-xl leading-[50px] font-medium",
          plan.featured ? "text-[#fffae9]" : "text-[#676767]",
        )}
      >
        /mo
      </p>
    </div>
  );
}

function PlanCard({ plan, term }: { plan: Plan; term: TermId }) {
  const featured = plan.featured;
  return (
    <motion.article
      variants={staggerChild}
      className={cn(
        "group/plan relative flex rounded-[16px] border px-[26px] py-9 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2",
        featured
          ? "border-gold drop-shadow-[0px_0px_12.5px_rgba(255,199,30,0.25)] hover:drop-shadow-[0px_0px_22px_rgba(255,199,30,0.45)]"
          : "overflow-clip border-[#d2deda] bg-white hover:shadow-[0_24px_48px_-24px_rgba(0,73,48,0.3)]",
      )}
      style={
        featured
          ? { backgroundImage: "radial-gradient(ellipse 100% 100% at 50% 50%, #005135 0%, #083f2b 100%)" }
          : undefined
      }
    >
      {featured ? (
        <span className="absolute top-[-14.33px] left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#ffbf00] to-[#ffd34e] px-5 py-2 drop-shadow-[0px_10px_7.5px_rgba(255,199,30,0.1)]">
          <span className="font-inter text-sm leading-4 font-semibold whitespace-nowrap text-forest">Most Popular</span>
        </span>
      ) : null}

      <div className="flex min-h-[530px] w-full flex-col justify-between gap-10">
        <div className={cn("flex flex-col", plan.monthly == null ? "gap-[58px]" : "gap-[65px]")}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5 leading-[1.2]">
              <h3 className={cn("font-dm text-2xl font-bold", featured ? "text-gold" : "text-pine")}>{plan.name}</h3>
              <p className={cn("font-dm text-sm font-semibold", featured ? "text-[#fffae9]" : "text-body")}>{plan.seats}</p>
            </div>
            <Price plan={plan} term={term} />
          </div>
          <ul className="flex flex-col gap-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span
                  className={cn(
                    "flex size-5 shrink-0 items-center justify-center rounded-full border-[0.667px] px-1",
                    featured ? "border-[rgba(255,199,30,0.1)] bg-[rgba(250,195,31,0.04)]" : "border-[rgba(0,73,48,0.25)] bg-[#f4fffb]",
                  )}
                >
                  <img src={featured ? "/images/check-gold.svg" : "/images/check-green.svg"} alt="" className="size-3" />
                </span>
                <span className={cn("flex-1 font-inter text-sm leading-normal", featured ? "text-white" : "text-forest")}>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <PillLink href="/contact" variant={featured ? "gold" : "muted"} size="block">
          {plan.cta}
        </PillLink>
      </div>
    </motion.article>
  );
}

export function Pricing() {
  const [term, setTerm] = useState<TermId>("monthly");
  return (
    <section id="pricing" className="relative py-16 lg:pt-20 lg:pb-20">
      <div className="mx-auto w-full max-w-[1248px] px-5">
        <Reveal>
          <SectionHeading
            className="max-w-[720px]"
            title="A plan for every stage of growth."
            subtitle={
              <>
                Pricing and plan inclusions shown as concept placeholders.
                <br className="hidden sm:block" /> Confirm current details with Chatlyn.
              </>
            }
          />
        </Reveal>

        <div className="mt-10 flex flex-col items-center gap-[60px] lg:mt-[60px]">
          <Reveal className="flex w-full justify-center">
            <TermToggle value={term} onChange={setTerm} />
          </Reveal>
          <Stagger className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4" amount={0.1}>
            {PLANS.map((p) => (
              <PlanCard key={p.name} plan={p} term={term} />
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-[42px] flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          {["Price do not include GST; 18% GST is added at checkout", "Save up to 30% with longer terms"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <img src="/images/dot-small.svg" alt="" className="size-1.5 shrink-0" />
              <p className="font-inter text-xs leading-normal font-semibold text-ink">{t}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
