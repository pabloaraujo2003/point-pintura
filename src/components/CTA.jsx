import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { companyData } from '../data/config';

const CTA = () => {
  return (
    <section className="cta-section texture-noise texture-noise-dark py-16 md:py-28">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,93,4,0.07) 0%, transparent 70%)',
          transform: 'translate(40%, -40%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-block w-6 h-px flex-shrink-0"
                style={{ background: 'var(--color-ember)' }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.22em]"
                style={{ color: 'var(--color-ember)', fontFamily: 'var(--font-body)' }}
              >
                Solicite seu Orçamento
              </span>
            </div>

            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
            >
              Cuide do seu ambiente com quem entende do{' '}
              <span style={{ color: 'var(--color-ember)' }}>serviço</span>
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-body)' }}
            >
              Atendimento direto pelo WhatsApp para tirar dúvidas, alinhar o serviço e montar
              um orçamento profissional em {companyData.city}.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 flex flex-col gap-8"
          >
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: 'rgba(245,240,232,0.04)',
                border: '1px solid rgba(245,240,232,0.1)',
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.22em] mb-4"
                style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)' }}
              >
                Fale diretamente com os sócios
              </p>

              <div className="flex flex-col gap-3 mb-6">
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)' }}
                  >
                    Fabio
                  </p>
                  <p className="cta-phone-display">{companyData.phoneFormatted}</p>
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)' }}
                  >
                    Rocelio
                  </p>
                  <p className="cta-phone-display">{companyData.secondaryPhoneFormatted}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${companyData.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-base transition-colors active:scale-95"
                style={{
                  background: 'var(--color-ember)',
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-clay)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ember)'}
              >
                <MessageSquare className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                Pedir orçamento pelo WhatsApp
              </a>
            </div>

            <p
              className="text-xs leading-relaxed text-center"
              style={{ color: 'rgba(245,240,232,0.3)', fontFamily: 'var(--font-body)' }}
            >
              Atendemos toda a região do {companyData.city}. Orçamento gratuito e sem compromisso.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
