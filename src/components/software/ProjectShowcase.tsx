import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react'; // <-- Añadido 'Play' aquí
import GithubIcon from '../common/GithubIcon';

interface ProjectShowcaseProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: string;
  demoUrl?: string;
  demoLabel?: string;
  videoUrl?: string;       // <-- Nueva prop para el vídeo
  videoLabel?: string;     // <-- Nueva prop para el texto del botón de vídeo
  githubUrl?: string;
  reverse?: boolean;
}

export default function ProjectShowcase({
  title,
  description,
  technologies,
  features,
  image,
  demoUrl,
  demoLabel = "Demo",
  videoUrl,
  videoLabel = "Ver Vídeo",
  githubUrl,
  reverse = false,
}: ProjectShowcaseProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      <div className="container-custom">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-cols-2' : ''}`}
             style={reverse ? { direction: 'rtl' } : {}}>
          
          {/* Imagen / Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
            style={reverse ? { direction: 'ltr' } : {}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden aspect-video">
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                  <span className="text-dark-500 text-lg">Sin captura disponible</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Contenido */}
          <div style={reverse ? { direction: 'ltr' } : {}}>
            <motion.h2
              initial={{ opacity: 0, x: reverse ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-dark-300 mb-6 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-dark-800 border border-dark-700 rounded-full text-sm text-primary-400">
                  {tech}
                </span>
              ))}
            </div>

            {/* Características */}
            <ul className="space-y-2 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-dark-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Botones (Ahora soporta hasta 3) */}
            <div className="flex flex-wrap gap-4">
              {videoUrl && (
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-current" />
                  {videoLabel}
                </a>
              )}
              
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  {demoLabel}
                </a>
              )}
              
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-primary-500/50 text-white font-medium rounded-lg transition-all duration-300"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}