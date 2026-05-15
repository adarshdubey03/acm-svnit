import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return { title: "Blog Not Found | ACM SVNIT" };
  
  return {
    title: blog.title + " | ACM SVNIT",
    description: blog.excerpt,
  };
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/#blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm font-mono text-primary mb-6">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 pb-12 border-b border-border">
              {blog.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none">
            {/* Simple text rendering for now. In a real app, you might use markdown or a rich text renderer. */}
            {blog.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-6 leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
