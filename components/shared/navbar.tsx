import Link from "next/link";

import { SetupBadge } from "@/components/setup/setup-badge";
import { navLinks } from "@/lib/content";
import { appStatus } from "@/lib/env";
import { cn } from "@/lib/utils/cn";

import { CtaButton } from "./cta-button";
import { Logo } from "./logo";

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("sticky top-0 z-40", className)}>
      <div className="container-shell pt-6">
        <div className="surface-card-strong flex items-center justify-between px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <SetupBadge mode={appStatus.mode} />
            <Link
              href="/sign-in"
              className="text-sm font-semibold text-muted transition hover:text-foreground"
            >
              Preview auth
            </Link>
            <CtaButton href="/dashboard">Open app preview</CtaButton>
          </div>
          <Link
            href="/dashboard"
            className="rounded-xl border px-4 py-2 text-sm font-semibold md:hidden"
          >
            Preview
          </Link>
        </div>
      </div>
    </header>
  );
}
