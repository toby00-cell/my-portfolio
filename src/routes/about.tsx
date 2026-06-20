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
    title: "Frontend Developer Intern",
    company: "Zeenom Tech",
    location: "Remote",
    period: "Apr 2026 — Present",
    description:
      "Working on frontend web development tasks and contributing to user interface work across multiple projects. Stack includes JavaScript, Git and modern frontend tooling.",
  },
  {
    title: "AI & Machine Learning Intern",
    company: "Techy Jaunt",
    location: "Remote",
    period: "Apr 2026 — Present",
    description:
      "Undergoing structured training in Artificial Intelligence and Machine Learning — covering core ML concepts, Python, Git and applied AI techniques.",
  },
  {
    title: "Python Programming Intern",
    company: "HiiT Plc",
    location: "Remote",
    period: "Feb 2026 — Apr 2026",
    description:
      "Completed an intensive online Python programming internship focused on core programming fundamentals, data structures and GitHub workflows.",
  },
  {
    title: "IT Intern",
    company: "Elkanah IT Technologies Ltd.",
    location: "Ilorin, Kwara State · On-site",
    period: "Sep 2025 — Dec 2025",
    description:
      "Assisted with software and IT-related tasks while gaining hands-on experience in full-stack development, Git workflows and real-world software delivery.",
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
          <div className="mono-label !text-primary">§ About · The operator</div>
          <h1 className="mt-2 font-display text-5xl uppercase md:text-6xl">
            Bright <span className="text-primary">Joel.</span>
          </h1>
          <p className="mt-4 max-w-xl text-foreground/75 leading-relaxed">
            Software engineer based in Abuja, Nigeria. I build websites, web apps and AI agents —
            focused on clean code, fast delivery and products that actually work in the real world.
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
            <div className="mono-label !text-primary">§ 02 · Experience</div>
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
