"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Layers } from "lucide-react";

const projects = [
  {
    title: "ACM NIT Surat Website",
    emoji: "🖥️",
    icon: <Globe className="w-8 h-8 text-primary" />,
    desc: "The official website for the ACM NIT Surat student chapter, completely revamped by the ACM core team of 2023-2024. The website showcases a sleek interface, providing easy access to upcoming events, ongoing projects, and blogs, making it a hub of information for all chapter members.",
    link: "#"
  },
  {
    title: "ButterFlask-UI",
    emoji: "🌿",
    icon: <Layers className="w-8 h-8 text-primary" />,
    desc: "A modern and lightweight Python framework for creating highly responsive websites using widgets. It provides a seamless development experience, similar to Flutter, by leveraging the power of widgets to build interactive user interfaces. An open source project created by Shubh, ACM Developer.",
    link: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center w-[90%] md:w-[70%] mx-auto py-6 border-2 border-dotted border-primary/60 rounded-full mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight m-0">
              Our <span className="text-primary">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            These are all the projects created by the ACM Student chapter in the academic year 2023-2024
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 text-left">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 lg:p-12 group hover:bg-primary/5 transition-colors flex flex-col h-full ${
                  index === 0 ? "border-b-2 md:border-b-0 border-dotted border-primary/40 md:border-r-2" : ""
                }`}
              >
                <div className="mb-6 p-4 rounded-xl bg-primary/10 w-max group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>{project.emoji}</span> {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
                  {project.desc}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors mt-auto w-max"
                >
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
