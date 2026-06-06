import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const FEATURED_IDS = ["naijathreads", "learnbridge", "ninety-minds"];
const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)!);

export function Projects() {
  return (
    <section id="projects" className="mx-auto mt-32 max-w-6xl px-4">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            Selected work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Projects I've shipped
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          A few products I've designed and built — from real estate to e-commerce and learning platforms.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <article
            key={p.id}
            className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] md:p-8 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="mb-6 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-soft">
              {p.image ? (
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-primary/60">
                  Add a screenshot in src/data/portfolio.ts
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-primary-soft px-3 py-1 font-medium text-primary">
                {p.category}
              </span>
              <span className="text-muted-foreground">{p.year}</span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
            <p className="mt-4 text-base text-foreground/80">{p.description}</p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Visit <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card"
        >
          See all projects <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}