"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { currentTeam } from "@/data/team";

export function TeamSection() {
  return (
    <section id="team" className="w-full py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center w-[90%] md:w-[70%] mx-auto py-6 border-2 border-dotted border-primary/60 rounded-full mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight m-0 text-foreground">
              Our <span className="text-primary">Team</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Meet the dedicated core committee driving the ACM SVNIT chapter forward in 2023-2024.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {currentTeam.map((member, idx) => {
            const isLastRow = idx >= currentTeam.length - 3;
            const isLastInRow = (idx + 1) % 3 === 0;
            const isLastInMdRow = (idx + 1) % 2 === 0;
            const isMdLastRow = idx >= currentTeam.length - (currentTeam.length % 2 === 0 ? 2 : 1);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-8 group hover:bg-primary/5 transition-colors flex flex-col items-center text-center
                  border-b-2 border-dotted border-primary/40
                  ${!isLastInMdRow ? "md:border-r-2" : "md:border-r-0"}
                  ${isMdLastRow ? "md:border-b-0" : ""}
                  lg:border-b-2
                  ${!isLastInRow ? "lg:border-r-2" : "lg:border-r-0"}
                  ${isLastRow ? "lg:border-b-0" : ""}
                `}
              >
                <div className="w-32 h-32 mb-6 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-dashed border-border group-hover:border-primary group-hover:scale-105 transition-all">
                  <span className="text-4xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {member.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-mono text-sm mb-6 px-4 py-1 rounded-full bg-primary/10 w-max mx-auto">
                  {member.role}
                </p>
                
                <div className="flex justify-center gap-4 text-muted-foreground mt-auto">
                  {member.github && (
                    <a href={member.github} className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                      <FaXTwitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <Link 
            href="/team"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-dotted border-primary/60 text-lg font-semibold hover:bg-primary/10 transition-colors group"
          >
            View Past Core Teams <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
