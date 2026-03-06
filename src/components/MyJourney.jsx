import timelineElements from "@/components/timelineElements";
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import { Briefcase, GraduationCap } from "lucide-react";

export const MyJourney = () => {
  const events = timelineElements.map((item) => ({
    id: String(item.id),
    year: item.date,
    title: item.title,
    subtitle: (
        <div className="flex flex-col">
            <span className="text-primary text-lg font-semibold">
                {item.company}
            </span>
            <span className="text-foreground/80 text-sm">
                {item.location}
            </span>
        </div>
    ),
    description: (
        <div className="text-justify">
            {item.description}
        </div>  
    ),
    icon:
      item.icon === "work" ? (
        <Briefcase className="h-4 w-4 mr-2 text-primary" />
      ) : (
        <GraduationCap className="h-4 w-4 mr-2 text-primary" />
      ),
  }));

  return (
    <section id="myjourney" className="py-24 px-4 relative">
      <ScrollTimeline
        events={events}
        title="My Journey"
        subtitle="Scroll to explore my journey"
        progressIndicator
        cardAlignment="alternating"
        revealAnimation="fade"
        cardEffect="shadow"
      />
    </section>
  );
};
