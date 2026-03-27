import { MessageSquare } from 'lucide-react';
import { companyData } from '../data/config';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/${companyData.phone}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#25D366]/40 transition-shadow group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute right-full mr-3 bg-white text-slate-900 px-4 py-2 rounded-xl font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Olá! Como posso ajudar?
      </div>
      <MessageSquare className="w-8 h-8 fill-white" />
    </motion.a>
  );
};

export default WhatsAppButton;
