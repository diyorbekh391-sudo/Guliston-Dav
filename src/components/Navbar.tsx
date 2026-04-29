import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bosh sahifa', href: '#home' },
    { name: 'Institut', href: '#about' },
    { name: 'Statistika', href: '#stats' },
    { name: 'Fakultetlar', href: '#faculties' },
    { name: 'Yangiliklar', href: '#news' },
    { name: 'Bog\'lanish', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <Landmark className="text-white w-6 h-6" />
          </div>
          <span className={`font-serif font-bold text-xl tracking-tight transition-colors ${
            scrolled ? 'text-secondary' : 'text-white'
          }`}>
            GDPI
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-secondary' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
            scrolled ? 'bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20' : 'bg-white text-secondary hover:bg-white/90'
          }`}>
            Shaxsiy kabinet
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors overflow-hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={scrolled ? 'text-secondary' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-secondary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-secondary hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-zinc-100 my-2" />
              <button className="w-full py-4 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/20">
                Shaxsiy kabinetga kirish
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
