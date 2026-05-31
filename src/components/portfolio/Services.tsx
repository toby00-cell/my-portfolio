import { services } from "@/data/portfolio";
import { Check } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="mx-auto mt-32 max-w-6xl px-4">
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
          Services
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          What I can build for you
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Transparent pricing. Pick what fits your business — every project is custom-designed, mobile-first and built to load fast.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => {
          const featured = i === 1;
          return (
            <div
              key={s.title}
              className={`flex flex-col rounded-3xl border p-7 transition ${
                featured
                  ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "border-border bg-card text-foreground shadow-[var(--shadow-card)]"
              }`}
            >
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className={`mt-2 text-sm ${featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                {s.description}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">{s.price}</span>
                <span className={`text-sm ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  starting
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        featured ? "bg-white/20" : "bg-primary-soft text-primary"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                  featured
                    ? "bg-white text-primary hover:brightness-95"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                Get started
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
