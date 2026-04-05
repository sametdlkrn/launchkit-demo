import Link from "next/link";

import { FaqList } from "@/components/marketing/faq-list";
import { FinalCta } from "@/components/marketing/final-cta";
import { SetupAlert } from "@/components/setup/setup-alert";
import { PricingCard } from "@/components/shared/pricing-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featureMatrix, plans } from "@/lib/billing/plans";
import { appStatus, getSetupHref } from "@/lib/env";
import { pricingFaqs } from "@/lib/content";

export default function PricingPage() {
  return (
    <>
      <section className="container-shell pt-12 pb-20">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple pricing for a starter that feels live before checkout is wired."
          description="LaunchKit keeps the buying path understandable in every state: preview the free tier immediately, route paid plans into setup when needed, and connect hosted checkout when you are ready."
          align="center"
        />

        {!appStatus.isBillingConfigured ? (
          <div className="mt-10">
            <SetupAlert
              actions={
                <Link href={getSetupHref("checkout")}>
                  <Button variant="secondary">View checkout setup</Button>
                </Link>
              }
              description="Paid plan CTAs are intentionally rerouted into setup right now because hosted checkout URLs are missing. Buyers can still evaluate plan positioning, limits, and packaging without hitting broken buttons."
              mode={appStatus.mode === "connected" ? "setup" : appStatus.mode}
              title="Checkout is not connected yet"
            />
          </div>
        ) : null}

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} note="Commercial starter packaging" plan={plan} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm leading-7">
          Works in demo mode before backend setup. Connect your own Supabase project,
          checkout links, and email provider when you are ready to go live.
        </p>
      </section>

      <section className="container-shell pb-20">
        <Card>
          <CardContent>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  Feature comparison
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  Commercial scope and included surfaces at a glance
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7">
                The starter includes the same premium UI across every tier. Paid plans expand
                commercial packaging and buying flow readiness.
              </p>
            </div>
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-muted">
                    <th className="pb-4 pr-4 font-semibold">Feature</th>
                    <th className="pb-4 pr-4 font-semibold">Free</th>
                    <th className="pb-4 pr-4 font-semibold">Pro</th>
                    <th className="pb-4 font-semibold">Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {featureMatrix.map((row) => (
                    <tr key={row.label} className="border-b last:border-b-0">
                      <td className="py-4 pr-4 font-semibold text-foreground">{row.label}</td>
                      {row.availability.map((entry) => (
                        <td key={entry} className="py-4 pr-4 text-muted">
                          {entry}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <FaqList
        eyebrow="Pricing FAQ"
        title="Keep billing simple now, layer automation in later."
        description="This V1 keeps the purchase flow understandable before you need a full billing backend."
        items={pricingFaqs}
      />
      <FinalCta />
    </>
  );
}
