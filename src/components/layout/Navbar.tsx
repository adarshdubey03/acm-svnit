"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Events", path: "#events" },
  { name: "Projects", path: "#projects" },
  { name: "Blog", path: "#blog" },
  { name: "Team", path: "#team" },
  { name: "Contact", path: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px", // Trigger when section is around the middle of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements that have an ID corresponding to our navLinks
    navLinks.forEach((link) => {
      const id = link.path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If we are NOT on the homepage, let the browser handle a hard navigation to the homepage with the hash.
    // This perfectly fixes the bug in Next.js App Router where cross-page hash navigation doesn't update the URL bar.
    if (pathname !== "/") {
      e.preventDefault();
      window.location.href = "/" + path;
      return;
    }

    // If we ARE on the homepage, prevent default jump and do a smooth scroll
    e.preventDefault();
    if (path.startsWith("#")) {
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="w-full max-w-6xl rounded-full border border-border/40 bg-background/70 backdrop-blur-lg shadow-lg">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-8 h-8 group-hover:scale-110 transition-transform">
                  <Image 
                    src="/logo.png" 
                    alt="ACM SVNIT Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <span className="font-mono text-lg font-bold tracking-tighter hidden sm:block">
                  ACM<span className="text-primary">SVNIT</span>
                </span>
              </Link>
            </div>
            
            {/* Nav Links - Center */}
            <div className="hidden md:flex flex-none items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path.substring(1);
                const targetPath = pathname === "/" ? link.path : `/${link.path}`;
                return (
                  <a
                    key={link.name}
                    href={targetPath}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={clsx(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                      isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
            
            {/* Actions - Right */}
            <div className="flex-1 flex justify-end items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="rounded-full p-2.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              )}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-full p-2.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 md:hidden rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-xl overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path.substring(1);
                const targetPath = pathname === "/" ? link.path : `/${link.path}`;
                return (
                  <a
                    key={link.name}
                    href={targetPath}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={clsx(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
