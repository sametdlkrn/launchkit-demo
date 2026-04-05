import Link from "next/link";

import { EmptyConfiguredState } from "@/components/setup/empty-configured-state";
import { IntegrationStatusCard } from "@/components/setup/integration-status-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { recentUsers, systemHealth } from "@/lib/content";
import { appStatus, getSetupHref } from "@/lib/env";
import { formatDate } from "@/lib/utils/format";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Total users
            </p>
            <p className="mt-4 text-3xl font-semibold text-foreground">384</p>
            <p className="mt-2 text-sm leading-7">
              {appStatus.isSupabaseConfigured
                ? "Replace this seeded metric with your own workspace queries."
                : "Mock operational metrics keep the admin surface credible in demo mode."}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Active subscriptions
            </p>
            <p className="mt-4 text-3xl font-semibold text-foreground">42</p>
            <p className="mt-2 text-sm leading-7">
              {appStatus.isBillingConfigured
                ? "Billing CTAs can now open live hosted checkout links."
                : "Billing preview stays visible even before checkout is configured."}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Email status
            </p>
            <p className="mt-4 text-3xl font-semibold text-foreground">
              {appStatus.isEmailConfigured ? "Connected" : "Preview"}
            </p>
            <p className="mt-2 text-sm leading-7">
              Branded templates are included, and delivery activates when Resend is connected.
            </p>
          </CardContent>
        </Card>
      </div>

      <IntegrationStatusCard
        actions={
          <Link href={getSetupHref("environment")}>
            <Button variant="secondary">Review environment reference</Button>
          </Link>
        }
        detail="This admin area demonstrates believable product operations without pretending a hosted backend already exists."
        helperText="Once your integrations are connected, swap these seeded metrics and tables for live queries and role-aware policies."
        isConfigured={appStatus.isSupabaseConfigured}
        name="Admin architecture"
      />

      <Card>
        <CardContent>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
            Recent users
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted">
                  <th className="pb-4 pr-4 font-semibold">Name</th>
                  <th className="pb-4 pr-4 font-semibold">Email</th>
                  <th className="pb-4 pr-4 font-semibold">Plan</th>
                  <th className="pb-4 font-semibold">Joined</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.email} className="border-b last:border-b-0">
                    <td className="py-4 pr-4 font-semibold text-foreground">{user.name}</td>
                    <td className="py-4 pr-4 text-muted">{user.email}</td>
                    <td className="py-4 pr-4 text-muted">{user.plan}</td>
                    <td className="py-4 text-muted">{formatDate(user.joinedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
            System health
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {systemHealth.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {item.label}
                </p>
                <p className="mt-3 text-xl font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <EmptyConfiguredState
        actions={
          <Link href="/settings">
            <Button variant="secondary">Open integration settings</Button>
          </Link>
        }
        description="Administrative tooling is intentionally staged here so your team can extend it from a trustworthy starting point instead of a blank screen."
        mode={appStatus.mode}
        title="Operational modules are ready for your own policies and live queries."
      />
    </div>
  );
}
