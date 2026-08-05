import { Check, icons } from "lucide-react";
import { reasons } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function WhyChooseMe() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Choose Me"
          title={<>Built for speed, <span className="gradient-text">crafted for quality</span></>}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = icons[r.icon as keyof typeof icons];
            return (
              <Reveal key={r.title} delay={(i % 3) * 0.08}>
                <article className="glass card-lift h-full rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <span className="gradient-surface grid size-9 shrink-0 place-items-center rounded-lg text-primary-foreground">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="min-w-0 truncate font-display text-base font-semibold">
                      {r.title}
                    </h3>
                    <Check className="ml-auto size-4 shrink-0 text-accent" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {r.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
