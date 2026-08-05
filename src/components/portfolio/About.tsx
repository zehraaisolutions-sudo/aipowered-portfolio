import { Code2, Cpu, Layers } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const highlights = [
  { icon: Cpu, title: "AI-first workflow", text: "Modern AI tooling accelerates every build." },
  { icon: Layers, title: "Design + build", text: "One person from concept to deployment." },
  { icon: Code2, title: "Clean foundations", text: "Component-based, maintainable codebases." },
];

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About Me" title="A developer who ships with intent" />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <Reveal className="glass glow-ring rounded-3xl p-7 sm:p-10">
            <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
              Hi, I&apos;m <span className="gradient-text font-semibold">Zehra</span>, an AI Web
              Developer passionate about building modern websites, landing pages, and AI-powered web
              applications. I combine creativity with AI tools to deliver fast, clean, and
              high-quality digital solutions for businesses and startups.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "AI Integration", "SEO", "Deployment"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1}>
                <div className="glass card-lift grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl p-5">
                  <span className="gradient-surface grid size-10 shrink-0 place-items-center rounded-xl text-primary-foreground">
                    <h.icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-semibold">{h.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{h.text}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
