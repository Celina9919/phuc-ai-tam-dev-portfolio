import { Code, User, Lightbulb } from "lucide-react";
import avatar from "@/assets/avatar.png";
import DownloadButton from "./DownloadButton";

export const About = () => {
    
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="flex justify-center mb-12">
                <div className="avatar-border">
                    <img
                        src={avatar}
                        alt="Your avatar"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-justify animate-fade-in">Highly Motivated Developer With User-Centric Mindset and Tech Savvy</h3>
                    <p className="text-muted-foreground mt-4 text-justify">
                        I am a highly motivated developer with a user-centric mindset and a passion for technology. 
                        I focus on creating responsive, accesible and functional application using modern technologies.
                    </p>

                    <p className="text-muted-foreground mt-4 text-justify">
                        I am always eager to learn and adapt to new tools and frameworks, and I am committed to delivering high-quality work that meets the needs of users and stakeholders.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Work With Me
                        </a>
                        <DownloadButton />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">

                    <div className="neon-border p-6 card-hover border-1">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites and web applications with modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="neon-border p-6 card-hover border-1">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Designing functional, aesthetical and user-centric interfaces
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="neon-border p-6 card-hover border-1">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Lightbulb className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Agile Approach</h4>
                                <p className="text-muted-foreground">
                                    Continuously developing with an agile mindset, embracing feedback and iterative improvement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
};