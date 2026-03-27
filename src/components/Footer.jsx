import { companyData, services } from '../data/config';
import { Paintbrush, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-20 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Paintbrush className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {companyData.name}
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed text-sm">
              Especialistas em transformar ambientes com cor, qualidade e profissionalismo. Há mais de 10 anos sendo referência em acabamentos finos.
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
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Serviços</h4>
            <ul className="flex flex-col gap-4 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-primary-400 transition-colors">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Links Rápidos</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" className="hover:text-primary-400 transition-colors">Nosso Portfólio</a></li>
              <li><a href="#testimonials" className="hover:text-primary-400 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contato</h4>
            <ul className="flex flex-col gap-6 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                <span>{companyData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span>{companyData.phoneFormatted}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span>{companyData.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-slate-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {companyData.name}. Todos os direitos reservados.</p>
          <p>Feito por <a href="#" className="text-primary-500">Pablo Araújo</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
