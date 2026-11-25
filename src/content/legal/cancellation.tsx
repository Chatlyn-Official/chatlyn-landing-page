// Copied verbatim from whatsapp-saas: frontend/app/(marketing)/cancellation-policy/page.tsx (article body).
// Only the old theme's wrapper class names were swapped for this site's legal styles.
import { LegalDivider, LegalH1, LegalH2, LegalList, LegalP } from "@/components/legal/legal-typography";

export const cancellationMeta = {
  title: "Cancellation Policy - ChatLyn",
  description: "ChatLyn Cancellation Policy (Effective May 2026).",
};

export function CancellationContent() {
  return (
    <>
    <header className="legal-head">
      <LegalH1>Cancellation Policy - ChatLyn</LegalH1>
      <div className="legal-meta">
        <span>Effective Date:</span> May 2026
      </div>
      <LegalP>
        This policy outlines the rules and procedures for cancelling your subscription with ChatLyn.
      </LegalP>
    </header>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="how-to-cancel">1. How to Cancel</LegalH2>
      <LegalP>
        You can cancel anytime through <strong>Manage</strong> &rarr; <strong>Billing &amp; Usage</strong> &rarr; <strong>Cancel Plan</strong> &rarr; <strong>Confirm</strong>.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="billing-term">2. Billing Term &amp; Access</LegalH2>
      <LegalP>
        Cancellation takes effect at the end of your current monthly/yearly billing term; access continues until then.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="refunds">3. Refund Policy</LegalH2>
      <LegalP>
        No prorated refund is normally given for the unused period.
      </LegalP>
      <LegalP>
        Plan fees, add-ons, WhatsApp Conversation Credits, integrations and setup fees are generally non-refundable.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="conversation-credits">4. WhatsApp Conversation Credits</LegalH2>
      <LegalP>
        Remaining WhatsApp Conversation Credits expire when the subscription ends.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="pending-payments">5. Pending Payments</LegalH2>
      <LegalP>
        Pending payments must be cleared before cancellation.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="whatsapp-account">6. WhatsApp Business API Account &amp; Number Migration</LegalH2>
      <LegalList>
        <li>Cancelling the plan does not disconnect or delete your WhatsApp Business API account.</li>
        <li>If migrating to another BSP, ask support to disable 2FA first.</li>
        <li>If returning to the regular WhatsApp/WhatsApp Business app, you must separately downgrade the API number; doing so may permanently erase stored account data.</li>
      </LegalList>
    </section>
  
    </>
  );
}
