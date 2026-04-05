import { createClient } from "@supabase/supabase-js";

import { env, integrationStatus } from "@/lib/env";

export function createSupabaseServerClient() {
  if (!integrationStatus.supabase) {
    return null;
  }

  return createClient(
    env.supabaseUrl!,
    env.supabaseServiceRoleKey ?? env.supabaseAnonKey!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
}
