import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    text: "An otherworldly experience. The attention to detail in every dish and the choreography of the service is something I've only seen in the finest Parisian establishments.",
    author: "Eleanor St. James",
    title: "Culinary Critic"
  },
  {
    id: 2,
    text: "LUNARÉ isn't just a restaurant; it's a sanctuary of taste. The way Chef Julian handles local ingredients is nothing short of alchemy. Simply breathtaking.",
    author: "Marcus Thorne",
    title: "Vogue Gourmet"
  },
  {
    id: 3,
    text: "Truly the pinnacle of the city's fine dining scene. The wine pairings were impeccable, guided by a sommelier whose knowledge was as vast as it was approachable.",
    author: "Isabella Rossi",
    title: "Private Collector"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden border-y border-dark-brown/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
         <Quote className="text-gold h-10 w-10 mx-auto mb-8 opacity-40" />
         <h2 className="text-4xl md:text-5xl font-serif text-dark-brown italic">Kind Words</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {REVIEWS.map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="text-center group"
          >
            <p className="text-dark-brown/70 leading-[1.8] mb-8 italic text-lg px-4">
              "{review.text}"
            </p>
            <div className="space-y-1">
              <span className="block font-serif text-xl text-dark-brown">{review.author}</span>
              <span className="block text-[10px] uppercase tracking-widest text-gold font-medium">{review.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
