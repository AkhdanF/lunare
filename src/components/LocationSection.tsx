import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <span className="text-gold text-xs uppercase tracking-[0.3em] mb-4 block">Visit Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-brown mb-12">Location <br />& Hours</h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <MapPin className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-2 text-dark-brown">Our Address</h4>
                  <p className="text-dark-brown/60 leading-relaxed">
                    724 Zenith Boulevard, Penthouse Level <br />
                    Culinary District, Metropolis 90210
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Phone className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-serif text-xl mb-2 text-dark-brown">Contact info</h4>
                  <p className="text-dark-brown/60">Reservations: +1 (555) LUNAR-É</p>
                  <p className="text-dark-brown/60">Concierge: contact@lunare.com</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-dark-brown/10 pt-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-4">Lunch</h4>
                  <p className="text-dark-brown/60 text-sm italic">Mon – Fri: 12:00 – 14:30</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-4">Dinner</h4>
                  <p className="text-dark-brown/60 text-sm italic">Nightly: 18:30 – 23:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] lg:h-auto min-h-[400px] bg-dark-brown group overflow-hidden"
          >
            {/* Minimal Map Overlay */}
            <div className="absolute inset-0 grayscale contrast-125 opacity-50 transition-transform duration-[20s] group-hover:scale-110">
               <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Skyline" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute inset-0 bg-dark-brown/40 group-hover:bg-dark-brown/20 transition-colors duration-1000" />
            
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center p-10 bg-dark-brown border border-gold/30 shadow-2xl relative">
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-gold" />
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-gold" />
                  <h3 className="text-gold font-serif text-3xl mb-4 italic">Metropolis Peak</h3>
                  <p className="text-cream/50 text-xs uppercase tracking-[0.2em] mb-6">Experience the heights</p>
                  <button className="text-cream text-[10px] uppercase tracking-[0.3em] font-medium border-b border-gold pb-1">Get Directions</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
