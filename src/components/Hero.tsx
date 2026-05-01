import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, X, Maximize2 } from 'lucide-react';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = "https://drive.google.com/uc?export=view&id=1LcklWbDxtf-RGHLe4bnSneTeLCINk1FJ";

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-50 dark:bg-[#001a35] pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 dark:bg-white/5 -skew-x-12 translate-x-20 z-0" />
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Qabul 2024 davom etmoqda
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-secondary dark:text-white leading-[1.1] mb-8"
            >
              Kelajagingizni <br />
              <span className="text-primary italic font-normal">biz bilan</span> quring
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl leading-relaxed uppercase font-medium"
            >
              Guliston davlat pedagogika instituti — malakali kadrlar, zamonaviy ta'lim va innovatsion tadqiqotlar maskani.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button id="cta-apply" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg active:scale-95">
                Hujjat topshirish
                <ArrowRight className="w-5 h-5" />
              </button>
              <button id="cta-video" className="px-8 py-4 bg-white dark:bg-white/10 hover:bg-zinc-50 dark:hover:bg-white/20 text-secondary dark:text-white border border-zinc-200 dark:border-white/10 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-sm active:scale-95">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                   <Play className="w-4 h-4 fill-primary text-primary translate-x-0.5" />
                </span>
                Institut haqida video
              </button>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div 
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/10 group cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={imageUrl}
                alt="Guliston Davlat Pedagogika Instituti"
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur p-3 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="text-secondary w-6 h-6" />
                </div>
              </div>
            </div>
            {/* Decorative frames */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-[2.5rem] -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Lightbox / Fullscreen view */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={imageUrl}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

