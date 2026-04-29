import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1920&auto=format&fit=crop"
          alt="University Campus"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Qabul 2024 davom etmoqda
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8"
          >
            Kelajagingizni <br />
            <span className="text-accent italic font-normal">biz bilan</span> quring
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-300 mb-12 max-w-xl leading-relaxed"
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
            <button id="cta-video" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold flex items-center gap-2 transition-all backdrop-blur-sm active:scale-95">
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                 <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
              </span>
              Institut haqida video
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical rail text */}
      <div className="absolute right-12 bottom-24 hidden lg:block origin-bottom-right rotate-90">
        <span className="text-white/20 text-xs font-mono uppercase tracking-[1em]">
          Estd 2021 • Guliston Uzbekistan
        </span>
      </div>
    </section>
  );
}
