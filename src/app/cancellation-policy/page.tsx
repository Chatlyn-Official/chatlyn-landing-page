import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { CancellationContent, cancellationMeta } from "@/content/legal/cancellation";

export const metadata: Metadata = cancellationMeta;

export default function Page() {
  return (
    <LegalPage>
      <CancellationContent />
    </LegalPage>
  );
}
