import Link from "next/link";

import { SetupBadge } from "@/components/setup/setup-badge";
import type { LaunchKitMode } from "@/lib/env";
import { dashboardNavLinks } from "@/lib/content";
import { cn } from "@/lib/utils/cn";

import { Logo } from "../shared/logo";

type AppSidebarProps = {
  currentPath: string;
  mode: LaunchKitMode;
};

export function AppSidebar({ currentPath, mode }: AppSidebarProps) {
  return (
    <aside className="surface-card-strong h-full min-h-[calc(100vh-3rem)] p-5">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <Logo href="/dashboard" />
          <SetupBadge mode={mode} />
        </div>
        <div className="mt-10 space-y-2">
          {dashboardNavLinks.map((link) => {
            const Icon = link.icon;
            const active =
              currentPath === link.href ||
              (link.href !== "/dashboard" && currentPath.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition",
                  active
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15 dark:bg-white dark:text-slate-950"
                    : "text-muted hover:bg-white/70 hover:text-foreground dark:hover:bg-white/5",
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto rounded-3xl border bg-slate-950 p-5 text-white">
          <p className="text-sm font-semibold">
            {mode === "connected" ? "Connected starter workspace" : "Starter preview mode"}
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            {mode === "connected"
              ? "Supabase is configured. Extend the starter with your own domain logic from here."
              : "The app stays fully explorable while auth, billing, and email integrations are being connected."}
          </p>
        </div>
      </div>
    </aside>
  );
}
