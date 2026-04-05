import Link from "next/link";
import { ArrowRight, CreditCard, ShieldCheck, Sparkles } from "lucide-react";

import { SetupBadge } from "@/components/setup/setup-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { appStatus } from "@/lib/env";
import { heroStats } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="container-shell pt-10 pb-16 md:pb-24">
      <div className="hero-panel relative overflow-hidden px-6 py-10 shadow-2xl shadow-blue-500/8 md:px-10 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_22%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-sky-200/60 bg-white/70 text-sky-700 dark:border-sky-400/20 dark:bg-sky-500/8 dark:text-sky-200">
                Buyer-ready V1 SaaS starter
              </Badge>
              <SetupBadge mode={appStatus.mode} />
            </div>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.04]">
              Premium SaaS starter code that works before backend setup and scales after it.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 md:text-xl">
              LaunchKit gives you a believable product shell, clear demo/setup/connected
              states, and the integration architecture buyers expect from a real starter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/dashboard">
                <Button size="lg">
                  Open starter preview
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs#supabase-setup">
                <Button size="lg" variant="secondary">
                  Review setup docs
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm leading-7">
              Works in demo mode immediately. Connect your own Supabase project when you are
              ready to enable live auth, users, and backend data.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border bg-white/70 p-4 dark:bg-white/5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <Card className="border-white/40 bg-white/80 dark:bg-slate-950/60">
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Mode-aware preview</p>
                  <p className="text-sm">Three intentional product states from the first boot.</p>
                </div>
                <span className="rounded-full border px-3 py-1 text-xs font-semibold">
                  No broken screens
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border bg-slate-950 p-4 text-white">
                  <Sparkles className="h-5 w-5 text-sky-300" />
                  <p className="mt-4 text-lg font-semibold">Demo mode first</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Buyers can explore the full starter before wiring any credentials.
                  </p>
                </div>
                <div className="rounded-2xl border bg-surface p-4">
                  <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  <p className="mt-4 text-lg font-semibold text-foreground">Connect Supabase later</p>
                  <p className="mt-2 text-sm">
                    Auth stays disabled until your own project URL and keys are added.
                  </p>
                </div>
                <div className="rounded-2xl border bg-surface p-4">
                  <CreditCard className="h-5 w-5 text-sky-500" />
                  <p className="mt-4 text-lg font-semibold text-foreground">Billing degrades cleanly</p>
                  <p className="mt-2 text-sm">
                    Checkout surfaces stay credible even before hosted links are connected.
                  </p>
                </div>
                <div className="rounded-2xl border bg-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Credible packaging
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-foreground">V1 ready</p>
                  <p className="mt-2 text-sm">
                    Evaluate the whole app before moving into your own product logic.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
