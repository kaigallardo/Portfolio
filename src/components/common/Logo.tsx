import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Logo_K_KaiGallardo_Blanco.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  return (
    <Link to="/" className="flex items-center gap-3">
      <img 
        src={logo} 
        alt="Kai Gallardo Sánchez" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </Link>
  );
}