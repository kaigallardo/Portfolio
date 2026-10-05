import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface RoboticsProjectProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  note?: string;
  image?: string;
  demoUrl?: string;
  demoLabel?: string;
  reverse?: boolean;
}

export default function RoboticsProject({
  title,
  description,
  technologies,
  features,
  note,
  image,
  demoUrl,
  demoLabel = "Ver demostración",
  reverse = false,
}: RoboticsProjectProps) {
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
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
            style={reverse ? { direction: 'ltr' } : {}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden aspect-video">
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                  <span className="text-dark-500 text-lg">Captura del proyecto</span>
                </div>
              )}
            </div>
          </motion.div>

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
              className="text-dark-300 mb-4 leading-relaxed"
            >
              {description}
            </motion.p>

            {note && (
              <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <p className="text-sm text-emerald-200">{note}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-dark-800 border border-dark-700 rounded-full text-sm text-emerald-400">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-2 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-dark-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                {demoLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}