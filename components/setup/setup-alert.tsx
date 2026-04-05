import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { SetupBadge } from "./setup-badge";

type SetupAlertProps = {
  title: string;
  description: string;
  mode?: "demo" | "setup" | "connected";
  actions?: ReactNode;
  footer?: ReactNode;
};

const iconByMode = {
  demo: Sparkles,
  setup: AlertTriangle,
  connected: CheckCircle2,
} as const;

const shellByMode = {
  demo:
    "border-sky-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(15,23,42,0.2))] text-white",
  setup:
    "border-amber-400/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.16),rgba(15,23,42,0.16))] text-white",
  connected:
    "border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(15,23,42,0.16))] text-white",
} as const;

export function SetupAlert({
  title,
  description,
  mode = "setup",
  actions,
  footer,
}: SetupAlertProps) {
  const Icon = iconByMode[mode];

  return (
    <Card className={shellByMode[mode]}>
      <CardContent className="space-y-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <SetupBadge mode={mode} />
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200 md:text-base">
                {description}
              </p>
            </div>
          </div>
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        {footer ? (
          <div className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm leading-7 text-slate-200">
            {footer}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
