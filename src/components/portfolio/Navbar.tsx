import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";
import { useTheme } from "./useTheme";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-60 px-4 pt-3 sm:px-6">
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex max-w-6xl items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass glow-ring" : "border border-transparent"
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="gradient-surface grid size-8 shrink-0 place-items-center rounded-lg font-display text-sm font-bold text-primary-foreground">
            Z
          </span>
          <span className="truncate font-display text-sm font-semibold sm:text-base">
            Zehra <span className="gradient-text">AI</span> Solutions
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="glass grid size-9 place-items-center rounded-full transition-transform hover:scale-105"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href="#contact"
            className="gradient-surface hidden rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="glass grid size-9 place-items-center rounded-full lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass glow-ring mx-auto mt-2 max-w-6xl rounded-2xl p-2 lg:hidden">
          <ul className="grid grid-cols-2 gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
