import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChefIntro from "./components/ChefIntro";
import SignatureDishes from "./components/SignatureDishes";
import ReservationSection from "./components/ReservationSection";
import GallerySection from "./components/GallerySection";
import Testimonials from "./components/Testimonials";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
    // Smoother scroll behavior for modern browsers
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  if (!mounted) return <div className="bg-dark-brown min-h-screen" />;

  return (
    <div className="relative min-h-screen selection:bg-gold selection:text-dark-brown">
      {/* Grain texture overlay */}
      <div className="grain-overlay" />
      
      {/* Reading Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="experience">
          <ChefIntro />
        </div>
        
        <SignatureDishes />
        
        <GallerySection />
        
        <Testimonials />
        
        <ReservationSection />
        
        <LocationSection />
      </main>
      
      <Footer />
    </div>
  );
}
