import SEO from '../components/common/SEO';
import SoftwareHero from '../components/software/SoftwareHero';
import AboutSoftware from '../components/software/AboutSoftware';
import ProjectShowcase from '../components/software/ProjectShowcase';
import SecondaryProject from '../components/software/SecondaryProject';

// Importar imágenes
import anikaiImg from '../assets/images/software/Anikai/AnikaiPortada.png';
import ecoImg from '../assets/images/software/Eco/Interfaz_Eco.png';
import airaImg from '../assets/images/software/AiraERP/AiraERPHome.png';
import hestiaImg from '../assets/images/software/Hestia/PresentacionHestia.jpg';
import fairyPawsImg from '../assets/images/software/FairyPaws/FairyPawsHome.png';

export default function Software() {
  return (
    <>
      <SEO
        title="Software Development"
        description="Proyectos de desarrollo de software con React, TypeScript, Python y más. Anikai, Eco, Aira ERP, Hestia y Fairy Paws."
        keywords="React, TypeScript, Python, FastAPI, Supabase, Vite, Tailwind CSS, Anikai, Eco, Aira ERP, Hestia, desarrollo web, desarrollo móvil"
      />
      <SoftwareHero />
      <AboutSoftware />

      {/* Proyectos principales */}
      <ProjectShowcase
        title="Anikai"
        description="Catálogo de anime completo con sistema de favoritos, listas personalizadas, comunidad y búsqueda avanzada. Uno de mis proyectos más completos en React."
        technologies={['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Framer Motion']}
        features={[
          'Catálogo de anime con filtros avanzados',
          'Sistema de favoritos y My List',
          'Estados de seguimiento de series',
          'Comunidad con valoraciones y reviews',
          'Recomendaciones personalizadas',
          'Perfil de usuario',
        ]}
        image={anikaiImg}
        demoUrl="https://anikai-one.vercel.app/"
        demoLabel="Ver Demo Online"
        githubUrl="https://github.com/kaigallardo/Anikai"
      />

      <ProjectShowcase
        title="Eco"
        description="Asistente de IA local para Windows que funciona sin depender de servidores externos. Integra reconocimiento de voz, visión por computadora y control del sistema."
        technologies={['Python', 'FastAPI', 'Whisper.cpp', 'Llama.cpp', 'MediaPipe', 'Tauri 2.0', 'React']}
        features={[
          'Funcionamiento 100% local',
          'Activación y reconocimiento por voz',
          'Detección facial y gestos de manos',
          'Control de volumen, brillo y sistema',
          'Memoria, notas y calendario',
        ]}
        image={ecoImg}
        demoUrl="https://drive.google.com/drive/folders/1Z0Fp-AfrL3OCVF5jZZO8GgE9hhgRCp8c?usp=sharing"
        demoLabel="Descargar Asistente"
        githubUrl="https://github.com/kaigallardo/Eco"
      />

      <ProjectShowcase
        title="Aira ERP"
        description="Sistema ERP completo desarrollado en Python con MySQL para gestión empresarial."
        technologies={['Python', 'MySQL', 'XAMPP']}
        features={[
          'Módulos de compras y ventas',
          'Gestión de almacén e inventario',
          'Facturación y cobros/pagos',
          'Gestión de proveedores y clientes',
          'Estadísticas e informes',
          'Sistema de usuarios',
        ]}
        image={airaImg}
        videoUrl="https://youtu.be/4DfSrDz9WaA"
        videoLabel="Ver demostración en vídeo"           
        demoUrl="https://drive.google.com/drive/folders/1zKBjgOIYhPYyousq4gOFPGMc1X-ZFsza?usp=sharing"
        demoLabel="Descargar Proyecto"
        githubUrl="https://github.com/kaigallardo/AiraERP"
        reverse={true}
      />

      {/* Proyectos secundarios */}
      <section className="py-20 bg-dark-900/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
            Otros Proyectos
          </h2>

          <div className="space-y-8 max-w-5xl mx-auto">
            <SecondaryProject
              title="Hestia"
              description="Aplicación móvil nativa Android para gestión de viviendas compartidas con datos en tiempo real."
              technologies={['React Native', 'Expo', 'Firebase', 'JavaScript']}
              features={[
                'Gestión de viviendas y miembros',
                'Inventario y lista de compra',
                'Recetas compartidas',
                'Datos en tiempo real con Firestore',
              ]}
              image={hestiaImg}
              demoUrl="https://drive.google.com/drive/folders/1p5DlsvNMkXo70ZF6yAFSW5q93E71XEjP?usp=sharing"
              demoLabel="Descargar APK"
              githubUrl="https://github.com/kaigallardo/Hestia"
            />

            <SecondaryProject
              title="Fairy Paws"
              description="Proyecto académico con sistema de registro, login y validación de contraseñas con interfaz temática."
              technologies={['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']}
              features={[
                'Registro y login de usuarios',
                'Validación de contraseñas',
                'Sistema de donación ficticio',
              ]}
              image={fairyPawsImg}
              note="Proyecto académico. Código fuente original no disponible actualmente."
            />
          </div>
        </div>
      </section>
    </>
  );
}