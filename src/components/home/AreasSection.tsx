import { motion } from 'framer-motion';
import AreaCard from './AreaCard';
import { Code2, Workflow, Cpu, Camera } from 'lucide-react';

export default function AreasSection() {
  const areas = [
    {
      title: 'Software Development',
      description: 'Desarrollo de aplicaciones web y móviles con React, TypeScript y Python. Proyectos desde catálogos de anime hasta asistentes de IA locales.',
      icon: <Code2 className="w-6 h-6 text-white" />,
      route: '/software',
      color: 'bg-primary-600',
    },
    {
      title: 'Low Code & Automation',
      description: 'Automatización de procesos empresariales con Power Platform. Soluciones en Power Apps y Power Automate para optimizar flujos de trabajo.',
      icon: <Workflow className="w-6 h-6 text-white" />,
      route: '/low-code',
      color: 'bg-blue-600',
    },
    {
      title: 'Robotics & Electronics',
      description: 'Automatización industrial con PLC, HMI y TIA Portal. Proyectos de robótica, electrónica con Arduino y sistemas de control.',
      icon: <Cpu className="w-6 h-6 text-white" />,
      route: '/robotics',
      color: 'bg-emerald-600',
    },
    {
      title: 'Modeling',
      description: 'Exploración del mundo del modelaje. Desarrollo de portfolio fotográfico y sesiones creativas.',
      icon: <Camera className="w-6 h-6 text-white" />,
      route: '/modeling',
      color: 'bg-pink-600',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Grid de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
            Áreas Profesionales
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Explora mis diferentes especialidades y proyectos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AreaCard {...area} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}