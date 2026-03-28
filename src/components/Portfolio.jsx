import { motion } from 'framer-motion';
import { projects, videoReviews } from '../data/config';
import { ExternalLink, Play, ArrowUpRight, Instagram } from 'lucide-react';

const Portfolio = () => {
  const featuredVideo = videoReviews[0];

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

        {featuredVideo && (
          <motion.a
            href={featuredVideo.videoUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group mb-8 md:mb-10 block overflow-hidden rounded-[2rem] border border-primary-100 bg-primary-50 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[260px] overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_32%),linear-gradient(135deg,_#7c2d12_0%,_#ea580c_45%,_#fdba74_100%)] p-6 md:p-10">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.42))]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white">
                      <Instagram className="h-4 w-4" />
                      {featuredVideo.platform}
                    </span>
                    <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white/90">
                      Review de obra
                    </span>
                  </div>

                  <div className="max-w-xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary-100">
                      Tour visual
                    </p>
                    <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                      {featuredVideo.title}
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-white/85 md:text-base">
                      {featuredVideo.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary-600 transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-1 h-7 w-7 fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
                        Abrir review
                      </p>
                      <p className="text-xs text-white/70">
                        Veja a casa pronta no Instagram
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <span className="mb-4 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-primary-700">
                    Destaque em video
                  </span>
                  <blockquote className="mb-6 text-lg font-semibold leading-relaxed text-slate-900 md:text-2xl">
                    "{featuredVideo.quote}"
                  </blockquote>
                </div>

                <div className="flex items-end justify-between gap-4 border-t border-primary-100 pt-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{featuredVideo.clientName}</h4>
                    <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
                      {featuredVideo.role}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
                    Ver no Instagram
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        )}

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
