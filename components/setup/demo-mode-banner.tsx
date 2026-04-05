"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { RuntimeStatus } from "@/lib/env";

import { SetupBadge } from "./setup-badge";

type DemoModeBannerProps = {
  status: RuntimeStatus;
  docsHref?: string;
  dashboardHref?: string;
};

const copyByMode = {
  demo: {
    title: "Demo mode is intentionally active",
    description:
      "LaunchKit keeps the full product explorable before credentials are connected. Auth stays disabled until you add your own Supabase project.",
  },
  setup: {
    title: "Setup mode is active",
    description:
      "Some configuration is already in place, but authentication is still waiting on complete Supabase credentials. The preview stays usable while you finish setup.",
  },
  connected: {
    title: "Connected mode is live",
    description:
      "Supabase is configured. LaunchKit is ready to move from starter preview into your own product logic and real users.",
  },
} as const;

export function DemoModeBanner({
  status,
  docsHref = "/docs#supabase-setup",
  dashboardHref = "/dashboard",
}: DemoModeBannerProps) {
  const storageKey = `launchkit-banner-${status.mode}`;
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(window.localStorage.getItem(storageKey) === "1");
  }, [storageKey]);

  if (dismissed) {
    return null;
  }

  const copy = copyByMode[status.mode];

  return (
    <Card className="overflow-hidden border-white/10 bg-slate-950 text-white shadow-2xl shadow-slate-950/20">
      <CardContent className="relative px-5 py-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_24%)]" />
        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <SetupBadge mode={status.mode} />
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {copy.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
              {copy.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              <span>Supabase {status.isSupabaseConfigured ? "connected" : "not connected"}</span>
              <span>Checkout {status.isBillingConfigured ? "connected" : "pending"}</span>
              <span>Email {status.isEmailConfigured ? "connected" : "pending"}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href={docsHref}>
              <Button variant="secondary">
                View setup docs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href={dashboardHref}>
              <Button>Open starter preview</Button>
            </Link>
            <Button
              aria-label="Dismiss setup banner"
              onClick={() => {
                window.localStorage.setItem(storageKey, "1");
                setDismissed(true);
              }}
              variant="ghost"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
