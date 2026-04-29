import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Microscope, Music, Palette, Trophy } from 'lucide-react';
import { FACULTIES } from '../constants';
import { cn } from '../lib/utils';

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Palette: Palette,
  Trophy: Trophy,
  Microscope: Microscope,
  Music: Music,
};

export default function Faculties() {
  return (
    <section id="faculties" className="py-24 bg-zinc-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
              Bizning fakultetlar
            </h2>
            <p className="text-zinc-600 text-lg">
              Institutimizda zamonaviy ta'lim standartlariga javob beradigan turli yo'nalishlar mavjud. 
              Biz har bir talabaning salohiyatini ro'yobga chiqarishga yordam beramiz.
            </p>
          </div>
          <button className="text-primary font-semibold hover:underline flex items-center gap-2 group">
            Barchasini ko'rish
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTIES.map((faculty, index) => {
            const Icon = iconMap[faculty.icon as keyof typeof iconMap];
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={faculty.id}
                id={`faculty-${faculty.id}`}
                className="group p-8 bg-white border border-zinc-200 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="p-4 bg-primary/5 rounded-xl w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{faculty.name}</h3>
                <p className="text-zinc-500 leading-relaxed">
                  {faculty.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
