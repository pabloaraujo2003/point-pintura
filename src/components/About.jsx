import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Brush, Palette } from 'lucide-react';
import { companyData } from '../data/config';
import paintingCrewImage from '../assets/painting-crew.svg';

const About = () => {
  const highlights = [
    { icon: Brush, text: "Acabamento Profissional", sub: "Execução cuidadosa para valorizar cada ambiente." },
    { icon: Palette, text: "Cores que Acolhem", sub: "Escolhas visuais pensadas para deixar o espaço mais agradável." },
    { icon: Clock, text: "Compromisso com Prazo", sub: "Organização real do início ao fim do serviço." },
    { icon: ShieldCheck, text: "Confiança no Atendimento", sub: "Transparência no orçamento e respeito com seu espaço." },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={paintingCrewImage}
                alt="Equipe de pintura trabalhando"
                className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 md:right-10 bg-primary-600 text-white px-5 py-4 md:p-8 rounded-2xl shadow-2xl flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold">20+</span>
              <span className="text-[11px] md:text-sm font-medium uppercase tracking-wider">Anos de Mercado</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-primary-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">Sobre a Empresa</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 md:mb-6 leading-tight">
              Pintura e reformas com <span className="text-primary-600">cuidado, técnica e presença profissional.</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-7 md:mb-8 leading-relaxed">
              Sob a liderança dos sócios {companyData.ownersLabel}, a {companyData.name} atua com pintura residencial,
              pintura comercial e reformas, sempre com linguagem clara, acabamento bem executado e atendimento próximo.
              Nosso objetivo é transmitir segurança desde o primeiro contato até a entrega final.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="bg-primary-50 p-3 rounded-xl flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.text}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
              <a
                href={`https://wa.me/${companyData.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 md:px-8 py-4 rounded-xl font-bold transition-all shadow-xl active:scale-95 text-center w-full sm:w-auto"
              >
                Falar com {companyData.ownersLabel}
              </a>
              <div className="hidden sm:block h-10 w-px bg-slate-200" />
              <p className="text-slate-500 font-medium italic text-sm md:text-base">
                "Profissionalismo, acolhimento e acabamento em cada detalhe."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
