import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  variant?: "default" | "gradient";
  className?: string;
}

export function Hero({ title, subtitle, description, children, variant = "default", className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full py-20 md:py-32",
        variant === "gradient" && "bg-gradient-to-br from-primary/10 via-accent/5 to-background",
        className
      )}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {subtitle && (
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              {subtitle}
            </p>
          )}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
          {children && (
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
