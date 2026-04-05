import { CheckCircle2 } from "lucide-react";

import { SetupBadge } from "@/components/setup/setup-badge";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { isCheckoutConfigured } from "@/lib/billing/checkout";
import type { PlanDefinition } from "@/lib/billing/plans";
import { formatPrice } from "@/lib/utils/format";

import { CheckoutButton } from "./checkout-button";

type PricingCardProps = {
  plan: PlanDefinition;
  note?: string;
};

export function PricingCard({ plan, note }: PricingCardProps) {
  const billingReady = plan.id === "free" ? true : isCheckoutConfigured(plan.id);

  return (
    <Card
      className={
        plan.featured
          ? "relative border-sky-200 bg-gradient-to-b from-sky-50 to-white dark:border-sky-400/30 dark:from-sky-500/8 dark:to-surface"
          : ""
      }
    >
      <CardContent className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xl font-semibold text-foreground">{plan.name}</p>
            <p className="mt-2 text-sm leading-6">{plan.description}</p>
          </div>
          {plan.highlight ? <Badge>{plan.highlight}</Badge> : null}
        </div>

        <div className="mt-8">
          <div className="flex items-end justify-between gap-3">
            <div className="flex items-end gap-2">
              <span className="text-4xl font-semibold tracking-tight text-foreground">
                {formatPrice(plan.price)}
              </span>
              {plan.price > 0 ? (
                <span className="pb-1 text-sm text-muted">/ one-time</span>
              ) : null}
            </div>
            {plan.id !== "free" ? (
              <SetupBadge mode={billingReady ? "configured" : "not-configured"} />
            ) : null}
          </div>

          <p className="mt-3 text-sm">
            {note ??
              `${plan.limits.members} | ${plan.limits.projects} | ${plan.limits.emailSends}`}
          </p>

          {plan.id === "free" ? (
            <p className="mt-2 text-sm leading-6">
              Free always opens the starter preview so evaluation works immediately.
            </p>
          ) : (
            <p className="mt-2 text-sm leading-6">
              {billingReady
                ? "Hosted checkout is active for this plan."
                : "Checkout links are missing, so this CTA routes to setup instead of a dead end."}
            </p>
          )}

          {!billingReady && plan.id !== "free" ? (
            <div className="mt-4 rounded-2xl border bg-white/70 px-4 py-3 text-sm leading-6 dark:bg-white/5">
              Buyers can still review plan structure, limits, and positioning before wiring
              checkout.
            </div>
          ) : null}
        </div>

        <CheckoutButton
          className="mt-8 w-full"
          label={plan.cta}
          planId={plan.id}
          variant={plan.featured ? "default" : "secondary"}
        />

        <div className="mt-8 space-y-4">
          {plan.features.map((feature) => (
            <div key={feature} className="flex gap-3 text-sm leading-6">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
