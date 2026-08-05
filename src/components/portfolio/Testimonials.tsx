import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What clients <span className="gradient-text">say</span></>}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="glass card-lift flex h-full flex-col rounded-3xl p-6">
                <Quote className="size-6 text-accent" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <figcaption className="mt-5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-t border-glass-border pt-5">
                  <span className="gradient-surface grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold text-primary-foreground">
                    {t.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{t.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
