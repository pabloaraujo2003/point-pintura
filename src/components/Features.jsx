import { motion } from 'framer-motion';
import { features } from '../data/config';
import { BadgeCheck } from 'lucide-react';
import paintingInteriorImage from '../assets/painting-interior.svg';

const Features = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-400 font-bold uppercase tracking-widest text-sm mb-4 block">Nossos Diferenciais</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Por que escolher a nossa <span className="text-primary-400">equipe de pintura?</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl">
              Combinamos técnica, paixão e os melhores materiais para garantir que seu investimento se transforme em um ambiente renovado e duradouro.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-primary-600/20 p-2 rounded-lg flex-shrink-0 h-fit border border-primary-600/30">
                    <BadgeCheck className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">{feature.title}</h4>
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
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-800">
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
