import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/constants";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen w-full bg-dark-brown overflow-hidden flex flex-col pt-24 md:pt-0">
      {/* Background Main */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src={IMAGES.hero}
          className="w-full h-full object-cover grayscale"
          alt=""
        />
      </div>

      <div className="flex-grow flex relative z-10">
        {/* Vertical Rail */}
        <div className="hidden md:flex w-24 border-r border-gold/20 flex-col justify-between py-12 items-center shrink-0">
          <span className="rotate-180 vertical-lr text-[10px] uppercase tracking-[0.3em] opacity-40 text-cream">
            Established 1994
          </span>
          <div className="flex flex-col space-y-6 opacity-40 items-center">
            <div className="w-px h-12 bg-gold"></div>
            <span className="rotate-180 vertical-lr text-[10px] uppercase tracking-[0.3em] text-cream">Scroll</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left Content */}
          <div className="col-span-1 md:col-span-12 lg:col-span-5 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[11px] text-gold uppercase tracking-[0.4em] mb-6 font-bold"
            >
              The Gastronomic Odyssey
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[7rem] font-serif text-cream leading-[0.9] mb-8"
            >
              Poetry <br/> 
              <span className="italic font-light opacity-80">on a</span> <br/> 
              Plate
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-cream/60 text-sm md:text-base leading-relaxed max-w-sm font-light mb-10"
            >
              Led by Chef de Cuisine Julian Vance, LUNARÉ brings a cinematic dining experience to the heart of the city. Where heritage meets contemporary art.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex space-x-12"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold mb-1">Lunch</span>
                <span className="text-sm font-serif italic text-cream">12:00 — 14:30</span>
              </div>
              <div className="w-px h-10 bg-gold/20"></div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold mb-1">Dinner</span>
                <span className="text-sm font-serif italic text-cream">18:30 — 23:00</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Image */}
          <div className="col-span-1 md:col-span-12 lg:col-span-7 relative flex items-center justify-center p-8 md:p-12 lg:p-24 overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 bg-dark-brown/40 -z-10 shadow-2xl"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] lg:h-[600px] bg-dark-brown border border-gold/30 flex items-center justify-center group overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 z-0">
                <motion.img
                  style={{ y }}
                  src={IMAGES.hero}
                  alt="Fine Dining"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              
              <div className="text-center z-20 px-6">
                 <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
                 <span className="text-[10px] uppercase tracking-[0.5em] mb-4 block opacity-80 text-cream">Signature Dish No. 04</span>
                 <h3 className="text-4xl md:text-5xl font-serif italic text-cream">Black Truffle & Forest Bone</h3>
                 <div className="mt-8 flex justify-center space-x-3">
                   <div className="w-1.5 h-1.5 rounded-full border border-gold"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                   <div className="w-1.5 h-1.5 rounded-full border border-gold"></div>
                 </div>
              </div>

              {/* Accent Corners */}
              <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-gold/40 z-20"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-gold/40 z-20"></div>
            </motion.div>

            {/* Experience Floating Label */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-16 right-16 md:bottom-20 md:right-20 bg-cream text-dark-brown p-8 shadow-2xl z-30"
            >
              <span className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-2 opacity-60">The Cellar</span>
              <span className="block font-serif text-xl md:text-2xl leading-tight italic">Over 1,200 <br/>Vintage Labels</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
