import { motion } from 'framer-motion';
import { features } from '../data/config';
import { BadgeCheck } from 'lucide-react';
import paintingInteriorImage from '../assets/painting-interior.svg';

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-300 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">Nossos Diferenciais</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 md:mb-8 leading-tight">Um visual acolhedor com base em <span className="text-primary-300">qualidade, clareza e confiança</span></h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-12 max-w-xl">
              Cada detalhe da apresentação foi pensado para refletir o jeito da empresa trabalhar: proximidade no atendimento, segurança no processo e resultado final de alto padrão.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-3 md:gap-4">
                  <div className="bg-primary-600/20 p-2 rounded-lg flex-shrink-0 h-fit border border-primary-600/30">
                    <BadgeCheck className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1.5 md:mb-2 text-sm md:text-base">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-2 md:mt-0"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-slate-800">
               <img
                src={paintingInteriorImage}
                alt="Pintor detalhista"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-600/10 blur-[100px] -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
