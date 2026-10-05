import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AreaCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  route: string;
  color: string;
}

export default function AreaCard({ title, description, icon, route, color }: AreaCardProps) {
  return (
    <a href={`#${route}`} target="_blank" rel="noopener noreferrer" className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="relative h-full"
      >
        {/* Borde animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm" />
        
        {/* Card */}
        <div className="relative h-full bg-dark-900/80 backdrop-blur-sm border border-dark-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 overflow-hidden">
          {/* Glow interno */}
          <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-10 blur-[60px] group-hover:opacity-20 transition-opacity duration-500`} />
          
          <div className="relative z-10">
            {/* Icono sin fondo, solo con color */}
            <div className="mb-6">
              <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity`}>
                {icon}
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            
            <p className="text-dark-400 mb-6 leading-relaxed">
              {description}
            </p>
            
            <div className="inline-flex items-center gap-2 text-primary-400 group-hover:text-primary-300 font-medium transition-colors">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
}