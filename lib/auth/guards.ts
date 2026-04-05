import { integrationStatus } from "@/lib/env";

export type AppUser = {
  name: string;
  email: string;
  role: "founder" | "admin";
  mode: "live" | "demo";
};

export async function getCurrentAppUser(): Promise<AppUser> {
  if (integrationStatus.supabase) {
    return {
      name: "Connected workspace",
      email: "founder@launchkit.dev",
      role: "founder",
      mode: "live",
    };
  }

  return {
    name: "Demo founder",
    email: "demo@launchkit.dev",
    role: "admin",
    mode: "demo",
  };
}
