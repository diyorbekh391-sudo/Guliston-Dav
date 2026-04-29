import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { NEWS } from '../constants';

export default function News() {
  return (
    <section id="news" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
            So'nggi yangiliklar
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Institut hayotidagi eng so'nggi va muhim voqealar bilan tanishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS.map((item, index) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={item.id}
              className="group flex flex-col bg-zinc-50 rounded-3xl overflow-hidden hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-zinc-100"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 py-2 px-3 bg-white/90 backdrop-blur-sm rounded-xl text-secondary text-xs font-bold flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  {item.date}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors mb-4 line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-500 mb-8 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-zinc-200">
                  <a href={`#news-${item.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                    Batafsil o'qish
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 border border-zinc-200 rounded-2xl font-bold text-secondary hover:bg-zinc-50 transition-colors active:scale-95">
            Barcha yangiliklarni ko'rish
          </button>
        </div>
      </div>
    </section>
  );
}
