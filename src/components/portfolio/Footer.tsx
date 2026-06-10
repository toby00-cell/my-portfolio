import { Github, Twitter, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

const socials = [
  { icon: Github, href: "https://github.com/toby00-cell", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/brightjoel", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bright-joel-01823026b", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-primary font-display text-sm text-primary-foreground">
              T
            </div>
            <div>
              <div className="font-display text-sm">Bright Joel</div>
              <div className="mono-label">{profile.location}</div>
            </div>
          </div>
        </div>

        <div className="md:text-center">
          <div className="mono-label">Status</div>
          <div className="mt-1 font-mono text-sm text-primary">● Available for projects</div>
        </div>

        <div className="md:text-right">
          <div className="mono-label">© {new Date().getFullYear()} — All systems shipped</div>
          <div className="mt-1 font-mono text-xs text-muted-foreground">v.2026.1</div>
          <div className="mt-3 flex items-center gap-3 md:justify-end">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}