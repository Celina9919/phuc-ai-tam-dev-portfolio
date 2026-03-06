import "iconify-icon";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";    
const navItems = [
    {name: "Home", href: "#hero", icon:"ic:baseline-home"},
    {name: "About", href: "#about", icon:"lucide:user-round"},
    {name: "My Journey", href: "#myjourney", icon: "cil:briefcase"},
    {name: "Projects", href: "#projects", icon:"solar:laptop-outline"},
    {name: "Skills", href: "#skills", icon:"carbon:tool-kit"},
    {name: "Contact", href: "#contact", icon:"mdi:email-outline"}
];

const socialItems = [
    {name: "LinkedIn", href: "https://www.linkedin.com/in/phuc-ai-tam-vo-909b55141/", icon:"mdi:email-outline"},
    {name: "Github", href: "https://github.com/Celina9919", icon:"mdi:github"},
    {name: "Calendar", href: "https://calendar.app.google/MWMtzweJU1v5kJWNA", icon:"solar:calendar-bold"} 
];

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [activeHref, setActiveHref] = useState("#projects");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    const closeMenu = () =>setIsMenuOpen(false);

    const handleNavClick = (href) => {
        setActiveHref(href);
        closeMenu();
    }

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
               <a href="#hero" className="flex flex-col leading-tight">
                    <span className="relative z-10 font-bold text-xl">
                        <span className="text-glow text-primary"> Phuc Ai Tam </span>{" "}
                        Vo
                    </span>

                    <span className="text-sm font-semibold text-muted-foreground tracking-wide">
                        Software Developer
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => {
                        const isActive = activeHref === item.href;

                        return (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={cn(
                            "relative font-bold transition-colors duration-300",
                            isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                            )}
                        >
                            {item.name}

                            <span
                            className={cn(
                                "absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-primary",
                                "origin-left transition-transform duration-300",
                                isActive ? "scale-x-100" : "scale-x-0"
                            )}
                            />
                        </a>
                        );
                    })}

                    <ThemeToggle />
                </div>

                {/* Mobile Navigation */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden p-2 text-foreground z-[70]"
                    aria-label="Open Menu"
                >
                    <Menu size={24} />
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-black/50 md:hidden transition-opacity z-[60]",
                        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                    onClick={closeMenu}
                />

                <aside
                    className={cn(
                        "fixed top-0 left-0 h-dvh w-[280px] bg-background md:hidden z-[65]",
                        "border-r border-border/60",
                        "transition-transform duration-300 will-change-transform",
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    )}
                >
                    <div className="h-full p-6 flex flex-col">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col leading-tight">
                                <span className="font-bold text-lg">
                                    <span className="text-primary">Phuc Ai Tam</span> Vo
                                </span>
                                <span className="text-sm text-muted-foreground font-semibold">
                                    Software Developer
                                </span>
                            </div>

                            <button
                                className="p-2 text-foreground/80"
                                onClick={closeMenu}
                                aria-label="Close drawer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="mt-8 flex flex-col gap-2 font-medium">
                            {navItems.map((item) => {
                                const isActive = activeHref === item.href;
                                return (
                                            <a
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => handleNavClick(item.href)}
                                                className={cn(
                                                    "flex items-center gap-3 px-3 py-3 rounded-xl",
                                                    "text-foreground/80 hover:bg-muted/60 hover:text-foreground transition",
                                                    isActive && "bg-muted text-foreground"
                                                )}
                                            >
                                                <iconify-icon icon={item.icon} width="25" height="25" />
                                                <span className="text-[15px]">{item.name}</span>
                                            </a>
                                        );
                                    })}
                            </div>

                            <div className="my-6 border-t border-border/60" />

                            <div className="text-sm tracking-widest text-muted-foreground font-semibold">Social</div>
                            <div className="mt-3 flex flex-col gap-2">
                                {socialItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-foreground/70 hover:text-foreground hover:bg-muted/50 transition font-medium"
                                    >
                                        <iconify-icon icon={item.icon} width="25" height="25" />
                                        <span className="text-[15px]">{item.name}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="max:hidden mt-auto pt-6">
                                <ThemeToggle variant="drawer" />
                            </div>
                        </div>
                </aside>
            </div>
        </nav>
    );
};
