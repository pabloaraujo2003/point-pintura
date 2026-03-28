import { motion } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';
import { companyData } from '../data/config';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-7 sm:p-9 md:p-20 text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl shadow-slate-900/30"
        >
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary-500/20 rounded-full blur-3xl -mr-24 md:-mr-32 -mt-24 md:-mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl -ml-24 md:-ml-32 -mb-24 md:-mb-32" />

          <h2 className="text-3xl md:text-6xl font-bold mb-5 md:mb-8 relative z-10 leading-tight">
            Solicite seu orçamento com uma equipe <br className="hidden md:block" /> que cuida do seu ambiente
          </h2>
          <p className="text-base md:text-2xl text-slate-300 mb-8 md:mb-12 max-w-2xl relative z-10 leading-relaxed">
            Atendimento direto pelo WhatsApp ou telefone para tirar dúvidas, alinhar o serviço e montar um orçamento profissional em {companyData.city}.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative z-10 w-full sm:w-auto">
            <a
              href={`https://wa.me/${companyData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 text-white hover:bg-primary-400 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 group w-full sm:w-auto"
            >
              <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Pedir orçamento
            </a>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-white/90 w-full sm:w-auto rounded-2xl sm:rounded-none bg-white/5 sm:bg-transparent px-4 py-3 sm:p-0 border border-white/10 sm:border-0">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-200">Ou fale direto</p>
                <p className="text-base md:text-lg font-bold">Fabio: {companyData.phoneFormatted}</p>
                <p className="text-base md:text-lg font-bold">Rocelio: {companyData.secondaryPhoneFormatted}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
