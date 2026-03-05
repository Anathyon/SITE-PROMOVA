import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useWindowSize } from '../../hooks/useWindowSize';
import { contactInfo, contactServices } from '../../data/contact';

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  service: z.string().min(1, { message: 'Selecione um serviço de interesse' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' })
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      service: contactServices[0],
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setSubmitStatus('idle');
      // Simulate API call for form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Dados enviados:', data);
      
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar o formulário', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-dark relative overflow-hidden w-full flex flex-col items-center"
      style={{ 
        paddingTop: isMobile ? '4rem' : '8rem', 
        paddingBottom: isMobile ? '4rem' : '8rem' 
      }}
    >
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rainbow-gradient opacity-[0.015] rounded-full pointer-events-none animate-pulse"
        style={{ width: '800px', height: '800px', filter: 'blur(150px)' }}
      ></div>

      <div 
        className="max-w-[80%] w-full relative z-10 flex flex-col"
        style={{ 
          margin: '0 auto',
          paddingLeft: isMobile ? '1rem' : '1.5rem', 
          paddingRight: isMobile ? '1rem' : '1.5rem' 
        }}
      >
        <div 
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: isMobile ? '3rem' : '5rem' }}
        >
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black tracking-tighter uppercase leading-[0.95]"
              style={{ 
                fontSize: isMobile ? '2.5rem' : '3.75rem',
                marginBottom: '2rem' 
              }}
            >
              VAMOS <span className="rainbow-text">PROMOVER</span> <br />
              SEU NEGÓCIO?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 max-w-md font-medium"
              style={{ 
                fontSize: isMobile ? '0.875rem' : '1.125rem',
                marginBottom: '3rem' 
              }}
            >
              Estamos prontos para ouvir sua ideia e transformá-la em um projeto audiovisual de sucesso. 
              Entre em contato agora mesmo!
            </motion.p>

            <div className="flex flex-col" style={{ gap: '2rem' }}>
              {contactInfo.map((info, idx) => (
                <motion.div 
                  key={info.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center group cursor-pointer"
                  style={{ gap: '1.5rem' }}
                >
                  <div 
                    className="rounded-2xl glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700"
                    style={{ width: '3.5rem', height: '3.5rem' }}
                  >
                    <info.icon style={{ width: '1.25rem', height: '1.25rem' }} />
                  </div>
                  <div>
                    <p 
                      className="uppercase tracking-[0.3em] text-white/20 font-black"
                      style={{ fontSize: '9px', marginBottom: '0.375rem' }}
                    >
                      {info.label}
                    </p>
                    <p 
                      className="font-black uppercase tracking-tight"
                      style={{ fontSize: isMobile ? '1rem' : '1.125rem' }}
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
            className="glass rounded-[48px] border border-white/5 relative"
            style={{ padding: isMobile ? '2rem' : '3rem' }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" style={{ gap: '1.5rem' }}>
              <div 
                className={`grid grid-cols-1 ${!isMobile ? 'md:grid-cols-2' : ''}`}
                style={{ gap: '1.5rem' }}
              >
                <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                  <label 
                    className="uppercase tracking-[0.3em] text-white/20 font-black"
                    style={{ fontSize: '9px', marginLeft: '0.75rem' }}
                  >
                    Nome
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Seu nome completo"
                    className={`w-full bg-white/5 border rounded-2xl focus:outline-none transition-all font-bold uppercase tracking-widest text-[10px] ${
                      errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-white/20'
                    }`}
                    style={{ padding: '1rem 1.5rem' }}
                  />
                  {errors.name && (
                    <span 
                      className="text-red-400 text-xs font-medium"
                      style={{ marginLeft: '0.75rem', marginTop: '0.25rem' }}
                    >
                      {errors.name.message}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                  <label 
                    className="uppercase tracking-[0.3em] text-white/20 font-black"
                    style={{ fontSize: '9px', marginLeft: '0.75rem' }}
                  >
                    E-mail
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="seu@email.com"
                    className={`w-full bg-white/5 border rounded-2xl focus:outline-none transition-all font-bold uppercase tracking-widest text-[10px] ${
                      errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-white/20'
                    }`}
                    style={{ padding: '1rem 1.5rem' }}
                  />
                  {errors.email && (
                    <span 
                      className="text-red-400 text-xs font-medium"
                      style={{ marginLeft: '0.75rem', marginTop: '0.25rem' }}
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                <label 
                  className="uppercase tracking-[0.3em] text-white/20 font-black"
                  style={{ fontSize: '9px', marginLeft: '0.75rem' }}
                >
                  Serviço de Interesse
                </label>
                <select 
                  {...register('service')}
                  className={`w-full bg-white/5 border rounded-2xl focus:outline-none transition-all font-bold uppercase tracking-widest text-[10px] appearance-none ${
                    errors.service ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-white/20'
                  }`}
                  style={{
                    padding: '1rem 1.5rem',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1.5rem center',
                  }}
                >
                  {contactServices.map(service => (
                    <option key={service} value={service} className="bg-dark text-white">
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span 
                    className="text-red-400 text-xs font-medium"
                    style={{ marginLeft: '0.75rem', marginTop: '0.25rem' }}
                  >
                    {errors.service.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col" style={{ gap: '0.5rem' }}>
                <label 
                  className="uppercase tracking-[0.3em] text-white/20 font-black"
                  style={{ fontSize: '9px', marginLeft: '0.75rem' }}
                >
                  Mensagem
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Conte-nos um pouco sobre seu projeto..."
                  className={`w-full bg-white/5 border rounded-2xl focus:outline-none transition-all font-bold uppercase tracking-widest text-[10px] resize-none ${
                    errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-white/20'
                  }`}
                  style={{ padding: '1rem 1.5rem' }}
                ></textarea>
                {errors.message && (
                  <span 
                    className="text-red-400 text-xs font-medium"
                    style={{ marginLeft: '0.75rem', marginTop: '0.25rem' }}
                  >
                    {errors.message.message}
                  </span>
                )}
              </div>

              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl flex items-center font-bold text-xs"
                    style={{ padding: '1rem 1.5rem', gap: '0.75rem' }}
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl flex items-center font-bold text-xs"
                    style={{ padding: '1rem 1.5rem', gap: '0.75rem' }}
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-white text-black font-black uppercase tracking-[0.15em] text-xs flex items-center justify-center hover:bg-white/90 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem', gap: '0.75rem', marginTop: '0.5rem' }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
