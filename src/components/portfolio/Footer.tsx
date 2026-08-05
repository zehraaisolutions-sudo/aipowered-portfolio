import { navLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="glass mx-auto max-w-6xl rounded-3xl p-7 sm:p-9">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <span className="gradient-surface grid size-8 shrink-0 place-items-center rounded-lg font-display text-sm font-bold text-primary-foreground">
                Z
              </span>
              <span className="truncate font-display font-semibold">Zehra AI Solutions</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Building the Future with AI.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-7 border-t border-glass-border pt-6 text-xs text-muted-foreground">
          © 2026 Zehra AI Solutions
        </p>
      </div>
    </footer>
  );
}
