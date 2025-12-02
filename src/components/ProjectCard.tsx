import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Check, Building2, Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  status: string;
  location: string;
  client: string;
  year: string;
}

const statusBadgeColors: Record<string, string> = {
  Ongoing: "bg-emerald-500 text-white border-transparent",
  Support: "bg-orange-500 text-white border-transparent",
  Closed: "bg-gray-600 text-white border-transparent",
};

const categoryBadgeColors: Record<string, string> = {
  "Routine Health Information Systems": "bg-orange-500 text-white border-transparent",
  "Community Information Systems": "bg-teal-500 text-white border-transparent",
  "Data Analytics, Integration & Data Management": "bg-violet-500 text-white border-transparent",
  "Capacity Building on Digital Health Skills": "bg-blue-500 text-white border-transparent",
  "AMR Research": "bg-pink-500 text-white border-transparent",
  "Action & Implementation Research": "bg-indigo-500 text-white border-transparent",
  "OpenMRS": "bg-cyan-500 text-white border-transparent",
};

export function ProjectCard({ id, title, excerpt, category, status, location, client, year }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColor = statusBadgeColors[status] || "bg-gray-500 text-white border-transparent";
  const categoryColor = categoryBadgeColors[category] || "bg-primary text-primary-foreground border-transparent";

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        {/* Badges Row */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={cn("flex items-center gap-1", categoryColor)}>
            <MapPin className="h-3 w-3" />
            {category}
          </Badge>
          <Badge className={cn("flex items-center gap-1", statusColor)}>
            <Check className="h-3 w-3" />
            {status}
          </Badge>
        </div>
        
        {/* Title */}
        <h3 className="font-heading font-semibold text-lg leading-tight">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="flex-1 pt-0">
        {/* Metadata with icons */}
        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-start gap-2">
            <Building2 className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{client}</span>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{year}</span>
          </div>
        </div>
        
        {/* Expandable Description */}
        <p className={cn(
          "text-sm text-primary leading-relaxed",
          !isExpanded && "line-clamp-3"
        )}>
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button 
          variant="link" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-0 h-auto text-primary font-medium"
        >
          {isExpanded ? "Read Less" : "Read More"}
          <ChevronDown className={cn(
            "ml-1 h-4 w-4 transition-transform duration-200",
            isExpanded && "rotate-180"
          )} />
        </Button>
      </CardFooter>
    </Card>
  );
}
