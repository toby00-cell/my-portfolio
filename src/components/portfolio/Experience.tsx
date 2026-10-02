import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

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

export function Experience() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <div className="mono-label !text-primary"> Experience</div>
            <h2 className="mt-2 font-display text-4xl uppercase md:text-5xl">
              Where I've <span className="text-primary">worked</span>
            </h2>
          </div>
          <Link to="/about" className="hidden md:inline-flex mono-label hover:text-primary">
            Full bio →
          </Link>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-8">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 h-4 w-4 rotate-45 border-2 border-primary bg-background" />

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

        <div className="mt-12 md:hidden">
          <Link to="/about" className="btn-outline">
            Full bio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}