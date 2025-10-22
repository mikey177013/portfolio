import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import GitHubProjects from "./components/GitHubProjects";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { toast } from "./hooks/use-toast";

function App() {
  const [easterEgg, setEasterEgg] = useState("");
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Easter egg handler
  useEffect(() => {
    const handleKeyPress = (e) => {
      const newSequence = (easterEgg + e.key).slice(-5).toUpperCase();
      setEasterEgg(newSequence);

      if (newSequence === "MIKEY") {
        setShowEasterEgg(true);
        toast({
          title: "🎉 Easter Egg Unlocked!",
          description: "You found the secret! Chaos mode activated!",
        });

        // Trigger special animation
        document.body.classList.add('chaos-mode');
        
        setTimeout(() => {
          setShowEasterEgg(false);
          document.body.classList.remove('chaos-mode');
        }, 3000);
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [easterEgg]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App relative">
      <CustomCursor />
      
      {/* Easter Egg Animation */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
            CHAOS!
          </div>
        </div>
      )}

      <Hero onScrollToNext={() => scrollToSection("about")} />
      <About />
      <GitHubProjects />
      <ProjectsShowcase />
      <Experience />
      <Contact />
      <Footer />
      
      <Toaster />
    </div>
  );
}

export default App;
