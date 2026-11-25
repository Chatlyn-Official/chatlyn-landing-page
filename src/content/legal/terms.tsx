// Copied verbatim from whatsapp-saas: frontend/app/(marketing)/terms-and-conditions/page.tsx (article body).
// Only the old theme's wrapper class names were swapped for this site's legal styles.
import Link from "next/link";
import { LegalDivider, LegalH1, LegalH2, LegalList, LegalP } from "@/components/legal/legal-typography";

export const termsMeta = {
  title: "Terms and Conditions - ChatLyn",
  description: "ChatLyn Terms and Conditions (Effective May 2026).",
};

export function TermsContent() {
  return (
    <>
    <header className="legal-head">
      <LegalH1>Terms and Conditions - ChatLyn</LegalH1>
      <div className="legal-meta">
        <span>Effective Date:</span> May 2026
      </div>
      <LegalP>
        These Terms and Conditions (Terms) govern access to and use of
        ChatLyn (ChatLyn, we, our, or us). By using ChatLyn, you agree
        to these Terms.
      </LegalP>
    </header>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="services">1. Services</LegalH2>
      <LegalP>ChatLyn provides:</LegalP>
      <LegalList>
        <li>WhatsApp Business API integration</li>
        <li>Shared inbox functionality</li>
        <li>CRM and contact management</li>
        <li>Broadcast messaging</li>
        <li>Automation and chatbot features</li>
        <li>Messaging analytics</li>
        <li>Team collaboration features</li>
        <li>API and webhook integrations</li>
        <li>Related infrastructure and support services</li>
      </LegalList>
      <LegalP>Services may evolve over time.</LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="eligibility">2. Eligibility</LegalH2>
      <LegalP>You must:</LegalP>
      <LegalList>
        <li>Be legally authorized to use WhatsApp Business services</li>
        <li>Maintain valid Meta Business accounts where required</li>
        <li>Provide accurate business information</li>
        <li>Use the platform in compliance with applicable laws</li>
      </LegalList>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="customer-responsibilities">
        3. Customer Responsibilities
      </LegalH2>
      <LegalP>Customers are responsible for:</LegalP>
      <LegalList>
        <li>
          Maintaining authorization for connected Meta Business assets
        </li>
        <li>Managing uploaded contacts and customer data</li>
        <li>Obtaining valid opt-in consent before sending messages</li>
        <li>Ensuring campaign compliance</li>
        <li>Protecting account credentials</li>
        <li>Maintaining accurate account information</li>
      </LegalList>
      <LegalP>
        Customers are solely responsible for content sent through
        ChatLyn.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="compliance">4. Compliance Requirements</LegalH2>
      <LegalP>Customers must comply with:</LegalP>
      <LegalList>
        <li>Meta Platform Terms</li>
        <li>WhatsApp Business Terms</li>
        <li>WhatsApp Business Messaging Policy</li>
        <li>WhatsApp Business Data Processing Terms</li>
        <li>Anti-spam laws</li>
        <li>Data protection regulations</li>
        <li>Consumer protection laws</li>
        <li>Telecommunications regulations</li>
        <li>Local laws applicable to customer communications</li>
      </LegalList>
      <LegalP>
        Violations may result in suspension or termination.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="prohibited">5. Prohibited Activities</LegalH2>
      <LegalP>Customers may not use ChatLyn for:</LegalP>
      <LegalList>
        <li>Spam or unsolicited messaging</li>
        <li>Fraudulent activity</li>
        <li>Harassment</li>
        <li>Illegal content</li>
        <li>Misleading campaigns</li>
        <li>Prohibited goods/services</li>
        <li>Malware or abuse</li>
        <li>Unauthorized access attempts</li>
        <li>Policy-violating automation</li>
      </LegalList>
      <LegalP>
        ChatLyn reserves the right to suspend accounts violating these
        rules.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="messaging-policies">
        6. Messaging &amp; WhatsApp Policies
      </LegalH2>
      <LegalP>
        ChatLyn depends on third-party services including Meta and
        WhatsApp. Customers acknowledge:
      </LegalP>
      <LegalList>
        <li>Meta may change APIs, pricing, policies, or limits</li>
        <li>Message delivery is not guaranteed</li>
        <li>WhatsApp account restrictions may occur</li>
        <li>
          Messaging tiers and quality ratings are controlled by Meta
        </li>
      </LegalList>
      <LegalP>
        Customers remain responsible for complying with Meta policies.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="billing">7. Billing &amp; Payments</LegalH2>
      <LegalP>
        Customers agree to pay applicable subscription fees, usage
        charges, messaging charges, taxes, and add-on fees. Failure to
        pay may result in service suspension. Unless otherwise stated,
        payments are non-refundable.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="termination">
        8. Suspension &amp; Termination
      </LegalH2>
      <LegalP>
        ChatLyn may suspend or terminate access for policy violations,
        unlawful activity, non-payment, abuse, security risks, Meta
        restrictions, or misuse of the platform. Customers may stop
        using the service at any time subject to billing obligations.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="ip">9. Intellectual Property</LegalH2>
      <LegalP>
        ChatLyn and its associated software, branding, documentation,
        and platform components remain the property of ChatLyn and its
        licensors. Customers retain ownership of their own business data
        and message content.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="data-processing">10. Data Processing</LegalH2>
      <LegalP>
        ChatLyn may process data on behalf of customers to provide
        services. Customers are responsible for obtaining consent,
        handling deletion requests, and managing legal obligations
        related to customer data.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="availability">11. Service Availability</LegalH2>
      <LegalP>
        ChatLyn strives to provide reliable services but does not
        guarantee uninterrupted availability. Services may be affected
        by Meta outages, infrastructure failures, maintenance,
        third-party dependencies, or force majeure events.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="liability">12. Limitation of Liability</LegalH2>
      <LegalP>
        To the maximum extent permitted by law, ChatLyn shall not be
        liable for indirect damages, lost revenue, lost profits, lost
        data, business interruption, Meta account restrictions, WhatsApp
        bans, delivery failures, or third-party service outages.
        ChatLyn&apos;s total liability shall be limited to amounts paid
        by the customer for services.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="indemnification">13. Indemnification</LegalH2>
      <LegalP>
        Customers agree to indemnify and hold harmless ChatLyn from
        claims arising from customer content, messaging campaigns,
        policy violations, unlawful use, data misuse, or unauthorized
        communications.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="modifications">14. Modifications</LegalH2>
      <LegalP>
        ChatLyn may modify these Terms at any time. Continued use after
        updates constitutes acceptance of revised Terms.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="governing-law">15. Governing Law</LegalH2>
      <LegalP>
        These Terms shall be governed by applicable laws of the
        governing jurisdiction selected by ChatLyn. Disputes shall be
        resolved through applicable courts or dispute resolution
        mechanisms.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="contact">16. Contact Information</LegalH2>
      <LegalP>
        For legal inquiries:{" "}
        <span className="font-medium text-foreground">ChatLyn</span>
      </LegalP>
      <LegalList>
        <li>
          Email:{" "}
          <Link
            className="font-medium text-foreground underline-offset-4 hover:underline"
            href="mailto:legal@chatlyn.com"
          >
            legal@chatlyn.com
          </Link>
        </li>
        <li>
          Website:{" "}
          <Link
            className="font-medium text-foreground underline-offset-4 hover:underline"
            href="https://chatlyn.in"
          >
            https://chatlyn.in
          </Link>
        </li>
      </LegalList>
    </section>
  
    </>
  );
}
