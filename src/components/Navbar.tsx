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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const navItems = ['Início', 'Sobre', 'Experiência', 'Projetos', 'Habilidades', 'Contato'];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] relative flex items-center justify-between px-4 md:px-8 h-14 md:h-16 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-[#0a0a0a]'
          : scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent'
      }`}
    >
      <div className="flex flex-col leading-tight cursor-pointer group z-[110]">
        <span className="text-lg md:text-xl font-black tracking-tighter text-brand group-hover:scale-105 transition-transform">MATHEUS</span>
        <div className="flex items-center gap-1">
          <span className="text-base md:text-lg font-bold tracking-tighter text-white">&lt; FELIPE</span>
          <span className="text-base md:text-lg font-bold tracking-tighter text-brand">/&gt;</span>
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
        className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 z-[110] text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-md z-[1000] relative flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <button
          aria-label="Fechar menu"
          className="absolute top-4 right-4 text-white p-3 rounded-full bg-white/10 border border-white/20"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="w-11/12 max-w-sm mx-auto rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(71,1,178,0.15)]">
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-bold text-white hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
