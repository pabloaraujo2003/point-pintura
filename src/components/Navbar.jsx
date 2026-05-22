import { useState, useEffect } from 'react';
import { Menu, X, Paintbrush, Mail } from 'lucide-react';
import { companyData, whatsappLink } from '../data/config';
import openContactModal from '../lib/openContactModal';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Avaliações', href: '#testimonials' },
  ];

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 px-4"
      style={{
        paddingTop:    scrolled ? '0.5rem'                        : '0.75rem',
        paddingBottom: scrolled ? '0.5rem'                        : '0.75rem',
        background:    scrolled ? 'rgba(15,14,10,0.92)'           : 'transparent',
        backdropFilter:        scrolled ? 'blur(16px)' : 'blur(0px)',
        WebkitBackdropFilter:  scrolled ? 'blur(16px)' : 'blur(0px)',
        borderBottom:  `1px solid ${scrolled ? 'rgba(245,240,232,0.07)' : 'transparent'}`,
        transition: 'padding 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-3">
        <a href="#home" className="flex items-center gap-2.5 group min-w-0">
          <div className="bg-ember p-1.5 rounded-md group-hover:scale-110 transition-transform">
            <Paintbrush className="w-5 h-5 text-cream" />
          </div>
          <span
            className="text-base sm:text-lg font-bold tracking-tight text-cream truncate"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {companyData.name}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button
            onClick={openContactModal}
            title="Solicitar orçamento por e-mail"
            className="p-2 rounded-full transition-all"
            style={{
              color: 'rgba(245,240,232,0.5)',
              background: 'transparent',
              border: '1.5px solid rgba(245,240,232,0.15)',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--color-cream)';
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.4)';
              e.currentTarget.style.background = 'rgba(245,240,232,0.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(245,240,232,0.5)';
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.15)';
              e.currentTarget.style.background = 'transparent';
            }}
            aria-label="Solicitar orçamento por e-mail"
          >
            <Mail className="w-4 h-4" />
          </button>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all border bg-ember text-cream border-ember hover:bg-clay hover:border-clay"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Pedir Orçamento
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen
            ? <X className="text-cream" size={22} />
            : <Menu className="text-cream" size={22} />
          }
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full shadow-xl border-t border-cream/10"
          style={{ background: 'rgba(15,14,10,0.97)', backdropFilter: 'blur(12px)' }}
        >
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium py-3 px-4 border-b border-cream/10 text-sm transition-colors"
                style={{ color: 'rgba(245,240,232,0.75)', fontFamily: 'var(--font-body)' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream text-center py-3 rounded-xl font-bold mt-2"
              style={{ background: 'var(--color-ember)', fontFamily: 'var(--font-body)' }}
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
