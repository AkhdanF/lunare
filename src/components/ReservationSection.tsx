import { motion } from "framer-motion";
import { Calendar, Users, Clock } from "lucide-react";

export default function ReservationSection() {
  return (
    <section id="reservations" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-dark-brown/5 p-8 md:p-16 border border-dark-brown/10 shadow-sm">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-brown mb-6">Reserve Your Table</h2>
              <p className="text-dark-brown/60 text-lg">
                Experience the art of fine dining. We recommend booking at least two weeks in advance.
              </p>
            </motion.div>
          </div>

          <form className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold font-semibold ml-2">Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-brown/40 w-4 h-4" />
                <input
                  type="date"
                  className="w-full bg-white border border-dark-brown/10 h-16 pl-12 pr-6 outline-none focus:border-gold transition-colors text-dark-brown font-serif"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold font-semibold ml-2">Time</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-brown/40 w-4 h-4" />
                <select className="w-full bg-white border border-dark-brown/10 h-16 pl-12 pr-6 outline-none focus:border-gold transition-colors text-dark-brown font-serif appearance-none">
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold font-semibold ml-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-brown/40 w-4 h-4" />
                <select className="w-full bg-white border border-dark-brown/10 h-16 pl-12 pr-6 outline-none focus:border-gold transition-colors text-dark-brown font-serif appearance-none">
                  {[2, 3, 4, 5, 6, 8].map((n) => (
                    <option key={n} value={n}>{n} Persons</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="md:col-span-3 mt-4">
               <button
                  type="button"
                  className="w-full group relative h-16 bg-dark-brown text-gold font-medium uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:text-dark-brown"
                >
                  <span className="relative z-10">Confirm Reservation</span>
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </button>
                <p className="text-center mt-6 text-xs text-dark-brown/40 italic">
                  * For parties larger than 8, please contact our concierge directly.
                </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
