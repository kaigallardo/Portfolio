import Logo from './Logo';

export default function Header() {
  const navLinks = [
    { name: 'Software', href: '#/software' },
    { name: 'Low Code', href: '#/low-code' },
    { name: 'Robotics', href: '#/robotics' },
    { name: 'Modeling', href: '#/modeling' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-dark-800">
      <div className="container-custom py-4 flex items-center justify-between">
        <Logo size="md" />
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark-300 hover:text-primary-400 font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <nav className="flex md:hidden items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
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