import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import AreasSection from '../components/home/AreasSection';
import ContactForm from '../components/home/ContactForm';

export default function Home() {
  return (
    <>
      <SEO
        title="Portfolio Profesional"
        description="Kai Gallardo Sánchez - Desarrollador con formación en automatización y robótica industrial. Especializado en Software Development, Low Code & Automation, Robotics & Electronics y Modeling."
        keywords="Kai Gallardo, portfolio, desarrollador, automatización, robótica, software, low code, power platform, react, python"
      />
      <Hero />
      <AboutSection />
      <AreasSection />
      <ContactForm />
    </>
  );
}