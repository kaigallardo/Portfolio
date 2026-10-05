import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Grid animado de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Nombre con gradiente animado */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent"
          >
            Kai Gallardo Sánchez
          </motion.h1>
          
          {/* Áreas profesionales */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-dark-400 mb-8 font-light"
          >
            Software Development · Low Code & Automation · Robotics & Electronics · Modeling
          </motion.p>
          
          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-dark-300 max-w-3xl mx-auto leading-relaxed"
          >
            Desarrollador con formación en automatización y robótica industrial. 
            Creo soluciones digitales, automatizo procesos y exploro diferentes 
            áreas tecnológicas y creativas.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}