import { services } from "@/data/portfolio";
import { Check } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 border-b border-border pb-6">
          <div className="mono-label !text-primary"> 03 · Services</div>
          <h2 className="mt-2 font-display text-4xl uppercase md:text-5xl">
            Engineered <span className="text-primary">deliverables.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="relative border border-border bg-card p-6">
              <span className="fig-tag">PKG · {String(i + 1).padStart(2, "0")}</span>
              <div className="mono-label">From</div>
              <div className="mt-1 font-display text-3xl text-primary">{s.price}</div>
              <h3 className="mt-5 font-display text-xl uppercase">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{s.description}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-mono text-xs text-foreground/80">
                    <Check className="mt-0.5 h-3.5 w-3.5 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
