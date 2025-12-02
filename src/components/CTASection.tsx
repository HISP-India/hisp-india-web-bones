import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export function CTASection({ title, description, children, variant = "primary", className }: CTASectionProps) {
  return (
    <section
      className={cn(
        "w-full py-16 md:py-24",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        variant === "default" && "bg-muted",
        className
      )}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          {description && (
            <p className="text-lg opacity-90">
              {description}
            </p>
          )}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
