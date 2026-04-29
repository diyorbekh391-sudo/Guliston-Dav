import { motion } from 'motion/react';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Sifatli Ta'lim",
      desc: "Xalqaro standartlarga mos ravishda yuqori malakali kadrlar tayyorlash.",
      icon: Target
    },
    {
      title: "Innovatsiya",
      desc: "Ta'lim jarayonida zamonaviy AKT va yangi pedagogik texnologiyalardan foydalanish.",
      icon: Lightbulb
    },
    {
      title: "Ma'naviyat",
      desc: "Yuksak ma'naviy-axloqiy fazilatlarga ega barkamol avlodni tarbiyalash.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=800&auto=format&fit=crop"
                alt="Students studying"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            
            {/* Stats highlight card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl z-20 border border-zinc-100 hidden md:block"
            >
              <div className="text-primary font-bold text-4xl mb-1">3 yillik</div>
              <div className="text-zinc-500 font-medium text-sm">Tajriba va An'ana</div>
            </motion.div>
          </motion.div>

          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Institut haqida
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-8 leading-tight">
              O'zbekistonda yangi pedagogik <br />
              <span className="text-accent italic">davr boshlanishi</span>
            </h2>
            <p className="text-zinc-600 text-lg mb-12 leading-relaxed text-justify">
              Guliston davlat pedagogika instituti O'zbekiston Respublikasi Prezidentining 2021-yildagi qarori bilan tashkil etilgan. 
              Qisqa vaqt ichida institut viloyatda ta'lim va fan yo'nalishidagi yetakchi muassasalardan biriga aylandi. 
              Bizning asosiy maqsadimiz — yangi O'zbekiston poydevorini quruvchi kreativ va bilimli pedagoglarni tayyorlashdir.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {values.map((value, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={value.title}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-2">{value.title}</h4>
                    <p className="text-zinc-500 leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
