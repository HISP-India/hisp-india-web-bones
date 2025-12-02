import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  variant?: "default" | "gradient" | "fullscreen";
  className?: string;
  showScrollIndicator?: boolean;
}

export function Hero({ 
  title, 
  subtitle, 
  description, 
  children, 
  variant = "default", 
  className,
  showScrollIndicator = false 
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full",
        variant === "fullscreen" ? "min-h-screen flex items-center justify-center scroll-snap-start" : "py-20 md:py-32",
        variant === "gradient" && "bg-gradient-to-br from-primary/10 via-accent/5 to-background",
        variant === "fullscreen" && "bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden",
        className
      )}
    >
      {/* Animated background elements for fullscreen variant */}
      {variant === "fullscreen" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      )}

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {subtitle && (
            <p className={cn(
              "text-sm font-medium uppercase tracking-wider animate-fade-in",
              variant === "fullscreen" ? "text-primary-foreground/90" : "text-primary"
            )}>
              {subtitle}
            </p>
          )}
          <h1 className={cn(
            "font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-fade-in",
            variant === "fullscreen" ? "text-primary-foreground" : "text-foreground"
          )}>
            {title}
          </h1>
          {description && (
            <p className={cn(
              "text-lg md:text-xl max-w-2xl mx-auto animate-fade-in",
              variant === "fullscreen" ? "text-primary-foreground/80" : "text-muted-foreground"
            )}>
              {description}
            </p>
          )}
          {children && (
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && variant === "fullscreen" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
}
