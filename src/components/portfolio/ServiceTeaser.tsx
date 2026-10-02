import { services, profile } from "@/data/portfolio";
import { ArrowRight, Check } from "lucide-react";
import { Arrow } from "./Doodle";

export function ServiceTeaser() {
  const wa = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Bright, I'd like to start a project.")}`;
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-6xl">
              Work with <span className="marker">me</span>
            </h2>
            <p className="mt-4 max-w-lg text-foreground/75">Pick what fits your business. Not sure which one? Message me and we'll work it out.</p>
          </div>
          <span className="note hidden items-start gap-1 text-lg md:inline-flex">
            pick one <Arrow className="mt-3 h-8 w-10" />
          </span>
        </div>

        <div className="grid gap-9 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className={`tape on-dark flex flex-col rounded-md bg-darkpaper p-7 shadow-xl ${i === 0 ? "-rotate-1" : i === 2 ? "rotate-1" : ""}`}
              style={{ backgroundImage: "var(--grain)" }}>
              <div className="font-display text-3xl text-primary">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-3 font-display text-3xl leading-tight">{s.title}</h3>
              <p className="mt-3 text-sm opacity-75">{s.description}</p>
              <div className="my-6 border-y border-white/15 py-4">
                <span className="text-sm opacity-60">From</span>
                <div className="font-display text-5xl">{s.price}</div>
              </div>
              <ul className="flex-1 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <a href={wa} target="_blank" rel="noreferrer" className="btn-yellow mt-8 justify-center">
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}