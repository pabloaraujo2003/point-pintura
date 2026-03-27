import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Clock, Brush } from 'lucide-react';
import { companyData } from '../data/config';

const About = () => {
  const highlights = [
    { icon: Brush, text: "Acabamento de Alto Padrão", sub: "Qualidade superior em cada pincelada." },
    { icon: Clock, text: "Compromisso com Prazos", sub: "Respeito total ao cronograma da obra." },
    { icon: ShieldCheck, text: "Confiança e Transparência", sub: "Trabalho honesto e preços justos." },
    { icon: CheckCircle2, text: "Limpeza Pós-Obra", sub: "Entregamos seu ambiente impecável." },
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
                src="https://images.unsplash.com/photo-1595844730298-b9f1ff9b5993?q=80&w=1000&auto=format&fit=crop"
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
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Excelência em pintura para quem exige o <span className="text-primary-600">melhor acabamento.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Liderada por {companyData.owner}, a {companyData.name} nasceu com o propósito de elevar o padrão dos serviços de pintura.
              Nossa missão é transformar ambientes residenciais e comerciais através de um trabalho humanizado,
              técnico e extremamente cuidadoso.
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
                Falar com {companyData.owner}
              </a>
              <div className="h-10 w-px bg-slate-200" />
              <p className="text-slate-500 font-medium italic">
                "Qualidade não é um diferencial, é nossa obrigação."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
