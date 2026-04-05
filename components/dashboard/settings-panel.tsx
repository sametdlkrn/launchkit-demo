import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

type SettingsPanelProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function SettingsPanel({
  title,
  description,
  children,
}: SettingsPanelProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-lg">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-7 md:text-base">{description}</p>
          </div>
          <div className="w-full lg:max-w-xl">{children}</div>
        </div>
      </CardContent>
    </Card>
  );
}
