import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function Map() {
  return (
    <section id="location" className="py-24 bg-zinc-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Manzilimiz
              </span>
              <h2 className="font-serif text-4xl text-secondary mb-6 leading-tight">
                Bizning joylashgan <br /> 
                <span className="text-primary italic">manzilimiz</span>
              </h2>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                Guliston davlat pedagogika instituti Guliston shahrining markazida, qulay joyda joylashgan. 
                Xarita orqali bizni oson topib kelishingiz mumkin.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-zinc-200 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Manzil</div>
                    <div className="font-bold text-secondary">Guliston sh., Sayhun ko'chasi, 15-uy</div>
                  </div>
                </div>
                
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=40.4905,68.7844" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg active:scale-95"
                >
                  <Navigation className="w-5 h-5" />
                  Yo'nalish olish
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Guliston%20davlat%20pedagogika%20instituti&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Guliston Davlat Pedagogika Instituti Map"
            />
            {/* Overlay label */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-zinc-200">
               <span className="font-bold text-secondary text-sm flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                 Guliston Davlat Pedagogika Instituti
               </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
