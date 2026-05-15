import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    quote: "We are pleased to say that we have found technical support from HISP India as very good and professional. They bring in skills from the domains of both public health and informatics, and they combine it with strong implementation experience.",
    author: "Dr Robert Gaertner",
    organization: "EPOS, Germany",
  },
  {
    quote: "We are very pleased with the quality of HISP India's technical work with respect to the design and the development of our information systems. They bring skills from the domains of both public health and informatics, which they combine with strong implementation experience.",
    author: "Richard Anderson",
    organization: "University of Washington",
  },
  {
    quote: "We are happy to partner with HISP India, who are a professional group with skills in the technical and public health domains, and most importantly, with solid practical experience of making such systems work in real life settings of developing countries.",
    author: "Dr Custodia Mandlhate",
    organization: "WHO",
  },
  {
    quote: "During the course of our projects at FAO, we have found HISP India very committed to respond to the users' needs and to learning, demonstrating positive results.",
    author: "Ciro Fiorillo",
    organization: "FAO",
  },
  {
    quote: "We are happy with the work done by HISP India in the product implementation, support and capacity building domains. They have helped us to establish the infrastructure and promote sustainability of systems.",
    author: "Ali R Rizvi",
    organization: "Himachal Pradesh",
  },
];

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Voices of Impact
          </h2>
          <p className="text-muted-foreground">
            Hear from our partners about the difference we've made together
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
                    <Quote className="w-12 h-12 text-primary/20 mb-6" />
                    <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.organization}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-background shadow-lg hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-background shadow-lg hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
