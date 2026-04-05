import Link from "next/link";

import { ConnectionChecklist } from "@/components/setup/connection-checklist";
import { SetupAlert } from "@/components/setup/setup-alert";
import { DocSection } from "@/components/shared/doc-section";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { appStatus } from "@/lib/env";
import { docsSections, projectStructure } from "@/lib/content";

export default function DocsPage() {
  return (
    <div className="container-shell pt-12 pb-20">
      <SectionHeader
        eyebrow="Documentation"
        title="Clear setup docs for buyers who need confidence before they wire credentials."
        description="LaunchKit is designed to be understood quickly. These docs explain what works immediately, what requires configuration, and why demo mode is part of the product quality."
      />

      <div className="mt-10 space-y-6">
        <SetupAlert
          actions={
            <>
              <Link href="/dashboard">
                <Button>Open starter preview</Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="secondary">Preview auth screens</Button>
              </Link>
            </>
          }
          description="LaunchKit is a starter kit, not a hosted SaaS. Buyers connect their own Supabase project, hosted checkout links, and email provider when they are ready. Until then, the product remains fully explorable in demo mode."
          mode={appStatus.mode}
          title="Why auth is disabled in demo mode"
        />

        <ConnectionChecklist status={appStatus} />
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <Card className="h-fit">
          <CardContent>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
              Project structure
            </p>
            <div className="mt-5 space-y-3">
              {projectStructure.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border bg-white/70 px-4 py-3 text-sm leading-7 dark:bg-white/5"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold">Delivery note</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Buyers should be able to open the app, understand the current mode, and see
                exactly how to go live without asking whether the starter is broken.
              </p>
            </div>

            <div className="mt-6 rounded-3xl border bg-white/70 p-5 dark:bg-white/5">
              <p className="text-sm font-semibold text-foreground">What a buyer can verify immediately</p>
              <div className="mt-4 space-y-3 text-sm leading-7">
                <p>1. The product works intentionally in demo mode.</p>
                <p>2. Auth is disabled for a clear reason, not because the app is broken.</p>
                <p>3. Supabase, checkout, and email each have a visible setup path.</p>
                <p>4. The same UI can go live after configuration instead of being rebuilt.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {docsSections.map((section) => (
            <DocSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}
