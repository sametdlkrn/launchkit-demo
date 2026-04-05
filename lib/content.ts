import {
  Activity,
  CreditCard,
  LayoutDashboard,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import type { PlanId } from "@/lib/billing/plans";

export const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
];

export const dashboardNavLinks = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/billing", label: "Billing", icon: CreditCard },
  { href: "/settings", label: "Settings", icon: ShieldCheck },
  { href: "/admin", label: "Admin", icon: Activity },
];

export const heroStats = [
  { label: "Modes included", value: "Demo, setup, connected" },
  { label: "Integrations staged", value: "Supabase, checkout, Resend" },
  { label: "Time to first live deploy", value: "Under an afternoon" },
];

export const featureHighlights = [
  {
    title: "Works in demo mode first",
    description:
      "The starter stays explorable before any credentials are added, so buyers can evaluate the full product shell immediately.",
    icon: Sparkles,
  },
  {
    title: "Supabase-ready auth architecture",
    description:
      "Sign in, sign up, password reset, and server helpers are already staged for your own Supabase project.",
    icon: ShieldCheck,
  },
  {
    title: "Billing that degrades gracefully",
    description:
      "Paid plan surfaces remain believable before checkout is wired, and route into setup instead of dead buttons.",
    icon: CreditCard,
  },
  {
    title: "Email layer already included",
    description:
      "Welcome, reset, and upgrade templates are built in, with Resend-ready delivery when you connect your key.",
    icon: Mail,
  },
  {
    title: "Believable product UX",
    description:
      "Dashboard, settings, billing, and admin screens look like software, not a visual-only mockup.",
    icon: LayoutDashboard,
  },
  {
    title: "Clean extension points",
    description:
      "Centralized env detection, plan constants, helpers, and setup docs make custom product work straightforward.",
    icon: Workflow,
  },
];

export const includedItems = [
  "Next.js App Router foundation with clean route groups",
  "Marketing, pricing, docs, auth, dashboard, billing, settings, and admin views",
  "Centralized environment readiness and demo/setup/connected state detection",
  "Supabase client/server helper structure with safe auth fallback",
  "Hosted checkout plumbing for paid plan CTAs",
  "Resend-ready email utility and branded templates",
  "Reusable cards, badges, banners, checklist, and status surfaces",
];

export const benefits = [
  "Evaluate the whole product before any backend setup, without broken screens or apologetic copy.",
  "Connect your own Supabase project when you are ready, while keeping data ownership and portability with the buyer.",
  "Start from a commercial-feeling V1 instead of spending the first week proving the starter is real.",
];

export const integrations = [
  "Supabase-ready authentication",
  "Hosted checkout links",
  "Resend-ready email delivery",
  "Next.js App Router",
  "Tailwind CSS",
  "TypeScript",
];

export const marketingFaqs = [
  {
    question: "Is LaunchKit a real starter or just polished screens?",
    answer:
      "It is a real starter foundation. The UI is premium, the route structure is production-oriented, and auth, billing, and email integrations are already staged with intentional fallback states.",
  },
  {
    question: "What works immediately before I configure anything?",
    answer:
      "The full marketing site, pricing, docs, auth views, dashboard, settings, billing, and admin surfaces all render immediately in demo mode. Setup messaging explains exactly what becomes live once credentials are added.",
  },
  {
    question: "Why is auth disabled in demo mode?",
    answer:
      "LaunchKit is a starter kit, not a hosted SaaS. Buyers connect their own Supabase project for portability, ownership, and clean handoff, while the preview stays usable before setup.",
  },
  {
    question: "Will missing keys make the app feel broken?",
    answer:
      "No. Missing integrations are surfaced as premium setup states, checklist items, and rerouted CTAs instead of raw errors or dead ends.",
  },
];

export const pricingFaqs = [
  {
    question: "Do I need payments connected before I can use the pricing page?",
    answer:
      "No. Pricing stays fully visible in preview mode. When checkout URLs are missing, paid CTAs route into setup so the commercial structure still makes sense.",
  },
  {
    question: "What happens when I add checkout later?",
    answer:
      "The same pricing and billing UI turns live through hosted checkout links. You can add webhooks later for provisioning, subscription sync, or customer lifecycle automation.",
  },
  {
    question: "Can I self-host LaunchKit?",
    answer:
      "Yes. It is a standard Next.js app and deploys cleanly on Vercel or any platform that supports Node server functions.",
  },
];

