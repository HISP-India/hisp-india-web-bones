import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "/images/hero-slide-1.jpg",
    title: "Building Health Information Systems for Public Good",
    subtitle: "HISP India",
    description: "Empowering nations with open-source solutions, research excellence, and capacity building for sustainable public health transformation",
  },
  {
    image: "",
    title: "Strengthening Public Health Through DHIS2",
    subtitle: "Our Mission",
    description: "Supporting governments worldwide in implementing and scaling robust health information systems using open-source technology",
  },
  {
    image: "",
    title: "Research & Innovation in Digital Health",
    subtitle: "Driving Change",
    description: "Pioneering research in health informatics, data analytics, and digital health solutions for low and middle-income countries",
  },
  {
    image: "",
    title: "Capacity Building for Sustainable Impact",
    subtitle: "Empowering Teams",
    description: "Training health professionals and organizations to leverage data for better health outcomes and informed decision-making",
  },
];

const gradients = [
  "bg-gradient-to-br from-primary via-primary/90 to-accent",
  "bg-gradient-to-br from-accent via-primary/80 to-primary",
  "bg-gradient-to-br from-primary/90 via-accent/80 to-primary",
  "bg-gradient-to-br from-accent/90 via-primary to-accent/80",
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative w-full min-h-[calc(100svh-108px)] flex items-center justify-center overflow-hidden scroll-snap-start"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out",
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
        >
          {slide.image ? (
            <>
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </>
          ) : (
            <div className={cn("absolute inset-0", gradients[index % gradients.length])}>
              <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          )}
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10 self-end pb-20 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative min-h-[150px] md:min-h-[170px] rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl px-6 py-5 md:px-8 md:py-6">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-700 ease-in-out absolute inset-0 flex flex-col items-center justify-center space-y-3 px-6 md:px-8",
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                )}
              >
                <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-primary-foreground/90 animate-fade-in">
                  {slide.subtitle}
                </p>
                <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary-foreground drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base max-w-2xl mx-auto text-primary-foreground/90 drop-shadow">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 relative z-20">
            <Button asChild size="lg" className="shadow-lg">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="shadow-lg bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/30 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/30 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === current
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
