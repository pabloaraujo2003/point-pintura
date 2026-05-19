import { motion } from 'framer-motion';
import { services } from '../data/config';

const serviceNumbers = ['01', '02', '03'];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-28 relative overflow-hidden"
      style={{ background: 'var(--color-ink)' }}
    >
      {/* Glow sutil no canto oposto ao hero */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,93,4,0.07) 0%, transparent 70%)',
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
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block w-6 h-px flex-shrink-0"
              style={{ background: 'var(--color-ember)' }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[0.22em]"
              style={{ color: 'var(--color-ember)', fontFamily: 'var(--font-body)' }}
            >
              Nossos Serviços
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
          >
            Soluções para quem busca{' '}
            <span style={{ color: 'var(--color-ember)' }}>qualidade e confiança</span>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-body)' }}
          >
            Organizamos nossos serviços em três frentes principais para facilitar a escolha de
            quem precisa renovar, valorizar ou transformar um ambiente.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-5">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="service-card"
            >
              <span className="service-number" aria-hidden="true">
                {serviceNumbers[idx]}
              </span>
              <div className="py-1">
                <h3
                  className="text-lg md:text-xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-body)' }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
