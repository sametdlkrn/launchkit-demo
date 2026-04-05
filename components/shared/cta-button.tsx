import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

type CtaButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "ghost" | "subtle";
};

export function CtaButton({
  href,
  children,
  className,
  variant = "default",
}: CtaButtonProps) {
  if (href) {
    return (
      <Link className={cn(buttonVariants({ variant }), className)} href={href}>
        {children}
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <Button className={className} variant={variant}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
}
