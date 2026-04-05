import Link from "next/link";

import { plans } from "@/lib/billing/plans";

import { CtaButton } from "../shared/cta-button";
import { PricingCard } from "../shared/pricing-card";
import { SectionHeader } from "../shared/section-header";

export function PricingTeaser() {
  return (
    <section className="container-shell py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Pricing teaser"
          title="Evaluate the plans first, wire checkout when you are ready."
          description="Free opens the starter preview immediately. Paid plans stay commercially framed even before hosted checkout links are connected."
        />
        <Link href="/pricing" className="text-sm font-semibold text-foreground underline-offset-4 hover:underline">
          See full pricing
        </Link>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <CtaButton href="/pricing" variant="secondary">
          Compare plans
        </CtaButton>
      </div>
    </section>
  );
}
