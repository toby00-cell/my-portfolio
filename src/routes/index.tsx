import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ServiceTeaser } from "@/components/portfolio/ServiceTeaser";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bright Joel — Web Engineer & Designer" },
      { name: "description", content: "Production-grade websites for Nigerian founders — landing pages, e-commerce, real estate and EdTech, engineered for speed and conversion." },
      { property: "og:title", content: "Bright Joel — Web Engineer & Designer" },
      { property: "og:description", content: "Landing pages, business sites, e-commerce, real estate and EdTech — engineered for speed and conversion." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <ServiceTeaser />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}