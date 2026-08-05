import { motion } from "motion/react";
import { frontendSkills, tools } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title={<>The <span className="gradient-text">stack</span> behind the work</>}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="glass glow-ring rounded-3xl p-7 sm:p-8">
            <h3 className="font-display text-lg font-semibold">Frontend</h3>
            <ul className="mt-6 space-y-5">
              {frontendSkills.map((s, i) => (
                <li key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={`${s.name} proficiency`}
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="mt-2 h-2 overflow-hidden rounded-full bg-secondary"
                  >
                    <motion.div
                      className="gradient-surface h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="glass glow-ring rounded-3xl p-7 sm:p-8">
            <h3 className="font-display text-lg font-semibold">Tools</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI and deployment tooling I use daily to move fast without cutting corners.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {tools.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="glass card-lift rounded-xl px-4 py-2.5 text-sm font-medium"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
