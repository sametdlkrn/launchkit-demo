import { Card, CardContent } from "@/components/ui/card";

import { SectionHeader } from "../shared/section-header";

type FaqListProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: { question: string; answer: string }[];
};

export function FaqList({ eyebrow, title, description, items }: FaqListProps) {
  return (
    <section className="container-shell py-20">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.question}>
            <CardContent>
              <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 md:text-base">{item.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
