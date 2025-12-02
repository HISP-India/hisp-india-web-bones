import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Globe, Landmark } from "lucide-react";

export default function Contact() {
  const offices = [
    {
      type: "Main Office",
      city: "New Delhi",
      address: "DLF Tower B, 12th Floor-Office No-1211, Jasola, New Delhi-110025, India",
      contact: { type: "phone", value: "011-42175248" },
    },
    {
      type: "Shimla Office",
      city: "Shimla",
      address: "Arindam 1st Floor, Aira Holmes Estate, Kasumpti, Shimla - 171009, HP, India",
      contact: { type: "phone", value: "0177-7969888" },
    },
    {
      type: "Registered Office",
      city: "New Delhi",
      address: "Property No. 79A, Ground Floor Khizrabad, New Delhi-110025, India",
      contact: { type: "email", value: "contact@hispindia.org" },
    },
  ];

  return (
    <div className="flex flex-col">
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We'd love to hear from you. Reach out to discuss partnerships, projects, or learn more about our work."
        variant="gradient"
        className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      />

      {/* Office Locations Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Landmark className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{office.type}</h3>
                  <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
                  <p className="text-primary font-medium mb-2">{office.city}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {office.address}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    {office.contact.type === "phone" ? (
                      <>
                        <Phone className="h-4 w-4 text-primary" />
                        <a href={`tel:${office.contact.value}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {office.contact.value}
                        </a>
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 text-primary" />
                        <a href={`mailto:${office.contact.value}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {office.contact.value}
                        </a>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Contact Information</h2>
                
                {/* Email & Phone */}
                <Card className="mb-6">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:contact@hispindia.org" className="text-muted-foreground hover:text-primary transition-colors">
                          contact@hispindia.org
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">011-42175248</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div>
                  <h3 className="font-heading font-semibold mb-4">Follow Us</h3>
                  <div className="flex items-center space-x-4">
                    <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Facebook className="h-5 w-5 text-primary" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Twitter className="h-5 w-5 text-primary" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Connect */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Quick Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Email Us</h3>
              <p className="opacity-90 mb-2">For general inquiries</p>
              <a href="mailto:contact@hispindia.org" className="hover:underline">contact@hispindia.org</a>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Call Us</h3>
              <p className="opacity-90 mb-2">Monday to Friday, 9 AM - 5 PM IST</p>
              <p>011-42175248</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Visit Us</h3>
              <p className="opacity-90 mb-2">Our offices in Delhi & Shimla</p>
              <p>See addresses above</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="aspect-video bg-card rounded-lg border flex items-center justify-center">
            <p className="text-muted-foreground">Map embed placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
}
