import { motion } from 'motion/react';
import { School, UserCheck, Users, BookMarked } from 'lucide-react';
import { STATS } from '../constants';

const iconMap = {
  Users: Users,
  UserCheck: UserCheck,
  School: School,
  BookMarked: BookMarked,
};

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-white border-b border-zinc-100 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={stat.label}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-8 h-8 text-secondary group-hover:text-accent transition-colors" />
                </div>
                <div className="font-serif text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
