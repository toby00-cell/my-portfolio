import { Github, Twitter, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Arrow } from "./Doodle";

const socials = [
  { icon: Github, href: "https://github.com/toby00-cell", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/brightjoel", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bright-joel-01823026b", label: "LinkedIn" },
];
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/services" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      <div className="flex justify-end pr-4">
        <span className="note inline-flex items-start gap-1 text-lg">
          let's connect <Arrow className="mt-3 h-8 w-10" />
        </span>
      </div>
      <div className="mt-2 grid items-center gap-6 border-t-2 border-foreground/20 pt-8 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">{profile.name}</div>
          <div className="font-semibold text-primary">Software Developer</div>
        </div>
        <nav className="flex flex-wrap gap-6 md:justify-center">
          {links.map((l) => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
        </nav>
        <div className="flex gap-3 md:justify-end">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="inline-flex items-center justify-center rounded-sm border-2 border-foreground/30 p-2 transition hover:border-primary hover:text-primary">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved</p>
    </footer>
  );
}