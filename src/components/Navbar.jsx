import { useState, useEffect } from 'react';
import { Menu, X, Paintbrush } from 'lucide-react';
import { companyData } from '../data/config';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300 px-4 py-3",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-primary-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Paintbrush className="w-6 h-6 text-white" />
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            scrolled ? "text-slate-900" : "text-white"
          )}>
            {companyData.name}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary-500",
                scrolled ? "text-slate-600" : "text-slate-200"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`https://wa.me/${companyData.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-primary-500/20 active:scale-95"
          >
            Orçamento Grátis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary-600 font-medium py-2 px-4 border-b border-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${companyData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white text-center py-3 rounded-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
