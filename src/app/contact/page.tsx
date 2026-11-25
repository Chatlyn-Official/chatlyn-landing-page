import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/landing/shared";

export const metadata: Metadata = {
  title: "Contact Us | Chatlyn",
  description: "Our dedicated customer support team is just a message or call away.",
};

const DETAILS = [
  { icon: "/images/icon-email.svg", label: "Email", value: "contact@chatlyn.in", href: "mailto:contact@chatlyn.in", gap: "gap-[11px]" },
  { icon: "/images/icon-phone.svg", label: "Contact", value: "+91 99999 88888", href: "tel:+919999988888", gap: "gap-[11px]" },
  { icon: "/images/icon-location.svg", label: "Location", value: "Ahmedabad, Gujarat", href: undefined, gap: "gap-[13px]" },
];

/* Figma node 293:1595 — see design/figma-context/contact-form-293-1595.md */
export default function ContactPage() {
  return (
    <main className="relative">
      <section className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 px-5 pt-[120px] pb-12 sm:pt-[150px] lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:pt-[190px] lg:pb-[86px]">
        <Reveal className="flex w-full max-w-[449px] flex-col gap-8 lg:mt-[53px]">
          <div className="flex flex-col gap-[26px]">
            <Eyebrow className="text-ink">Contact Us</Eyebrow>
            <div className="flex flex-col gap-4 [word-break:break-word]">
              <h1 className="font-manrope text-[38px] leading-[1.2] font-bold text-ink sm:text-[46px] lg:text-[52px]">
                How can we <span className="text-forest">help</span>
                <br />
                you today?
              </h1>
              <p className="font-dm text-lg leading-[1.2] font-medium text-body lg:text-xl">
                Our dedicated customer support team is just a message or call away.
              </p>
            </div>
          </div>

          <ul className="flex w-[280px] flex-col gap-2.5">
            {DETAILS.map((d) => {
              const body = (
                <>
                  <span className="flex size-[42px] shrink-0 items-center justify-center overflow-clip rounded-[8px] bg-[rgba(0,73,48,0.1)] p-[9px] transition-[background-color,transform] duration-300 group-hover/ct:scale-105 group-hover/ct:bg-[rgba(0,73,48,0.18)]">
                    <img src={d.icon} alt="" className="size-6" />
                  </span>
                  <span className="flex w-[225px] flex-col leading-[1.2] [word-break:break-word]">
                    <span className="font-dm text-sm font-medium text-[#565656]">{d.label}</span>
                    <span className="font-dm text-base font-semibold text-[#111] transition-colors group-hover/ct:text-forest">{d.value}</span>
                  </span>
                </>
              );
              return (
                <li key={d.label}>
                  {d.href ? (
                    <a href={d.href} className={`group/ct flex items-center ${d.gap}`}>
                      {body}
                    </a>
                  ) : (
                    <div className={`group/ct flex items-center ${d.gap}`}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} y={32} className="w-full lg:w-auto">
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}
