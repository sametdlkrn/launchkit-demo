import Link from "next/link";

import { cn } from "@/lib/utils/cn";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link href={href} className={cn("inline-flex items-center gap-3", className)}>
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 text-sm font-extrabold text-white shadow-lg shadow-blue-500/25">
        LS
      </span>
      <span className="flex flex-col">
        <span className="text-base font-semibold text-foreground">LaunchKit</span>
        <span className="text-xs tracking-[0.22em] uppercase text-muted">
          SaaS starter
        </span>
      </span>
    </Link>
  );
}
