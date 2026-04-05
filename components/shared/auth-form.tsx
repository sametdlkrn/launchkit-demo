"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Info, LoaderCircle } from "lucide-react";

import { SetupAlert } from "@/components/setup/setup-alert";
import { useAppStatus } from "@/components/setup/app-status-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type AuthMode = "sign-in" | "sign-up" | "forgot-password";

type AuthFormProps = {
  mode: AuthMode;
};

type FormState = {
  tone: "idle" | "success" | "error" | "info";
  message?: string;
};

const copyByMode: Record<
  AuthMode,
  {
    title: string;
    description: string;
    submitLabel: string;
    footerHref: string;
    footerLabel: string;
    footerText: string;
    setupMessage: string;
  }
> = {
  "sign-in": {
    title: "Welcome back",
    description:
      "Sign in to manage your starter workspace, billing state, and launch surface.",
    submitLabel: "Sign in",
    footerHref: "/sign-up",
    footerLabel: "Create an account",
    footerText: "New to LaunchKit?",
    setupMessage:
      "Authentication is currently in setup mode. Connect Supabase credentials to enable sign in.",
  },
  "sign-up": {
    title: "Create your workspace",
    description:
      "Set up your account and start with the same polished foundation you would ship to customers.",
    submitLabel: "Create account",
    footerHref: "/sign-in",
    footerLabel: "Sign in",
    footerText: "Already have access?",
    setupMessage:
      "Authentication is currently in setup mode. Connect Supabase credentials to enable account creation.",
  },
  "forgot-password": {
    title: "Reset your password",
    description:
      "Request a password reset email and keep the flow branded while you wire live email delivery.",
    submitLabel: "Send reset link",
    footerHref: "/sign-in",
    footerLabel: "Back to sign in",
    footerText: "Remembered it?",
    setupMessage:
      "Password recovery is currently in setup mode. Connect Supabase credentials to enable reset emails.",
  },
};

function getDemoResponse(mode: AuthMode) {
  if (mode === "sign-in") {
    return "Auth is currently in setup mode. Connect Supabase credentials to enable sign in.";
  }

  if (mode === "sign-up") {
    return "Auth is currently in setup mode. Connect Supabase credentials to enable account creation.";
  }

  return "Auth is currently in setup mode. Connect Supabase credentials to enable password reset delivery.";
}

function getFriendlyError(mode: AuthMode) {
  if (mode === "sign-in") {
    return "We could not sign you in. Check your credentials or finish Supabase setup first.";
  }

  if (mode === "sign-up") {
    return "We could not create that account yet. Check your auth settings in Supabase and try again.";
  }

  return "We could not send the reset email yet. Check your auth and redirect settings in Supabase.";
}

export function AuthForm({ mode }: AuthFormProps) {
  const copy = copyByMode[mode];
  const status = useAppStatus();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [state, setState] = useState<FormState>({ tone: "idle" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();
    const fullName = String(formData.get("fullName") ?? "").trim();

    if (!email) {
      setState({ tone: "error", message: "Email is required." });
      return;
    }

    if (mode !== "forgot-password" && password.length < 8) {
      setState({
        tone: "error",
        message: "Password must be at least 8 characters.",
      });
      return;
    }

    if (mode === "sign-up" && fullName.length < 2) {
      setState({
        tone: "error",
        message: "Enter a valid name to create your workspace.",
      });
      return;
    }

    setLoading(true);
    setState({ tone: "idle" });

    try {
      if (!supabase) {
        setState({
          tone: "info",
          message: getDemoResponse(mode),
        });
        return;
      }

      if (mode === "sign-in") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setState({
          tone: "success",
          message: "Signed in successfully. Your connected workspace is ready.",
        });
        return;
      }

      if (mode === "sign-up") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });
        if (error) throw error;
        setState({
          tone: "success",
          message:
            "Account created. Check your inbox if email confirmation is enabled in Supabase.",
        });
        return;
      }

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/sign-in`,
      });
      if (error) throw error;
      setState({
        tone: "success",
        message:
          "Reset instructions sent. Your branded password recovery flow is now live.",
      });
    } catch {
      setState({ tone: "error", message: getFriendlyError(mode) });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-xl">
      <CardContent className="space-y-6 p-7">
        {!status.isSupabaseConfigured ? (
          <SetupAlert
            actions={
              <Link href="/docs#supabase-setup">
                <Button variant="secondary">View setup docs</Button>
              </Link>
            }
            description="Authentication is disabled until you connect your Supabase project. The forms stay visible so buyers can evaluate the flow before wiring credentials."
            mode={status.mode}
            title={status.mode === "demo" ? "Demo mode active" : "Supabase setup required"}
          />
        ) : null}

        <div>
          <p className="eyebrow">LaunchKit access</p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
            {copy.title}
          </h1>
          <p className="mt-3 text-sm leading-7 md:text-base">{copy.description}</p>
        </div>

        <div className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/docs#auth-enablement">
              <Button className="w-full" type="button" variant="secondary">
                GitHub OAuth setup
              </Button>
            </Link>
            <Link href="/docs#auth-enablement">
              <Button className="w-full" type="button" variant="secondary">
                Google OAuth setup
              </Button>
            </Link>
          </div>
          <p className="text-sm leading-6">
            Social login is intentionally staged, not broken. Enable OAuth providers inside
            Supabase when you want GitHub or Google to go live.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted">
          <span className="h-px flex-1 bg-border" />
          <span>Email</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <form
          className="space-y-4"
          action={(formData) => {
            void handleSubmit(formData);
          }}
        >
          {mode === "sign-up" ? (
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" name="fullName" placeholder="Alex Morgan" />
            </div>
          ) : null}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="you@company.com" type="email" />
          </div>
          {mode !== "forgot-password" ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {mode === "sign-in" ? (
                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-sky-600"
                  >
                    Forgot password?
                  </Link>
                ) : null}
              </div>
              <Input
                id="password"
                name="password"
                placeholder="Minimum 8 characters"
                type="password"
              />
            </div>
          ) : null}

          {state.message ? (
            <div
              className={`flex gap-3 rounded-2xl border px-4 py-3 text-sm ${
                state.tone === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200"
                  : state.tone === "info"
                    ? "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-200"
                    : "border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-200"
              }`}
            >
              {state.tone === "success" ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              ) : state.tone === "info" ? (
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
              ) : (
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              )}
              <span>{state.message}</span>
            </div>
          ) : null}

          <Button className="w-full" disabled={loading}>
            {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
            {copy.submitLabel}
          </Button>

          <div className="rounded-2xl border bg-white/70 px-4 py-3 text-sm leading-7 dark:bg-white/5">
            <p className="font-semibold text-foreground">
              {status.isSupabaseConfigured ? "Connected auth" : "Setup note"}
            </p>
            <p className="mt-1">{copy.setupMessage}</p>
            {!status.isSupabaseConfigured ? (
              <p className="mt-2 text-sm leading-6">
                Submitting this form previews the exact auth surface buyers will see after
                setup. The same UI turns live once your Supabase project is connected.
              </p>
            ) : null}
          </div>
        </form>

        <p className="mt-6 text-sm">
          {copy.footerText}{" "}
          <Link href={copy.footerHref} className="font-semibold text-sky-600">
            {copy.footerLabel}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
