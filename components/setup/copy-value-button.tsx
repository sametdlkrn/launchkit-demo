"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";

type CopyValueButtonProps = {
  value: string;
  label?: string;
  variant?: "default" | "secondary" | "ghost" | "subtle";
  className?: string;
};

export function CopyValueButton({
  value,
  label = "Copy",
  variant = "secondary",
  className,
}: CopyValueButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button
      className={className}
      onClick={() => {
        void handleCopy();
      }}
      size="sm"
      type="button"
      variant={variant}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : label}
    </Button>
  );
}
