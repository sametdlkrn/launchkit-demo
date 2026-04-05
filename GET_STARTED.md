# Get Started With LaunchKit

LaunchKit is designed to feel intentional before configuration and go live quickly after it. Use this guide when you want the fastest path from first preview to a connected starter you can ship or sell.

## 1. Install and run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open these routes first:

- `/`
- `/dashboard`
- `/sign-in`
- `/pricing`
- `/docs`

## 2. Understand the three modes

- Demo mode: no Supabase env values are present
- Setup mode: some configuration exists, but auth is not fully enabled
- Connected mode: Supabase public credentials are present and auth can run live

Checkout and email integrations upgrade their own surfaces independently.
That means you can show the product first and wire services second.

## 3. Connect Supabase

Add:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

This enables:

- Live sign in and sign up
- Password reset flow
- Real users and connected backend surfaces

## 4. Connect checkout

Add:

```bash
NEXT_PUBLIC_CHECKOUT_PRO_URL=
NEXT_PUBLIC_CHECKOUT_AGENCY_URL=
```

This activates:

- Pro and Agency purchase buttons
- Billing page upgrade flows
- Paid-plan CTA routing

## 5. Connect email

Add:

```bash
RESEND_API_KEY=
```

This activates:

- Live welcome emails
- Password reset delivery
- Upgrade confirmation delivery

## 6. Build before delivery

```bash
npm run lint
npm run build
```

## 7. Customize for your product

Good first edits:

- Brand copy in `lib/content.ts`
- Visual details in `app/globals.css`
- Product-specific modules under `app/(dashboard)`
- Email branding in `/emails`

## Why LaunchKit behaves this way

LaunchKit is a starter kit, not a hosted SaaS. Demo mode exists so buyers can evaluate the whole product before wiring infrastructure, while ownership of auth and data stays with the buyer.
