import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { companyData } from '../data/config';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589939705384-5185138a04b9?q=80&w=2000&auto=format&fit=crop"
          alt="Pintor profissional trabalhando"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-white tracking-wide uppercase">
              Referência em acabamentos finos
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Transforme seu espaço com a <span className="text-primary-400">Pintura Perfeita</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-light">
            Especialistas em pintura residencial, comercial e industrial.
            Entregamos confiança, pontualidade e um acabamento de alto padrão.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
              href={`https://wa.me/${companyData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-primary-600/30 flex items-center gap-2 hover:scale-105"
            >
              Solicitar Orçamento <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
            >
              Nossos Serviços
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 md:gap-16 grayscale opacity-60">
            {/* Mock logos or stats */}
            <div className="flex flex-col items-center">
              <span className="text-white text-3xl font-bold">10+</span>
              <span className="text-slate-300 text-xs uppercase tracking-widest font-semibold">Anos de XP</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-3xl font-bold">500+</span>
              <span className="text-slate-300 text-xs uppercase tracking-widest font-semibold">Projetos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-3xl font-bold">100%</span>
              <span className="text-slate-300 text-xs uppercase tracking-widest font-semibold">Garantia</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative brush stroke or gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;
