import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import rvUniversityLogo from "@/assets/partners/rv-university.png";
import drRpMedicalLogo from "@/assets/partners/dr-rp-medical-college-tanda.png";
import homiBhabhaLogo from "@/assets/partners/homi-bhabha-cancer-hospital.png";
import slbsMedicalLogo from "@/assets/partners/slbs-medical-college-mandi.png";
import doctorsForYouLogo from "@/assets/partners/doctors-for-you.png";
import iihmrBangaloreLogo from "@/assets/partners/iihmr-bangalore.png";
import iihmrDelhiLogo from "@/assets/partners/iihmr-delhi.png";
import akrosLogo from "@/assets/partners/akros.png";
import careLogo from "@/assets/partners/care.png";
import cdcLogo from "@/assets/partners/cdc.png";

interface Partner {
  name: string;
  imageUrl: string;
}

const partners: Partner[] = [
  { name: "RV University", imageUrl: rvUniversityLogo },
  { name: "Dr. R.P. Govt. Medical College, Tanda", imageUrl: drRpMedicalLogo },
  { name: "Homi Bhabha Cancer Hospital, Varanasi", imageUrl: homiBhabhaLogo },
  { name: "SLBS Govt. Medical College, Mandi", imageUrl: slbsMedicalLogo },
  { name: "Doctors For You", imageUrl: doctorsForYouLogo },
  { name: "IIHMR Bangalore", imageUrl: iihmrBangaloreLogo },
  { name: "IIHMR Delhi", imageUrl: iihmrDelhiLogo },
  { name: "Akros", imageUrl: akrosLogo },
  { name: "CARE", imageUrl: careLogo },
  { name: "CDC", imageUrl: cdcLogo },
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
                <div className="bg-card rounded-lg p-6 h-32 flex flex-col items-center justify-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <img 
                    src={partner.imageUrl} 
                    alt={partner.name}
                    className="max-h-14 max-w-[140px] object-contain"
                  />
                  <div className="text-[10px] text-muted-foreground mt-2 text-center line-clamp-2 leading-tight">
                    {partner.name}
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
