import { Link } from "react-router-dom";
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
}

const stats: Stat[] = [
  {
    icon: MapPin,
    value: "29+",
    label: "States & UTs",
    sublabel: "Nationwide footprint across India",
    className: "md:col-span-2 bg-primary text-primary-foreground",
    iconClass: "bg-white/15 text-primary-foreground",
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

export function ImpactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background scroll-snap-start">
      {/* soft brand backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="container py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Headline */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Public Health Informatics
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Data-driven health systems for{" "}
              <span className="text-primary">a billion lives</span>.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              HISP India builds and scales open-source digital health platforms — DHIS2, OpenMRS, and beyond — to strengthen public health across India and the Global South.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="group">
                <Link to="/work">
                  Explore Our Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>

          {/* Bento stats */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className={cn(
                      "group relative rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col gap-3 min-h-[140px] md:min-h-[160px]",
                      stat.className
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
                        stat.iconClass
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="mt-auto">
                      <div className="font-heading text-3xl md:text-4xl font-bold leading-none">
                        {stat.value}
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
