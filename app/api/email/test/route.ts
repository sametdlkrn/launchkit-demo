import { createElement } from "react";
import { NextResponse } from "next/server";

import { PasswordResetEmail } from "@/emails/password-reset-email";
import { UpgradeSuccessEmail } from "@/emails/upgrade-success-email";
import { WelcomeEmail } from "@/emails/welcome-email";
import { sendTransactionalEmail } from "@/lib/email/send";

type Template = "welcome" | "password-reset" | "upgrade-success";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    email?: string;
    template?: Template;
  };

  const email = body.email ?? "demo@launchkit.dev";
  const template = body.template ?? "welcome";

  const payloadByTemplate = {
    welcome: {
      subject: "Welcome to LaunchKit",
      react: createElement(WelcomeEmail, { name: "Founder" }),
    },
    "password-reset": {
      subject: "Reset your LaunchKit password",
      react: createElement(PasswordResetEmail),
    },
    "upgrade-success": {
      subject: "Your LaunchKit upgrade is confirmed",
      react: createElement(UpgradeSuccessEmail, { planName: "Pro" }),
    },
  };

  const result = await sendTransactionalEmail({
    to: email,
    template,
    ...payloadByTemplate[template],
  });

  return NextResponse.json(result);
}
