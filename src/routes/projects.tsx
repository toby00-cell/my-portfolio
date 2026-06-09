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
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12 border-b border-border pb-8">
          <div className="mono-label !text-primary"> Archive · All Work</div>
          <h1 className="mt-2 font-display text-5xl uppercase md:text-6xl">
            Projects I've <span className="text-primary">shipped.</span>
          </h1>
          <p className="mt-4 max-w-xl text-foreground/75">
            Every product I've designed and built — from landing pages to full platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`group relative block border border-border bg-card transition hover:border-primary ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <span className="fig-tag">PROJ · {String(i + 1).padStart(3, "0")}</span>
              <div className={`overflow-hidden border-b border-border bg-surface ${i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                {p.image && (
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                )}
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="mono-label !text-primary">{p.category}</span>
                  <span className="mono-label">{p.year}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl uppercase md:text-3xl">{p.title}</h2>
                <p className="mt-2 text-sm text-foreground/75">{p.tagline}</p>
                <p className="mt-4 text-foreground/80">{p.description}</p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="border border-border px-2 py-1 font-mono text-[0.65rem] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.url && (
                    <span className="inline-flex items-center gap-1 mono-label !text-primary">
                      Visit <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
