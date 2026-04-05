import { Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-start gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-alt text-sky-600 dark:text-sky-300">
          <Sparkles className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-7">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
