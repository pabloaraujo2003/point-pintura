import { motion } from 'framer-motion';
import { Home, Building, Paintbrush, Umbrella, Layers, Shield, CheckCircle, Construction } from 'lucide-react';
import { services } from '../data/config';

const iconMap = {
  Home,
  Building,
  Paintbrush,
  Umbrella,
  Layers,
  Shield,
  CheckCircle,
  Construction
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Especialidade</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tudo o que você precisa em <span className="text-primary-600">Pintura e Acabamento</span></h2>
          <p className="text-slate-600 text-lg">
            Oferecemos soluções completas para todos os tipos de superfícies e ambientes, sempre utilizando materiais de primeira linha.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Paintbrush;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
