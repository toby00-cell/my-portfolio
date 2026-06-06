import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "All Projects — Bright Joel" },
      { name: "description", content: "Every website and web app I've designed and built — e-commerce, real estate, EdTech and more." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background pt-4">
      <Nav />
      <main className="mx-auto mt-20 max-w-6xl px-4 pb-32">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            All work
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Projects I've shipped
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Every product I've designed and built — from landing pages to full platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
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
                    No screenshot yet
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-primary-soft px-3 py-1 font-medium text-primary">
                  {p.category}
                </span>
                <span className="text-muted-foreground">{p.year}</span>
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                {p.title}
              </h2>
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
      </main>
      <Footer />
    </div>
  );
}