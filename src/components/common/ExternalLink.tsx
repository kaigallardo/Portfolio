interface ExternalLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function ExternalLink({ href, label, className = '' }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-dark-400 hover:text-primary-400 transition-colors duration-200 ${className}`}
    >
      {label}
    </a>
  );
}