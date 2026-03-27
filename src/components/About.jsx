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
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
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
            <div className="absolute -bottom-6 -right-6 md:right-10 bg-primary-600 text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center">
              <span className="text-4xl font-bold">10+</span>
              <span className="text-sm font-medium uppercase tracking-wider">Anos de Experiência</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Sobre a Empresa</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Pintura e reformas com <span className="text-primary-600">cuidado, técnica e presença profissional.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Sob a liderança dos sócios {companyData.ownersLabel}, a {companyData.name} atua com pintura residencial,
              pintura comercial e reformas, sempre com linguagem clara, acabamento bem executado e atendimento próximo.
              Nosso objetivo é transmitir segurança desde o primeiro contato até a entrega final.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="mt-12 flex items-center gap-6">
              <a
                href={`https://wa.me/${companyData.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl active:scale-95"
              >
                Falar com {companyData.ownersLabel}
              </a>
              <div className="h-10 w-px bg-slate-200" />
              <p className="text-slate-500 font-medium italic">
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
