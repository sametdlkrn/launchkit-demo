import { CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { benefits, includedItems } from "@/lib/content";

import { SectionHeader } from "../shared/section-header";

export function IncludedSection() {
  return (
    <section className="container-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Built for developers"
          title="A V1 starter that behaves intelligently before you connect every service."
          description="The surface area is intentionally tight: enough to sell, onboard, and manage billing, without forcing backend setup on the first click."
        />
        <Card>
          <CardContent className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                In the box
              </p>
              <div className="mt-5 space-y-4">
                {includedItems.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-sky-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Why founders buy it
              </p>
              <div className="mt-5 space-y-5">
                {benefits.map((item) => (
                  <div key={item} className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
                    <p className="text-sm leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
