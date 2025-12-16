import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export function TeamMemberCard({ name, role, bio, imageUrl }: TeamMemberCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Larger Avatar with Hover Bio Overlay */}
          <div className="relative w-36 h-36 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-primary-foreground text-3xl font-bold">
                {name.charAt(0)}
              </span>
            )}
            
            {/* Bio Overlay - appears on hover */}
            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 rounded-full">
              <p className="text-primary-foreground text-[10px] leading-tight overflow-y-auto max-h-full scrollbar-thin">
                {bio.split(" ").slice(0, 50).join(" ")}{bio.split(" ").length > 50 ? "..." : ""}
              </p>
            </div>
          </div>

          {/* Name & Role */}
          <div>
            <h3 className="font-heading font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
