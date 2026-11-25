"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { Eyebrow, PillLink, SectionHeading } from "./shared";

const FAQS = [
  {
    q: "What is Chatlyn?",
    a: "Chatlyn is a business communication platform that brings WhatsApp conversations, a shared team inbox, campaigns, automation, and AI agents into one workspace.",
  },
  {
    q: "Does Chatlyn use the official WhatsApp API?",
    a: "Yes. Chatlyn is built on the official WhatsApp Business Platform (Cloud API) from Meta, so your number, templates and messages follow Meta’s policies and stay reliable as you scale.",
  },
  {
    q: "Can multiple team members use one WhatsApp number?",
    a: "Yes. Your whole team works from one shared inbox on a single number. Assign chats, add internal notes and hand conversations over without losing context.",
  },
  {
    q: "Can I create automated workflows?",
    a: "Yes. Build flows visually with keyword triggers, buttons, delays and routing rules, with no code required, so common questions and follow-ups run on their own.",
  },
  {
    q: "Does Chatlyn provide AI agents?",
    a: "Yes. AI agents can answer questions, qualify leads and hand off to a human when needed. AI replies are included on the Pro plan and above.",
  },
  {
    q: "Can Chatlyn integrate with my existing tools?",
    a: "Yes. Connect your store, CRM and payment tools, or use the REST API and webhooks to plug Chatlyn into your own systems.",
  },
  {
    q: "Is there a free trial?",
    a: "Talk to the Chatlyn team and we’ll help you get started with a plan that fits, including a guided setup of your WhatsApp Business number.",
  },
  {
    q: "How does pricing work?",
    a: "Plans are billed monthly, quarterly, half-yearly or yearly, with savings of up to 30% on longer terms. Prices exclude 18% GST, and WhatsApp conversation charges from Meta are billed separately.",
  },
];

function Divider() {
  return (
    <div className="relative mt-5 h-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <img src="/images/faq-line.svg" alt="" className="block size-full max-w-none" />
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faqs" className="relative py-16 lg:pt-[120px] lg:pb-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 px-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <Reveal className="flex w-full max-w-[409px] shrink-0 flex-col items-start">
          <Eyebrow className="text-ink">Frequently asked questions</Eyebrow>
          <SectionHeading
            align="left"
            className="mt-[26px] gap-4"
            title="A few things you might be wondering."
            subtitle="Still have questions? The Chatlyn team can help you find the right fit."
          />
          <PillLink href="/contact" variant="forest" className="mt-[30px]">
            Contact Chatlyn
          </PillLink>
        </Reveal>

        <Stagger className="w-full max-w-[714px]" amount={0.1}>
          <Accordion defaultValue={[FAQS[0].q]} className="gap-5">
            {FAQS.map((f) => (
              <motion.div key={f.q} variants={staggerChild}>
                <AccordionItem value={f.q} className="flex flex-col not-last:border-b-0">
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger className="group/faq flex min-h-[22px] w-full cursor-pointer items-center justify-between gap-6 text-left outline-none focus-visible:rounded-sm focus-visible:ring-3 focus-visible:ring-forest/30">
                      <span className="font-dm text-base leading-[1.2] font-semibold text-ink transition-colors duration-300 group-hover/faq:text-forest">
                        {f.q}
                      </span>
                      <span className="flex size-[16.971px] shrink-0 items-center justify-center">
                        <img
                          src="/images/faq-cross.svg"
                          alt=""
                          className="size-3 rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/faq:scale-125 group-aria-expanded/faq:rotate-0"
                        />
                      </span>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="pt-5 pb-0">
                    <p className="max-w-[675px] font-dm text-base leading-[1.2] font-medium text-body">{f.a}</p>
                  </AccordionContent>
                  <Divider />
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </Stagger>
      </div>
    </section>
  );
}
