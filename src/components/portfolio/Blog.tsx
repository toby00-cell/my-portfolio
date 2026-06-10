import { blogPosts } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Blog() {
  return (
    <section id="blog" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 border-b border-border pb-6">
          <div className="mono-label !text-primary"> 04 · Writing</div>
          <h2 className="mt-2 font-display text-4xl uppercase md:text-5xl">
            Field <span className="text-primary">notes.</span>
          </h2>
        </div>

        <div className="grid gap-0 border border-border">
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              className={`group grid items-start gap-4 p-6 md:grid-cols-[120px_1fr_auto] md:gap-8 md:p-8 ${
                i !== blogPosts.length - 1 ? "border-b border-border" : ""
              } hover:bg-surface transition-colors`}
            >
              <div className="space-y-1">
                <div className="mono-label !text-primary"> {String(i + 1).padStart(3, "0")}</div>
                <div className="mono-label">{post.date}</div>
                <div className="mono-label">{post.readTime}</div>
              </div>

              <div>
                <div className="mono-label">{post.category}</div>
                <h3 className="mt-2 font-display text-xl uppercase leading-tight md:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <Link
                to="/blog/$slug"
                params={{ slug: post.id }}
                className="inline-flex items-center gap-1 mono-label !text-primary self-center"
              >
                Read <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}