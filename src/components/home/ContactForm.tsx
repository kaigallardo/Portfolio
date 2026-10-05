import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const FORMSPREE_URL = "https://formspree.io/f/mvkzopyw";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-20 relative overflow-hidden scroll-mt-24">
      {/* Glow de fondo */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
              Contacto
            </h2>
            <p className="text-dark-400 text-lg">
              ¿Tienes un proyecto en mente o quieres hablar sobre alguna de mis áreas? Envíame un mensaje.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-dark-950 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-dark-950 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-dark-950 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                placeholder="Cuéntame sobre tu proyecto o consulta..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:scale-105"
            >
              {status === 'submitting' ? (
                'Enviando...'
              ) : status === 'success' ? (
                '¡Mensaje enviado!'
              ) : (
                <>
                  Enviar mensaje
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">Hubo un error al enviar. Por favor, inténtalo de nuevo o usa mi email directo.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}