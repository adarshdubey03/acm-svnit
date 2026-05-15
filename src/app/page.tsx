"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Code2, Cpu } from "lucide-react";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { EventsSection } from "@/components/sections/EventsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section id="home" className="w-full min-h-[100vh] flex flex-col justify-center items-center relative overflow-hidden bg-background pt-32 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-foreground">
              Advancing <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Computing</span> as a Science & Profession
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              We are the Association for Computing Machinery Student Chapter at SVNIT Surat.
              Fostering innovation, coding, and technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
                >
                  Join Us <ArrowRight className="w-4 h-4" />
                </motion.button>
              </a>
              <a href="#events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-md border border-border bg-background hover:bg-muted text-foreground font-semibold flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
                >
                  Explore Events
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Chapter Section */}
      <section id="about" className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-[90%] md:w-[70%] mx-auto py-6 border-2 border-dotted border-primary/60 rounded-full mb-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight m-0">
                Our <span className="text-primary">Legacy</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-16">
              The ACM Student Chapter at Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat was founded in <strong className="text-primary font-semibold">2005</strong>. It operates as a prominent student-run organization focused on computing, hosting events such as hackathons, coding challenges, and workshops.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 lg:p-12 group hover:bg-primary/5 transition-colors flex flex-col border-b-2 border-dotted border-primary/40 md:border-r-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Our Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                To promote computing as a science and profession. We strive to create an environment that encourages innovation, fosters learning, and bridges the gap between academic curriculum and industry standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 lg:p-12 group hover:bg-primary/5 transition-colors flex flex-col border-b-2 border-dotted border-primary/40"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Global Affiliation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are proudly affiliated with the <strong className="text-foreground">Association for Computing Machinery (ACM)</strong>, the world's largest educational and scientific computing society, bringing global resources to our local student community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 lg:p-12 group hover:bg-primary/5 transition-colors flex flex-col border-b-2 md:border-b-0 border-dotted border-primary/40 md:border-r-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Skill Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through hands-on workshops, coding bootcamps, and technical seminars, we equip students with cutting-edge skills in software development, AI, and systems engineering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 lg:p-12 group hover:bg-primary/5 transition-colors flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Community Network</h3>
              <p className="text-muted-foreground leading-relaxed">
                We foster a collaborative tech ecosystem where like-minded peers, experienced alumni, and industry experts connect to share ideas and build the future together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <EventsSection />

      <ProjectsSection />
      <BlogSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
