import { motion } from 'framer-motion';
import { testimonials } from '../data/config';

const Stars = ({ count = 5 }) => (
  <div className="testimonial-stars">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="testimonial-star">★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const featured = testimonials[0];
  const secondary = testimonials.slice(1);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-28 texture-noise texture-noise-dark relative overflow-hidden"
      style={{ background: 'var(--color-ink)' }}
    >
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(232,93,4,0.07) 0%, transparent 70%)',
          transform: 'translate(-40%, -40%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(240,165,0,0.04) 0%, transparent 70%)',
          transform: 'translate(35%, 35%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
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
              Prova Social
            </span>
          </div>
          <h2
            className="font-bold"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-cream)',
              fontSize: 'clamp(1.9rem, 5vw, 3.5rem)',
              lineHeight: '1.1',
            }}
          >
            Depoimentos que reforçam{' '}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                color: 'var(--color-ember)',
              }}
            >
              confiança e qualidade
            </span>
          </h2>
        </motion.div>

        {/* Featured testimonial — editorial pull-quote style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="testimonial-featured mb-6 md:mb-8 relative rounded-r-2xl p-6 md:p-10 overflow-hidden"
          style={{
            background: 'rgba(245,240,232,0.04)',
            border: '1px solid rgba(245,240,232,0.07)',
            borderLeft: '4px solid var(--color-ember)',
          }}
        >
          {/* Giant decorative quote mark */}
          <div
            className="testimonial-quote-mark absolute top-0 left-5 md:left-8 pointer-events-none select-none"
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative">
            <div className="mb-4 mt-12 md:mt-16">
              <Stars count={featured.rating} />
            </div>

            <p
              className="text-xl md:text-3xl lg:text-4xl leading-relaxed mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                color: 'var(--color-cream)',
                letterSpacing: '-0.01em',
              }}
            >
              {featured.content}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg uppercase flex-shrink-0"
                  style={{
                    background: 'var(--color-ember)',
                    color: 'var(--color-cream)',
                    fontFamily: 'var(--font-heading)',
                    boxShadow: '0 4px 12px rgba(232,93,4,0.35)',
                  }}
                >
                  {featured.name.charAt(0)}
                </div>
                <div>
                  <h4
                    className="font-bold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
                  >
                    {featured.name}
                  </h4>
                  <p
                    className="text-xs uppercase tracking-wider mt-0.5"
                    style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)' }}
                  >
                    {featured.role}
                  </p>
                </div>
              </div>
              <div className="brand-credibility-mark">
                Point da Pintura · Cliente verificado
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {secondary.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl p-6 md:p-7"
              style={{
                background: 'rgba(245,240,232,0.04)',
                border: '1px solid rgba(245,240,232,0.07)',
              }}
            >
              <Stars count={testimonial.rating} />

              <p
                className="text-base leading-relaxed my-4 italic"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'rgba(245,240,232,0.8)',
                }}
              >
                "{testimonial.content}"
              </p>

              <div
                className="flex items-center justify-between gap-3 pt-4"
                style={{ borderTop: '1px solid rgba(245,240,232,0.07)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm uppercase flex-shrink-0"
                    style={{
                      background: 'rgba(232,93,4,0.15)',
                      color: 'var(--color-ember)',
                      fontFamily: 'var(--font-heading)',
                      border: '1px solid rgba(232,93,4,0.2)',
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-sm"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-xs uppercase tracking-wider"
                      style={{ color: 'rgba(245,240,232,0.35)', fontFamily: 'var(--font-body)' }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="brand-credibility-mark text-xs">
                  ✓ Verificado
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
