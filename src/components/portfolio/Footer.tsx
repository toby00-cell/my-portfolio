import { Github, Twitter, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/brightjoel", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/brightjoel", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bright-joel-01823026b", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-4 pb-10">
      <div className="border-t border-border pt-10">

        {/* Top row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

          {/* Brand + tagline */}
          <div className="max-w-sm">
            <p className="text-base font-semibold text-foreground">
              Tobi
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Launch beautiful, fast websites and AI-powered tools for your Nigerian business — in under 4 weeks.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tobi. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary"
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