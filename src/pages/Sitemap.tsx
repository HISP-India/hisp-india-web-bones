import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Offerings",
    links: [
      { name: "All Offerings", path: "/offerings" },
      { name: "Routine Health Information Systems", path: "/offerings/routine-health-info-systems" },
      { name: "Community Information Systems", path: "/offerings/community-info-systems" },
      { name: "OpenMRS Hospital Information Systems", path: "/offerings/openmrs-his" },
      { name: "Data Analytics & Integration", path: "/offerings/data-analytics" },
      { name: "Action & Implementation Research", path: "/offerings/research" },
      { name: "Capacity Building & Education", path: "/offerings/capacity-building" },
      { name: "Climate & Health Data Analytics", path: "/offerings/climate-health-analytics" },
    ],
  },
  {
    title: "Work & Research",
    links: [
      { name: "Projects", path: "/work" },
      { name: "Research & Publications", path: "/research" },
    ],
  },
  {
    title: "Careers",
    links: [
      { name: "Careers Overview", path: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Sitemap", path: "/sitemap" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="flex flex-col">
      <Hero
        title="Sitemap"
        description="Navigate through all pages of the HISP India website."
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapSections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.path}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
