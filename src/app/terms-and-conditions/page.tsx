import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { TermsContent, termsMeta } from "@/content/legal/terms";

export const metadata: Metadata = termsMeta;

export default function Page() {
  return (
    <LegalPage>
      <TermsContent />
    </LegalPage>
  );
}
