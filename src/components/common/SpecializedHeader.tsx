import Logo from './Logo';

interface SpecializedHeaderProps {
  portfolioName: string;
}

export default function SpecializedHeader({ portfolioName }: SpecializedHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-dark-800">
      <div className="container-custom py-4 flex items-center justify-between">
        <Logo size="md" />
        
        <nav className="hidden md:flex items-center gap-8">
          <span className="text-primary-400 font-medium">{portfolioName}</span>
          <a
            href="https://github.com/kaigallardo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-300 hover:text-primary-400 font-medium transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kai-gallardo-sánchez-b63a62440"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-300 hover:text-primary-400 font-medium transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kaigallardosanchez@gmail.com"
            className="text-dark-300 hover:text-primary-400 font-medium transition-colors duration-200"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}