export const docsSections = [
  {
    id: "launchkit-setup-overview",
    title: "LaunchKit setup overview",
    body: [
      "LaunchKit is a buyer-ready SaaS starter built to look intentional before backend setup and trustworthy after credentials are connected.",
      "The app supports three clear states: demo mode with no Supabase env values, setup mode with partial configuration, and connected mode when Supabase auth is ready.",
      "That means buyers can evaluate the full product shell first, then connect their own services without rebuilding the UI.",
    ],
    code: [
      "npm install",
      "cp .env.example .env.local",
      "npm run dev",
      "# Open /dashboard, /pricing, /docs, and /sign-in to review every state",
    ].join("\n"),
  },
  {
    id: "what-works-immediately",
    title: "What works immediately",
    body: [
      "Marketing, pricing, docs, auth pages, dashboard, billing, settings, and admin surfaces all render without requiring live credentials.",
      "Demo data, integration cards, and setup callouts are deliberate product states, not placeholders that look broken.",
      "This lets a buyer assess navigation, copy, visual quality, and architectural readiness before committing to setup.",
    ],
  },
  {
    id: "why-auth-is-disabled",
    title: "Why auth is disabled in demo mode",
    body: [
      "LaunchKit is a starter kit, not a hosted multi-tenant SaaS. Buyers connect their own Supabase project instead of inheriting a shared backend.",
      "That preserves portability, data ownership, and cleaner handoff for founders, agencies, and internal product teams.",
      "The UI remains fully explorable in demo mode so evaluation is easy before auth is enabled.",
    ],
  },
  {
    id: "supabase-setup",
    title: "Supabase setup",
    body: [
      "Create a Supabase project and copy the project URL and anon key into your environment file.",
      "These public values enable browser auth. Add the service role key when you need elevated server-side tasks, admin actions, or background jobs.",
      "Once connected, the existing sign in, sign up, and password reset screens turn live without changing the UI layer.",
    ],
    code: [
      "NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co",
      "NEXT_PUBLIC_SUPABASE_ANON_KEY=public-anon-key",
      "SUPABASE_SERVICE_ROLE_KEY=service-role-key",
    ].join("\n"),
  },
  {
    id: "auth-enablement",
    title: "Auth enablement steps",
    body: [
      "Enable Email auth inside Supabase, configure the redirect URL to your app domain, and optionally enable email confirmation if you want a verification step.",
      "If you want GitHub or Google login later, enable those providers inside Supabase and keep the existing auth UI.",
      "LaunchKit intentionally keeps the forms visible in demo mode so buyers understand the auth architecture before wiring providers.",
    ],
  },
  {
    id: "checkout-setup",
    title: "Checkout setup",
    body: [
      "Create hosted checkout links for the Pro and Agency plans in Lemon Squeezy or another provider.",
      "Add both public checkout URLs to your environment file. LaunchKit will automatically switch paid buttons from setup guidance to live hosted checkout.",
      "When you need automated provisioning or subscription sync, add provider webhooks later without redesigning the billing UI.",
    ],
    code: [
      "NEXT_PUBLIC_CHECKOUT_PRO_URL=https://your-provider.com/pro-checkout",
      "NEXT_PUBLIC_CHECKOUT_AGENCY_URL=https://your-provider.com/agency-checkout",
    ].join("\n"),
  },
  {
    id: "email-setup",
    title: "Email provider setup",
    body: [
      "Add RESEND_API_KEY to turn the included welcome, password reset, and upgrade email templates into live delivery.",
      "Templates live under /emails and the send utility lives under /lib/email, so brand and content changes stay isolated from product screens.",
      "Before the key is added, LaunchKit keeps email in preview mode instead of failing the flow.",
    ],
    code: "RESEND_API_KEY=re_xxx",
  },
  {
    id: "environment-reference",
    title: "Environment variable reference",
    body: [
      "Every integration key is optional at boot. Missing values change the UX state rather than crashing the app.",
      "Supabase controls demo, setup, and connected mode. Checkout and email upgrade specific surfaces when their keys are present.",
      "You can copy these names directly into your deployment dashboard or local .env.local file.",
    ],
    code: [
      "NEXT_PUBLIC_APP_URL=http://localhost:3000",
      "NEXT_PUBLIC_SUPABASE_URL=",
      "NEXT_PUBLIC_SUPABASE_ANON_KEY=",
      "SUPABASE_SERVICE_ROLE_KEY=",
      "NEXT_PUBLIC_CHECKOUT_PRO_URL=",
      "NEXT_PUBLIC_CHECKOUT_AGENCY_URL=",
      "RESEND_API_KEY=",
    ].join("\n"),
  },
  {
    id: "local-development",
    title: "Local development",
    body: [
      "Run npm run dev for local development. LaunchKit will boot cleanly even if integration keys are still blank.",
      "Use npm run build before delivery to confirm the starter is production-safe in the current configuration.",
      "Update NEXT_PUBLIC_APP_URL before enabling auth redirects or post-checkout return URLs in production.",
    ],
    code: ["npm run dev", "npm run lint", "npm run build"].join("\n"),
  },
];

