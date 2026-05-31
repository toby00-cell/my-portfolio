import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bright Joel — Web Designer & Developer" },
      { name: "description", content: "I design and build beautiful, fast websites for Nigerian founders and businesses — landing pages, e-commerce, real estate and EdTech." },
      { property: "og:title", content: "Bright Joel — Web Designer & Developer" },
      { property: "og:description", content: "Landing pages, business sites, e-commerce, real estate and EdTech — built to look great and convert." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pt-4">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}