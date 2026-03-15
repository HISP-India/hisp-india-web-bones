import { Link } from "react-router-dom";

const newsItems = [
  {
    text: "HISP India conducts DHIS2 training in Nepal for HIV program strengthening",
    link: "/work",
  },
  {
    text: "New partnership with RV University for Health Informatics education",
    link: "/work",
  },
  {
    text: "HISP India supports Philippines nutrition surveillance system rollout",
    link: "/work",
  },
  {
    text: "Data Science Workshop 2025 successfully concluded",
    link: "/gallery",
  },
  {
    text: "HISP India Annual Retreat 2024 highlights collaboration and innovation",
    link: "/gallery",
  },
];

export const NewsTicker = () => {
  const separator = (
    <span className="mx-6 text-primary-foreground/60">●</span>
  );

  const tickerContent = newsItems.map((item, index) => (
    <span key={index} className="inline-flex items-center whitespace-nowrap">
      <Link
        to={item.link}
        className="hover:underline underline-offset-2 transition-colors"
      >
        {item.text}
      </Link>
      {separator}
    </span>
  ));

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-2.5 relative">
      <div className="flex items-center">
        <span className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mr-4 ml-2 shrink-0 z-10">
          Latest
        </span>
        <div className="overflow-hidden flex-1">
          <div className="animate-ticker inline-flex hover:[animation-play-state:paused]">
            <span className="inline-flex items-center text-sm font-medium">
              {tickerContent}
            </span>
            <span className="inline-flex items-center text-sm font-medium" aria-hidden="true">
              {tickerContent}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
