import Link from "next/link";
import { ArrowUpRight, Database, Mail, Wallet } from "lucide-react";

import { ConnectionChecklist } from "@/components/setup/connection-checklist";
import { EmptyConfiguredState } from "@/components/setup/empty-configured-state";
import { IntegrationStatusCard } from "@/components/setup/integration-status-card";
import { CheckoutButton } from "@/components/shared/checkout-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dashboardStats, planSummary, recentActivity, usageSummary } from "@/lib/content";
import { getPlan } from "@/lib/billing/plans";
import { appStatus, getSetupHref } from "@/lib/env";
import { formatDate } from "@/lib/utils/format";

import { StatCard } from "@/components/dashboard/stat-card";

const quickActions = [
  {
    title: "Review Supabase setup",
    description: "Connect your own Supabase project to activate authentication and live users.",
    href: getSetupHref("supabase"),
  },
  {
    title: "Open billing setup",
    description: "Add hosted checkout URLs for Pro and Agency without changing the pricing UI.",
    href: getSetupHref("checkout"),
  },
  {
    title: "Preview email delivery",
    description: "Turn the included email templates live by adding your Resend API key.",
    href: getSetupHref("email"),
  },
];

export default function DashboardPage() {
  const currentPlan = getPlan(planSummary.currentPlan);
  const completedIntegrations = [
    appStatus.isSupabaseConfigured,
    appStatus.isBillingConfigured,
    appStatus.isEmailConfigured,
  ].filter(Boolean).length;
  const readinessCopy = appStatus.isSupabaseConfigured
    ? "Connected mode is live. You can now replace seeded content with your own product data."
    : appStatus.mode === "setup"
      ? "Setup mode is active. Finish Supabase credentials to turn auth live while keeping the current product shell."
      : "Demo mode is active. The app is intentionally explorable before backend credentials are added.";

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardContent>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Current plan
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">
                  {currentPlan.name}
                </h2>
                <p className="mt-2 text-sm leading-7">
                  Renews on {formatDate(planSummary.renewalDate)}. The billing shell is already
                  designed for hosted checkout today and deeper subscription sync later.
                </p>
              </div>
              <Button variant="secondary">
                {appStatus.isBillingConfigured ? "Checkout linked" : "Billing setup required"}
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Seats
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {usageSummary.seats.used} / {usageSummary.seats.total}
                </p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Projects
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {usageSummary.projects.used} / {usageSummary.projects.total}
                </p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Emails
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {usageSummary.emails.used.toLocaleString()} /{" "}
                  {usageSummary.emails.total.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CheckoutButton label="Upgrade plan" planId="agency" />
              <Link href="/billing">
                <Button variant="secondary">Open billing settings</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Setup snapshot
            </p>
            <div className="mt-4 rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
              <p className="text-lg font-semibold text-foreground">
                {completedIntegrations}/3 core integrations connected
              </p>
              <p className="mt-2 text-sm leading-7">{readinessCopy}</p>
            </div>
            <div className="mt-5 space-y-4">
              {quickActions.map((action) => (
                <Link
                  key={action.title}
                  href={action.href}
                  className="block rounded-2xl border bg-white/70 p-4 transition hover:-translate-y-0.5 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground">{action.title}</p>
                      <p className="mt-2 text-sm leading-7">{action.description}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border bg-slate-950 p-4 text-white">
              <p className="text-sm font-semibold">Why this matters to buyers</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                LaunchKit shows product readiness before service wiring, so the starter feels
                sellable on first click instead of looking like a broken integration demo.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <ConnectionChecklist status={appStatus} />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Starter preview activity
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">
                  Product events that make the demo feel believable
                </h2>
              </div>
              <Link href="/admin">
                <Button variant="secondary">Open admin</Button>
              </Link>
            </div>
            <div className="mt-6 space-y-4">
              {recentActivity.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="mt-2 text-sm leading-7">{item.detail}</p>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <IntegrationStatusCard
            actions={
              <Link href={getSetupHref("supabase")}>
                <Button variant="secondary">Supabase docs</Button>
              </Link>
            }
            detail="Authentication, users, and server-side operations are already modeled into the starter."
            helperText={
              appStatus.isSupabaseConfigured
                ? "Public Supabase credentials are present. Auth can run live through the existing screens."
                : "Until Supabase is connected, LaunchKit keeps auth in preview mode and explains that state in-product."
            }
            isConfigured={appStatus.isSupabaseConfigured}
            name="Supabase auth"
          />

          <IntegrationStatusCard
            actions={
              <Link href={getSetupHref("checkout")}>
                <Button variant="secondary">Billing docs</Button>
              </Link>
            }
            detail="Paid plan surfaces stay visible before checkout is wired, and route into setup instead of failing."
            helperText={
              appStatus.isBillingConfigured
                ? "Hosted checkout URLs are active, so paid plan CTAs can open live purchase flows."
                : "Add NEXT_PUBLIC_CHECKOUT_PRO_URL and NEXT_PUBLIC_CHECKOUT_AGENCY_URL to switch billing from preview to live."
            }
            isConfigured={appStatus.isBillingConfigured}
            name="Billing surfaces"
          />

          <IntegrationStatusCard
            actions={
              <Link href={getSetupHref("email")}>
                <Button variant="secondary">Email docs</Button>
              </Link>
            }
            detail="Branded welcome, password reset, and upgrade emails are included in the starter from day one."
            helperText={
              appStatus.isEmailConfigured
                ? "Resend is connected, so the test email route can deliver live messages."
                : "Email templates stay previewable until you connect RESEND_API_KEY."
            }
            isConfigured={appStatus.isEmailConfigured}
            name="Email provider"
          />
        </div>
      </div>

      <EmptyConfiguredState
        actions={
          <Link href="/docs#launchkit-setup-overview">
            <Button variant="secondary">Continue setup</Button>
          </Link>
        }
        description="This empty module is intentionally polished so the starter still feels complete before you add custom product areas or live backend data."
        mode={appStatus.mode}
        title="More product modules plug in cleanly from here."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <IntegrationStatusCard
          detail="Connected data will replace these cards later, but the current state already communicates product shape."
          helperText="Use this area for your first real metrics once your database schema is in place."
          isConfigured={appStatus.isSupabaseConfigured}
          name="Real metrics placeholder"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
              <Database className="h-4 w-4 text-sky-500" />
              <p className="mt-3 text-sm font-semibold text-foreground">Mock dataset</p>
              <p className="mt-1 text-sm">Starter preview records are visible now.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
              <Wallet className="h-4 w-4 text-sky-500" />
              <p className="mt-3 text-sm font-semibold text-foreground">Plan-aware UI</p>
              <p className="mt-1 text-sm">Plan cards react to billing readiness.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
              <Mail className="h-4 w-4 text-sky-500" />
              <p className="mt-3 text-sm font-semibold text-foreground">Email preview</p>
              <p className="mt-1 text-sm">Delivery becomes live when Resend is connected.</p>
            </div>
          </div>
        </IntegrationStatusCard>
      </div>
    </div>
  );
}
