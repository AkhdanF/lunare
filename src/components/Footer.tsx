import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-cream pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-1">
            <a href="/" className="text-2xl font-serif text-gold tracking-[0.4em] uppercase block mb-8">
              LUNARÉ
            </a>
            <p className="text-cream/40 text-xs uppercase tracking-widest leading-relaxed max-w-xs">
              Crafting immersive dining experiences that celebrate the intersection 
              of nature, soul, and gourmet excellence.
            </p>
          </div>

          <div>
             <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Reservations</h4>
             <ul className="space-y-4">
                <li><a href="#" className="text-xs text-cream/60 hover:text-gold transition-colors uppercase tracking-widest italic">Online Booking</a></li>
                <li><a href="#" className="text-xs text-cream/60 hover:text-gold transition-colors uppercase tracking-widest italic">Private Dining</a></li>
                <li><a href="#" className="text-xs text-cream/60 hover:text-gold transition-colors uppercase tracking-widest italic">Gift Vouchers</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Legal</h4>
             <ul className="space-y-4">
                <li><a href="#" className="text-xs text-cream/60 hover:text-gold transition-colors uppercase tracking-widest italic">Privacy Policy</a></li>
                <li><a href="#" className="text-xs text-cream/60 hover:text-gold transition-colors uppercase tracking-widest italic">Terms of Service</a></li>
                <li><a href="#" className="text-xs text-cream/60 hover:text-gold transition-colors uppercase tracking-widest italic">Cookie Policy</a></li>
             </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Newsletter</h4>
            <div className="relative">
               <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-gold/20 py-3 text-xs italic outline-none focus:border-gold transition-all"
               />
               <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Join</button>
            </div>
            <div className="flex gap-6 mt-12">
              <a href="#" className="text-gold/60 hover:text-gold transition-colors uppercase tracking-widest text-[10px]">Instagram</a>
              <a href="#" className="text-gold/60 hover:text-gold transition-colors uppercase tracking-widest text-[10px]">Twitter</a>
              <a href="#" className="text-gold/60 hover:text-gold transition-colors uppercase tracking-widest text-[10px]">Facebook</a>
            </div>
          </div>
        </div>

        <div className="h-20 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] uppercase tracking-[0.2em] opacity-40">
            &copy; 2026 LUNARÉ GROUP. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex space-x-12 items-center">
            <div className="flex items-center space-x-3 bg-dark-brown/50 px-4 py-2 border border-gold/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[9px] uppercase tracking-widest">Table Available Tonight</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
