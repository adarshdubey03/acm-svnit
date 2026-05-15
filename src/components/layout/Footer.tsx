import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="w-full bg-background relative overflow-hidden border-t-2 border-dotted border-primary/40 pt-20 pb-10">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b-2 border-dotted border-primary/20 pb-16 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Join the <span className="text-primary">Innovation.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Stay updated with our latest events, hackathons, and tech workshops. Subscribe to the ACM SVNIT newsletter.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-full bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all w-full sm:w-80"
            />
            <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/#home" className="flex items-center gap-3 group mb-6 w-max">
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform">
                <Image 
                  src="/logo.png" 
                  alt="ACM SVNIT Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-mono text-2xl font-bold tracking-tighter">
                ACM<span className="text-primary">SVNIT</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-8 leading-relaxed pr-4">
              The premier computer science student chapter at Sardar Vallabhbhai National Institute of Technology, Surat.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:acm@svnit.ac.in" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors w-max">
                <Mail className="w-5 h-5 text-primary" />
                <span>acm@svnit.ac.in</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>SVNIT Campus, Ichchhanath, Surat, Gujarat 395007</span>
              </div>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="font-bold text-foreground mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Events', 'Projects', 'Blog', 'Team'].map((item) => (
                <li key={item}>
                  <Link href={`/#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group w-max">
                    <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-foreground mb-6">Resources</h3>
            <ul className="space-y-4">
              {[
                { name: 'Legacy Teams', path: '/team' },
                { name: 'Contact Us', path: '/#contact' },
                { name: 'Privacy Policy', path: '#' },
                { name: 'Terms of Service', path: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group w-max">
                    <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Col */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-foreground mb-6">Connect</h3>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors shadow-sm border border-border/50">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors shadow-sm border border-border/50">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors shadow-sm border border-border/50">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors shadow-sm border border-border/50">
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t-2 border-dotted border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ACM Student Chapter NIT Surat. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-medium">
            Built with <span className="text-primary text-lg leading-none">♥</span> by the Core Team
          </p>
        </div>

      </div>
    </footer>
  );
}
