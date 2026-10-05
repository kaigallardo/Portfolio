import SEO from '../components/common/SEO';
import RoboticsHero from '../components/robotics/RoboticsHero';
import AboutRobotics from '../components/robotics/AboutRobotics';
import RoboticsProject from '../components/robotics/RoboticsProject';
import SecondaryRoboticsProject from '../components/robotics/SecondaryRoboticsProject';

// Importar imágenes (descomenta cuando las tengas)
// import tiaImg from '../assets/images/robotics/tiaportal/hero.png';
// import celdaImg from '../assets/images/robotics/celda3d/hero.png';
// import plcImg from '../assets/images/robotics/plchmi/hero.png';
// import rt3Img from '../assets/images/robotics/rt3/hero.png';
// import elecImg from '../assets/images/robotics/electronica/hero.png';

export default function Robotics() {
  return (
    <>
      <SEO
        title="Robotics & Electronics"
        description="Automatización industrial, robótica y electrónica. Proyectos con TIA Portal, PLC, HMI, Factory I/O, RT3 Toolbox y Arduino."
        keywords="TIA Portal, PLC, HMI, Factory I/O, RT3 Toolbox, Arduino, automatización industrial, robótica, electrónica, SCADA, neumática"
      />
      <RoboticsHero />
      <AboutRobotics />

      {/* Proyectos principales */}
      <RoboticsProject
        title="Automatización con TIA Portal + Factory I/O"
        description="Sistemas de selección y transporte automatizados mediante sensores, desarrollados en entorno de simulación industrial."
        technologies={['TIA Portal', 'Factory I/O', 'PLC', 'Sensores']}
        features={[
          'Sistemas de selección por sensores',
          'Transporte automatizado de piezas',
          'Lógica de control programada en PLC',
          'Simulación de procesos industriales reales',
        ]}
        // image={tiaImg}
        demoUrl="#"
        demoLabel="Ver demostración en vídeo"
      />

      <RoboticsProject
        title="Celda Automatizada 3D"
        description="Celda de producción completa con múltiples estaciones: selección, transporte, manipulación neumática y paletizado."
        technologies={['Factory I/O', 'TIA Portal', 'Neumática', 'PLC']}
        features={[
          'Selección de piezas mediante botón',
          'Cinta transportadora principal',
          'Brazo neumático con ventosa',
          'Segunda cinta de salida',
          'Sistema de paletizado automático',
        ]}
        // image={celdaImg}
        demoUrl="#"
        demoLabel="Ver demostración en vídeo"
        reverse={true}
      />

      <RoboticsProject
        title="PLC + PLC + HMI"
        description="Sistema de comunicación entre dos PLCs con interfaz HMI desarrollada desde cero, incluyendo clasificación por peso y control de calidad."
        technologies={['TIA Portal', 'PLC', 'HMI', 'Comunicación PLC-PLC']}
        features={[
          'Comunicación entre dos PLCs',
          'HMI desarrollada desde cero',
          'Contador de cajas correctas/incorrectas',
          'Clasificación por peso de la caja',
          'Start, Stop y Parada de Emergencia',
          'Pistón neumático para desviar piezas defectuosas',
        ]}
        // image={plcImg}
        demoUrl="#"
        demoLabel="Ver demostración en vídeo"
      />

      <RoboticsProject
        title="RT3 Toolbox - Brazo Robótico"
        description="Ejercicios realizados con un brazo robótico real RT3, programando movimientos, trayectorias y aplicaciones industriales."
        technologies={['RT3 Toolbox', 'Programación de brazos', 'Trayectorias', 'Paletizado']}
        features={[
          'Movimiento punto a punto',
          'Trayectorias programadas',
          'Movimientos relativos',
          'Ciclos de paletizado',
          'Trayectoria de soldadura simulada',
          'Trayectoria de corte láser simulada',
        ]}
        note="Las trayectorias de soldadura y corte láser fueron aplicaciones simuladas con el brazo robótico, no procesos reales de soldadura o corte."
        // image={rt3Img}
        demoUrl="#"
        demoLabel="Ver demostración en vídeo"
        reverse={true}
      />

      {/* Electrónica */}
      <section className="py-20 bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Electrónica con Arduino
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Proyectos básicos de electrónica y microcontroladores, aplicando sensores, actuadores y programación embebida.
            </p>
          </div>

          <SecondaryRoboticsProject
            title="Proyectos de Electrónica"
            description="Desarrollo de circuitos y programas con Arduino, integrando diversos sensores y actuadores para crear sistemas electrónicos funcionales."
            technologies={['Arduino', 'Sensor ultrasónico', 'Sensor infrarrojo', 'LCD', 'Sensor de humedad', 'Potenciómetro', 'Servomotores']}
            // image={elecImg}
            demoUrl="#"
          />
        </div>
      </section>
    </>
  );
}