import ParallaxBackground from "./components/ParallaxBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-indigo-500/40 selection:text-white bg-[#050505] overflow-x-hidden">
      {/* Background Layer */}
      <ParallaxBackground />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Resume />
          <Contact />
        </main>
        
        <footer className="text-center py-10 text-white/40 text-xs tracking-widest uppercase border-t border-white/5 bg-black/50 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} My Portfolio. Built by Ritesh Sharma.</p>
        </footer>
      </div>
    </div>
  );
}
