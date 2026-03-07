import "iconify-icon";
import { useState } from "react";
import { cn } from '@/lib/utils';
const skills = [

    //Frontend
    {
        name: "HTML & CSS", 
        level: 65, 
        category: "frontend",
        icons: ["logos:html-5", "skill-icons:css"]

    },

    {
        name: "JavaScript", 
        level: 40, 
        category: "frontend",
        icons: ["devicon:javascript"]

    },

    {
        name: "ReactJS", 
        level: 20, 
        category: "frontend",
        icons: ["vscode-icons:file-type-reactjs"]

    },

    {
        name: "Tailwind CSS", 
        level: 30, 
        category: "frontend",
        icons: ["devicon:tailwindcss"]

    },

    {
        name: "JavaFX", 
        level: 50, 
        category: "frontend",
        icons: []

    },

    {
        name: "JSF", 
        level: 50, 
        category: "frontend",
        icons: []

    },

    //Backend
    {
        name: "MySQL", 
        level: 65, 
        category: "backend",
        icons: ["logos:mysql"]

    },

    {
        name: "Java", 
        level: 65, 
        category: "backend",
        icons: ["devicon:java"]

    },

    {
        name: "Python", 
        level: 40, 
        category: "backend",
        icons: ["material-icon-theme:python"]

    },

    

    //Tools
    {
        name: "Git/GitHub/Gitlab", 
        level: 65, 
        category: "tools",
        icons: ["material-icon-theme:git", "line-md:github-twotone", "devicon:gitlab"]

    },

    {
        name: "Figma", 
        level: 60, 
        category: "tools",
        icons:["logos:figma"]
    },

    {
        name: "IntelliJ/VS Code", 
        level: 90, 
        category: "tools",
        icons: ["devicon:intellij", "devicon:vscode"]
    },

    {
        name: "Docker", 
        level: 30, 
        category: "tools",
        icons: ["material-icon-theme:docker"]
    },

    {
        name: "Notion", 
        level: 80, 
        category: "tools",
        icons: ["devicon:notion"]
    },

    {
        name: "n8n", 
        level: 30, 
        category: "tools",
        icons: ["simple-icons:n8n"]
    },

    //Spoken Languages
    {
        name: "Vietnamese", 
        level: 100, 
        category: "spoken languages",
        icons: ["twemoji:flag-vietnam"]
    },

    {
        name: "English", 
        level: 90, 
        category: "spoken languages",
        icons: ["flagpack:us"]
    },

    {
        name: "German", 
        level: 60, 
        category: "spoken languages",
        icons: ["openmoji:flag-germany"]
    }
];

const categories = ["all", "frontend", "backend", "tools", "spoken languages"];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return <section 
                id="skills"
                className="py-24 px-4 relative bg-secondary/30"
            >
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My<span className="text-primary"> Skills</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category, key) => (
                            <button 
                                key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activeCategory === category 
                                        ? "bg-primary text-primary-foreground" 
                                        : "bg-secondary/70 text-foreground hover:bg-secondary"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSkills.map((skill, key) => (
                            <div 
                                key={key}
                                className="bg-card p-6 shadow-xs card-hover flex flex-col items-center text-center
                                    group relative overflow-hidden rounded-xl border border-border text-foreground
                                    transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg
                                    before:pointer-events-none before:absolute before:inset-0 before:rounded-xl
                                    before:bg-[linear-gradient(110deg,transparent_0%,var(--shine-45)_45%,var(--shine-50)_50%,var(--shine-45)_55%,transparent_100%)]
                                    before:bg-[length:200%_100%]
                                    before:bg-[position:-150%_0]
                                    before:opacity-0 before:transition-[opacity,background-position] before:duration-[1200ms]
                                    hover:before:opacity-100 hover:before:bg-[position:150%_0]
                                "
                            >   
                                <div className="flex justify-center gap-4 mb-2">
                                    {skill.icons?.map((icon, i) => (
                                        <iconify-icon
                                            key={i}
                                            icon={icon}
                                            width="32"
                                            height="32"
                                        >
                                        </iconify-icon>
                                    ))}
                                </div>

                                <div className="text-center mb-4">
                                    <h3 className="font-semibold text-lg"> {skill.name} </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
    </section>
}