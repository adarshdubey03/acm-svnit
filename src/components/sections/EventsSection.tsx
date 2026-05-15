"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Users } from "lucide-react";

const events = [
  {
    title: "DotSlash 10.0",
    subtitle: "Flagship Hackathon",
    desc: "Our premier national-level hackathon. Join hundreds of developers to build innovative solutions, compete for prizes, and learn from industry experts.",
    icon: <Code2 className="w-8 h-8 text-primary" />
  },
  {
    title: "Echelon",
    subtitle: "Annual Tech Fest",
    desc: "The ultimate technical festival by ACM SVNIT featuring competitive coding contests, hands-on workshops, and insightful expert talks.",
    icon: <Terminal className="w-8 h-8 text-primary" />
  },
  {
    title: "Workshop on n8n",
    subtitle: "Workflow Automation",
    desc: "Learn fair-code workflow automation using n8n. Connect different APIs and build powerful automations without writing boilerplate code.",
    icon: <Cpu className="w-8 h-8 text-primary" />
  },
  {
    title: "Trip to School",
    subtitle: "Social Initiative",
    desc: "An educational outreach program where our members visit local schools to teach basic programming and spread technology awareness among children.",
    icon: <Users className="w-8 h-8 text-primary" />
  }
];

export function EventsSection() {
  return (
    <section id="events" className="w-full py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center w-[90%] md:w-[70%] mx-auto py-6 border-2 border-dotted border-primary/60 rounded-full mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight m-0">
              Upcoming <span className="text-primary">Events</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Join us for our upcoming hackathons, workshops, and social initiatives.
          </p>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 text-left">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 lg:p-12 group hover:bg-primary/5 transition-colors ${
                  index === 0 ? "border-b-2 border-dotted border-primary/40 md:border-r-2" :
                  index === 1 ? "border-b-2 border-dotted border-primary/40" :
                  index === 2 ? "border-b-2 md:border-b-0 border-dotted border-primary/40 md:border-r-2" : ""
                }`}
              >
                <div className="mb-6 p-4 rounded-xl bg-primary/10 w-max group-hover:scale-110 transition-transform">
                  {event.icon}
                </div>
                <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                <p className="text-primary font-mono text-sm mb-4">{event.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
