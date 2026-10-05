import Logo from './Logo';

export default function Header() {
  const navLinks = [
    { name: 'Software', href: '/software', external: true },
    { name: 'Low Code', href: '/low-code', external: true },
    { name: 'Robotics', href: '/robotics', external: true },
    { name: 'Modeling', href: '/modeling', external: true },
    { name: 'Contacto', href: '#contacto', external: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-dark-800">
      <div className="container-custom py-4 flex items-center justify-between">
        <Logo size="md" />
        
        {/* Navegación escritorio */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-dark-300 hover:text-primary-400 font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Navegación móvil */}
        <nav className="flex md:hidden items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-dark-300 hover:text-primary-400 text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}