import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Projects() {
  const list = projects.slice(0, 4);
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
          {list.map((p, i) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block border border-border bg-card transition hover:border-primary"
            >
              <span className="fig-tag">PROJ · {String(i + 1).padStart(3, "0")}</span>
              <div className="aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="mono-label !text-primary">{p.category}</span>
                  <span className="mono-label">{p.year}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl uppercase">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{p.tagline}</p>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className="border border-border px-2 py-1 font-mono text-[0.65rem] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 mono-label !text-primary">
                    Visit <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link to="/projects" className="btn-outline">All Projects</Link>
        </div>
      </div>
    </section>
  );
}
