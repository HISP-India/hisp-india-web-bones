import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  Globe,
  ChevronUp,
  ArrowRight,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import hispIndiaLogo from "@/assets/hisp-india-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Offerings", to: "/offerings" },
  { label: "Research", to: "/research" },
  { label: "Stories", to: "/research/digital-stories" },
  { label: "Team", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const impactStats = [
  { value: "18+", label: "Years of Experience" },
  { value: "15+", label: "Countries Served" },
  { value: "30+", label: "DHIS2 & OpenMRS Deployments" },
  { value: "38+", label: "Partner Organizations" },
];

const missionWords = "Open source. Open data. Open futures for public health.".split(" ");

function parseStatValue(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (!match) return { num: 0, prefix: "", suffix: raw };
  return { num: parseFloat(match[2]), prefix: match[1] || "", suffix: match[3] || "" };
}

function CountUp({ value, active, duration = 1400 }: { value: string; active: boolean; duration?: number }) {
  const { num, prefix, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(num * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, num, duration]);

  return (
    <>
      {prefix}
      {Math.round(display)}
      {suffix}
    </>
  );
}

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [inView, setInView] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!footerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(footerRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer
        ref={footerRef}
        className="relative overflow-hidden bg-[hsl(199,100%,12%)] text-white"
      >
        {/* Aurora gradient layer */}
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute -top-40 -left-32 w-[40rem] h-[40rem] rounded-full bg-primary/30 blur-[120px] animate-float-slow" />
          <div
            className="absolute -bottom-40 -right-32 w-[44rem] h-[44rem] rounded-full bg-accent/25 blur-[120px] animate-float-slow"
            style={{ animationDelay: "-7s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-[28rem] h-[28rem] -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[120px] animate-float-slow"
            style={{ animationDelay: "-3s" }}
          />
        </div>

        {/* Grain overlay */}
        <div
          className="absolute inset-0 -z-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />

        <div className="container relative z-10 pt-16 md:pt-20 pb-8">
          {/* Top: brand + mission */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
            <Link to="/" className="inline-block mb-8 group">
              <img
                src={hispIndiaLogo}
                alt="HISP India"
                className="h-14 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold italic leading-tight tracking-tight">
              {missionWords.map((word, i) => (
                <span
                  key={i}
                  className={cn(
                    "inline-block mr-[0.25em] transition-all duration-700",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  )}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>

          {/* Newsletter + contact dock */}
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-14">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="group flex items-center gap-2 p-2 pl-5 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/15 hover:border-accent/50 focus-within:border-accent transition-colors"
            >
              <Mail className="h-4 w-4 text-accent shrink-0" />
              <Input
                type="email"
                required
                placeholder="Subscribe to our newsletter"
                className="flex-1 border-0 bg-transparent text-white placeholder:text-slate-300 h-10 px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-10 w-10 shrink-0 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="flex items-center justify-around gap-2 p-2 px-5 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/15">
              <a
                href="mailto:contact@hispindia.org"
                className="flex items-center gap-2 text-sm text-slate-200 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-accent" />
                <span className="hidden sm:inline">contact@hispindia.org</span>
                <span className="sm:hidden">Email</span>
              </a>
              <span className="h-4 w-px bg-white/20" />
              <a
                href="tel:01142175248"
                className="flex items-center gap-2 text-sm text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-accent" />
                011-42175248
              </a>
              <span className="h-4 w-px bg-white/20" />
              <Link
                to="/contact"
                className="flex items-center gap-1 text-sm font-medium text-accent hover:text-white transition-colors group"
              >
                Visit
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Impact strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 max-w-5xl mx-auto mb-14 py-8 border-y border-white/10">
            {impactStats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "text-center transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                )}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-white">
                  <CountUp value={stat.value} active={inView} />
                </div>
                <div className="mt-1 text-xs md:text-sm text-slate-300 leading-snug px-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Compact link rail */}
          <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 mb-10">
            {navLinks.map((link, i) => (
              <span key={link.to} className="flex items-center">
                <Link
                  to={link.to}
                  className="text-sm text-slate-200 hover:text-accent px-3 py-1.5 rounded-full hover:bg-white/10 transition-all"
                >
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span className="text-white/20 select-none">·</span>
                )}
              </span>
            ))}
          </nav>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-slate-400 text-xs md:text-sm">
              © {new Date().getFullYear()} HISP India. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-xs md:text-sm">
              <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </Link>
              <span className="text-white/20">·</span>
              <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <span className="text-white/20">·</span>
              <Link to="/sitemap" className="text-slate-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Globe className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs text-slate-300">Global HISP Network</span>
              </div>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="h-9 w-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-accent hover:border-accent hover:-translate-y-0.5 hover:rotate-[-4deg] transition-all duration-300"
                  >
                    <social.icon className="h-4 w-4 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

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
