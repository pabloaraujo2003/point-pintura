import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import { companyData, whatsappLink } from '../data/config';
import openContactModal from '../lib/openContactModal';

const CTA = () => {
  return (
    <section className="cta-ember-section texture-noise py-20 md:py-32">
      {/* Decorative radial glows */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(240,165,0,0.1) 0%, transparent 65%)',
          transform: 'translate(25%, -25%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(15,14,10,0.35) 0%, transparent 65%)',
          transform: 'translate(-30%, 30%)',
        }}
        aria-hidden="true"
      />

      {/* Background large text decoration */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(8rem, 22vw, 22rem)',
            fontWeight: 900,
            color: 'rgba(245,240,232,0.03)',
            letterSpacing: '-0.05em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          PINTURA
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 md:gap-14 lg:gap-20">
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
                style={{ background: 'rgba(245,240,232,0.6)' }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.24em]"
                style={{ color: 'rgba(245,240,232,0.65)', fontFamily: 'var(--font-body)' }}
              >
                Solicite seu Orçamento
              </span>
            </div>

            <h2
              className="font-bold leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: '0.95',
                color: 'var(--color-cream)',
              }}
            >
              Cuide do seu ambiente com quem entende do serviço.
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.7)', fontFamily: 'var(--font-body)' }}
            >
              Atendimento direto pelo WhatsApp para tirar dúvidas, alinhar o
              escopo e montar um orçamento profissional em {companyData.city}.
              Sem enrolação, com prazo real.
            </p>

            <div
              className="flex items-center gap-3 mt-8"
              style={{
                borderTop: '1px solid rgba(245,240,232,0.15)',
                paddingTop: '1.5rem',
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(245,240,232,0.15)' }}
              >
                <Phone className="w-4 h-4" style={{ color: 'var(--color-cream)' }} />
              </div>
              <p
                className="text-sm"
                style={{ color: 'rgba(245,240,232,0.6)', fontFamily: 'var(--font-body)' }}
              >
                Resposta rápida · Orçamento gratuito e sem compromisso
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="cta-contact-card">
              <p
                className="text-xs font-bold uppercase tracking-[0.24em] mb-5"
                style={{ color: 'rgba(245,240,232,0.45)', fontFamily: 'var(--font-body)' }}
              >
                Fale diretamente com os sócios
              </p>

              <div className="flex flex-col gap-4 mb-7">
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-0.5"
                    style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)' }}
                  >
                    Fabio
                  </p>
                  <p className="cta-phone-display">{companyData.phoneFormatted}</p>
                </div>
                <div
                  style={{ borderTop: '1px solid rgba(245,240,232,0.1)', paddingTop: '1rem' }}
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-0.5"
                    style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)' }}
                  >
                    Rocelio
                  </p>
                  <p className="cta-phone-display">{companyData.secondaryPhoneFormatted}</p>
                </div>
              </div>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-dark"
              >
                <MessageSquare className="w-5 h-5 flex-shrink-0" />
                Pedir orçamento pelo WhatsApp
              </a>

              <button
                onClick={openContactModal}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: 'transparent',
                  border: '1.5px solid rgba(245,240,232,0.25)',
                  color: 'rgba(245,240,232,0.8)',
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.5)';
                  e.currentTarget.style.background = 'rgba(245,240,232,0.07)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.25)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                Solicitar orçamento por e-mail
              </button>
            </div>

            <p
              className="text-xs text-center mt-4"
              style={{ color: 'rgba(245,240,232,0.35)', fontFamily: 'var(--font-body)' }}
            >
              Atendemos toda a região do {companyData.city}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
