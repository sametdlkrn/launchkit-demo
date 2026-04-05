const warnedKeys = new Set<string>();

function getOptionalEnv(key: string) {
  return process.env[key]?.trim() || undefined;
}

function warnOnce(key: string, message: string) {
  if (process.env.NODE_ENV === "production" || warnedKeys.has(key)) {
    return;
  }

  warnedKeys.add(key);
  console.warn(message);
}

export type LaunchKitMode = "demo" | "setup" | "connected";

export type RuntimeEnv = {
  appUrl: string;
  supabaseUrl?: string;
  supabaseAnonKey?: string;
  supabaseServiceRoleKey?: string;
  checkoutProUrl?: string;
  checkoutAgencyUrl?: string;
  resendApiKey?: string;
};

export type RuntimeStatus = {
  hasSupabaseUrl: boolean;
  hasSupabaseAnonKey: boolean;
  hasSupabaseServiceRole: boolean;
  hasCheckoutLinks: boolean;
  hasResendKey: boolean;
  isSupabaseConfigured: boolean;
  isBillingConfigured: boolean;
  isEmailConfigured: boolean;
  isDemoMode: boolean;
  isPartiallyConfigured: boolean;
  isFullyConfigured: boolean;
  mode: LaunchKitMode;
  missing: {
    supabase: string[];
    billing: string[];
    email: string[];
  };
};

function createRuntimeEnv(): RuntimeEnv {
  return {
    appUrl: getOptionalEnv("NEXT_PUBLIC_APP_URL") ?? "http://localhost:3000",
    supabaseUrl: getOptionalEnv("NEXT_PUBLIC_SUPABASE_URL"),
    supabaseAnonKey: getOptionalEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    supabaseServiceRoleKey: getOptionalEnv("SUPABASE_SERVICE_ROLE_KEY"),
    checkoutProUrl: getOptionalEnv("NEXT_PUBLIC_CHECKOUT_PRO_URL"),
    checkoutAgencyUrl: getOptionalEnv("NEXT_PUBLIC_CHECKOUT_AGENCY_URL"),
    resendApiKey: getOptionalEnv("RESEND_API_KEY"),
  };
}

function getMissingFlags(env: RuntimeEnv) {
  return {
    supabase: [
      !env.supabaseUrl ? "NEXT_PUBLIC_SUPABASE_URL" : null,
      !env.supabaseAnonKey ? "NEXT_PUBLIC_SUPABASE_ANON_KEY" : null,
      !env.supabaseServiceRoleKey ? "SUPABASE_SERVICE_ROLE_KEY" : null,
    ].filter(Boolean) as string[],
    billing: [
      !env.checkoutProUrl ? "NEXT_PUBLIC_CHECKOUT_PRO_URL" : null,
      !env.checkoutAgencyUrl ? "NEXT_PUBLIC_CHECKOUT_AGENCY_URL" : null,
    ].filter(Boolean) as string[],
    email: [!env.resendApiKey ? "RESEND_API_KEY" : null].filter(Boolean) as string[],
  };
}

function createRuntimeStatus(env: RuntimeEnv): RuntimeStatus {
  const hasSupabaseUrl = Boolean(env.supabaseUrl);
  const hasSupabaseAnonKey = Boolean(env.supabaseAnonKey);
  const hasSupabaseServiceRole = Boolean(env.supabaseServiceRoleKey);
  const hasCheckoutLinks = Boolean(env.checkoutProUrl && env.checkoutAgencyUrl);
  const hasResendKey = Boolean(env.resendApiKey);
  const isSupabaseConfigured = hasSupabaseUrl && hasSupabaseAnonKey;
  const isBillingConfigured = hasCheckoutLinks;
  const isEmailConfigured = hasResendKey;
  const hasAnySupabaseConfig =
    hasSupabaseUrl || hasSupabaseAnonKey || hasSupabaseServiceRole;
  const isDemoMode = !hasAnySupabaseConfig;
  const isFullyConfigured =
    isSupabaseConfigured &&
    hasSupabaseServiceRole &&
    isBillingConfigured &&
    isEmailConfigured;
  const isPartiallyConfigured =
    !isDemoMode &&
    (!isSupabaseConfigured ||
      !hasSupabaseServiceRole ||
      !isBillingConfigured ||
      !isEmailConfigured);

  return {
    hasSupabaseUrl,
    hasSupabaseAnonKey,
    hasSupabaseServiceRole,
    hasCheckoutLinks,
    hasResendKey,
    isSupabaseConfigured,
    isBillingConfigured,
    isEmailConfigured,
    isDemoMode,
    isPartiallyConfigured,
    isFullyConfigured,
    mode: isSupabaseConfigured ? "connected" : isDemoMode ? "demo" : "setup",
    missing: getMissingFlags(env),
  };
}

export const env = createRuntimeEnv();
export const appStatus = createRuntimeStatus(env);

export const integrationStatus = {
  supabase: appStatus.isSupabaseConfigured,
  checkout: appStatus.isBillingConfigured,
  resend: appStatus.isEmailConfigured,
} as const;

export function getAppRuntime() {
  return {
    env,
    status: appStatus,
  };
}

export function getSetupHref(
  area: "overview" | "supabase" | "checkout" | "email" | "environment" = "overview",
) {
  const anchorByArea = {
    overview: "#launchkit-setup-overview",
    supabase: "#supabase-setup",
    checkout: "#checkout-setup",
    email: "#email-setup",
    environment: "#environment-reference",
  } as const;

  return `/docs${anchorByArea[area]}`;
}

export function getMissingEnvKeys(area: keyof RuntimeStatus["missing"]) {
  return appStatus.missing[area];
}

export function assertIntegration(
  integration: keyof typeof integrationStatus,
  keys?: string[],
) {
  if (integrationStatus[integration]) {
    return true;
  }

  const missingKeys =
    keys ??
    (integration === "supabase"
      ? appStatus.missing.supabase
      : integration === "checkout"
        ? appStatus.missing.billing
        : appStatus.missing.email);

  warnOnce(
    integration,
    `[LaunchKit] ${integration} is not configured. Missing: ${missingKeys.join(", ")}`,
  );

  return false;
}
