import Link from "next/link";
import { ArrowUpRight, ExternalLink, Wrench } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { PlanId } from "@/lib/billing/plans";
import { getCheckoutUrl, isCheckoutConfigured } from "@/lib/billing/checkout";
import { getSetupHref } from "@/lib/env";
import { cn } from "@/lib/utils/cn";

type CheckoutButtonProps = {
  planId: PlanId;
  className?: string;
  label: string;
  variant?: "default" | "secondary" | "ghost" | "subtle";
};

export function CheckoutButton({
  planId,
  className,
  label,
  variant = "default",
}: CheckoutButtonProps) {
  const configured = isCheckoutConfigured(planId);
  const href = getCheckoutUrl(planId);

  if (planId === "free") {
    return (
      <Link className={cn(buttonVariants({ variant }), className)} href={href}>
        {label}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    );
  }

  if (!configured) {
    return (
      <Link
        className={cn(buttonVariants({ variant }), className)}
        href={getSetupHref("checkout")}
      >
        Setup checkout
        <Wrench className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <Link
      className={cn(buttonVariants({ variant }), className)}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {label}
      <ExternalLink className="h-4 w-4" />
    </Link>
  );
}
