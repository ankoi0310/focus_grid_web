import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Focus Grid",
  description:
    "Terms and conditions for using the Focus Grid mobile productivity application.",
};

const LAST_UPDATED = "May 28, 2026";

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      eyebrow="User Agreement"
      lastUpdated={LAST_UPDATED}
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of
        the Focus Grid mobile application, website, and related services
        (collectively, the &quot;Service&quot;). By using the Service, you agree to
        these Terms. If you do not agree, do not use the Service.
      </p>

      <LegalSection id="eligibility" title="1. Eligibility">
        <p>
          You must be at least 13 years old (or the minimum age in your jurisdiction)
          to use Focus Grid. If you are under 18, you represent that you have parental
          or guardian consent. You must provide accurate registration information and
          keep your credentials secure.
        </p>
      </LegalSection>

      <LegalSection id="license" title="2. License & Acceptable Use">
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to
          use the Service for personal, non-commercial productivity purposes, subject
          to these Terms and applicable app store rules (Apple App Store, Google Play).
        </p>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-[#e94560]">
          <li>Reverse engineer, decompile, or attempt to extract source code except as permitted by law.</li>
          <li>Cheat, exploit, or manipulate gamification systems (coins, levels, garden growth).</li>
          <li>Use bots, scrapers, or automated means without our written permission.</li>
          <li>Upload malware, harass others, or violate applicable laws.</li>
          <li>Resell, sublicense, or commercially exploit the Service without authorization.</li>
        </ul>
      </LegalSection>

      <LegalSection id="account" title="3. Accounts & Data">
        <p>
          You are responsible for activity under your account. You may delete your
          account at any time; some data may persist in backups for a limited period.
          Our use of personal data is described in our{" "}
          <a href="/privacy" className="text-[#2196f3] underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="subscriptions" title="4. Subscriptions & Purchases">
        <p>
          If we offer paid features or subscriptions, pricing and billing terms will be
          shown at purchase. Payments are processed by Apple or Google; refund requests
          follow their respective policies unless otherwise required by law. Virtual
          items (coins, plants, cosmetics) have no real-world cash value and are
          non-transferable outside the Service.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="5. Intellectual Property">
        <p>
          Focus Grid, including its name, logo, UI, sounds, and software, is owned by us
          or our licensors and protected by intellectual property laws. User-generated
          content (tasks, notes) remains yours; you grant us a license to host, display,
          and process it solely to operate the Service.
        </p>
      </LegalSection>

      <LegalSection id="disclaimer" title="6. Disclaimers">
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; WE DO
          NOT WARRANT UNINTERRUPTED OR ERROR-FREE OPERATION. FOCUS GRID IS A
          PRODUCTIVITY TOOL, NOT MEDICAL, LEGAL, OR THERAPEUTIC ADVICE. YOU ARE
          RESPONSIBLE FOR HOW YOU MANAGE YOUR TIME AND TASKS.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="7. Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE AND OUR AFFILIATES SHALL NOT BE
          LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
          OR ANY LOSS OF PROFITS, DATA, OR GOODWILL. OUR TOTAL LIABILITY FOR CLAIMS
          ARISING FROM THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) AMOUNTS YOU PAID
          US IN THE TWELVE MONTHS BEFORE THE CLAIM OR (B) USD $50.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations; in those cases, our
          liability is limited to the fullest extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="8. Indemnification">
        <p>
          You agree to indemnify and hold us harmless from claims arising from your
          misuse of the Service, violation of these Terms, or infringement of third-party
          rights.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="9. Termination">
        <p>
          You may stop using the Service at any time. We may suspend or terminate access
          if you breach these Terms or if required for legal or security reasons. Upon
          termination, sections that by nature should survive (disclaimers, liability,
          dispute resolution) will remain in effect.
        </p>
      </LegalSection>

      <LegalSection id="disputes" title="10. Governing Law & Disputes">
        <p>
          These Terms are governed by the laws of Vietnam, without regard to conflict-of-law
          principles, unless mandatory consumer protection laws in your country require
          otherwise. Disputes shall first be addressed through good-faith negotiation;
          if unresolved, courts in Ho Chi Minh City, Vietnam shall have exclusive
          jurisdiction, except where local law grants you non-waivable rights to bring
          claims in your home jurisdiction.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes to Terms">
        <p>
          We may modify these Terms. Continued use after the effective date constitutes
          acceptance. Material changes will be communicated via the app, website, or
          email where feasible.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact">
        <p>
          Questions about these Terms:{" "}
          <a
            href="mailto:legal@focusgrid.app"
            className="text-[#2196f3] underline-offset-2 hover:underline"
          >
            legal@focusgrid.app
          </a>
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
