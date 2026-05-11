import { motion } from "framer-motion";
import { IMAGES } from "@/constants";

const GALLERY_IMAGES = [
  { url: IMAGES.hero, span: "col-span-2 row-span-2" },
  { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600", span: "col-span-1 row-span-1" },
  { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600", span: "col-span-1 row-span-1" },
  { url: IMAGES.ambience, span: "col-span-1 row-span-2" },
  { url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", span: "col-span-2 row-span-1" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-dark-brown overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.3em] mb-4 block">Visual Story</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream italic">Capturing the Moment</h2>
          </motion.div>
      </div>

      <div className="max-w-full px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 md:gap-8 h-[800px] md:h-[1000px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`${img.span} overflow-hidden group relative`}
            >
              <img
                src={img.url}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-cream text-[10px] uppercase tracking-widest border border-cream/30 px-4 py-2">View Detail</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
