import type { ReactNode } from "react";
import Link from "next/link";

import { SetupBadge } from "@/components/setup/setup-badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { appStatus } from "@/lib/env";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container-shell flex min-h-screen items-center justify-center py-12">
      <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="surface-card-strong hidden h-full flex-col justify-between p-8 lg:flex">
          <div>
            <Logo />
            <div className="mt-10 flex items-center gap-3">
              <p className="eyebrow">Launch access</p>
              <SetupBadge mode={appStatus.mode} />
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground">
              Auth that looks production-ready before you connect your own backend.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7">
              LaunchKit keeps sign in, sign up, and password recovery polished in every
              state. Demo mode explains itself clearly, setup mode guides the next step,
              and connected mode turns the same flows live.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/docs#supabase-setup">
                <Button variant="secondary">View setup docs</Button>
              </Link>
              <Link href="/dashboard">
                <Button>Open starter preview</Button>
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
              <p className="text-sm font-semibold text-foreground">Intentional demo mode</p>
              <p className="mt-2 text-sm leading-7">
                Buyers can inspect the full auth UX without wondering whether the app is
                broken.
              </p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
              <p className="text-sm font-semibold text-foreground">Supabase handoff ready</p>
              <p className="mt-2 text-sm leading-7">
                Add your own project URL, anon key, and optional service role to go live.
              </p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
              <p className="text-sm font-semibold text-foreground">Buyer-safe messaging</p>
              <p className="mt-2 text-sm leading-7">
                Every auth state explains what is happening, what is disabled, and how to
                enable it without exposing raw integration errors.
              </p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5">
              <p className="text-sm font-semibold text-foreground">Same screens, live later</p>
              <p className="mt-2 text-sm leading-7">
                When Supabase is connected, the current forms become your live auth entry
                points instead of being replaced.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
}
