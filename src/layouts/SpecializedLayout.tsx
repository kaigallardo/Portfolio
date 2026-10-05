import { Outlet, useLocation } from 'react-router-dom';
import SpecializedHeader from '../components/common/SpecializedHeader';
import Footer from '../components/common/Footer';

export default function SpecializedLayout() {
  const location = useLocation();
  
  const portfolioNames: Record<string, string> = {
    '/software': 'Software Development',
    '/low-code': 'Low Code & Automation',
    '/robotics': 'Robotics & Electronics',
    '/modeling': 'Modeling',
  };

  const portfolioName = portfolioNames[location.pathname] || '';

  return (
    <div className="min-h-screen bg-dark-950 flex flex-col">
      <SpecializedHeader portfolioName={portfolioName} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}