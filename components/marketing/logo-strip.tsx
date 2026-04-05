import { integrations } from "@/lib/content";

export function LogoStrip() {
  return (
    <section className="container-shell pb-8">
      <div className="surface-card-strong px-6 py-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          Integration-ready foundation
        </p>
        <div className="mt-5 grid gap-3 text-center text-sm font-semibold text-foreground sm:grid-cols-2 lg:grid-cols-6">
          {integrations.map((integration) => (
            <div key={integration} className="rounded-2xl border bg-white/70 px-4 py-4 dark:bg-white/5">
              {integration}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
