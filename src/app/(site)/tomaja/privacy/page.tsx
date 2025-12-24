import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "ToMaja";
const DEVELOPER_NAME = "Tom Knighton";
const CONTACT_EMAIL = "privacy-tomaja@tomk.online";
const EFFECTIVE_DATE = "2025-12-24";
const SUPPORT_URL = "support";

export const metadata: Metadata = {
  title: `Privacy Policy | ${APP_NAME}`,
  description: `Privacy policy for ${APP_NAME}. No tracking; minimal data collection.`,
  robots: { index: true, follow: true },
};

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-zinc max-w-none dark:prose-invert prose-a:break-words">
      {children}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Container>
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {APP_NAME}
            </span>{" "}
            — Effective date:{" "}
            <span className="font-medium">{EFFECTIVE_DATE}</span>
          </p>
          <div className="pt-2">
            <Link
              href={SUPPORT_URL}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Support
            </Link>
          </div>
        </header>

        <main className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <Prose>
            <p>
              This Privacy Policy explains how {DEVELOPER_NAME} (“we”, “us”,
              “our”) collects and uses information when you use {APP_NAME} (the
              “App”).
            </p>

            <h2>Summary</h2>
            <ul>
              <li>No advertising tracking.</li>
              <li>No sale of personal data.</li>
              <li>
                We store a unique user identifier (UUID) in our database to
                operate the service.
              </li>
            </ul>

            <h2>Information we collect</h2>
            <h3>Unique user identifier (UUID)</h3>
            <p>
              The App generates or uses a unique UUID to distinguish your app
              instance. We store this UUID in our database to provide core
              functionality (for example: associating app data with your device
              or accountless usage).
            </p>

            <h3>Optional diagnostic information</h3>
            <p>
              If you contact support, you may choose to share diagnostic details
              (such as device model, iOS version, and a description of the
              issue). We use this only to troubleshoot and respond.
            </p>

            <h2>How we use information</h2>
            <ul>
              <li>Operate and maintain the App’s functionality.</li>
              <li>Detect, prevent, and fix bugs and reliability issues.</li>
              <li>Respond to support requests.</li>
            </ul>

            <h2>Tracking</h2>
            <p>
              We do not use the App for cross-app or cross-site tracking, and we
              do not integrate third-party advertising SDKs for tracking
              purposes.
            </p>

            <h2>Sharing</h2>
            <p>
              We do not sell your information. We share information only:
              (a) with service providers that process data on our behalf to run
              the App (for example, hosting/database providers), and (b) when
              required by law.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain the UUID and associated service data for as long as
              necessary to provide the App and comply with legal obligations. We
              delete or anonymize data when it is no longer needed.
            </p>

            <h2>Your choices</h2>
            <p>
              You can request deletion of data associated with your UUID by
              contacting us. If the App does not include an account system, we
              may need you to provide the UUID from within the App (or other
              non-sensitive reference) to locate the correct record.
            </p>

            <h2>Children’s privacy</h2>
            <p>
              The App is not intended for children under 13. If you believe a
              child has provided information to us, contact us and we will take
              appropriate steps to delete it.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. We will update the
              effective date above, and if changes are material we will provide
              additional notice within the App or on this page.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions or requests, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </Prose>
        </main>

        <footer className="mt-12 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <p>
            © {new Date().getFullYear()} {DEVELOPER_NAME}. All rights reserved.
          </p>
        </footer>
      </Container>
    </div>
  );
}
