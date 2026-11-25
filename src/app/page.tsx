import { Automation } from "@/components/landing/automation";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Industries } from "@/components/landing/industries";
import { Integrations } from "@/components/landing/integrations";
import { MobileApp } from "@/components/landing/mobile-app";
import { Platform } from "@/components/landing/platform";
import { Pricing } from "@/components/landing/pricing";
import { Workspace } from "@/components/landing/workspace";

export default function Home() {
  return (
    <main>
      <Hero />
      <Platform />
      <Workspace />
      <HowItWorks />
      <Automation />
      <Industries />
      <Integrations />
      <Pricing />
      <Faq />
      <MobileApp />
    </main>
  );
}
