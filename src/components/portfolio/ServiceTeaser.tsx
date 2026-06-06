import { Link } from "@tanstack/react-router";
import { Globe, Bot, Search, Palette, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    label: "Website Design & Development",
    detail: "Fast, mobile-first sites that convert",
  },
  {
    icon: Bot,
    label: "AI Agents & Chatbots",
    detail: "24/7 bots for WhatsApp & your site",
  },
  {
    icon: Search,
    label: "SEO Services",
    detail: "Get found on Google by local customers",
  },
  {
    icon: Palette,
    label: "Graphics Design",
    detail: "Logos, branding & social media visuals",
  },
];

export function ServiceTeaser() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-4">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              What I do
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services I offer
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              From websites to AI bots — everything your business needs to grow online.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 flex-shrink-0"
          >
            View pricing <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {services.map(({ icon: Icon, label, detail }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 rounded-2xl bg-primary-soft/50 p-5"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium leading-snug">{label}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-snug">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}