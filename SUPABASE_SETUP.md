# Supabase Setup

This guide turns LaunchKit from demo or setup mode into connected mode without changing the product shell buyers already saw.

## What Supabase controls in LaunchKit

- Sign in and sign up
- Password reset
- Real users in the starter
- Server-side elevated operations when needed

## Required values

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=public-anon-key
SUPABASE_SERVICE_ROLE_KEY=service-role-key
```

## Step-by-step

1. Create a Supabase project.
2. Copy the project URL and anon key from Project Settings.
3. Add the values to `.env.local`.
4. Add the service role key for server-side operations.
5. Restart the dev server.

## Auth enablement

Inside Supabase:

1. Enable Email auth.
2. Add your local and production redirect URLs.
3. Optionally enable email confirmation.
4. Optionally enable GitHub or Google providers later.

## What changes after connection

- Auth pages stop showing setup-only messaging
- Demo mode switches to connected mode
- Dashboard and settings can be extended with real user data
- The starter is ready for your own database schema and policies
- The same screens buyers reviewed in demo mode become your live auth entry points

## Why LaunchKit does not ship with a hosted backend

LaunchKit is meant to be portable. Connecting your own Supabase project gives you:

- Full ownership of users and data
- Cleaner agency/client handoff
- Easier compliance and deployment choices
- No dependency on a vendor-owned demo backend

## Recommended next steps

1. Add your database tables and row-level security policies.
2. Replace seeded dashboard content with live queries.
3. Connect checkout and email after auth is working.
4. Run `npm run build` before deployment.
