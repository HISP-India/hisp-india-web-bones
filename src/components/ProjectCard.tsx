import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  imageUrl?: string;
  categoryColor?: string;
}

export function ProjectCard({ id, title, excerpt, tags, imageUrl, categoryColor }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Category Color Header */}
      {categoryColor && (
        <div className={`h-2 ${categoryColor} transition-all duration-300 group-hover:h-3`} />
      )}
      
      {imageUrl && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="font-heading font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="flex-1 pt-0">
        <p className="text-muted-foreground text-sm line-clamp-4 leading-relaxed">{excerpt}</p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button variant="link" asChild className="p-0 h-auto group/link">
          <Link to={`/work/${id}`} className="flex items-center">
            <span>Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
