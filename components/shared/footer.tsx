import Link from "next/link";

import { navLinks } from "@/lib/content";

import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="container-shell py-10">
        <div className="flex flex-col gap-10 rounded-[2rem] border bg-slate-950 px-6 py-8 text-slate-100 shadow-2xl shadow-slate-950/25 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-xl">
            <Logo href="/" />
            <p className="mt-4 text-sm leading-7 text-slate-300">
              LaunchKit gives founders a premium V1 foundation for shipping a real SaaS
              faster, with demo mode that stays trustworthy before auth, billing, and email
              credentials are connected.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/dashboard" className="transition hover:text-white">
              Starter preview
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 LaunchKit. Built for founders shipping V1 today.</p>
          <p>Next.js | TypeScript | Tailwind | Supabase-ready | Checkout-ready</p>
        </div>
      </div>
    </footer>
  );
}
