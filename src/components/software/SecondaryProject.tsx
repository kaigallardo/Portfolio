import { motion } from 'framer-motion';
import { ExternalLink, AlertCircle } from 'lucide-react';
import GithubIcon from '../common/GithubIcon';

interface SecondaryProjectProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: string;
  demoUrl?: string;
  demoLabel?: string; // <-- Nuevo prop
  githubUrl?: string;
  note?: string;
}

export default function SecondaryProject({
  title,
  description,
  technologies,
  features,
  image,
  demoUrl,
  demoLabel = "Demo", // <-- Valor por defecto
  githubUrl,
  note,
}: SecondaryProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300"
    >
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Imagen */}
        <div className="md:col-span-1">
          <div className="bg-dark-950 border border-dark-800 rounded-xl overflow-hidden aspect-video">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                <span className="text-dark-500 text-sm">Sin captura</span>
              </div>
            )}
          </div>
        </div>

        {/* Contenido */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-dark-300 mb-4">{description}</p>

          {note && (
            <div className="flex items-start gap-2 mb-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-200">{note}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-dark-800 border border-dark-700 rounded-full text-sm text-primary-400">
                {tech}
              </span>
            ))}
          </div>

          <ul className="space-y-1 mb-6">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-dark-400 text-sm">
                <div className="w-1 h-1 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 border border-dark-700 text-white text-sm rounded-lg transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                {demoLabel}
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 border border-dark-700 text-white text-sm rounded-lg transition-colors"
              >
                <GithubIcon className="w-3 h-3" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}