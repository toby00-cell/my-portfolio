import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Writing", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center bg-primary font-display text-sm text-primary-foreground">
            T
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm tracking-wide">Bright Joel</div>
            <div className="mono-label">SOFTWARE DEVELOPER · 2026</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mono-label hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          
          <a
            href="/Bright_Joel_Resume.pdf"
            download
            className="mono-label hover:text-primary transition-colors"
          >
            Resume ↓
          </a>
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary"
            suppressHydrationWarning
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="/#contact" className="btn-yellow">Hire Me</a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary"
            suppressHydrationWarning
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-3 mono-label" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="/Bright_Joel_Resume.pdf"
              download
              className="py-3 mono-label hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Resume ↓
            </a>
            <a href="/#contact" className="btn-yellow mt-3 justify-center" onClick={() => setOpen(false)}>
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}