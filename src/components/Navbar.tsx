import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Início', 'Sobre', 'Experiência', 'Projetos', 'Habilidades', 'Contato'];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex flex-col leading-tight cursor-pointer group z-[110]">
        <span className="text-xl font-black tracking-tighter text-brand group-hover:scale-105 transition-transform">MATHEUS</span>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold tracking-tighter text-white">&lt; FELIPE</span>
          <span className="text-lg font-bold tracking-tighter text-brand">/&gt;</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 items-center justify-center gap-8 pr-32">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-gray-300 hover:text-accent transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden z-[110] text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-[105] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-2xl font-bold text-gray-300 hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};
