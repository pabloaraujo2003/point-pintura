import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { companyData } from '../data/config';
import paintingCrewImage from '../assets/painting-crew.svg';

const Hero = () => {
  return (
    <section id="home" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="hero-bg absolute inset-0 z-0">
        <img
          src={paintingCrewImage}
          alt="Pintor profissional trabalhando"
          className="hero-media w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-900/80 to-slate-900/58" />
      </div>

      <div className="hero-content container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-5 md:gap-7 max-w-4xl text-left"
        >
          <div className="hero-chip flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-white tracking-wide uppercase">
              Portfólio digital de pintura e reformas
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Ambientes renovados com <span className="text-primary-300">qualidade, confiança e acabamento profissional</span>
          </h1>

          <p className="text-base md:text-2xl text-slate-200 max-w-2xl leading-relaxed">
            A Point da Pintura apresenta um portfólio acolhedor e profissional para mostrar serviços de pintura residencial,
            pintura comercial e reformas no Rio de Janeiro.
          </p>

          <div className="hero-pill-grid grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-100">
            <div className="hero-pill flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 text-primary-300" />
              Pintura residencial
            </div>
            <div className="hero-pill flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 text-primary-300" />
              Pintura comercial
            </div>
            <div className="hero-pill flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 text-primary-300" />
              Reformas e acabamentos
            </div>
          </div>

          <div className="hero-actions flex flex-col sm:flex-row items-center gap-3 md:gap-4 mt-2 md:mt-4">
            <a
              href={`https://wa.me/${companyData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-primary bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold transition-all shadow-xl shadow-primary-700/30 flex items-center gap-2 hover:scale-105"
            >
              Solicitar Orçamento <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="hero-btn hero-btn-secondary bg-white hover:bg-primary-50 text-slate-900 px-8 py-4 rounded-full text-base md:text-lg font-bold transition-all hover:scale-105"
            >
              Ver Portfólio
            </a>
          </div>

        </motion.div>
      </div>

      <div className="hero-bottom-fade absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;
