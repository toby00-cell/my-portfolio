import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { blogPosts } from "@/data/portfolio";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <main className="mx-auto max-w-3xl px-4 py-24 text-center">
          <div className="mono-label !text-primary mb-4">404</div>
          <h1 className="font-display text-4xl uppercase">Post not found</h1>
          <Link to="/" className="mt-8 inline-flex items-center gap-2 mono-label !text-primary">
            <ArrowLeft className="h-3.5 w-3.5" /> Back home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        {/* Back link */}
        <Link
          to="/"
          hash="blog"
          className="inline-flex items-center gap-2 mono-label !text-primary mb-12 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to writing
        </Link>

        {/* Header */}
        <div className="border-b border-border pb-8 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="mono-label !text-primary">{post.category}</span>
            <span className="mono-label">{post.date}</span>
            <span className="mono-label">{post.readTime}</span>
          </div>
          <h1 className="font-display text-4xl uppercase leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Body */}
        <div className="prose-custom">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className="mb-6 text-foreground leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-16 border-t border-border pt-8">
          <Link
            to="/"
            hash="blog"
            className="inline-flex items-center gap-2 mono-label !text-primary hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all posts
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
