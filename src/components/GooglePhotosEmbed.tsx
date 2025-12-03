import { useState } from "react";
import { cn } from "@/lib/utils";
import { Loader2, ExternalLink } from "lucide-react";

interface GooglePhotosEmbedProps {
  albumUrl: string;
  title: string;
  className?: string;
}

export function GooglePhotosEmbed({ albumUrl, title, className }: GooglePhotosEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative w-full h-full min-h-[400px] bg-muted rounded-lg overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
      <iframe
        src={albumUrl}
        title={title}
        className="w-full h-full border-0"
        onLoad={() => setIsLoading(false)}
        allow="autoplay"
        loading="lazy"
      />
      <a
        href={albumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground hover:bg-background transition-colors shadow-lg"
      >
        <ExternalLink className="h-4 w-4" />
        Open in Google Photos
      </a>
    </div>
  );
}
