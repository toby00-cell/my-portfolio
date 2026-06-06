import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Globe, Bot, Palette, Search, ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bright Joel" },
      { name: "description", content: "Web design, AI agents, SEO and graphics design services for Nigerian businesses." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "web-design",
    category: "Design & Development",
    title: "Website Design & Development",
    description: "Modern, responsive websites that convert visitors into customers — landing pages, business sites, e-commerce, real estate and EdTech platforms.",
    icon: Globe,
    features: ["Landing pages from ₦150k", "Full business websites from ₦200k", "E-commerce & platforms from ₦300k", "Mobile-first design", "Fast delivery"],
  },
  {
    id: "ai-agents",
    category: "AI & Automation",
    title: "AI Agents & Chatbots",
    description: "Intelligent bots that work for your business around the clock — handling customer inquiries, bookings, and support on WhatsApp, Telegram, or your website.",
    icon: Bot,
    features: ["WhatsApp bots", "Telegram bots", "Website chatbots", "Custom automation flows", "24/7 customer support"],
  },
  {
    id: "seo",
    category: "Marketing",
    title: "SEO Services",
    description: "Get your business found on Google. I optimise your website so Nigerian customers searching for what you offer actually find you.",
    icon: Search,
    features: ["Keyword research", "On-page optimisation", "Google Business setup", "Monthly reporting", "Local SEO for Nigeria"],
  },
  {
    id: "graphics",
    category: "Design",
    title: "Graphics Design",
    description: "Clean, professional visuals that make your brand look credible — logos, social media graphics, flyers, and brand identity.",
    icon: Palette,
    features: ["Logo design", "Brand identity", "Social media graphics", "Flyers & banners", "Business cards"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-4">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-16">

        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>

        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            What I offer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Services & Pricing
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Everything your business needs to look professional and grow online — websites, bots, SEO and design, all in one place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {service.category}
                  </span>
                </div>

                <h2 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h2>

                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-border pt-6">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                  >
                    Get a quote <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </main>
      <Footer />
    </div>
  );
}