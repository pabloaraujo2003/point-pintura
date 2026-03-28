import { companyData, services } from '../data/config';
import { Paintbrush, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-14 md:py-20 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-16">
          <div className="flex flex-col gap-5 md:gap-6">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Paintbrush className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight text-white">
                {companyData.name}
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed text-sm">
              Portfólio digital com foco em pintura residencial, pintura comercial e reformas, apresentado com clareza, confiança e acolhimento.
            </p>
            <div className="flex gap-4">
              <a href={companyData.socials.instagram} target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-3 rounded-xl hover:bg-primary-600 hover:text-white transition-all border border-slate-800">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={companyData.socials.facebook} target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-3 rounded-xl hover:bg-primary-600 hover:text-white transition-all border border-slate-800">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 md:mb-8 uppercase tracking-widest text-xs md:text-sm">Serviços</h4>
            <ul className="flex flex-col gap-3 md:gap-4 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-primary-400 transition-colors">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 md:mb-8 uppercase tracking-widest text-xs md:text-sm">Links Rápidos</h4>
            <ul className="flex flex-col gap-3 md:gap-4 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">Sobre a Empresa</a></li>
              <li><a href="#portfolio" className="hover:text-primary-400 transition-colors">Nosso Portfólio</a></li>
              <li><a href="#testimonials" className="hover:text-primary-400 transition-colors">Prova Social</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 md:mb-8 uppercase tracking-widest text-xs md:text-sm">Contato</h4>
            <ul className="flex flex-col gap-4 md:gap-6 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                <span>{companyData.address}</span>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <Phone className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 min-w-0">
                  <span>Fabio: {companyData.phoneFormatted}</span>
                  <span>Rocelio: {companyData.secondaryPhoneFormatted}</span>
                </div>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <Mail className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2 min-w-0 w-full">
                  <span className="break-words leading-relaxed">Fabio: {companyData.email}</span>
                  <span className="break-words leading-relaxed">Rocelio: {companyData.secondaryEmail}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 text-[11px] md:text-xs font-medium text-slate-500 uppercase tracking-[0.18em] md:tracking-widest text-center md:text-left">
          <p>© {new Date().getFullYear()} {companyData.name}. Todos os direitos reservados.</p>
          <p>Point da Pintura | Rio de Janeiro</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
