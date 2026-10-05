import SEO from '../components/common/SEO';
import LowCodeHero from '../components/lowcode/LowCodeHero';
import AboutLowCode from '../components/lowcode/AboutLowCode';
import LowCodeProject from '../components/lowcode/LowCodeProject';
import SecondaryLowCodeProject from '../components/lowcode/SecondaryLowCodeProject';

// Importar imágenes con las rutas CORRECTAS según tu estructura
import agoraImg from '../assets/images/lowcode/agora/AgoraPresence.png';
import auditoriasImg from '../assets/images/lowcode/auditorias/GestionAuditorias.png';
import supportImg from '../assets/images/lowcode/otros/SupportCenterPortada.png';
import tareasImg from '../assets/images/lowcode/otros/PulseTaskIntro.png';
import empleadosImg from '../assets/images/lowcode/otros/AltaEmpleados.png';

export default function LowCode() {
  return (
    <>
      <SEO
        title="Low Code & Automation"
        description="Soluciones de automatización empresarial con Microsoft Power Platform. Power Apps, Power Automate, Dataverse y SharePoint."
        keywords="Power Apps, Power Automate, Power Platform, Low Code, automatización, Dataverse, SharePoint, Microsoft 365, Agora Presence, auditorías"
      />
      <LowCodeHero />
      <AboutLowCode />

      {/* --- PROYECTOS PRINCIPALES --- */}
      <LowCodeProject
        title="Agora Presence"
        description="Aplicación integral para la gestión de presencia híbrida en la empresa. Permite a los empleados planificar sus días de oficina, solicitar cambios y gestionar espacios, mientras que los administradores pueden aprobar solicitudes y supervisar la ocupación."
        impact="Desplegado en producción y utilizado activamente por más de 20 usuarios"
        technologies={['Power Apps', 'Power Automate', 'SharePoint', 'Microsoft Teams']}
        features={[
          'Calendario mensual y semanal interactivo',
          'Solicitudes de cambio y gestión de puestos/espacios',
          'Roles de usuario y administrador con permisos granulares',
          'Flujos de aprobación y notificaciones automáticas',
          'Historial completo de asistencia y cambios',
        ]}
        image={agoraImg}
        demoUrl="#"
        demoLabel="Ver demostración en vídeo"
      />

      <LowCodeProject
        title="Gestión de Auditorías"
        description="Sistema completo para digitalizar y gestionar el ciclo de vida de las auditorías internas. Reemplaza procesos manuales y hojas de cálculo por una solución centralizada, garantizando la trazabilidad y el cumplimiento normativo."
        impact="Digitalización del 100% del ciclo de auditoría interna"
        technologies={['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'Microsoft 365']}
        features={[
          'Fases: Planificación, Ejecución, Informes/Cierre y Seguimiento',
          'Registro de hallazgos, evidencias, clasificación y severidad',
          'Generación automática de informes PDF y plantillas Word',
          'Planes de acción con responsables y fechas límite',
          'Recordatorios automáticos y actualización de estados',
          'Dashboards con KPIs semanales de cumplimiento',
        ]}
        image={auditoriasImg}
        demoUrl="#"
        demoLabel="Ver demostración en vídeo"
        reverse={true}
      />

      {/* --- PROYECTOS SECUNDARIOS --- */}
      <section className="py-20 bg-dark-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Otras Soluciones Implementadas
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Automatizaciones y aplicaciones adicionales desarrolladas para optimizar flujos de trabajo específicos.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            <SecondaryLowCodeProject
              title="Support Center"
              description="Sistema de tickets y gestión de incidencias internas que centraliza las solicitudes de soporte técnico. Automatiza la asignación de técnicos según el tipo de incidencia y permite el seguimiento del SLA en tiempo real."
              technologies={['Power Apps', 'Power Automate', 'SharePoint', 'Microsoft Teams']}
              image={supportImg}
              demoUrl="#"
            />

            <SecondaryLowCodeProject
              title="Gestor de Tareas"
              description="Tablero kanban personalizado para la gestión de tareas de equipos de trabajo. Permite visualizar el flujo de trabajo, asignar responsabilidades y recibir alertas automáticas cuando las tareas están próximas a vencer."
              technologies={['Power Apps', 'Power Automate', 'SharePoint']}
              image={tareasImg}
              demoUrl="#"
            />

            <SecondaryLowCodeProject
              title="Alta de Empleados"
              description="Flujo automatizado para el proceso de incorporación de nuevos empleados. Coordina múltiples departamentos (RRHH, IT, Administración) para garantizar que todos los accesos, herramientas y documentación estén listos antes del primer día."
              technologies={['Power Automate', 'Microsoft 365', 'SharePoint', 'Outlook']}
              image={empleadosImg}
              demoUrl="#"
            />
          </div>
          
          <p className="text-center text-dark-500 text-sm mt-16 max-w-2xl mx-auto">
            Nota: Estos proyectos fueron desarrollados en entornos corporativos. 
            El código fuente y los datos son propiedad de las empresas correspondientes, 
            por lo que se muestran descripciones funcionales, vídeos demostrativos y capturas de pantalla.
          </p>
        </div>
      </section>
    </>
  );
}