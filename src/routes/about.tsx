import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bright Joel" },
      { name: "description", content: "Software engineer based in Abuja, Nigeria. Building websites, web apps and AI agents." },
    ],
  }),
  component: AboutPage,
});

const experience = [
  {
    title: "Frontend Developer",
    company: "Zeenom Tech",
    location: "Remote",
    period: "Apr 2026 to Present",
    description:
      "I lead frontend decisions and turn designs into React and TypeScript apps that real users depend on. I care about performance, accessibility and reliable API integrations, so the interface stays in sync even on busy workflows.",
  },
  {
    title: "Software & Machine Learning Engineer",
    company: "Techy Jaunt",
    location: "Remote",
    period: "Apr 2026 to Present",
    description:
      "I take machine learning models out of notebooks and into working software. That means Python data preprocessing, model integration and automation that product features can build on.",
  },
  {
    title: "Software Engineer (Contracts & Consulting)",
    company: "Self-employed",
    location: "Remote",
    period: "Jan 2026 to Present",
    description:
      "I take on full-stack projects for business clients, from scoping and database design to deployment on their own domains. I work directly with the people running the business to turn real bottlenecks into working software.",
  },
  {
    title: "Software Engineer",
    company: "HIIT Plc",
    location: "Abuja, Nigeria",
    period: "Jan 2026 to Apr 2026",
    description:
      "Built Python automation scripts and internal data tools that cut out manual data handling and reduced processing errors. Also sped up routine database and data-processing tasks.",
  },
  {
    title: "Backend Engineer",
    company: "Elkanah IT Technologies",
    location: "Ilorin, Nigeria",
    period: "Sep 2024 to Dec 2025",
    description:
      "Owned REST API development in ASP.NET Core, including PostgreSQL and SQL Server schemas, validation and controller logic. The modules I delivered are running live in production, and I tracked down API performance and data validation issues during code reviews.",
  },
];

function AboutPage() {
  const whatsappUrl = `https://wa.me/${profile.whatsapp}`;

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <Link to="/" className="inline-flex items-center gap-1 mono-label hover:text-primary">
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </Link>

        {/* Header */}
        <div className="mt-6 mb-14 border-b border-border pb-8">
          <div className="mono-label !text-primary">About · The operator</div>
          <h1 className="mt-2 font-display text-5xl uppercase md:text-6xl">
            Bright <span className="text-primary">Joel.</span>
          </h1>
          <p className="mt-4 max-w-xl text-foreground/75 leading-relaxed">
            Software engineer based in Abuja, Nigeria. I've built and shipped production products in fintech, supply chain, sports-tech and gaming, from an offline-first inventory app to real-time game servers. I work across the stack: React and Next.js on the front, ASP.NET Core, NestJS and Node.js on the back.
          </p>
          <p className="mt-4 max-w-xl text-foreground/75 leading-relaxed">
            I studied Software Engineering at Baze University in Abuja (B.Sc., 2026) and I'm an AWS Certified Cloud Practitioner. I like owning a product from the first conversation about the problem all the way to deployment.
          </p>
          <p className="mt-4 max-w-xl text-foreground/75 leading-relaxed">
  Outside of work, I'm into football and enjoy unwinding with friends and family. But honestly, I just love building things. It's less of a job and more of a habit at this point.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-yellow">
              Let's Talk <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/Bright_Joel_Resume.pdf" download className="btn-outline">
              Download CV ↓
            </a>
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="mb-10 border-b border-border pb-6">
            <div className="mono-label !text-primary">02 · Experience</div>
            <h2 className="mt-2 font-display text-3xl uppercase md:text-4xl">
              Where the work <span className="text-primary">happened.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-12">
              {experience.map((job, i) => (
                <div key={i} className="relative pl-8">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                  <div className="mono-label !text-primary mb-1">{job.period}</div>
                  <h3 className="font-display text-xl uppercase">{job.title}</h3>
                  <div className="mt-0.5 font-mono text-sm text-muted-foreground">
                    {job.company} · {job.location}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 border border-primary bg-card p-8 md:p-12">
          <div className="mono-label !text-primary mb-2">Open to opportunities</div>
          <h2 className="font-display text-3xl uppercase md:text-4xl">
            Let's build something <span className="text-primary">that ships.</span>
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-yellow">
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-outline">
              Send an Email
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}