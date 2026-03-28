import { motion } from 'framer-motion';
import { projects } from '../data/config';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">Portfólio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 md:mb-6">Projetos apresentados com <span className="text-primary-600">clareza e credibilidade</span></h2>
            <p className="text-slate-600 text-base md:text-lg">
              As imagens e descrições foram organizadas para valorizar o serviço executado e facilitar a leitura de quem está pedindo orçamento.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-auto"
          >
             <div className="rounded-2xl border border-primary-100 bg-primary-50 px-5 md:px-6 py-4 text-sm font-semibold text-slate-700 w-full md:w-auto">
              Visual limpo para residências, comércios e reformas
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/38 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-8">
                <span className="text-primary-400 text-sm font-bold uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-md">
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
