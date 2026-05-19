import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { companyData } from '../data/config';

const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.25,
    },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 60, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
      strokeWidth="20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M80 15 C52 35, 44 75, 58 135"
      stroke="#F0A500"
      strokeWidth="7"
      strokeLinecap="round"
      opacity="0.55"
    />
    <ellipse cx="100" cy="413" rx="24" ry="9" fill="#E85D04" opacity="0.35" />
    <circle cx="148" cy="88" r="6" fill="#F0A500" opacity="0.3" />
    <circle cx="62" cy="210" r="4" fill="#E85D04" opacity="0.25" />
  </svg>
);

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
      className="hero-section texture-noise texture-noise-dark relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-20 md:pb-28"
    >
      <PaintStrokeSVG />

      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,93,4,0.14) 0%, transparent 70%)',
          transform: 'translate(35%, -35%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(240,165,0,0.06) 0%, transparent 70%)',
          transform: 'translateX(-40%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-8 md:mb-10"
        >
          <span
            className="inline-block w-8 h-px flex-shrink-0"
            style={{ background: 'var(--color-ember)' }}
          />
          <span
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-body)' }}
          >
            Pintura Profissional — Rio de Janeiro
          </span>
        </motion.div>

        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          aria-label="Transformamos ambientes com pintura de alto padrão"
          className="mb-8 md:mb-12 lg:mb-14"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontOpticalSizing: 'auto',
            fontSize: 'clamp(2.4rem, 8.5vw, 8rem)',
            lineHeight: '0.93',
            letterSpacing: '-0.03em',
            color: 'var(--color-cream)',
          }}
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.18em]"
              variants={wordItem}
              style={word.accent ? { color: 'var(--color-ember)' } : {}}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>

        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: 'easeOut' }}
            className="flex flex-col gap-5 max-w-lg"
          >
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(245,240,232,0.6)', fontFamily: 'var(--font-body)' }}
            >
              Serviços de pintura residencial, comercial e reformas com acabamento
              profissional em toda a região do{' '}
              <span style={{ color: 'var(--color-cream)', fontWeight: 500 }}>
                {companyData.city}
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${companyData.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-sm transition-colors active:scale-95"
                style={{
                  background: 'var(--color-ember)',
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-clay)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-ember)'}
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="flex items-center justify-center px-7 py-4 rounded-full font-bold text-sm transition-all"
                style={{
                  border: '1.5px solid rgba(245,240,232,0.22)',
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.5)';
                  e.currentTarget.style.background = 'rgba(245,240,232,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(245,240,232,0.22)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Ver Portfólio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: 'easeOut' }}
            className="flex flex-row flex-wrap gap-6 md:gap-10 lg:gap-12 lg:pb-1"
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

    </section>
  );
};

export default Hero;
