import { ArrowRight, Filter } from "lucide-react";
import { useMemo, useState, useRef, useEffect } from "react";

const projects = [
    {
        id: 1,
        title: "NostalSpiel ",
        year: "2024",
        tags: ["Java", "JavaFX", "IntelliJ", "Gitlab"],
        description:"",
        image:"/projects/project1.png"
    },

    {
        id: 2,
        title: "PlayStation 5 Clone",
        year: "2024",
        tags: ["HTML", "CSS", "VS Code", "Gitlab"],
        description:" ",
        image:"/projects/project2.png"
    },

    {
        id: 3,
        title: "Campus Sky",
        year: "2025",
        tags:["Figma"],
        description:" ",
        image:"/projects/project3.png"
    },

    {
        id: 4,
        title: "Personal Website Portfolio",
        year: "2026",
        tags:["Vite", "ReactJS", "TailwindCSS"],
        description:" ",
        image:"/projects/project4.png",
        demoUrl: "#hero"
    }
];

export const Projects = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeYear, setActiveYear] = useState("all");
  const [activeTag, setActiveTag] = useState("all");

  const popoverRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (!popoverRef.current) return;
      if (!popoverRef.current.contains(e.target)) setIsFilterOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const years = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.year))).sort(
      (a, b) => Number(b) - Number(a)
    );
  }, []);

  const tags = useMemo(() => {
    return Array.from(new Set(projects.flatMap((p) => p.tags))).sort((a, b) =>
      a.localeCompare(b)
    );
  }, []);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((p) => (activeYear === "all" ? true : p.year === activeYear))
      .filter((p) => (activeTag === "all" ? true : p.tags.includes(activeTag)))
      .sort((a, b) => Number(b.year) - Number(a.year));
  }, [activeYear, activeTag]);

  const isFiltering = activeYear !== "all" || activeTag !== "all";

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <div className="text-center w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects.
            </p>
          </div>

          <div className="relative shrink-0" ref={popoverRef}>
            <button
              type="button"
              onClick={() => setIsFilterOpen((v) => !v)}
              className="ml-4 p-2 rounded-md bg-secondary/70 hover:bg-secondary transition relative"
              aria-label="Open filters"
            >
              <Filter size={18} />
              {isFiltering && (
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary" />
              )}
            </button>

            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-lg border bg-card shadow-lg p-4 z-50">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold">Filters</p>
                  {isFiltering && (
                    <button
                      className="text-xs text-muted-foreground hover:text-primary transition"
                      onClick={() => {
                        setActiveYear("all");
                        setActiveTag("all");
                      }}
                    >
                      Reset
                    </button>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-muted-foreground">Year</label>
                    <select
                      value={activeYear}
                      onChange={(e) => setActiveYear(e.target.value)}
                      className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
                    >
                      <option value="all">All</option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground">Tag</label>
                    <select
                      value={activeTag}
                      onChange={(e) => setActiveTag(e.target.value)}
                      className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
                    >
                      <option value="all">All</option>
                      {tags.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  className="mt-4 w-full rounded-md bg-secondary/70 hover:bg-secondary transition py-2 text-sm"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="
                group relative overflow-hidden rounded-xl border border-border bg-card text-foreground
                shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg
                before:pointer-events-none before:absolute before:inset-0 before:rounded-xl
                before:bg-[linear-gradient(110deg,transparent_0%,var(--shine-45)_45%,var(--shine-50)_50%,var(--shine-45)_55%,transparent_100%)]
                before:bg-[length:200%_100%]
                before:bg-[position:-150%_0]
                before:opacity-0 before:transition-[opacity,background-position] before:duration-[1200ms]
                hover:before:opacity-100 hover:before:bg-[position:150%_0]
                "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10"/>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Celina9919"
          >
            Check My Github <ArrowRight size={16} />
            
          </a>
        </div>
      </div>
    </section>
  );
};