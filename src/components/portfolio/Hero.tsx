import { motion } from "motion/react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { value: "20+", label: "Projects shipped" },
  { value: "7 days", label: "Avg. delivery" },
  { value: "100%", label: "Responsive builds" },
];

export function Hero() {
  return (
    <section id="home" className="relative px-4 pt-32 pb-20 sm:px-6 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex justify-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-accent" />
            AI-assisted web development studio
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mx-auto mt-6 max-w-4xl text-center text-4xl leading-[1.08] font-bold sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Building Modern{" "}
            <span className="gradient-text">AI-Powered Websites</span> That Grow Businesses
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base text-muted-foreground sm:text-lg">
            I create beautiful landing pages, business websites, and AI-powered web applications
            using modern technologies and AI-assisted development.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="gradient-surface glow-ring group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:w-auto"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary sm:w-auto"
            >
              <Mail className="size-4" />
              Hire Me
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="glass card-lift rounded-2xl p-5 text-center">
                <dt className="gradient-text font-display text-2xl font-bold">{s.value}</dt>
                <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <motion.div
          aria-hidden="true"
          className="gradient-surface mx-auto mt-16 h-px max-w-4xl opacity-40"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
}
