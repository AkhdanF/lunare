import { motion } from "framer-motion";
import { IMAGES } from "@/constants";

export default function ChefIntro() {
  return (
    <section id="chef" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/30 translate-x-4 translate-y-4 -z-10" />
            <img
              src={IMAGES.chef}
              alt="Chef de Cuisine"
              className="w-full aspect-[3/4] object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-12 -right-12 bg-dark-brown p-8 text-cream max-w-[280px] hidden lg:block">
              <span className="text-gold text-[10px] uppercase tracking-widest mb-2 block">Executive Chef</span>
              <h3 className="font-serif text-2xl italic">Julian Vance</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.3em] mb-4 block font-medium">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-brown mb-8 leading-tight">
              A Symphony of <br />
              <span className="italic">Pure Flavors</span>
            </h2>
            <p className="text-dark-brown/70 leading-relaxed mb-6 text-lg">
              At LUNARÉ, we believe that dining is an art form. Every dish is a carefully composed poem, 
              honoring the seasons and the land from which our ingredients originate.
            </p>
            <p className="text-dark-brown/70 leading-relaxed mb-10">
              Chef Julian Vance brings two decades of expertise from the world's most renowned kitchens. 
              His approach is one of disciplined creativity—stripping away the unnecessary to reveal 
              the soul of each ingredient.
            </p>
            
            <div className="flex items-center gap-8">
              <div>
                <span className="block text-3xl font-serif text-dark-brown mb-1">MW</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">Michelin Worthy</span>
              </div>
              <div className="w-px h-12 bg-gold/30" />
              <div>
                <span className="block text-3xl font-serif text-dark-brown mb-1">45+</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">Select Producers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
