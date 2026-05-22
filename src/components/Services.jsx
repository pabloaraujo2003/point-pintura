import { motion } from 'framer-motion';
import { services } from '../data/config';
import { ArrowRight, Home, Building2, Wrench } from 'lucide-react';

const serviceNumbers = ['01', '02', '03'];
const serviceIcons = [Home, Building2, Wrench];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-28 relative overflow-hidden"
      style={{ background: 'var(--color-ink)' }}
    >
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(232,93,4,0.06) 0%, transparent 70%)',
          transform: 'translate(40%, 40%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 md:mb-20"
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
              Nossos Serviços
            </span>
          </div>
          <h2
            className="font-bold mb-5"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-cream)',
              fontSize: 'clamp(1.9rem, 5vw, 3.5rem)',
              lineHeight: '1.1',
            }}
          >
            Soluções para quem busca{' '}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                color: 'var(--color-ember)',
              }}
            >
              qualidade e confiança
            </span>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-body)' }}
          >
            Três frentes de atuação, cada uma com execução dedicada e atenção
            ao detalhe para valorizar o seu ambiente.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 md:gap-4">
          {services.map((service, idx) => {
            const Icon = serviceIcons[idx];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="service-card"
              >
                <span className="service-number" aria-hidden="true">
                  {serviceNumbers[idx]}
                </span>

                <div className="py-1">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: 'var(--color-ember)' }}
                      aria-hidden="true"
                    />
                    <h3
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-body)' }}
                  >
                    {service.description}
                  </p>
                </div>

                <div className="service-arrow" aria-hidden="true">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
