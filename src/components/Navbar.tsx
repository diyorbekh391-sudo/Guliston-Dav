import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
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
    { name: 'Yangiliklar', href: '#news' },
    { name: 'Institut', href: '#about' },
    { name: 'Fakultetlar', href: '#faculties' },
    { name: 'Statistika', href: '#stats' },
    { name: 'Bog\'lanish', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 shadow-sm ${
        isDarkMode ? 'bg-[#001a35]/80 border-b border-white/10' : 'bg-white/80'
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
            <Landmark className="text-white w-6 h-6" />
          </div>
          <span className={`font-serif font-bold text-xl tracking-tight ${isDarkMode ? 'text-white' : 'text-secondary'}`}>
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
                isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-secondary'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <button className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20">
            Shaxsiy kabinet
          </button>

          <div className="h-6 w-px bg-zinc-200 dark:bg-white/10" />

          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode ? 'hover:bg-white/10 text-accent' : 'hover:bg-zinc-100 text-secondary'
            }`}
            title={isDarkMode ? 'Kunduzgi rejim' : 'Tungi rejim'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Toggle & Theme Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode ? 'text-accent' : 'text-secondary'
            }`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button
            className="p-2 rounded-lg transition-colors overflow-hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isDarkMode ? 'text-white' : 'text-secondary'} />
            ) : (
              <Menu className={isDarkMode ? 'text-white' : 'text-secondary'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b overflow-hidden ${
              isDarkMode ? 'bg-[#001a35] border-white/10' : 'bg-white border-zinc-100'
            }`}
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    isDarkMode ? 'text-zinc-300 hover:text-white' : 'text-secondary hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className={isDarkMode ? 'border-white/10 my-2' : 'border-zinc-100 my-2'} />
              <div className="flex flex-col gap-4">
                <button className="w-full py-4 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/20">
                  Shaxsiy kabinetga kirish
                </button>
                <button 
                  onClick={() => {
                    toggleTheme();
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full py-4 flex items-center justify-center gap-2 rounded-xl font-semibold transition-all ${
                    isDarkMode ? 'bg-white/5 text-accent border border-white/10' : 'bg-zinc-100 text-secondary border border-zinc-200'
                  }`}
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  {isDarkMode ? 'Kunduzgi rejim' : 'Tungi rejim'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
