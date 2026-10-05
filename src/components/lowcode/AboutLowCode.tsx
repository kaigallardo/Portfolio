import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import GithubIcon from '../common/GithubIcon';
import LinkedinIcon from '../common/LinkedinIcon';

export default function AboutLowCode() {
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

  const tools = [
    { 
      category: "Power Platform", 
      items: ["Power Apps", "Power Automate", "Power BI"] 
    },
    { 
      category: "Datos y Almacenamiento", 
      items: ["Dataverse", "SharePoint", "Microsoft Lists"] 
    },
    { 
      category: "Integraciones", 
      items: ["Microsoft Teams", "Microsoft 365", "Outlook", "APIs REST"] 
    },
    { 
      category: "Conceptos Clave", 
      items: ["Automatización de procesos", "Flujos de aprobación", "RBAC", "KPIs"] 
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />

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
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Sobre mí
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-dark-300 leading-relaxed">
                  Soy <strong className="text-white">Kai Gallardo Sánchez</strong>, y mi enfoque en Low Code & Automation 
                  nace de mi formación en <strong className="text-white">Automatización y Robótica Industrial</strong>. 
                  Esta base me permite entender los procesos empresariales desde una perspectiva técnica y de eficiencia.
                </p>
                
                <p className="text-lg text-dark-300 leading-relaxed">
                  Me especializo en desarrollar soluciones con <strong className="text-white">Microsoft Power Platform </strong> 
                   que digitalizan flujos de trabajo, eliminan tareas repetitivas y mejoran la productividad de los equipos. 
                  Trabajo estrechamente con los usuarios finales para crear aplicaciones intuitivas y adoptables.
                </p>

                <p className="text-lg text-dark-300 leading-relaxed">
                  He desarrollado aplicaciones desplegadas en producción en entornos corporativos, 
                  gestionando roles, permisos, aprobaciones e integraciones con el ecosistema Microsoft 365.
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
                    className="group relative p-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl text-dark-300 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                  </a>
                ))}
              </div>
            </div>

            {/* Columna derecha: Herramientas */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Herramientas y Tecnologías</h3>
              <div className="space-y-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.category}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <h4 className="text-blue-400 font-semibold mb-3">{tool.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {tool.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-dark-800 border border-dark-700 rounded-full text-sm text-dark-300"
                        >
                          {item}
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