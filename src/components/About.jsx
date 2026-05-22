import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Brush, Mail } from 'lucide-react';
import { companyData, whatsappLink } from '../data/config';
import openContactModal from '../lib/openContactModal';
import aboutImage from '../assets/loja-comercial.png';

const About = () => {
  const highlights = [
    { icon: Brush, text: 'Acabamento Profissional', sub: 'Execução cuidadosa para valorizar cada ambiente.' },
    { icon: Clock, text: 'Compromisso com Prazo', sub: 'Organização real do início ao fim do serviço.' },
    { icon: ShieldCheck, text: 'Confiança no Atendimento', sub: 'Transparência no orçamento e respeito com seu espaço.' },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-28 overflow-hidden relative"
      style={{ background: 'var(--color-ink)' }}
    >
      {/* Decorative rotated text in the background */}
      <div className="about-bg-text" aria-hidden="true">
        ARTE
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative pb-8"
          >
            <div className="about-image-frame rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Loja comercial pintada pela Point da Pintura"
                className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
            </div>

            <div className="experience-stamp">
              <span className="experience-stamp-number">20+</span>
              <span className="experience-stamp-label">Anos de Mercado</span>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
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
                Sobre a Empresa
              </span>
            </div>

            <h2
              className="font-bold mb-5 md:mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-cream)',
                fontSize: 'clamp(1.9rem, 5vw, 3.5rem)',
                lineHeight: '1.08',
              }}
            >
              Pintura e reformas com{' '}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  color: 'var(--color-ember)',
                }}
              >
                cuidado, técnica e presença profissional.
              </span>
            </h2>

            <p
              className="text-base md:text-lg mb-9 leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-body)' }}
            >
              Sob a liderança dos sócios{' '}
              <span style={{ color: 'var(--color-cream)', fontWeight: 600 }}>
                {companyData.ownersLabel}
              </span>
              , a {companyData.name} atua com pintura residencial, pintura comercial e reformas,
              sempre com linguagem clara, acabamento bem executado e atendimento próximo.
              Nosso objetivo é transmitir segurança desde o primeiro contato até a entrega final.
            </p>

            <div className="flex flex-col gap-5 md:gap-6 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{
                      background: 'rgba(232,93,4,0.1)',
                      border: '1px solid rgba(232,93,4,0.2)',
                    }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: 'var(--color-ember)' }} />
                  </div>
                  <div>
                    <h4
                      className="font-bold mb-0.5"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
                    >
                      {item.text}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(245,240,232,0.45)', fontFamily: 'var(--font-body)' }}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold transition-all text-sm active:scale-95"
                style={{
                  border: '1.5px solid rgba(245,240,232,0.22)',
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-body)',
                  background: 'transparent',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(245,240,232,0.07)';
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.22)';
                }}
              >
                Falar com {companyData.ownersLabel}
              </a>

              <button
                onClick={openContactModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-semibold text-sm transition-all active:scale-95"
                style={{
                  background: 'rgba(232,93,4,0.1)',
                  border: '1.5px solid rgba(232,93,4,0.25)',
                  color: 'var(--color-ember)',
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(232,93,4,0.18)';
                  e.currentTarget.style.borderColor = 'rgba(232,93,4,0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(232,93,4,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(232,93,4,0.25)';
                }}
              >
                <Mail className="w-4 h-4" />
                Orçamento por e-mail
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
