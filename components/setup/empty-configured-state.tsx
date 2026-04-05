import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { SetupBadge } from "./setup-badge";

type EmptyConfiguredStateProps = {
  title: string;
  description: string;
  mode?: "demo" | "setup" | "connected";
  actions?: ReactNode;
};

export function EmptyConfiguredState({
  title,
  description,
  mode = "demo",
  actions,
}: EmptyConfiguredStateProps) {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-alt text-sky-600 dark:text-sky-300">
            <Sparkles className="h-5 w-5" />
          </span>
          <SetupBadge mode={mode} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-7">{description}</p>
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </CardContent>
    </Card>
  );
}
