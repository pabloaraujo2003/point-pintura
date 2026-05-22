import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { companyData, whatsappLink } from '../data/config';

const SERVICE_TYPES = [
  'Pintura Residencial',
  'Pintura Comercial',
  'Reformas e Acabamentos',
  'Outro',
];

const INITIAL = { name: '', phone: '', serviceType: '', message: '' };

const inputStyle = {
  width: '100%',
  background: 'rgba(245,240,232,0.05)',
  border: '1px solid rgba(245,240,232,0.12)',
  borderRadius: '0.75rem',
  padding: '0.85rem 1rem',
  color: 'var(--color-cream)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

const Field = ({ label, required, children }) => (
  <div className="flex flex-col gap-1.5">
    <label
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        color: 'rgba(245,240,232,0.5)',
      }}
    >
      {label}{required && <span style={{ color: 'var(--color-ember)', marginLeft: '0.2rem' }}>*</span>}
    </label>
    {children}
  </div>
);

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const firstInputRef = useRef(null);

  /* ── Fecha com Escape ─────────────────────────────────────── */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  /* ── Bloqueia scroll do body ──────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* ── Foca no primeiro input ao abrir ──────────────────────── */
  useEffect(() => {
    if (isOpen) setTimeout(() => firstInputRef.current?.focus(), 150);
    else { setForm(INITIAL); setStatus('idle'); }
  }, [isOpen]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFocus = (e) => (e.target.style.borderColor = 'var(--color-ember)');
  const handleBlur  = (e) => (e.target.style.borderColor = 'rgba(245,240,232,0.12)');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_phone:   form.phone || 'Não informado',
          service_type: form.serviceType || 'Não informado',
          message:      form.message || 'Sem descrição adicional.',
          to_name:      companyData.ownersLabel,
          to_email:     companyData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(10,9,6,0.88)', backdropFilter: 'blur(10px)' }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          aria-modal="true"
          role="dialog"
          aria-label="Formulário de orçamento"
        >
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              background: '#18160f',
              border: '1px solid rgba(245,240,232,0.1)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-start justify-between p-6 pb-5"
              style={{ borderBottom: '1px solid rgba(245,240,232,0.07)' }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="inline-block w-5 h-px"
                    style={{ background: 'var(--color-ember)' }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.22em',
                      color: 'var(--color-ember)',
                    }}
                  >
                    Orçamento por E-mail
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-cream)',
                  }}
                >
                  Solicite seu orçamento
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'rgba(245,240,232,0.4)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(245,240,232,0.07)';
                  e.currentTarget.style.color = 'var(--color-cream)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(245,240,232,0.4)';
                }}
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* ── SUCCESS ──────────────────────────────────── */}
              {status === 'success' && (
                <div className="flex flex-col items-center text-center py-8 gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)' }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: '#22c55e' }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cream)' }}
                    >
                      Pedido enviado!
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(245,240,232,0.55)', fontFamily: 'var(--font-body)' }}
                    >
                      {companyData.ownersLabel} receberão seu pedido e entrarão em contato em breve.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-2 px-6 py-3 rounded-full font-bold text-sm"
                    style={{
                      background: 'var(--color-ember)',
                      color: 'var(--color-cream)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Fechar
                  </button>
                </div>
              )}

              {/* ── FORM ─────────────────────────────────────── */}
              {status !== 'success' && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <Field label="Nome completo" required>
                    <input
                      ref={firstInputRef}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="Seu nome"
                      required
                      style={inputStyle}
                    />
                  </Field>

                  <Field label="Telefone">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="(21) 99999-9999"
                      style={inputStyle}
                    />
                  </Field>

                  <Field label="Tipo de serviço">
                    <select
                      name="serviceType"
                      value={form.serviceType}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={{
                        ...inputStyle,
                        color: form.serviceType ? 'var(--color-cream)' : 'rgba(245,240,232,0.3)',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="" disabled style={{ background: '#18160f' }}>
                        Selecione o serviço
                      </option>
                      {SERVICE_TYPES.map((s) => (
                        <option key={s} value={s} style={{ background: '#18160f', color: 'var(--color-cream)' }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Descrição do serviço">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="Descreva o ambiente, tamanho aproximado, preferências de cor..."
                      rows={4}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    />
                  </Field>

                  {/* Error message */}
                  {status === 'error' && (
                    <div
                      className="flex items-center gap-2.5 rounded-xl p-3.5"
                      style={{
                        background: 'rgba(239,68,68,0.08)',
                        border: '1px solid rgba(239,68,68,0.2)',
                      }}
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#ef4444' }} />
                      <p className="text-sm" style={{ color: 'rgba(245,240,232,0.7)', fontFamily: 'var(--font-body)' }}>
                        Erro ao enviar. Tente pelo{' '}
                        <a
                          href={whatsappLink()}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: 'var(--color-ember)', textDecoration: 'underline' }}
                        >
                          WhatsApp
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading' || !form.name.trim()}
                    className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-sm mt-1 transition-all active:scale-95"
                    style={{
                      background: status === 'loading' || !form.name.trim()
                        ? 'rgba(232,93,4,0.5)'
                        : 'var(--color-ember)',
                      color: 'var(--color-cream)',
                      fontFamily: 'var(--font-body)',
                      cursor: status === 'loading' || !form.name.trim() ? 'not-allowed' : 'pointer',
                      boxShadow: form.name.trim() ? '0 4px 20px rgba(232,93,4,0.3)' : 'none',
                    }}
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Enviar pedido de orçamento</>
                    )}
                  </button>

                  <p
                    className="text-xs text-center"
                    style={{ color: 'rgba(245,240,232,0.3)', fontFamily: 'var(--font-body)' }}
                  >
                    Responderemos pelo e-mail ou telefone informado.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
