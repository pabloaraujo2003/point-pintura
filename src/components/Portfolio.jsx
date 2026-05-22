import { motion } from 'framer-motion';
import { projects, videoReviews } from '../data/config';
import { Play, ArrowUpRight, Instagram } from 'lucide-react';

const Portfolio = () => {
  const featuredVideo = videoReviews[0];

  return (
    <section id="portfolio" className="py-16 md:py-28" style={{ background: 'var(--color-ink)' }}>
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-block w-6 h-px flex-shrink-0"
                style={{ background: 'var(--color-ember)' }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.24em]"
                style={{ color: 'var(--color-ember)', fontFamily: 'var(--font-body)' }}
              >
                Portfólio
              </span>
            </div>
            <h2
              className="font-bold mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-cream)',
                fontSize: 'clamp(1.9rem, 5vw, 3.5rem)',
                lineHeight: '1.1',
              }}
            >
              Projetos apresentados com{' '}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  color: 'var(--color-ember)',
                }}
              >
                clareza e credibilidade
              </span>
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-body)' }}
            >
              Imagens reais de obras entregues, organizadas para mostrar resultado
              e transmitir confiança para quem está pedindo orçamento.
            </p>
          </motion.div>
        </div>

        {/* Video review featured card */}
        {featuredVideo && (
          <motion.a
            href={featuredVideo.videoUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group mb-6 md:mb-8 block overflow-hidden rounded-2xl shadow-xl"
            style={{ border: '1px solid rgba(245,240,232,0.08)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
              <div
                className="relative min-h-[260px] overflow-hidden p-7 md:p-10 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(135deg, var(--color-ink) 0%, #2a1a0e 50%, #1a0e04 100%)',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at top left, rgba(232,93,4,0.15), transparent 55%)',
                  }}
                />
                <div className="relative flex items-center justify-between gap-4">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.22em]"
                    style={{
                      border: '1px solid rgba(245,240,232,0.18)',
                      background: 'rgba(245,240,232,0.06)',
                      color: 'var(--color-cream)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    {featuredVideo.platform}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: 'rgba(232,93,4,0.18)',
                      color: 'var(--color-ember)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Review de obra
                  </span>
                </div>

                <div className="relative max-w-xl mt-6">
                  <p
                    className="mb-3 text-xs font-bold uppercase tracking-[0.28em]"
                    style={{ color: 'rgba(232,93,4,0.8)', fontFamily: 'var(--font-body)' }}
                  >
                    Tour visual
                  </p>
                  <h3
                    className="mb-4 text-2xl md:text-3xl font-bold"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      color: 'var(--color-cream)',
                    }}
                  >
                    {featuredVideo.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-md"
                    style={{ color: 'rgba(245,240,232,0.65)', fontFamily: 'var(--font-body)' }}
                  >
                    {featuredVideo.quote}
                  </p>
                </div>

                <div className="relative flex items-center gap-4 mt-6">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      background: 'var(--color-ember)',
                      boxShadow: '0 4px 16px rgba(232,93,4,0.4)',
                    }}
                  >
                    <Play className="ml-1 h-6 w-6 fill-current text-cream" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[0.22em]"
                      style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-body)' }}
                    >
                      Abrir review
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)' }}
                    >
                      Veja a casa pronta no Instagram
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col justify-between p-6 md:p-8"
                style={{ background: 'rgba(245,240,232,0.03)' }}
              >
                <div>
                  <span
                    className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{
                      background: 'rgba(232,93,4,0.12)',
                      color: 'var(--color-ember)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Destaque em vídeo
                  </span>
                  <blockquote
                    className="mb-6 text-lg md:text-2xl font-bold leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      color: 'var(--color-cream)',
                    }}
                  >
                    "{featuredVideo.quote}"
                  </blockquote>
                </div>

                <div
                  className="flex items-end justify-between gap-4 pt-5"
                  style={{ borderTop: '1px solid rgba(245,240,232,0.08)' }}
                >
                  <div>
                    <h4
                      className="font-bold"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
                    >
                      {featuredVideo.clientName}
                    </h4>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mt-0.5"
                      style={{ color: 'rgba(245,240,232,0.35)', fontFamily: 'var(--font-body)' }}
                    >
                      {featuredVideo.role}
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: 'var(--color-ember)', fontFamily: 'var(--font-body)' }}
                  >
                    Ver no Instagram
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        )}

        {/* Asymmetric editorial grid: first card full-width, two below side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden ${
                idx === 0
                  ? 'portfolio-card-featured md:col-span-2'
                  : 'portfolio-card-standard'
              }`}
              style={{ background: 'rgba(245,240,232,0.04)' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                style={{ transform: 'scale(1.02)' }}
              />

              {/* Category tag — always visible top-right */}
              <div className="absolute top-4 right-4">
                <span
                  className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    background: 'rgba(15,14,10,0.75)',
                    color: 'var(--color-ember)',
                    fontFamily: 'var(--font-body)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(232,93,4,0.3)',
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Overlay on hover */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-5 md:p-7 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-350"
                style={{
                  background: 'linear-gradient(to top, rgba(15,14,10,0.96) 0%, rgba(15,14,10,0.5) 40%, transparent 100%)',
                }}
              >
                <div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-1.5"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-sm line-clamp-2"
                    style={{ color: 'rgba(245,240,232,0.7)', fontFamily: 'var(--font-body)' }}
                  >
                    {project.description}
                  </p>
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
