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
import clintonLogo from "@/assets/partners/clinton-health-access-initiative.png";
import gizLogo from "@/assets/partners/giz.png";
import greenstarLogo from "@/assets/partners/greenstar.png";
import healthPovertyLogo from "@/assets/partners/health-poverty-action.png";
import helenKellerLogo from "@/assets/partners/helen-keller-intl.png";
import ihatLogo from "@/assets/partners/ihat.png";
import icmrLogo from "@/assets/partners/icmr.png";
import ippfLogo from "@/assets/partners/ippf.png";
import lshtmLogo from "@/assets/partners/lshtm.png";
import msfLogo from "@/assets/partners/msf.png";
import mmvLogo from "@/assets/partners/mmv.png";
import nhmLogo from "@/assets/partners/nhm.png";
import nvbdcpLogo from "@/assets/partners/nvbdcp.png";
import pathLogo from "@/assets/partners/path.png";
import planIntlLogo from "@/assets/partners/plan-international.png";
import shsBiharLogo from "@/assets/partners/shs-bihar.png";
import shsMaharashtraLogo from "@/assets/partners/shs-maharashtra.png";
import punjabHscLogo from "@/assets/partners/punjab-hsc.png";
import whoLogo from "@/assets/partners/who.png";

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
  { name: "Clinton Health Access Initiative", imageUrl: clintonLogo },
  { name: "GIZ", imageUrl: gizLogo },
  { name: "Greenstar", imageUrl: greenstarLogo },
  { name: "Health Poverty Action", imageUrl: healthPovertyLogo },
  { name: "Helen Keller Intl", imageUrl: helenKellerLogo },
  { name: "IHAT", imageUrl: ihatLogo },
  { name: "ICMR", imageUrl: icmrLogo },
  { name: "IPPF", imageUrl: ippfLogo },
  { name: "London School of Hygiene & Tropical Medicine", imageUrl: lshtmLogo },
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
