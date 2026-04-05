import { Card, CardContent } from "@/components/ui/card";
import { CopyValueButton } from "@/components/setup/copy-value-button";

type DocSectionProps = {
  id?: string;
  title: string;
  body: string[];
  code?: string;
};

export function DocSection({ id, title, body, code }: DocSectionProps) {
  return (
    <Card>
      <CardContent>
        <div id={id} className="scroll-mt-28" />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <div className="mt-4 space-y-3">
          {body.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-7 md:text-base">
              {paragraph}
            </p>
          ))}
        </div>
        {code ? (
          <div className="mt-6 rounded-2xl border bg-slate-950 p-4 text-sm leading-7 text-slate-100">
            <div className="mb-3 flex justify-end">
              <CopyValueButton label="Copy snippet" value={code} />
            </div>
            <pre className="overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
