import { CheckCircle2, Circle, LockKeyhole, Mail, ShoppingBag } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { RuntimeStatus } from "@/lib/env";

import { CopyValueButton } from "./copy-value-button";
import { SetupBadge } from "./setup-badge";

type ConnectionChecklistProps = {
  status: RuntimeStatus;
};

const checklistIcons = {
  supabase: LockKeyhole,
  billing: ShoppingBag,
  email: Mail,
} as const;

export function ConnectionChecklist({ status }: ConnectionChecklistProps) {
  const items = [
    {
      id: "supabase",
      title: "Connect Supabase",
      description:
        "Add the Supabase URL and anon key to enable sign in, sign up, password reset, and live users.",
      envNames: [
        "NEXT_PUBLIC_SUPABASE_URL",
        "NEXT_PUBLIC_SUPABASE_ANON_KEY",
        "SUPABASE_SERVICE_ROLE_KEY",
      ],
      complete: status.isSupabaseConfigured,
      detail: status.hasSupabaseServiceRole
        ? "Server-side elevated operations are ready."
        : "Service role is optional for auth, but recommended for admin/server tasks.",
    },
    {
      id: "billing",
      title: "Connect hosted checkout",
      description:
        "Add the Pro and Agency checkout URLs to activate paid plan buttons and billing surfaces.",
      envNames: [
        "NEXT_PUBLIC_CHECKOUT_PRO_URL",
        "NEXT_PUBLIC_CHECKOUT_AGENCY_URL",
      ],
      complete: status.isBillingConfigured,
      detail: "LaunchKit keeps checkout link based in V1 so you can add webhooks later.",
    },
    {
      id: "email",
      title: "Connect Resend",
      description:
        "Add your Resend API key to turn the included welcome, reset, and upgrade templates into live email delivery.",
      envNames: ["RESEND_API_KEY"],
      complete: status.isEmailConfigured,
      detail: "Email templates remain previewable before delivery keys are added.",
    },
  ] as const;
  const completedCount = items.filter((item) => item.complete).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);
  const nextStep = items.find((item) => !item.complete)?.title ?? "All core integrations are connected";

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
              Connection checklist
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">
              Ship the starter in layers, not all at once
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 md:text-base">
              Demo mode stays presentable immediately. Each integration below upgrades the
              starter from preview to live behavior without forcing a rewrite.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <SetupBadge mode={status.mode} />
            <div className="rounded-2xl border bg-white/70 px-4 py-3 text-sm dark:bg-white/5">
              <p className="font-semibold text-foreground">{progressPercent}% setup complete</p>
              <p className="mt-1 text-sm leading-6">Next step: {nextStep}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-full border bg-white/70 dark:bg-white/5">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-500 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="mt-6 space-y-4">
          {items.map((item) => {
            const Icon = checklistIcons[item.id];

            return (
              <div
                key={item.id}
                className="rounded-3xl border bg-white/70 p-5 dark:bg-white/5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-white/80 dark:bg-white/5">
                      <Icon className="h-5 w-5 text-sky-500" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="font-semibold text-foreground">{item.title}</p>
                        {item.complete ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Ready
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
                            <Circle className="h-3.5 w-3.5" />
                            Pending
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-7">{item.description}</p>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.detail}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.envNames.map((envName) => (
                      <CopyValueButton key={envName} label={envName} value={envName} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
