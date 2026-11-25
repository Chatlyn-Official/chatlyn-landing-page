import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { PrivacyContent, privacyMeta } from "@/content/legal/privacy";

export const metadata: Metadata = privacyMeta;

export default function Page() {
  return (
    <LegalPage>
      <PrivacyContent />
    </LegalPage>
  );
}
