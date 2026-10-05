import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface SecondaryLowCodeProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
}

export default function SecondaryLowCodeProject({
  title,
  description,
  technologies,
  image,
  demoUrl,
}: SecondaryLowCodeProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-xl overflow-hidden flex flex-col md:flex-row hover:border-blue-500/30 transition-all duration-300 group"
    >
      {/* Área de Captura/Imagen */}
      <div className="md:w-2/5 bg-dark-950 aspect-video md:aspect-auto flex items-center justify-center relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-dark-500">
            <div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center">
              <Play className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Sin captura disponible</span>
          </div>
        )}
      </div>

      {/* Área de Contenido */}
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-dark-400 text-sm md:text-base mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-dark-800 border border-dark-700 rounded text-xs text-blue-400">
              {tech}
            </span>
          ))}
        </div>

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors w-fit"
          >
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Play className="w-3 h-3 fill-current" />
            </div>
            Ver vídeo
          </a>
        )}
      </div>
    </motion.div>
  );
}