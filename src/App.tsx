import { HashRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import SpecializedLayout from './layouts/SpecializedLayout';
import Home from './pages/Home';
import Software from './pages/Software';
import LowCode from './pages/LowCode';
import Robotics from './pages/Robotics';
import Modeling from './pages/Modeling';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        
        <Route path="/software" element={<SpecializedLayout />}>
          <Route index element={<Software />} />
        </Route>
        
        <Route path="/low-code" element={<SpecializedLayout />}>
          <Route index element={<LowCode />} />
        </Route>
        
        <Route path="/robotics" element={<SpecializedLayout />}>
          <Route index element={<Robotics />} />
        </Route>
        
        <Route path="/modeling" element={<SpecializedLayout />}>
          <Route index element={<Modeling />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;