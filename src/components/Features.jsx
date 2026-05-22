import { motion } from 'framer-motion';
import { features } from '../data/config';
import { BadgeCheck } from 'lucide-react';

const Features = () => {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ background: 'rgba(245,240,232,0.03)', borderTop: '1px solid rgba(245,240,232,0.06)' }}
    >
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(232,93,4,0.06) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="lg:w-2/5"
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
                Nossos Diferenciais
              </span>
            </div>
            <h2
              className="font-bold mb-5"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-cream)',
                fontSize: 'clamp(1.9rem, 5vw, 3.5rem)',
                lineHeight: '1.08',
              }}
            >
              O padrão que{' '}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  color: 'var(--color-ember)',
                }}
              >
                entregamos
              </span>{' '}
              em cada projeto
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-body)' }}
            >
              Cada detalhe da nossa atuação reflete o jeito que trabalhamos: proximidade
              no atendimento, segurança no processo e resultado final com alto padrão de execução.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="feature-item"
              >
                <div className="feature-icon-wrap">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className="font-bold mb-1"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-cream)',
                      fontSize: '0.95rem',
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(245,240,232,0.45)', fontFamily: 'var(--font-body)' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
