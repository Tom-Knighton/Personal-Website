// app/support/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "ToMaja";
const SUPPORT_EMAIL = "tomaja-support@tomk.online";
const DEVELOPER_NAME = "Tom Knighton";
const APP_STORE_URL = "";
const STATUS_PAGE_URL = "";
const TERMS_URL = "";
const PRIVACY_URL = "privacy";

export const metadata: Metadata = {
  title: `Support | ${APP_NAME}`,
  description: `Get help with ${APP_NAME}. Contact support, troubleshooting, and FAQs.`,
  robots: { index: true, follow: true },
};

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
      {children}
    </span>
  );
}

export default function SupportPage() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Container>
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>iOS App Support</Badge>
            <Badge>No tracking</Badge>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {APP_NAME} Support
          </h1>

          <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            Need help using {APP_NAME}? Start with the quick checks below, or
            contact us and we’ll get back to you.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
                `${APP_NAME} Support`
              )}`}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Email Support
            </a>

            <Link
              href={PRIVACY_URL}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Privacy Policy
            </Link>

            {APP_STORE_URL ? (
              <a
                href={APP_STORE_URL}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
              >
                App Store Listing
              </a>
            ) : null}
          </div>
        </header>

        <main className="mt-10 grid gap-6">
          <Card title="Quick troubleshooting">
            <ul className="list-disc space-y-2 pl-5">
              <li>Force-quit and reopen the app.</li>
              <li>Update to the latest version from the App Store.</li>
              <li>Restart your device.</li>
              <li>
                If the app depends on network access, confirm you’re online and
                try switching between Wi-Fi and mobile data.
              </li>
            </ul>
          </Card>

          <Card title="Frequently asked questions">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  How do I report a bug?
                </p>
                <p>
                  Email{" "}
                  <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
                    {SUPPORT_EMAIL}
                  </a>{" "}
                  with what you expected to happen, what actually happened, and
                  the steps to reproduce. If possible include your iOS version
                  and device model.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  Can you help me recover my data?
                </p>
                <p>
                  If your app supports sign-in or syncing, mention the account
                  details you used. If not, describe what you lost and when—it
                  helps us diagnose issues, but recovery may not always be
                  possible depending on how the feature works.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  I have a billing/refund issue.
                </p>
                <p>
                  Purchases and refunds are handled by Apple. For refunds,
                  request one via your Apple account purchase history. If you
                  think something is incorrect in the app’s purchase state,
                  contact us and include your Apple receipt email (no sensitive
                  info needed).
                </p>
              </div>
            </div>
          </Card>

          <Card title="Contact">
            <div className="space-y-2">
              <p>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  Support email:
                </span>{" "}
                <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  Developer:
                </span>{" "}
                {DEVELOPER_NAME}
              </p>
              {STATUS_PAGE_URL ? (
                <p>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    Service status:
                  </span>{" "}
                  <a className="underline" href={STATUS_PAGE_URL}>
                    View status
                  </a>
                </p>
              ) : null}
              {TERMS_URL ? (
                <p>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    Terms:
                  </span>{" "}
                  <a className="underline" href={TERMS_URL}>
                    View terms
                  </a>
                </p>
              ) : null}
            </div>
          </Card>
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
