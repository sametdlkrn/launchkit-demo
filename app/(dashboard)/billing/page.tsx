import Link from "next/link";
import { CircleDollarSign, CreditCard, Receipt, Webhook } from "lucide-react";

import { IntegrationStatusCard } from "@/components/setup/integration-status-card";
import { SetupAlert } from "@/components/setup/setup-alert";
import { CheckoutButton } from "@/components/shared/checkout-button";
import { PricingCard } from "@/components/shared/pricing-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPlan, plans } from "@/lib/billing/plans";
import { appStatus, getSetupHref } from "@/lib/env";
import { planSummary, usageSummary } from "@/lib/content";
import { formatDate } from "@/lib/utils/format";

export default function BillingPage() {
  const currentPlan = getPlan(planSummary.currentPlan);

  return (
    <div className="space-y-6">
      {!appStatus.isBillingConfigured ? (
        <SetupAlert
          actions={
            <Link href={getSetupHref("checkout")}>
              <Button variant="secondary">Configure billing</Button>
            </Link>
          }
          description="External checkout links are not configured yet. LaunchKit keeps pricing and billing surfaces visible, but paid CTAs route into setup instead of pretending to be live."
          mode={appStatus.mode === "connected" ? "setup" : appStatus.mode}
          title="Billing setup required"
        />
      ) : null}

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <CardContent>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  Subscription status
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">
                  {currentPlan.name} plan active
                </h2>
                <p className="mt-3 text-sm leading-7">
                  Billing stays intentionally lightweight in V1. Hosted checkout gets you live
                  quickly, while webhook-based provisioning can be added once you need it.
                </p>
              </div>
              <Button variant="secondary">
                {appStatus.isBillingConfigured ? "Checkout linked" : "Setup required"}
              </Button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Renewal
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {formatDate(planSummary.renewalDate)}
                </p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Seat usage
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {usageSummary.seats.used} / {usageSummary.seats.total}
                </p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Email usage
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {usageSummary.emails.used.toLocaleString()} /{" "}
                  {usageSummary.emails.total.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CheckoutButton label="Upgrade to Pro" planId="pro" />
              <CheckoutButton label="Agency checkout" planId="agency" variant="secondary" />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <IntegrationStatusCard
            actions={
              <Link href={getSetupHref("checkout")}>
                <Button variant="secondary">View billing setup docs</Button>
              </Link>
            }
            detail="Plan cards, upgrade buttons, and billing language are already production-positioned."
            helperText={
              appStatus.isBillingConfigured
                ? "Both public checkout URLs are present, so the upgrade flow can open your hosted checkout pages."
                : "Add NEXT_PUBLIC_CHECKOUT_PRO_URL and NEXT_PUBLIC_CHECKOUT_AGENCY_URL to switch paid CTAs from setup guidance to live checkout."
            }
            isConfigured={appStatus.isBillingConfigured}
            name="Hosted checkout"
          >
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                <CircleDollarSign className="h-4 w-4 text-sky-500" />
                <p className="mt-3 text-sm font-semibold text-foreground">Paid plan shell</p>
                <p className="mt-1 text-sm">Pricing remains believable before checkout is live.</p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                <Webhook className="h-4 w-4 text-sky-500" />
                <p className="mt-3 text-sm font-semibold text-foreground">Webhook-ready next</p>
                <p className="mt-1 text-sm">Provisioning can be layered in without replacing the UI.</p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                <Receipt className="h-4 w-4 text-sky-500" />
                <p className="mt-3 text-sm font-semibold text-foreground">Portal placeholders</p>
                <p className="mt-1 text-sm">Customer billing tools can slot into this surface later.</p>
              </div>
            </div>
          </IntegrationStatusCard>

          <Card>
            <CardContent>
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-sky-500" />
                <div>
                  <p className="font-semibold text-foreground">Billing implementation path</p>
                  <p className="text-sm">Launch in layers without reworking the product shell.</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                  <p className="font-semibold text-foreground">1. Add hosted checkout URLs</p>
                  <p className="mt-2 text-sm leading-7">
                    This is enough to activate upgrade flows and keep the buying path credible.
                  </p>
                </div>
                <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                  <p className="font-semibold text-foreground">2. Keep plan surfaces live in preview</p>
                  <p className="mt-2 text-sm leading-7">
                    Buyers can still evaluate commercial positioning before any provider is wired.
                  </p>
                </div>
                <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                  <p className="font-semibold text-foreground">3. Add webhook sync later</p>
                  <p className="mt-2 text-sm leading-7">
                    Use a provider webhook when you need provisioning, seats, invoices, or subscription status.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardContent>
          <div className="flex items-center gap-3">
            <CircleDollarSign className="h-5 w-5 text-emerald-500" />
            <div>
              <p className="font-semibold text-foreground">Upgrade options</p>
              <p className="text-sm">
                Plan cards react to billing readiness and never drop buyers into dead CTAs.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard key={plan.id} note="Commercial starter packaging" plan={plan} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