export const projectStructure = [
  "/app/(marketing) public overview, pricing, and docs pages",
  "/app/(auth) sign in, sign up, and password reset",
  "/app/(dashboard) starter preview surfaces for overview, billing, settings, and admin",
  "/app/api email preview endpoints and future provider hooks",
  "/components reusable UI, marketing, dashboard, and setup systems",
  "/lib env detection, auth, billing, email, Supabase, and utilities",
  "/emails branded React email templates",
];

export const dashboardStats = [
  {
    title: "Weekly signups",
    value: "128",
    detail: "+18% vs last week",
  },
  {
    title: "MRR preview",
    value: "$2,480",
    detail: "Commercial metrics are already framed like a product dashboard",
  },
  {
    title: "Activation rate",
    value: "64%",
    detail: "Demo data keeps the starter believable before real queries exist",
  },
];

export const recentActivity = [
  {
    title: "New Pro signup from pricing page",
    time: "5 minutes ago",
    detail: "Hosted checkout can plug into the existing CTA surfaces without redesign work.",
  },
  {
    title: "Password reset flow previewed",
    time: "42 minutes ago",
    detail: "Auth messaging explains setup clearly instead of pretending live delivery already exists.",
  },
  {
    title: "Admin panel opened in demo mode",
    time: "Today",
    detail: "Mock operational metrics keep the internal surface presentation-ready.",
  },
];

export const integrationPanels = [
  {
    name: "Supabase auth",
    status: "Ready for keys",
    detail: "Email/password flows turn live as soon as project credentials are added.",
  },
  {
    name: "Checkout flow",
    status: "Ready to connect",
    detail: "Hosted checkout URLs can be added now, while webhooks can wait until you need provisioning.",
  },
  {
    name: "Resend email",
    status: "Templates complete",
    detail: "Welcome, reset, and upgrade messages are already branded for LaunchKit.",
  },
];

export const apiKeys = [
  {
    name: "Publishable API key",
    value: "ls_live_82f1xxxxxxxxxxxx",
    scope: "Frontend usage",
  },
  {
    name: "Webhook signing secret",
    value: "whsec_9a3cxxxxxxxxxxxx",
    scope: "Server only",
  },
];

export const planSummary: { currentPlan: PlanId; renewalDate: string } = {
  currentPlan: "pro",
  renewalDate: "2026-05-12",
};

export const usageSummary = {
  seats: { used: 2, total: 3 },
  projects: { used: 3, total: 5 },
  emails: { used: 1820, total: 10000 },
};

export const recentUsers = [
  {
    name: "Ava Johnson",
    email: "ava@launchkit.dev",
    plan: "Pro",
    joinedAt: "2026-04-03",
  },
  {
    name: "Marcus Chen",
    email: "marcus@stackops.io",
    plan: "Free",
    joinedAt: "2026-04-02",
  },
  {
    name: "Noah Patel",
    email: "noah@studioforge.co",
    plan: "Agency",
    joinedAt: "2026-04-01",
  },
];

export const systemHealth = [
  { label: "API uptime", value: "99.98%" },
  { label: "Webhook latency", value: "182 ms" },
  { label: "Email delivery", value: "Healthy" },
];
