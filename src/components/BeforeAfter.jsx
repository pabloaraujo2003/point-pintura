import { motion } from 'framer-motion';
import { ArrowRightLeft, ImagePlus } from 'lucide-react';
import { beforeAfterProjects } from '../data/config';

const card = {
  background: 'rgba(245,240,232,0.04)',
  border: '1px solid rgba(245,240,232,0.08)',
  borderRadius: '1.5rem',
  overflow: 'hidden',
};

const ImagePanel = ({ image, label, title, tone = 'before' }) => {
  const isBefore = tone === 'before';

  return (
    <div style={card}>
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: '1px solid rgba(245,240,232,0.07)' }}
      >
        <p
          className="text-xs font-bold uppercase tracking-[0.24em]"
          style={{
            color: isBefore ? 'rgba(245,240,232,0.4)' : 'var(--color-ember)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {title}
        </p>
        <span
          className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{
            background: isBefore ? 'rgba(245,240,232,0.08)' : 'rgba(232,93,4,0.15)',
            color: isBefore ? 'rgba(245,240,232,0.5)' : 'var(--color-ember)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {isBefore ? 'Original' : 'Finalizado'}
        </span>
      </div>

      <div
        className="flex min-h-[320px] items-center justify-center p-4 md:min-h-[420px] md:p-6"
        style={{ background: 'rgba(245,240,232,0.03)' }}
      >
        {image ? (
          <img
            src={image}
            alt={label}
            className="h-[320px] w-full rounded-xl object-cover object-center md:h-[420px]"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <div
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-full shadow-sm"
              style={{ background: 'rgba(245,240,232,0.07)', color: 'rgba(245,240,232,0.35)' }}
            >
              <ImagePlus className="h-7 w-7" />
            </div>
            <p
              className="max-w-xs text-sm leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.45)', fontFamily: 'var(--font-body)' }}
            >
              {label}
            </p>
          </div>
        )}
      </div>

      <div
        className="px-5 py-4"
        style={{ borderTop: '1px solid rgba(245,240,232,0.07)' }}
      >
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-body)' }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const project = beforeAfterProjects[0];

  if (!project) return null;

  return (
    <section
      className="py-16 md:py-24"
      style={{ background: 'var(--color-ink)' }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              className="inline-block w-6 h-px flex-shrink-0"
              style={{ background: 'var(--color-ember)' }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[0.22em]"
              style={{ color: 'var(--color-ember)', fontFamily: 'var(--font-body)' }}
            >
              Antes e Depois
            </span>
            <span
              className="inline-block w-6 h-px flex-shrink-0"
              style={{ background: 'var(--color-ember)' }}
            />
          </div>
          <h2
            className="mb-5 text-3xl font-bold md:text-5xl"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
          >
            Compare a fachada antes da obra com o resultado final
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-body)' }}
          >
            Um comparativo direto para mostrar preparação, acabamento e transformação visual da
            pintura externa.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem]"
          style={{ border: '1px solid rgba(245,240,232,0.08)', background: 'rgba(245,240,232,0.02)' }}
        >
          <div
            className="flex flex-col gap-5 px-6 py-6 md:flex-row md:items-end md:justify-between md:px-8"
            style={{ borderBottom: '1px solid rgba(245,240,232,0.07)' }}
          >
            <div>
              <p
                className="mb-2 text-xs font-bold uppercase tracking-[0.24em]"
                style={{ color: 'var(--color-ember)', fontFamily: 'var(--font-body)' }}
              >
                {project.category}
              </p>
              <h3
                className="text-2xl font-bold md:text-3xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
              >
                {project.title}
              </h3>
            </div>

            <div
              className="inline-flex w-fit items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold"
              style={{
                background: 'rgba(232,93,4,0.12)',
                color: 'var(--color-ember)',
                border: '1px solid rgba(232,93,4,0.25)',
                fontFamily: 'var(--font-body)',
              }}
            >
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

          <div
            className="px-6 py-6 md:px-8"
            style={{ borderTop: '1px solid rgba(245,240,232,0.07)' }}
          >
            <p
              className="text-sm leading-relaxed md:text-base"
              style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-body)' }}
            >
              {project.summary}
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default BeforeAfter;
