import { createClient } from "@supabase/supabase-js";

import { env, integrationStatus } from "@/lib/env";

export function createSupabaseBrowserClient() {
  if (!integrationStatus.supabase) {
    return null;
  }

  return createClient(env.supabaseUrl!, env.supabaseAnonKey!, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  });
}
