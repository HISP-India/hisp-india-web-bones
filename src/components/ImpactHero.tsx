import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Activity,
  Users,
  MapPin,
  GraduationCap,
  Database,
  Globe2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Stat {
  icon: typeof Activity;
  value: string;
  label: string;
  sublabel?: string;
  className?: string;
  iconClass?: string;
  live?: boolean;
}

const stats: Stat[] = [
  {
    icon: MapPin,
    value: "29+",
    label: "States & UTs",
    sublabel: "Nationwide footprint across India",
    className: "md:col-span-2 bg-primary text-primary-foreground",
    iconClass: "bg-white/15 text-primary-foreground",
    live: true,
  },
  {
    icon: Users,
    value: "10K+",
    label: "Health Workers Trained",
    className: "bg-card border border-border",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: Database,
    value: "500M+",
    label: "Health Records Managed",
    className: "bg-card border border-border",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: Activity,
    value: "20+",
    label: "Years of Impact",
    sublabel: "Strengthening public health since 2003",
    className: "md:col-span-2 bg-accent/15 border border-border",
    iconClass: "bg-accent text-accent-foreground",
  },
  {
    icon: GraduationCap,
    value: "50+",
    label: "Research Publications",
    className: "bg-card border border-border",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: Globe2,
    value: "15+",
    label: "Countries Reached",
    className: "bg-card border border-border",
    iconClass: "bg-primary/10 text-primary",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function parseStatValue(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (!match) return { num: 0, prefix: "", suffix: raw };
  return { num: parseFloat(match[2]), prefix: match[1] || "", suffix: match[3] || "" };
}

function CountUp({ value, active, duration = 1400 }: { value: string; active: boolean; duration?: number }) {
  const reduced = usePrefersReducedMotion();
  const { num, prefix, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(active || reduced ? num : 0);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setDisplay(num);
      return;
    }
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
  }, [active, num, duration, reduced]);

  const formatted = num >= 1 && num % 1 === 0 ? Math.round(display).toLocaleString() : display.toFixed(1);
  return (
    <>
      {prefix}
      {formatted}
      {suffix}
    </>
  );
}

export function ImpactHero() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!gridRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background scroll-snap-start">
      {/* soft brand backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-3xl animate-float-slow" />
        <div
          className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-accent/15 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="container py-10 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Headline */}
          <div className="lg:col-span-5 space-y-6">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Public Health Informatics
            </span>
            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight animate-fade-in-up"
              style={{ animationDelay: "120ms" }}
            >
              Data-driven health systems for{" "}
              <span className="text-primary">a billion lives</span>.
            </h1>
            <p
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              HISP India builds and scales open-source digital health platforms — DHIS2, OpenMRS, and beyond — to strengthen public health across India and the Global South.
            </p>
            <div
              className="flex flex-wrap gap-3 pt-2 animate-fade-in-up"
              style={{ animationDelay: "360ms" }}
            >
              <Button asChild size="lg" className="group relative overflow-hidden">
                <Link to="/work">
                  <span className="relative z-10 inline-flex items-center">
                    Explore Our Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>

          {/* Bento stats */}
          <div className="lg:col-span-7">
            <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className={cn(
                      "group relative rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col gap-3 min-h-[140px] md:min-h-[160px] overflow-hidden",
                      inView || reduced ? "animate-scale-fade-in" : "opacity-0",
                      stat.className
                    )}
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    {/* hover glow */}
                    <span className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div
                      className={cn(
                        "relative w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
                        stat.iconClass
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      {stat.live && (
                        <span className="absolute inset-0 rounded-xl border-2 border-white/40 animate-pulse-ring" />
                      )}
                    </div>
                    <div className="mt-auto">
                      <div className="font-heading text-3xl md:text-4xl font-bold leading-none transition-transform duration-300 group-hover:-translate-y-0.5">
                        <CountUp value={stat.value} active={inView} />
                      </div>
                      <div className="mt-1.5 text-sm font-semibold opacity-90">
                        {stat.label}
                      </div>
                      {stat.sublabel && (
                        <div className="mt-1 text-xs opacity-75 leading-snug">
                          {stat.sublabel}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
