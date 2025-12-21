import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, Globe, ChevronUp, ArrowRight, Target, Users, BarChart3, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import hispIndiaLogo from "@/assets/hisp-india-logo.png";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Work", to: "/work" },
  { label: "Offerings", to: "/offerings" },
  { label: "Research", to: "/research" },
  { label: "Digital Stories", to: "/digital-stories" },
  { label: "Our Team", to: "/team" },
  { label: "Careers", to: "/careers" },
];

const impactStats = [
  { icon: Calendar, value: "20+", label: "Years of Impact" },
  { icon: Globe, value: "15+", label: "Countries Supported" },
  { icon: Users, value: "1B+", label: "People Reached" },
  { icon: BarChart3, value: "100+", label: "Projects Delivered" },
];

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-secondary via-secondary to-[hsl(199,100%,20%)] text-white overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
                              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container relative z-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {/* Column 1: Brand & Mission */}
            <div className="space-y-6 lg:col-span-1">
              <Link to="/" className="inline-block group">
                <img 
                  src={hispIndiaLogo} 
                  alt="HISP India - Open Source for Public Health" 
                  className="h-14 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity"
                />
              </Link>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Empowering health systems through open-source technology, research, and capacity building for sustainable public health transformation.
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">Quick Links</h3>
                <div className="h-0.5 w-12 bg-accent rounded-full" />
              </div>

              <nav className="grid grid-cols-1 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm py-1 inline-flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Our Impact */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">Our Impact</h3>
                <div className="h-0.5 w-12 bg-accent rounded-full" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {impactStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 group"
                  >
                    <stat.icon className="h-5 w-5 text-accent mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-2xl font-bold text-white font-heading">{stat.value}</p>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4: Stay Connected */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">Stay Connected</h3>
                <div className="h-0.5 w-12 bg-accent rounded-full" />
              </div>

              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-accent h-11"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-medium h-11"
                >
                  Subscribe to Newsletter
                </Button>
              </form>

              <div className="space-y-3 pt-2">
                <a
                  href="mailto:contact@hispindia.org"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm">contact@hispindia.org</span>
                </a>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm">011-42175248</span>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium mt-2 group"
                >
                  Visit our offices
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 relative z-10">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-slate-400">
                © {new Date().getFullYear()} HISP India. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link to="/sitemap" className="text-slate-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Globe className="h-4 w-4 text-accent" />
                <span className="text-xs text-slate-300">Part of Global HISP Network</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
