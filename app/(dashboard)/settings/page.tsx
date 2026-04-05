import Link from "next/link";

import { ConnectionChecklist } from "@/components/setup/connection-checklist";
import { CopyValueButton } from "@/components/setup/copy-value-button";
import { IntegrationStatusCard } from "@/components/setup/integration-status-card";
import { SettingsPanel } from "@/components/dashboard/settings-panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { appStatus, env, getSetupHref } from "@/lib/env";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <SettingsPanel
        description="These fields show the shape of a real account settings area while making the current integration state explicit."
        title="Profile"
      >
        <div className="space-y-4">
          <Input defaultValue="Demo founder" placeholder="Full name" readOnly />
          <Input defaultValue="demo@launchkit.dev" placeholder="Email" readOnly type="email" />
          <div className="rounded-2xl border bg-white/70 px-4 py-3 text-sm leading-7 dark:bg-white/5">
            <p className="font-semibold text-foreground">Current behavior</p>
            <p className="mt-1">
              {appStatus.isSupabaseConfigured
                ? "Profile data is ready to be persisted through your connected Supabase project."
                : "Profile saving stays in preview until Supabase is connected, so buyers never mistake this starter for a hosted service."}
            </p>
          </div>
          <Link href={getSetupHref("supabase")}>
            <Button>{appStatus.isSupabaseConfigured ? "Open auth settings" : "Connect auth"}</Button>
          </Link>
        </div>
      </SettingsPanel>

      <SettingsPanel
        description="Branding panels are included so your first customization pass feels like product work, not starter cleanup."
        title="Workspace branding"
      >
        <div className="space-y-4">
          <Input defaultValue="LaunchKit" placeholder="Workspace name" readOnly />
          <Textarea
            defaultValue="Premium SaaS starter for founders shipping fast without broken states."
            readOnly
          />
          <div className="flex flex-wrap gap-3">
            <CopyValueButton label="Copy app URL" value={env.appUrl} />
            <Link href="/docs#launchkit-setup-overview">
              <Button variant="secondary">Review customization docs</Button>
            </Link>
          </div>
        </div>
      </SettingsPanel>

      <SettingsPanel
        description="Notification and email surfaces stay credible before delivery is connected."
        title="Notifications"
      >
        <div className="space-y-4">
          <IntegrationStatusCard
            actions={
              <div className="flex flex-wrap gap-3">
                <CopyValueButton label="Copy RESEND_API_KEY" value="RESEND_API_KEY" />
                <Link href={getSetupHref("email")}>
                  <Button variant="secondary">Connect email provider</Button>
                </Link>
              </div>
            }
            detail="Product emails, billing notifications, and onboarding prompts all route through the included email layer."
            helperText={
              appStatus.isEmailConfigured
                ? "Resend is connected, so transactional email can be delivered live."
                : "Email templates remain previewable until you connect your provider key."
            }
            isConfigured={appStatus.isEmailConfigured}
            name="Email delivery"
          />
        </div>
      </SettingsPanel>

      <ConnectionChecklist status={appStatus} />
    </div>
  );
}
