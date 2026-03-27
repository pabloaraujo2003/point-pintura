import { motion } from 'framer-motion';
import { projects } from '../data/config';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Portfólio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Trabalhos que <span className="text-primary-600">falam por nós</span></h2>
            <p className="text-slate-600 text-lg">
              Confira alguns dos nossos projetos recentes em residências e empresas. Cada projeto é tratado com exclusividade.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-xl font-bold transition-colors">
              Ver todos os projetos
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary-400 text-sm font-bold uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  Ver detalhes <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
