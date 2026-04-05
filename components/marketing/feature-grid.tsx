import { Card, CardContent } from "@/components/ui/card";
import { featureHighlights } from "@/lib/content";

import { SectionHeader } from "../shared/section-header";

export function FeatureGrid() {
  return (
    <section className="container-shell py-20">
      <SectionHeader
        eyebrow="What is included"
        title="Everything you need to make a starter feel commercial from the first commit."
        description="LaunchKit focuses on the pages, architecture, and integration surfaces that buyers and end users judge immediately."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featureHighlights.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title}>
              <CardContent>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-alt text-sky-600 dark:text-sky-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 md:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
