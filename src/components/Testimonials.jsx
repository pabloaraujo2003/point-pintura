import { motion } from 'framer-motion';
import { testimonials } from '../data/config';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Prova Social</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Depoimentos que reforçam <span className="text-primary-600">confiança e qualidade</span></h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A seção foi mantida com linguagem direta para passar segurança, acolhimento e resultado profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col h-full relative"
            >
              <div className="absolute top-6 right-8 opacity-10">
                <Quote className="w-12 h-12 text-primary-600" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed italic flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-600 text-lg uppercase tracking-tight">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
