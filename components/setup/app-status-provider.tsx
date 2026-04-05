"use client";

import type { ReactNode } from "react";
import { createContext, useContext } from "react";

import type { RuntimeStatus } from "@/lib/env";

const AppStatusContext = createContext<RuntimeStatus | null>(null);

type AppStatusProviderProps = {
  children: ReactNode;
  value: RuntimeStatus;
};

export function AppStatusProvider({
  children,
  value,
}: AppStatusProviderProps) {
  return (
    <AppStatusContext.Provider value={value}>
      {children}
    </AppStatusContext.Provider>
  );
}

export function useAppStatus() {
  const context = useContext(AppStatusContext);

  if (!context) {
    throw new Error("useAppStatus must be used within AppStatusProvider.");
  }

  return context;
}
