import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono, Manrope } from "next/font/google";

import { AppStatusProvider } from "@/components/setup/app-status-provider";
import { appStatus } from "@/lib/env";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://launchkit.dev"),
  title: {
    default: "LaunchKit",
    template: "%s | LaunchKit",
  },
  description:
    "LaunchKit is a premium Next.js starter that ships landing, auth, billing, email, docs, and dashboard infrastructure in one production-ready V1.",
  applicationName: "LaunchKit",
  keywords: [
    "Next.js starter",
    "SaaS boilerplate",
    "Supabase starter",
    "checkout starter",
    "Resend starter",
    "LaunchKit",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppStatusProvider value={appStatus}>{children}</AppStatusProvider>
      </body>
    </html>
  );
}
