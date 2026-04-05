import { CtaButton } from "@/components/shared/cta-button";
import { Card, CardContent } from "@/components/ui/card";

export function FinalCta() {
  return (
    <section className="container-shell py-20">
      <Card className="overflow-hidden bg-slate-950 text-white">
        <CardContent className="relative px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.28),transparent_26%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                Ready to ship
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight">
                Launch a starter buyers can trust before you build the first custom feature.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                LaunchKit gives you the premium shell, intentional demo mode, and setup-ready
                architecture that make your SaaS feel real from the first demo.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/dashboard">Open preview</CtaButton>
              <CtaButton href="/docs" variant="secondary">
                Review setup
              </CtaButton>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
