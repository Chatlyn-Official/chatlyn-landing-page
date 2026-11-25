// Copied verbatim from whatsapp-saas: frontend/app/(marketing)/privacy-policy/page.tsx (article body).
// Only the old theme's wrapper class names were swapped for this site's legal styles.
import Link from "next/link";
import { LegalDivider, LegalH1, LegalH2, LegalH3, LegalList, LegalP } from "@/components/legal/legal-typography";

export const privacyMeta = {
  title: "Privacy Policy - ChatLyn",
  description: "ChatLyn Privacy Policy (Effective May 2026).",
};

export function PrivacyContent() {
  return (
    <>
    <header className="legal-head">
      <LegalH1>Privacy Policy - ChatLyn</LegalH1>
      <div className="legal-meta">
        <span>Effective Date:</span> May 2026
      </div>
      <LegalP>
        Welcome to ChatLyn. This Privacy Policy explains how ChatLyn
        (ChatLyn, we, our, or us) collects, uses, processes, stores, and
        protects information when customers, businesses, and end users
        access or use our services.
      </LegalP>
      <LegalP>
        ChatLyn is a WhatsApp-first CRM and messaging platform that
        enables businesses to manage customer communication, broadcasts,
        automation, analytics, and WhatsApp Business integrations.
      </LegalP>
      <LegalP>
        By accessing or using ChatLyn, you acknowledge that you have
        read and understood this Privacy Policy.
      </LegalP>
    </header>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="information-we-collect">
        1. Information We Collect
      </LegalH2>

      <div className="legal-sub">
        <LegalH3>1.1 Business Account Information</LegalH3>
        <LegalP>
          When businesses register for ChatLyn, we may collect:
        </LegalP>
        <LegalList>
          <li>Company or business name</li>
          <li>Contact person name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing information</li>
          <li>Organization/workspace information</li>
          <li>Meta Business Manager identifiers</li>
          <li>WhatsApp Business Account (WABA) identifiers</li>
          <li>WhatsApp phone number IDs</li>
          <li>OAuth tokens and integration metadata</li>
        </LegalList>
      </div>

      <div className="legal-sub">
        <LegalH3>1.2 Messaging &amp; Communication Data</LegalH3>
        <LegalP>
          To provide WhatsApp Business messaging services, ChatLyn may
          process:
        </LegalP>
        <LegalList>
          <li>Customer phone numbers</li>
          <li>Message content</li>
          <li>Message templates</li>
          <li>Media attachments</li>
          <li>Delivery/read statuses</li>
          <li>Conversation metadata</li>
          <li>Webhook events</li>
          <li>Automation rules and triggers</li>
          <li>Broadcast campaign information</li>
          <li>API request and response logs</li>
          <li>Inbox interactions</li>
        </LegalList>
      </div>

      <div className="legal-sub">
        <LegalH3>1.3 Technical &amp; Usage Data</LegalH3>
        <LegalP>We may automatically collect:</LegalP>
        <LegalList>
          <li>IP addresses</li>
          <li>Browser/device information</li>
          <li>Log data</li>
          <li>Usage analytics</li>
          <li>Authentication events</li>
          <li>Session information</li>
          <li>Error and crash reports</li>
          <li>Security and fraud-prevention signals</li>
        </LegalList>
      </div>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="how-we-use-information">
        2. How We Use Information
      </LegalH2>
      <LegalP>ChatLyn uses collected information to:</LegalP>
      <LegalList>
        <li>Provide WhatsApp Business messaging services</li>
        <li>
          Enable inbox, automation, CRM, analytics, and broadcast
          features
        </li>
        <li>Process WhatsApp API requests and webhooks</li>
        <li>Authenticate users and organizations</li>
        <li>Manage WhatsApp Business integrations</li>
        <li>Improve platform reliability and performance</li>
        <li>Provide customer support</li>
        <li>Prevent fraud, abuse, spam, or unauthorized activity</li>
        <li>Comply with legal obligations</li>
        <li>Process billing and subscriptions</li>
        <li>Monitor service health and system security</li>
      </LegalList>
      <LegalP>
        We do not sell customer or end-user personal data.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="whatsapp-meta-responsibilities">
        3. WhatsApp &amp; Meta Platform Responsibilities
      </LegalH2>
      <LegalP>Businesses using ChatLyn are responsible for:</LegalP>
      <LegalList>
        <li>
          Obtaining valid customer consent before sending WhatsApp
          messages
        </li>
        <li>Managing opt-ins and opt-outs</li>
        <li>Complying with WhatsApp Business Messaging Policy</li>
        <li>Ensuring lawful communication practices</li>
        <li>Managing uploaded contacts and campaign recipients</li>
      </LegalList>
      <LegalP>
        ChatLyn acts as a platform and infrastructure provider and
        processes data on behalf of customers.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="data-sharing">
        4. Data Sharing &amp; Third Parties
      </LegalH2>
      <LegalP>
        We may share data only with necessary service providers and
        partners, including:
      </LegalP>
      <LegalList>
        <li>Meta Platforms / WhatsApp</li>
        <li>Cloud hosting providers</li>
        <li>Database and infrastructure vendors</li>
        <li>Payment processors</li>
        <li>Analytics and monitoring providers</li>
        <li>Customer support tools</li>
        <li>Security and fraud prevention services</li>
        <li>Legal authorities when required by law</li>
      </LegalList>
      <LegalP>We do not sell or rent personal data.</LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="data-retention">5. Data Retention</LegalH2>
      <LegalP>
        ChatLyn retains information only as long as necessary to provide
        services, maintain platform functionality, comply with legal
        obligations, resolve disputes, prevent fraud or abuse, and
        enforce agreements.
      </LegalP>
      <LegalP>
        Retention periods may vary depending on account activity,
        customer settings, legal obligations, and business requirements.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="security-measures">6. Security Measures</LegalH2>
      <LegalP>
        ChatLyn implements industry-standard security measures
        including:
      </LegalP>
      <LegalList>
        <li>HTTPS/TLS encryption</li>
        <li>Encrypted storage where appropriate</li>
        <li>Access controls</li>
        <li>Role-based permissions</li>
        <li>Secure authentication</li>
        <li>Infrastructure monitoring</li>
        <li>Internal access restrictions</li>
        <li>Audit logging</li>
        <li>Backup and recovery systems</li>
        <li>Security reviews and updates</li>
      </LegalList>
      <LegalP>
        While we take reasonable measures to protect information, no
        system is completely secure.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="international-transfers">
        7. International Data Transfers
      </LegalH2>
      <LegalP>
        Data may be processed and stored in multiple countries where our
        infrastructure providers or partners operate.
      </LegalP>
      <LegalP>
        By using ChatLyn, you acknowledge that data may be transferred
        internationally subject to applicable safeguards.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="user-rights">8. User Rights</LegalH2>
      <LegalP>
        Depending on applicable laws, users may have rights to:
      </LegalP>
      <LegalList>
        <li>Access personal data</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion</li>
        <li>Restrict processing</li>
        <li>Object to processing</li>
        <li>Request portability</li>
        <li>Withdraw consent</li>
        <li>Lodge complaints with regulators</li>
      </LegalList>
      <LegalP>
        Requests may be submitted to{" "}
        <Link
          className="font-medium text-foreground underline-offset-4 hover:underline"
          href="mailto:privacy@chatlyn.com"
        >
          privacy@chatlyn.com
        </Link>
        .
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="data-deletion">9. Data Deletion Requests</LegalH2>
      <LegalP>
        Businesses and users may request deletion of account or
        messaging data by:
      </LegalP>
      <LegalList>
        <li>Contacting privacy@chatlyn.com</li>
        <li>Submitting requests through the dashboard</li>
        <li>Using account deletion settings where available</li>
      </LegalList>
      <LegalP>
        Certain information may be retained where legally required.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="cookies">
        10. Cookies &amp; Tracking Technologies
      </LegalH2>
      <LegalP>
        ChatLyn may use cookies and similar technologies for:
      </LegalP>
      <LegalList>
        <li>Authentication</li>
        <li>Session management</li>
        <li>Analytics</li>
        <li>Security</li>
        <li>Performance optimization</li>
        <li>User preferences</li>
      </LegalList>
      <LegalP>
        Users may control cookies through browser settings.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="children">11. Childrens Privacy</LegalH2>
      <LegalP>
        ChatLyn is not intended for children under the age required by
        applicable law. We do not knowingly collect personal data from
        children.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="changes">12. Changes to This Privacy Policy</LegalH2>
      <LegalP>
        We may update this Privacy Policy from time to time. Changes
        become effective upon posting. Continued use of ChatLyn after
        updates constitutes acceptance of the revised policy.
      </LegalP>
    </section>

    <LegalDivider />

    <section className="legal-section">
      <LegalH2 id="contact">13. Contact Information</LegalH2>
      <LegalP>
        For privacy-related inquiries:{" "}
        <span className="font-medium text-foreground">ChatLyn</span>
      </LegalP>
      <LegalList>
        <li>
          Email:{" "}
          <Link
            className="font-medium text-foreground underline-offset-4 hover:underline"
            href="mailto:privacy@chatlyn.com"
          >
            privacy@chatlyn.com
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
