import { Card, CardContent } from "@/components/ui/card";

type StatCardProps = {
  title: string;
  value: string;
  detail: string;
};

export function StatCard({ title, value, detail }: StatCardProps) {
  return (
    <Card>
      <CardContent>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          {title}
        </p>
        <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
        <p className="mt-2 text-sm">{detail}</p>
      </CardContent>
    </Card>
  );
}
