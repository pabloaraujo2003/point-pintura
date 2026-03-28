import { motion } from 'framer-motion';
import { ArrowRightLeft, ImagePlus } from 'lucide-react';
import { beforeAfterProjects } from '../data/config';

const ImagePanel = ({ image, label, title, tone = 'before' }) => {
  const isBefore = tone === 'before';

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <p className={`text-xs font-bold uppercase tracking-[0.24em] ${isBefore ? 'text-slate-400' : 'text-primary-600'}`}>
            {title}
          </p>
        </div>
        <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${isBefore ? 'bg-slate-100 text-slate-500' : 'bg-primary-50 text-primary-700'}`}>
          {isBefore ? 'Original' : 'Finalizado'}
        </span>
      </div>

      <div className="flex min-h-[260px] items-center justify-center bg-slate-50 p-4 md:min-h-[340px] md:p-6">
        {image ? (
          <img
            src={image}
            alt={label}
            className="h-[320px] w-full rounded-xl object-cover object-center md:h-[420px]"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center text-slate-500">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
              <ImagePlus className="h-7 w-7" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed">{label}</p>
          </div>
        )}
      </div>

      <div className="border-t border-slate-100 px-5 py-4">
        <p className="text-sm leading-relaxed text-slate-600">{label}</p>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const project = beforeAfterProjects[0];

  if (!project) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary-600 md:text-sm">
            Antes e Depois
          </span>
          <h2 className="mb-5 text-3xl font-bold text-slate-900 md:text-5xl">
            Compare a fachada antes da obra com o resultado final
          </h2>
          <p className="text-base text-slate-600 md:text-lg">
            Um comparativo direto para mostrar preparação, acabamento e transformação visual da pintura externa.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg"
        >
          <div className="flex flex-col gap-5 border-b border-slate-100 px-6 py-6 md:flex-row md:items-end md:justify-between md:px-8">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-primary-600">
                {project.category}
              </p>
              <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                {project.title}
              </h3>
            </div>

            <div className="inline-flex w-fit items-center gap-3 rounded-full bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-700">
              <ArrowRightLeft className="h-4 w-4" />
              Antes x Depois
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 md:gap-6 md:p-8">
            <ImagePanel
              image={project.beforeImage}
              label={project.beforeLabel}
              title="Antes"
              tone="before"
            />
            <ImagePanel
              image={project.afterImage}
              label={project.afterLabel}
              title="Depois"
              tone="after"
            />
          </div>

          <div className="border-t border-slate-100 px-6 py-6 md:px-8">
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              {project.summary}
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default BeforeAfter;
