import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "Fiverr", href: "https://www.fiverr.com/", icon: null },
  { label: "Upwork", href: "https://www.upwork.com/", icon: null },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Presentation-only submit: swap for a real handler when a backend is added.
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — I'll reply within 24 hours.");
    }, 700);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let&apos;s build something <span className="gradient-text">remarkable</span></>}
          subtitle="Tell me about your project and I'll get back to you with a plan and a timeline."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="glass glow-ring rounded-3xl p-7 sm:p-8">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you building?"
                  className="resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="gradient-surface glow-ring mt-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                <Send className="size-4" />
                {sending ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>

          <div className="grid content-start gap-4">
            <Reveal delay={0.08}>
              <a
                href="mailto:hello@zehraaisolutions.com"
                className="glass card-lift grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl p-5"
              >
                <span className="gradient-surface grid size-10 shrink-0 place-items-center rounded-xl text-primary-foreground">
                  <Mail className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                    Email
                  </span>
                  <span className="block truncate text-sm font-semibold">
                    hello@zehraaisolutions.com
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="glass card-lift grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl p-5">
                <span className="gradient-surface grid size-10 shrink-0 place-items-center rounded-xl text-primary-foreground">
                  <MapPin className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                    Location
                  </span>
                  <span className="block text-sm font-semibold">Pakistan</span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="glass rounded-2xl p-5">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">Find me on</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="glass card-lift inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium"
                    >
                      {s.icon ? <s.icon className="size-4 text-accent" /> : null}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
