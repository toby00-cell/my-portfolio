import { projects } from "@/data/portfolio";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Projects() {
  const list = projects.slice(0, 4);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <div className="mono-label !text-primary"> 02 · Selected Work</div>
            <h2 className="mt-2 font-display text-4xl uppercase md:text-5xl">
              Shipped, not <span className="text-primary">prototyped.</span>
            </h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex mono-label hover:text-primary">
            View all →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {list.map((p, i) => {
            const isOpen = expanded === p.id;
            return (
              <div
                key={p.id}
                className="group relative border border-border bg-card transition hover:border-primary"
              >
                <span className="fig-tag">PROJ · {String(i + 1).padStart(3, "0")}</span>

                {/* Image */}
                <a href={p.url} target="_blank" rel="noreferrer">
                  <div className="aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                </a>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="mono-label !text-primary">{p.category}</span>
                    <span className="mono-label">{p.year}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl uppercase">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                  {/* Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="border border-primary/30 bg-primary/5 px-2 py-1 font-mono text-[0.65rem] text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expand toggle */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : p.id)}
                    className="mt-5 flex w-full items-center justify-between border-t border-border pt-4 mono-label hover:text-primary transition-colors"
                  >
                    <span>Case Study</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Case study panel */}
                  {isOpen && (
                    <div className="mt-4 space-y-4 border-t border-border pt-4">
                      <div>
                        <div className="mono-label !text-primary mb-1">Problem</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.problem}</p>
                      </div>
                      <div>
                        <div className="mono-label !text-primary mb-1">Solution</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.solution}</p>
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="border border-border px-2 py-1 font-mono text-[0.65rem] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 mono-label !text-primary"
                    >
                      Visit <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link to="/projects" className="btn-outline">All Projects</Link>
        </div>
      </div>
    </section>
  );
}