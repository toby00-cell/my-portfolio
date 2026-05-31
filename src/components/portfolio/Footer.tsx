import { Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-4 py-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <p>Built with care in {profile.location}.</p>
          <a
            href="https://www.linkedin.com/in/bright-joel-01823026b"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center justify-center rounded-full border border-border p-2 transition hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}