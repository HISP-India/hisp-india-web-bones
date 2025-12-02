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
}

export function ProjectCard({ id, title, excerpt, tags, imageUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <h3 className="font-heading font-semibold text-xl line-clamp-2">{title}</h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="p-0 h-auto">
          <Link to={`/work/${id}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
