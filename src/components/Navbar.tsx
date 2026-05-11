import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Experience", href: "#experience" },
    { name: "Menu", href: "#menu" },
    { name: "The Chef", href: "#chef" },
    { name: "Reservations", href: "#reservations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 h-24 flex items-center border-b",
        isScrolled ? "bg-dark-brown/95 backdrop-blur-md h-20 border-gold/10" : "bg-transparent border-gold/20"
      )}
    >
      <div className="w-full flex justify-between items-center relative">
        <div className="flex-1 hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-70">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cream hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl tracking-[0.4em] font-serif uppercase text-cream">
          LUNARÉ
        </a>

        <div className="flex-1 hidden md:flex items-center justify-end space-x-8">
          <span className="text-[11px] uppercase tracking-[0.2em] opacity-70 text-cream hidden lg:block">
            Paris — London
          </span>
          <a
            href={navLinks[3].href}
            className="px-6 py-3 border border-gold text-gold text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-dark-brown transition-colors"
          >
            Reservation
          </a>
        </div>

        <button
          className="md:hidden text-gold p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-brown p-8 flex flex-col items-center space-y-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cream text-lg uppercase tracking-widest font-serif hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
