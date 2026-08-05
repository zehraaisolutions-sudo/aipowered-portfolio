import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

/** Live-link project cards: the whole card, the preview and the buttons all open the site. */
export function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Selected <span className="gradient-text">live projects</span></>}
          subtitle="Every card links straight to the published website — open any project and explore it live."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="glass card-lift group flex h-full flex-col overflow-hidden rounded-3xl">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title} live site`}
                  className="block"
                >
                  {/* Screenshot placeholder with browser chrome + real project URL */}
                  <div className="border-b border-glass-border">
                    <div className="flex items-center gap-2 bg-secondary/60 px-3 py-2">
                      <span className="flex gap-1.5">
                        <span className="size-2 rounded-full bg-destructive/70" />
                        <span className="size-2 rounded-full bg-accent/70" />
                        <span className="size-2 rounded-full bg-primary/70" />
                      </span>
                      <span className="truncate rounded-md bg-background/60 px-2 py-0.5 text-[10px] text-muted-foreground">
                        {p.url.replace("https://", "").replace(/\/$/, "")}
                      </span>
                    </div>
                    <div className="aurora relative grid aspect-16/10 place-items-center opacity-90">
                      <div className="absolute inset-0 bg-background/45" />
                      <div className="relative px-6 text-center">
                        <p className="font-display text-lg font-bold sm:text-xl">{p.title}</p>
                        <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                          {p.category}
                        </p>
                      </div>
                      <ArrowUpRight className="absolute top-3 right-3 size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>
                </a>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {p.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2 pt-1">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-surface inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                      <ExternalLink className="size-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
                    >
                      <Github className="size-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
