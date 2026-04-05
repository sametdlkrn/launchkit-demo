import type { ReactNode } from "react";
import { CheckCircle2, CircleDashed, Link as LinkIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { SetupBadge } from "./setup-badge";

type IntegrationStatusCardProps = {
  name: string;
  detail: string;
  isConfigured: boolean;
  helperText: string;
  actions?: ReactNode;
  children?: ReactNode;
};

export function IntegrationStatusCard({
  name,
  detail,
  isConfigured,
  helperText,
  actions,
  children,
}: IntegrationStatusCardProps) {
  return (
    <Card>
      <CardContent className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-white/70 text-foreground dark:bg-white/5">
              {isConfigured ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              ) : (
                <CircleDashed className="h-5 w-5 text-amber-500" />
              )}
            </span>
            <div>
              <p className="text-lg font-semibold text-foreground">{name}</p>
              <p className="mt-2 text-sm leading-7 md:text-base">{detail}</p>
            </div>
          </div>
          <SetupBadge mode={isConfigured ? "configured" : "not-configured"} />
        </div>

        <div className="rounded-2xl border bg-white/70 p-4 text-sm leading-7 dark:bg-white/5">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <LinkIcon className="h-4 w-4 text-sky-500" />
            Configuration note
          </div>
          <p className="mt-2">{helperText}</p>
        </div>

        {children}

        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </CardContent>
    </Card>
  );
}
