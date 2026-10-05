import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function AboutSection() {
  const socialLinks = [
    {
      href: "https://github.com/kaigallardo",
      icon: <GithubIcon className="w-6 h-6" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/kai-gallardo-sánchez-b63a62440",
      icon: <LinkedinIcon className="w-6 h-6" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:kaigallardosanchez@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
    },
  ];

  const stats = [
    { label: "Proyectos", value: "10+" },
    { label: "Tecnologías", value: "15+" },
    { label: "Áreas", value: "4" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            {/* Columna izquierda: Texto */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
                About Me
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-dark-300 leading-relaxed">
                  Formado en <strong className="text-white">Instalaciones Eléctricas y Automáticas</strong> y{' '}
                  <strong className="text-white">Automatización y Robótica Industrial</strong>. 
                  Actualmente trabajo como programador junior, combinando desarrollo de software 
                  con automatización de procesos.
                </p>
                
                <p className="text-lg text-dark-300 leading-relaxed">
                  Me considero una persona analítica, organizada y resolutiva. Disfruto aprendiendo 
                  nuevas tecnologías y creando soluciones que resuelvan problemas reales.
                </p>
              </div>

              {/* Iconos sociales */}
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl text-dark-300 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon}
                    <div className="absolute inset-0 bg-primary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                  </a>
                ))}
              </div>
            </div>

            {/* Columna derecha: Stats */}
            <div className="grid grid-cols-3 gap-6 lg:ml-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative p-6 bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-2xl hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}