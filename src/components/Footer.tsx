import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Landmark } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary text-white pt-24 pb-12 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6">
                <Landmark className="text-white w-7 h-7" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight">
                GDPI
              </span>
            </a>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Guliston davlat pedagogika instituti — ta'lim va fan sohasida yetakchi oliy o'quv yurti. Biz bilan porloq kelajak sari!
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Foydali havolalar</h4>
            <ul className="space-y-4 text-zinc-400">
              {['Interaktiv xizmatlar', 'Hujjat namunasi', 'Qabul komissiyasi', 'Virtual qabulxona', 'Xalqaro aloqalar'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Talabalar uchun</h4>
            <ul className="space-y-4 text-zinc-400">
              {['Dars jadvali', 'Tizimga kirish (HEMIS)', 'Elektron kutubxona', 'Stipendiyalar', 'Turar joy'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Bog'lanish</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-zinc-400 text-sm leading-relaxed">
                  Uzbekiston, Guliston sh. <br />
                  Sayhun ko'chasi, 15-uy
                </span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <span className="text-zinc-400 text-sm">
                  +998 (67) 225-11-23
                </span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span className="text-zinc-400 text-sm">
                  info@gulpi.uz
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm text-center md:text-left">
          <div className="space-y-1">
            <p>© {currentYear} Guliston davlat pedagogika instituti. Barcha huquqlar himoyalangan.</p>
            <p className="text-zinc-600 font-medium">Dasturchi: Xabibullayev Diyorbek</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white transition-colors">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
