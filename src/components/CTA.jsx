import { motion } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';
import { companyData } from '../data/config';

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl shadow-primary-500/30"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 leading-tight">
            Pronto para dar uma nova cor <br className="hidden md:block" /> ao seu ambiente?
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-2xl relative z-10 font-light leading-relaxed">
            Solicite seu orçamento gratuito hoje mesmo. Atendimento rápido em {companyData.city}.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            <a
              href={`https://wa.me/${companyData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-slate-100 px-10 py-5 rounded-2xl text-xl font-bold transition-all flex items-center gap-3 shadow-xl active:scale-95 group"
            >
              <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Solicitar no WhatsApp
            </a>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-200">Ou ligue agora</p>
                <p className="text-xl font-bold">{companyData.phoneFormatted}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
