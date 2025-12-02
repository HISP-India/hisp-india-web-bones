import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We'd love to hear from you. Reach out to discuss partnerships, projects, or learn more about our work."
      />

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
                
                {/* Office Locations */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-heading font-semibold mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        Main Office - Delhi
                      </h3>
                      <p className="text-muted-foreground">
                        IIPH Delhi<br />
                        Plot No. 47, Sector 44<br />
                        Gurgaon, Haryana 122002<br />
                        India
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-heading font-semibold mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        Regional Office - Bangalore
                      </h3>
                      <p className="text-muted-foreground">
                        Koramangala<br />
                        Bangalore, Karnataka 560034<br />
                        India
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Email & Phone */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@hispindia.org" className="text-muted-foreground hover:text-primary transition-colors">
                        info@hispindia.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91-124-4722900</p>
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
