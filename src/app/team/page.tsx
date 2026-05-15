"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import clsx from "clsx";
import { legacyTeams } from "@/data/team";

type YearKeys = keyof typeof legacyTeams;

export default function LegacyTeamPage() {
  const years = Object.keys(legacyTeams) as YearKeys[];
  const [activeYear, setActiveYear] = useState<YearKeys>(years[0]);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto text-left mb-12">
          <Link 
            href="/#team" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center w-[90%] md:w-[70%] mx-auto py-6 border-2 border-dotted border-primary/60 rounded-full mb-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight m-0 text-foreground">
              Past Core <span className="text-primary">Teams</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Archiving the legacy and excellence of the brilliant minds who led ACM SVNIT in previous years.
          </p>
        </motion.div>

        {/* Year Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={clsx(
                "px-8 py-3 rounded-full font-medium transition-all border-2 border-dotted",
                activeYear === year 
                  ? "border-primary bg-primary/10 text-primary" 
                  : "border-transparent bg-muted text-muted-foreground hover:border-primary/40 hover:bg-muted/80"
              )}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-left"
          >
            {legacyTeams[activeYear].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group p-6 rounded-2xl border-2 border-dashed border-border bg-card hover:border-primary/50 transition-colors flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 mb-4 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-border group-hover:border-primary transition-colors">
                  <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {member.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-mono text-xs mb-4">{member.role}</p>
                
                <div className="flex justify-center gap-3 text-muted-foreground mt-auto pt-4 border-t border-dashed border-border w-full">
                  {member.github && (
                    <a href={member.github} className="hover:text-primary transition-colors">
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} className="hover:text-primary transition-colors">
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} className="hover:text-primary transition-colors">
                      <FaXTwitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
