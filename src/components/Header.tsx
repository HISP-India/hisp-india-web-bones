import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import hispIndiaLogo from "@/assets/hisp-india-logo.png";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Offerings",
    children: [
      { name: "All Offerings", href: "/offerings" },
      { name: "Routine Health Information Systems", href: "/offerings/routine-health-info-systems" },
      { name: "Community Information Systems", href: "/offerings/community-info-systems" },
      { name: "OpenMRS Hospital Information Systems", href: "/offerings/openmrs-his" },
      { name: "Data Analytics & Integration", href: "/offerings/data-analytics" },
      { name: "Action & Implementation Research", href: "/offerings/research" },
      { name: "Capacity Building & Education", href: "/offerings/capacity-building" },
      { name: "Climate & Health Data Analytics", href: "/offerings/climate-health-analytics" },
    ],
  },
  { name: "Work", href: "/work" },
  {
    name: "Research",
    children: [
      { name: "Research & Publications", href: "/research" },
      { name: "Digital Stories", href: "/research/digital-stories" },
    ],
  },
  { name: "Our Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [offeringsOpen, setOfferingsOpen] = useState(false);
  const location = useLocation();

  const isResearchActive = location.pathname.startsWith("/research");
  const isOfferingsActive = location.pathname.startsWith("/offerings");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={hispIndiaLogo} 
            alt="HISP India - Open Source for Public Health" 
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent/50",
                      item.name === "Research" && isResearchActive && "text-accent-foreground bg-accent",
                      item.name === "Offerings" && isOfferingsActive && "text-accent-foreground bg-accent"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-background z-50">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link
                        to={child.href}
                        className={cn(
                          "w-full cursor-pointer",
                          location.pathname === child.href && "bg-accent"
                        )}
                      >
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavLink
                key={item.name}
                to={item.href!}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
                activeClassName="text-accent-foreground bg-accent"
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-2 mt-8">
              {navigation.map((item) =>
                item.children ? (
                <Collapsible
                    key={item.name}
                    open={item.name === "Research" ? researchOpen : offeringsOpen}
                    onOpenChange={item.name === "Research" ? setResearchOpen : setOfferingsOpen}
                  >
                    <CollapsibleTrigger asChild>
                      <button
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent",
                          item.name === "Research" && isResearchActive && "text-accent-foreground bg-accent",
                          item.name === "Offerings" && isOfferingsActive && "text-accent-foreground bg-accent"
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            (item.name === "Research" ? researchOpen : offeringsOpen) && "rotate-180"
                          )}
                        />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-md hover:bg-accent/50",
                            location.pathname === child.href &&
                              "text-accent-foreground bg-accent/50"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href!}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent"
                    activeClassName="text-accent-foreground bg-accent"
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
