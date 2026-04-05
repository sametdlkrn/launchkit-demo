import type { ReactNode } from "react";

import { DemoModeBanner } from "@/components/setup/demo-mode-banner";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { appStatus } from "@/lib/env";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container-shell pt-4">
          <DemoModeBanner status={appStatus} />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
