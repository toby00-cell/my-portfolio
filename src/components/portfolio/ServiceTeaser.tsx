import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Bot, Code, GitBranch, Database, Wrench } from "lucide-react";

const items = [
  {
    icon: Globe,
    label: "Website & App Development",
    description: "Full-stack web apps, landing pages and business sites — fast, scalable and built to last.",
  },
  {
    icon: Bot,
    label: "AI Agents & Automation",
    description: "Custom AI agents and automated workflows that handle repetitive tasks and scale your operations.",
  },
  {
    icon: Database,
    label: "Backend & API Development",
    description: "REST APIs, database design and server-side logic — clean architecture, built for production.",
  },
  {
    icon: Wrench,
    label: "Maintenance & Optimization",
    description: "Bug fixes, performance tuning and feature additions for existing codebases — fast turnaround.",
  },
];

export function ServiceTeaser() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mono-label !text-primary"> Services</div>
            <h2 className="mt-2 font-display text-4xl uppercase md:text-5xl">
              What I <span className="text-primary">build for you.</span>
            </h2>
            <p className="mt-4 max-w-md text-foreground/75">
              From landing pages that convert to AI agents that scale your ops —
              production-ready deliverables, shipped in days, not months.
            </p>
          </div>
          <Link to="/services" className="btn-yellow self-start md:self-auto">
            See Full Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ icon: Icon, label, description }, i) => (
            <div
              key={label}
              className="group relative bg-card p-6 transition-colors hover:bg-surface"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center border border-border bg-surface text-primary transition-colors group-hover:border-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="mono-label">0{i + 1}</span>
              </div>

              <div className="mt-5 font-display text-base uppercase">{label}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}