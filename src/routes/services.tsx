import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Globe, Bot, Palette, Search, ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { services, profile } from "@/data/portfolio";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bright Joel" },
      { name: "description", content: "Web design, AI agents, SEO and graphics design services for Nigerian businesses." },
    ],
  }),
  component: ServicesPage,
});

const capabilities = [
  { icon: Globe, title: "Web Design & Development", desc: "Landing pages, business sites, e-commerce, real estate and EdTech platforms — built with React, TypeScript and modern tooling." },
  { icon: Bot, title: "AI Agents & Automation", desc: "Custom AI assistants and workflow automation that handle support, content and ops — so you can focus on the business." },
  { icon: Search, title: "SEO Setup & Strategy", desc: "On-page SEO, structured data, performance and content strategy to get you ranking on Google for your customers." },
  { icon: Palette, title: "Brand & Graphics", desc: "Logos, social graphics and brand identity that match your website and look right on every channel." },
];

function ServicesPage() {
  const whatsappUrl = `https://wa.me/${profile.whatsapp}`;
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <Link to="/" className="inline-flex items-center gap-1 mono-label hover:text-primary">
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </Link>

        <div className="mt-6 mb-14 border-b border-border pb-8">
          <div className="mono-label !text-primary"> Services · What I do</div>
          <h1 className="mt-2 font-display text-5xl uppercase md:text-6xl">
            Engineered <span className="text-primary">deliverables.</span>
          </h1>
          <p className="mt-4 max-w-xl text-foreground/75">
            Four core capabilities. Production-ready output. Most projects ship in 1–2 weeks.
          </p>
        </div>

        {/* Capabilities */}
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative border border-border bg-card p-6 md:p-8">
              <span className="fig-tag">CAP · 0{i + 1}</span>
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-6 font-display text-xl uppercase">{title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{desc}</p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="mt-20">
          <div className="mb-8 border-b border-border pb-6">
            <div className="mono-label !text-primary"> Packages · Pricing</div>
            <h2 className="mt-2 font-display text-3xl uppercase md:text-4xl">
              Pick a <span className="text-primary">starting point.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.title} className="relative border border-border bg-card p-6">
                <span className="fig-tag">PKG · 0{i + 1}</span>
                <div className="mono-label">From</div>
                <div className="mt-1 font-display text-3xl text-primary">{s.price}</div>
                <h3 className="mt-5 font-display text-lg uppercase">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{s.description}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-4">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-mono text-xs text-foreground/80">
                      <Check className="mt-0.5 h-3.5 w-3.5 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 border border-primary bg-card p-8 md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[1.4fr_auto]">
            <div>
              <div className="mono-label !text-primary">Ready when you are</div>
              <h2 className="mt-2 font-display text-3xl uppercase md:text-4xl">
                Let's build something <span className="text-primary">that ships.</span>
              </h2>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-yellow">
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
