import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { companyData, whatsappLink } from '../data/config';
import openContactModal from '../lib/openContactModal';

const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.2,
    },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 64, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const PaintStrokeSVG = () => (
  <svg
    className="hero-brush-mark"
    viewBox="0 0 200 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M100 15 C58 48, 28 92, 42 155 C56 218, 96 240, 98 300 C100 360, 78 385, 100 408"
      stroke="#E85D04"
      strokeWidth="22"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M80 15 C52 35, 44 75, 58 135"
      stroke="#F0A500"
      strokeWidth="8"
      strokeLinecap="round"
      opacity="0.5"
    />
    <ellipse cx="100" cy="413" rx="28" ry="10" fill="#E85D04" opacity="0.3" />
    <circle cx="148" cy="88" r="7" fill="#F0A500" opacity="0.35" />
    <circle cx="62" cy="210" r="5" fill="#E85D04" opacity="0.28" />
    <circle cx="130" cy="310" r="3.5" fill="#F0A500" opacity="0.2" />
  </svg>
);

const HeroTicker = () => {
  const items = [
    'Pintura Residencial',
    'Pintura Comercial',
    'Reformas e Acabamentos',
    'Rio de Janeiro',
    '20 Anos de Mercado',
    '500+ Projetos Entregues',
    'Atendimento Profissional',
    'Orçamento Sem Compromisso',
  ];

  const repeated = [...items, ...items];

  return (
    <div className="hero-ticker" aria-hidden="true">
      <div className="hero-ticker-track">
        {repeated.map((item, i) => (
          <span key={i} className="hero-ticker-item">
            {item}
            <span className="hero-ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
};

const stats = [
  { number: '20+', label: 'Anos de mercado' },
  { number: '500+', label: 'Projetos entregues' },
  { number: '100%', label: 'Comprometimento' },
];

const headingWords = [
  { text: 'Transformamos', accent: false },
  { text: 'ambientes', accent: false },
  { text: 'com', accent: false },
  { text: 'pintura', accent: true },
  { text: 'de', accent: false },
  { text: 'alto', accent: false },
  { text: 'padrão', accent: false },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section texture-noise texture-noise-dark relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-20"
    >
      <PaintStrokeSVG />

      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,93,4,0.12) 0%, transparent 70%)',
          transform: 'translate(30%, -35%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-32 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(240,165,0,0.055) 0%, transparent 70%)',
          transform: 'translateX(-40%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <span
            className="inline-block w-8 h-px flex-shrink-0"
            style={{ background: 'var(--color-ember)' }}
          />
          <span
            className="text-xs font-bold uppercase tracking-[0.24em]"
            style={{ color: 'rgba(245,240,232,0.45)', fontFamily: 'var(--font-body)' }}
          >
            Pintura Profissional — {companyData.city}
          </span>
        </motion.div>

        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          aria-label="Transformamos ambientes com pintura de alto padrão"
          className="mb-10 md:mb-14"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontOpticalSizing: 'auto',
            fontSize: 'clamp(2.6rem, 9vw, 8.5rem)',
            lineHeight: '0.91',
            letterSpacing: '-0.035em',
            color: 'var(--color-cream)',
          }}
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.16em]"
              variants={wordItem}
              style={word.accent ? { color: 'var(--color-ember)' } : {}}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>

        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.9, ease: 'easeOut' }}
            className="flex flex-col gap-6 max-w-lg"
          >
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-body)' }}
            >
              Serviços de pintura residencial, comercial e reformas com acabamento
              profissional em toda a região do{' '}
              <span style={{ color: 'var(--color-cream)', fontWeight: 600 }}>
                {companyData.city}
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm transition-all active:scale-95"
                style={{
                  background: 'var(--color-ember)',
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.02em',
                  boxShadow: '0 4px 20px rgba(232,93,4,0.35)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--color-clay)';
                  e.currentTarget.style.boxShadow = '0 6px 28px rgba(232,93,4,0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--color-ember)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(232,93,4,0.35)';
                }}
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="flex items-center justify-center px-7 py-4 rounded-full font-bold text-sm transition-all"
                style={{
                  border: '1.5px solid rgba(245,240,232,0.2)',
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.45)';
                  e.currentTarget.style.background = 'rgba(245,240,232,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.2)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Ver Portfólio
              </a>
            </div>

            <button
              onClick={openContactModal}
              className="flex items-center gap-2 w-fit text-sm transition-colors"
              style={{
                color: 'rgba(245,240,232,0.4)',
                fontFamily: 'var(--font-body)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(245,240,232,0.75)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.4)'}
            >
              <Mail className="w-3.5 h-3.5" />
              Prefere e-mail? Solicite por aqui
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.1, ease: 'easeOut' }}
            className="flex flex-row flex-wrap gap-8 md:gap-14 lg:gap-16 lg:pb-2"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-item">
                <span className="hero-stat-number">{stat.number}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <HeroTicker />
    </section>
  );
};

export default Hero;
