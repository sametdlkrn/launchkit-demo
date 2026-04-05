"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";

import { DemoModeBanner } from "@/components/setup/demo-mode-banner";
import { useAppStatus } from "@/components/setup/app-status-provider";
import { SetupBadge } from "@/components/setup/setup-badge";
import { Button } from "@/components/ui/button";

import { AppSidebar } from "./app-sidebar";

export function DashboardFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const status = useAppStatus();

  return (
    <div className="container-shell py-6">
      <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
        <AppSidebar currentPath={pathname} mode={status.mode} />
        <div className="space-y-6">
          <DemoModeBanner status={status} />

          <header className="surface-card-strong flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  Workspace overview
                </p>
                <SetupBadge mode={status.mode} />
              </div>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                {status.isSupabaseConfigured
                  ? "Connected starter, ready for your product logic."
                  : "Believable product preview, even before backend setup."}
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 md:text-base">
                {status.isSupabaseConfigured
                  ? "Supabase is live, so LaunchKit can now move from preview into real users, auth flows, and your own data model."
                  : "Demo data, setup callouts, and integration labels are deliberate. The product stays trustworthy while you connect your own Supabase project."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/docs">
                <Button variant="secondary">
                  <Search className="h-4 w-4" />
                  Search docs
                </Button>
              </Link>
              <Link href="/settings">
                <Button variant="secondary">
                  <Bell className="h-4 w-4" />
                  Integration status
                </Button>
              </Link>
              <Link href="/settings">
                <Button>Open settings</Button>
              </Link>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
