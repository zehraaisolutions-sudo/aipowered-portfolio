import { icons } from "lucide-react";
import { services } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title={<>Everything you need to <span className="gradient-text">launch online</span></>}
          subtitle="From a single landing page to a full AI-powered web application — designed, built and deployed."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.07}>
                <article className="glass card-lift group h-full rounded-2xl p-6">
                  <span className="glass grid size-11 place-items-center rounded-xl transition-colors group-hover:bg-primary/15">
                    <Icon className="size-5 text-accent" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
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
