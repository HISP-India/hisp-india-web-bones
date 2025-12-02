import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const partners = [
  { name: "National Health Mission", logo: "NHM" },
  { name: "WHO India", logo: "WHO" },
  { name: "UNICEF", logo: "UNICEF" },
  { name: "Bill & Melinda Gates Foundation", logo: "BMGF" },
  { name: "University of Oslo", logo: "UiO" },
  { name: "Government of Kerala", logo: "Kerala" },
  { name: "Government of Gujarat", logo: "Gujarat" },
  { name: "Government of Jharkhand", logo: "Jharkhand" },
];

export function PartnersCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [AutoScroll({ playOnInit: true, speed: 1 })]
  );

  return (
    <section className="py-20 md:py-32 bg-accent/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborating with governments, international organizations, and institutions to strengthen health systems
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-[0_0_200px] min-w-0"
              >
                <div className="bg-card rounded-lg p-8 h-32 flex items-center justify-center border border-border/50 hover:border-primary/50 transition-all duration-300 grayscale hover:grayscale-0 hover:shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-muted-foreground/40 hover:text-primary transition-colors">
                      {partner.logo}
                    </div>
                    <div className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
