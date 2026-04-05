import { Badge } from "@/components/ui/badge";
import type { LaunchKitMode } from "@/lib/env";

type SetupBadgeProps = {
  mode: LaunchKitMode | "configured" | "not-configured";
  className?: string;
};

const copyByMode: Record<SetupBadgeProps["mode"], string> = {
  demo: "Demo mode",
  setup: "Setup mode",
  connected: "Connected",
  configured: "Configured",
  "not-configured": "Setup required",
};

const classNameByMode: Record<SetupBadgeProps["mode"], string> = {
  demo:
    "border-sky-400/30 bg-sky-500/10 text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/10 dark:text-sky-100",
  setup:
    "border-amber-400/30 bg-amber-500/10 text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-100",
  connected:
    "border-emerald-400/30 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-100",
  configured:
    "border-emerald-400/20 bg-emerald-500/8 text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-100",
  "not-configured":
    "border-amber-400/20 bg-amber-500/8 text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-100",
};

export function SetupBadge({ mode, className }: SetupBadgeProps) {
  return (
    <Badge className={`${classNameByMode[mode]} ${className ?? ""}`.trim()}>
      {copyByMode[mode]}
    </Badge>
  );
}
