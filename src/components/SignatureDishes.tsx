import { motion } from "framer-motion";
import { IMAGES } from "@/constants";

const DISHES = [
  {
    id: 1,
    name: "Dry-Aged Wagyu",
    desc: "Truffle jus, smoked bone marrow, roasted seasonal alliums",
    price: "$85",
    image: IMAGES.dish1,
  },
  {
    id: 2,
    name: "Butter-Poached Lobster",
    desc: "Saffron beurre blanc, sea beans, finger lime caviar",
    price: "$72",
    image: IMAGES.dish2,
  },
  {
    id: 3,
    name: "Valrhona Soufflé",
    desc: "Madagascar vanilla bean crème, gold leaf, hazelnut praliné",
    price: "$28",
    image: IMAGES.dish3,
  }
];

export default function SignatureDishes() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-dark-brown overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold text-xs uppercase tracking-[0.3em] mb-4 block">The Culinary Art</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream mb-6">Signature Creations</h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            A curated selection of our most celebrated dishes, where every element 
            serves a purpose in the narrative of flavor.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {DISHES.map((dish, idx) => (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden mb-8 aspect-[4/5]">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark-brown/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-px bg-gold/40 flex-grow max-w-[40px]" />
                <h3 className="text-xl md:text-2xl font-serif text-cream italic">{dish.name}</h3>
                <div className="h-px bg-gold/40 flex-grow max-w-[40px]" />
              </div>
              <p className="text-cream/50 text-sm mb-4 leading-relaxed px-4">{dish.desc}</p>
              <span className="text-gold font-medium tracking-widest text-xs ">{dish.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a 
          href="#" 
          className="inline-block text-gold text-xs uppercase tracking-[0.3em] font-medium border-b border-gold/40 pb-2 hover:border-gold transition-colors duration-300"
        >
          View Full Seasonal Menu
        </a>
      </div>
    </section>
  );
}
