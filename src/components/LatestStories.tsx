import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLatestStories } from "@/data/stories";

export function LatestStories() {
  const stories = getLatestStories(6);

  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Stories
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Latest from HISP India
          </h2>
          <Link
            to="/research/digital-stories"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View all stories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <Link
              key={story.id}
              to={`/research/digital-stories/${story.id}`}
              className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className={cn(
                    "absolute top-4 left-4 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-sm shadow-md",
                    story.themeColor
                  )}
                >
                  {story.themeLabel}
                </span>
              </div>

              {/* Headline */}
              <div className="p-6">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read story <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
