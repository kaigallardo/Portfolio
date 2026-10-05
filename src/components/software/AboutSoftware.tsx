import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import GithubIcon from '../common/GithubIcon';
import LinkedinIcon from '../common/LinkedinIcon';

export default function AboutSoftware() {
  const socialLinks = [
    {
      href: "https://github.com/kaigallardo",
      icon: <GithubIcon className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/kai-gallardo-sánchez-b63a62440",
      icon: <LinkedinIcon className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:kaigallardosanchez@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
    },
  ];

  const techStack = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"] },
    { category: "Backend", items: ["Python", "FastAPI", "Supabase", "Firebase"] },
    { category: "Mobile", items: ["React Native", "Expo"] },
    { category: "Otros", items: ["Git", "Jira", "MySQL", "Vercel"] },
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
                Sobre mí
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-dark-300 leading-relaxed">
                  Soy <strong className="text-white">Kai Gallardo Sánchez</strong>, desarrollador con formación en{' '}
                  <strong className="text-white">Automatización y Robótica Industrial</strong>. 
                  Actualmente trabajo como programador junior, combinando desarrollo de software 
                  con automatización de procesos.
                </p>
                
                <p className="text-lg text-dark-300 leading-relaxed">
                  Me especializo en desarrollo web con React y TypeScript, pero también trabajo 
                  con Python para backend y automatización. Disfruto creando soluciones completas, 
                  desde la interfaz hasta la lógica de negocio.
                </p>

                <p className="text-lg text-dark-300 leading-relaxed">
                  Soy una persona analítica, organizada y resolutiva. Me adapto rápidamente a 
                  nuevas tecnologías y siempre busco mejorar mis habilidades.
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

            {/* Columna derecha: Tech Stack */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Tech Stack</h3>
              <div className="space-y-6">
                {techStack.map((stack, index) => (
                  <motion.div
                    key={stack.category}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
                  >
                    <h4 className="text-primary-400 font-semibold mb-3">{stack.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-800 border border-dark-700 rounded-full text-sm text-dark-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}