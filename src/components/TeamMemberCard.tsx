import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export function TeamMemberCard({ name, role, bio, imageUrl, isExpanded, onToggle }: TeamMemberCardProps) {
  const bioPreview = bio.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <Card className="overflow-hidden transition-all">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              name.charAt(0)
            )}
          </div>

          {/* Name & Role */}
          <div>
            <h3 className="font-heading font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>

          {/* Bio */}
          <div className="w-full">
            <p className={cn(
              "text-sm text-muted-foreground transition-all",
              !isExpanded && "line-clamp-3"
            )}>
              {isExpanded ? bio : bioPreview}
            </p>
          </div>

          {/* Toggle Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="text-primary hover:text-primary/80"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
