import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Focus Grid",
  description:
    "How Focus Grid collects, uses, and protects your data when you use our productivity app.",
};

const LAST_UPDATED = "May 28, 2026";

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      eyebrow="Data Protocol"
      lastUpdated={LAST_UPDATED}
    >
      <p>
        Focus Grid (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
        Focus Grid mobile application and this website. This Privacy Policy explains
        what information we collect, how we use it, and the choices you have when you
        use our services.
      </p>

      <LegalSection id="collect" title="1. Information We Collect">
        <p>
          <strong className="text-white/85">Account & profile data.</strong> If you
          create an account, we may collect your email address, display name, and
          authentication identifiers provided by Apple, Google, or similar sign-in
          providers.
        </p>
        <p>
          <strong className="text-white/85">Productivity data.</strong> Tasks,
          Eisenhower Matrix quadrant assignments, focus session timers, streaks,
          virtual garden progress, RPG stats (level, EXP, coins), and analytics you
          generate within the app.
        </p>
        <p>
          <strong className="text-white/85">Device & usage data.</strong> Device
          type, operating system version, app version, crash logs, and aggregated usage
          events (e.g., feature opens, session length) to improve stability and
          performance.
        </p>
        <p>
          <strong className="text-white/85">Optional permissions.</strong> With your
          consent, we may request notifications (focus reminders) or local storage
          access. We do not sell your personal information.
        </p>
      </LegalSection>

      <LegalSection id="use" title="2. How We Use Your Information">
        <ul className="list-disc space-y-2 pl-5 marker:text-[#2196f3]">
          <li>Provide, sync, and restore your tasks, timers, garden, and gamification progress.</li>
          <li>Personalize your HUD experience and display in-app analytics.</li>
          <li>Send optional push notifications you have enabled.</li>
          <li>Detect abuse, fraud, and security incidents.</li>
          <li>Improve the app through aggregated, de-identified analytics.</li>
          <li>Comply with legal obligations and respond to lawful requests.</li>
        </ul>
      </LegalSection>

      <LegalSection id="share" title="3. Sharing & Disclosure">
        <p>
          We do not sell personal data. We may share limited information with:
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-[#e94560]">
          <li>
            <strong className="text-white/85">Service providers</strong> (hosting,
            crash reporting, authentication) bound by confidentiality obligations.
          </li>
          <li>
            <strong className="text-white/85">Legal authorities</strong> when required
            by law or to protect rights, safety, and security.
          </li>
          <li>
            <strong className="text-white/85">Business transfers</strong> in connection
            with a merger or acquisition, with notice where required.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="retention" title="4. Data Retention">
        <p>
          We retain your data while your account is active and for a reasonable period
          afterward to allow recovery and comply with law. You may request deletion of
          your account and associated data by contacting us (see Section 9).
        </p>
      </LegalSection>

      <LegalSection id="security" title="5. Security">
        <p>
          We use industry-standard measures including encryption in transit (TLS),
          access controls, and regular security reviews. No method of transmission or
          storage is 100% secure; we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="6. Your Rights & Choices">
        <p>Depending on your region, you may have the right to:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-[#e5c558]">
          <li>Access, correct, or delete your personal data.</li>
          <li>Export your data in a portable format.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Withdraw consent for optional features (e.g., notifications).</li>
        </ul>
        <p>
          EU/UK users may lodge a complaint with their local data protection authority.
          California residents may have additional rights under the CCPA/CPRA.
        </p>
      </LegalSection>

      <LegalSection id="children" title="7. Children">
        <p>
          Focus Grid is not directed to children under 13 (or 16 in the EEA). We do
          not knowingly collect personal information from children. Contact us if you
          believe we have collected such data.
        </p>
      </LegalSection>

      <LegalSection id="international" title="8. International Transfers">
        <p>
          Your information may be processed in countries other than your own. Where
          required, we use appropriate safeguards (e.g., Standard Contractual Clauses)
          for cross-border transfers.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="9. Contact Us">
        <p>
          For privacy questions or requests, email{" "}
          <a
            href="mailto:privacy@focusgrid.app"
            className="text-[#2196f3] underline-offset-2 hover:underline"
          >
            privacy@focusgrid.app
          </a>
          . We aim to respond within 30 days.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="10. Changes to This Policy">
        <p>
          We may update this policy from time to time. We will post the revised version
          on this page and update the &quot;Last updated&quot; date. Material changes
          may be notified in-app or by email where appropriate.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
