import type { PlanId } from "@/lib/billing/plans";
import { env } from "@/lib/env";

const fallbackCheckoutLinks: Partial<Record<PlanId, string>> = {
  pro: "/pricing",
  agency: "/pricing",
};

export function getCheckoutUrl(planId: PlanId) {
  if (planId === "free") {
    return "/dashboard";
  }

  if (planId === "pro") {
    return env.checkoutProUrl ?? fallbackCheckoutLinks.pro!;
  }

  if (planId === "agency") {
    return env.checkoutAgencyUrl ?? fallbackCheckoutLinks.agency!;
  }

  return "/dashboard";
}

export function isCheckoutConfigured(planId: PlanId) {
  if (planId === "free") {
    return true;
  }

  return Boolean(
    planId === "pro" ? env.checkoutProUrl : env.checkoutAgencyUrl,
  );
}
