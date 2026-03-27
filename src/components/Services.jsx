import { motion } from 'framer-motion';
import { Home, Building, Construction } from 'lucide-react';
import { services } from '../data/config';

const iconMap = {
  Home,
  Building,
  Construction
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Soluções principais para quem busca <span className="text-primary-600">qualidade e confiança</span></h2>
          <p className="text-slate-600 text-lg">
            Organizamos nossos serviços em três frentes principais para facilitar a escolha de quem precisa renovar, valorizar ou transformar um ambiente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Construction;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all border border-primary-100 group hover:-translate-y-2 text-left"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
                <span className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white">
                  Atendimento profissional
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
