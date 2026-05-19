import { companyData, services } from '../data/config';
import { Paintbrush, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="py-14 md:py-20"
      style={{
        background: 'var(--color-ink)',
        borderTop: '1px solid rgba(245,240,232,0.07)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-2.5 group w-fit">
              <div className="bg-ember p-1.5 rounded-md group-hover:scale-110 transition-transform">
                <Paintbrush className="w-5 h-5 text-cream" />
              </div>
              <span
                className="text-lg font-bold tracking-tight text-cream"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {companyData.name}
              </span>
            </a>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.45)', fontFamily: 'var(--font-body)' }}
            >
              Portfólio digital com foco em pintura residencial, comercial e reformas, apresentado
              com clareza e acolhimento.
            </p>
            <div className="flex gap-3">
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl transition-all"
                style={{
                  background: 'rgba(245,240,232,0.06)',
                  border: '1px solid rgba(245,240,232,0.1)',
                  color: 'rgba(245,240,232,0.5)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--color-ember)';
                  e.currentTarget.style.color = 'var(--color-cream)';
                  e.currentTarget.style.borderColor = 'var(--color-ember)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(245,240,232,0.06)';
                  e.currentTarget.style.color = 'rgba(245,240,232,0.5)';
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.1)';
                }}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl transition-all"
                style={{
                  background: 'rgba(245,240,232,0.06)',
                  border: '1px solid rgba(245,240,232,0.1)',
                  color: 'rgba(245,240,232,0.5)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--color-ember)';
                  e.currentTarget.style.color = 'var(--color-cream)';
                  e.currentTarget.style.borderColor = 'var(--color-ember)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(245,240,232,0.06)';
                  e.currentTarget.style.color = 'rgba(245,240,232,0.5)';
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.1)';
                }}
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4
              className="font-bold mb-6 uppercase tracking-widest text-xs"
              style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-heading)' }}
            >
              Serviços
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="footer-link">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-bold mb-6 uppercase tracking-widest text-xs"
              style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-heading)' }}
            >
              Links Rápidos
            </h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#home" className="footer-link">Início</a></li>
              <li><a href="#about" className="footer-link">Sobre a Empresa</a></li>
              <li><a href="#portfolio" className="footer-link">Nosso Portfólio</a></li>
              <li><a href="#testimonials" className="footer-link">Prova Social</a></li>
            </ul>
          </div>

          <div>
            <h4
              className="font-bold mb-6 uppercase tracking-widest text-xs"
              style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-heading)' }}
            >
              Contato
            </h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-ember)' }}
                />
                <span style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-body)' }}>
                  {companyData.address}
                </span>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <Phone
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-ember)' }}
                />
                <div
                  className="flex flex-col gap-1 min-w-0"
                  style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-body)' }}
                >
                  <span>Fabio: {companyData.phoneFormatted}</span>
                  <span>Rocelio: {companyData.secondaryPhoneFormatted}</span>
                </div>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <Mail
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-ember)' }}
                />
                <div
                  className="flex flex-col gap-2 min-w-0"
                  style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-body)' }}
                >
                  <span className="break-all text-xs leading-relaxed">{companyData.email}</span>
                  <span className="break-all text-xs leading-relaxed">{companyData.secondaryEmail}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-center md:text-left"
          style={{
            borderTop: '1px solid rgba(245,240,232,0.07)',
            color: 'rgba(245,240,232,0.25)',
            fontFamily: 'var(--font-body)',
          }}
        >
          <p>© {new Date().getFullYear()} {companyData.name}. Todos os direitos reservados.</p>
          <p>Point da Pintura | Rio de Janeiro</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
