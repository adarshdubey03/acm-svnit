"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { ArrowRight, Calendar } from "lucide-react";

export function BlogSection() {
  return (
    <section id="blog" className="w-full py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center w-[90%] md:w-[70%] mx-auto py-6 border-2 border-dotted border-primary/60 rounded-full mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight m-0">
              Latest from our <span className="text-primary">Blog</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Insights, tutorials, and stories from the SVNIT tech community.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 text-left">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 lg:p-12 group hover:bg-primary/5 transition-colors flex flex-col h-full ${
                  index === 0 ? "border-b-2 md:border-b-0 border-dotted border-primary/40 md:border-r-2" : ""
                }`}
              >
                <div className="flex items-center gap-2 text-sm font-mono text-primary mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed flex-grow mb-8 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors mt-auto w-max"
                >
                  Read full article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
