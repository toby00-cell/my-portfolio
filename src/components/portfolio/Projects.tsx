import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Arrow } from "./Doodle";

export function Projects() {
  const list = projects.slice(0, 3);
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 flex items-end justify-between gap-6">
          <h2 className="font-display text-5xl md:text-6xl">
            Featured <span className="marker">projects</span>
          </h2>
          <span className="note hidden items-start gap-1 text-lg md:inline-flex">
            a few things I've put live <Arrow className="mt-3 h-8 w-10" />
          </span>
        </div>

        <div className="space-y-12">
          {list.map((p, i) => (
            <article key={p.id} className="kraft grid items-center gap-8 p-6 md:grid-cols-2 md:gap-12 md:p-12">
              <div className={i % 2 ? "md:order-2" : ""}>
                <div className="font-display text-5xl"><span className="scribble">{String(i + 1).padStart(2, "0")}</span></div>
                <h3 className="mt-5 font-display text-4xl md:text-6xl">{p.title}</h3>
                <div className="mt-2 font-semibold text-primary">{p.category} · {p.year}</div>
                <p className="mt-4 text-foreground/80">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-sm border border-foreground/30 px-2 py-0.5 font-mono text-xs">{t}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link to="/projects" className="btn-yellow">View case study <ArrowUpRight className="h-4 w-4" /></Link>
                  {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="btn-outline">Visit site</a>}
                </div>
              </div>
              <a href={p.url} target="_blank" rel="noreferrer" className={`group ${i % 2 ? "md:order-1" : ""}`}>
                <div className={`polaroid tape ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                  <div className="aspect-[16/10] overflow-hidden bg-surface">
                    {p.image && <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/projects" className="btn-outline">See all projects <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}