import type { ReactElement } from "react";

import { Resend } from "resend";

import { env, integrationStatus } from "@/lib/env";

type EmailTemplate = "welcome" | "password-reset" | "upgrade-success";

type SendTransactionalEmailInput = {
  to: string;
  subject: string;
  react: ReactElement;
  template: EmailTemplate;
};

export async function sendTransactionalEmail({
  to,
  subject,
  react,
  template,
}: SendTransactionalEmailInput) {
  if (!integrationStatus.resend) {
    return {
      ok: true,
      mode: "preview" as const,
      message: `Resend is not configured. ${template} email preview is ready for ${to}.`,
    };
  }

  const resend = new Resend(env.resendApiKey);

  const result = await resend.emails.send({
    from: "LaunchKit <hello@launchkit.dev>",
    to,
    subject,
    react,
  });

  return {
    ok: true,
    mode: "live" as const,
    message: `Email sent to ${to}.`,
    result,
  };
}
