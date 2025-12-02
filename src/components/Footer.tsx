import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, Building2, Globe, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import hispIndiaLogo from "@/assets/hisp-india-logo.png";

const offices = [
  {
    label: "New Delhi Office",
    address: "DLF Tower B, 12th Floor-Office No-1211, Jasola, New Delhi-110025, India"
  },
  {
    label: "Shimla Office",
    address: "Arindam 1st Floor, Aira Holmes Estate, Kasumpti, Shimla - 171009, HP, India"
  },
  {
    label: "Registered Address",
    address: "Property No. 79A, Ground Floor, Khizrabad, New Delhi-110025, India"
  }
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
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
      <footer className="relative bg-gradient-to-br from-secondary via-secondary to-[hsl(199,100%,25%)] text-white overflow-hidden">
        {/* Diagonal pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.1) 35px,
              rgba(255,255,255,0.1) 70px
            )`
          }} />
        </div>

        <div className="container relative z-10 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Brand & Social */}
            <div className="space-y-6">
              <Link to="/" className="inline-block">
                <img 
                  src={hispIndiaLogo} 
                  alt="HISP India - Open Source for Public Health" 
                  className="h-14 md:h-16 w-auto brightness-0 invert"
                />
              </Link>
              
              <p className="text-slate-200 text-sm leading-relaxed">
                We are a health informatics partner offering technology solutions, research, and capacity building. We empower stakeholders to use data for public health challenges, fostering sustainable health transformation.
              </p>

              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Office Addresses */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-lg text-white mb-1">Contact Us</h3>
                <div className="h-0.5 w-16 bg-accent rounded-full" />
              </div>

              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Building2 className="h-5 w-5 text-accent flex-shrink-0" />
                      </div>
                      <div>
                        <p className="font-medium text-white text-sm mb-1">{office.label}</p>
                        <p className="text-slate-300 text-xs leading-relaxed">{office.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Newsletter & Contact */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-lg text-white mb-1">Subscribe to Our Newsletter</h3>
                <div className="h-0.5 w-16 bg-accent rounded-full" />
              </div>

              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:bg-white/15 focus:border-accent"
                />
                <Button 
                  type="submit" 
                  className="bg-accent hover:bg-accent/90 text-white font-medium whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>

              <div className="space-y-4 pt-2">
                <div>
                  <p className="text-slate-400 text-xs mb-1.5">For any Queries</p>
                  <a
                    href="mailto:contact@hispindia.org"
                    className="flex items-center gap-2 text-white hover:text-accent transition-colors group"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">contact@hispindia.org</span>
                  </a>
                </div>

                <div>
                  <p className="text-slate-400 text-xs mb-1.5">Mon-Fri: 10:00 AM - 5:00 PM</p>
                  <div className="flex items-center gap-2 text-white">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">011-42175248</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 relative z-10">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-slate-300">
                © HISP India - {new Date().getFullYear()}. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  to="/terms"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Terms & conditions
                </Link>
                <span className="text-slate-500">|</span>
                <Link
                  to="/privacy"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Cookies policy
                </Link>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Part of Global HISP Network</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
}
