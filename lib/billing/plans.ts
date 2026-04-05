export type PlanId = "free" | "pro" | "agency";

export type PlanDefinition = {
  id: PlanId;
  name: string;
  price: number;
  description: string;
  cta: string;
  highlight?: string;
  featured?: boolean;
  limits: {
    members: string;
    projects: string;
    emailSends: string;
  };
  features: string[];
};

export const plans: PlanDefinition[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    description: "Ship your first SaaS concept with the full UI foundation.",
    cta: "Start free",
    limits: {
      members: "1 seat",
      projects: "1 product",
      emailSends: "100 emails",
    },
    features: [
      "Landing, pricing, docs, and auth flows",
      "Supabase-ready auth architecture",
      "Dashboard overview with mock data",
      "Deploy-ready Next.js structure",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 79,
    description: "The default starter for indie hackers shipping real customers.",
    cta: "Upgrade to Pro",
    highlight: "Most popular",
    featured: true,
    limits: {
      members: "3 seats",
      projects: "5 products",
      emailSends: "10,000 emails",
    },
    features: [
      "Hosted checkout links for Pro and Agency",
      "Resend-ready email templates",
      "Admin surface and billing views",
      "Priority starter updates",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    price: 179,
    description: "Use LaunchKit across client builds with faster delivery.",
    cta: "Talk to sales",
    limits: {
      members: "10 seats",
      projects: "Unlimited products",
      emailSends: "50,000 emails",
    },
    features: [
      "Multi-project starter usage",
      "Client handoff documentation",
      "Advanced support window",
      "Commercial license coverage",
    ],
  },
];

export const featureMatrix = [
  {
    label: "Production landing pages",
    availability: ["Included", "Included", "Included"],
  },
  {
    label: "Supabase auth structure",
    availability: ["Included", "Included", "Included"],
  },
  {
    label: "Hosted checkout setup",
    availability: ["Starter", "Connected", "Connected"],
  },
  {
    label: "Email templates",
    availability: ["Starter", "Branded", "Branded"],
  },
  {
    label: "Commercial usage",
    availability: ["Single product", "Single product", "Client projects"],
  },
];

export function getPlan(planId: PlanId) {
  return plans.find((plan) => plan.id === planId) ?? plans[0];
}
