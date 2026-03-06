import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { MyJourney } from "@/components/MyJourney";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       
        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <Hero />
            <About />
            <MyJourney />
            <Skills />
            <Projects />
            <Contact />
        </main>

        <Footer />

    </div>
};