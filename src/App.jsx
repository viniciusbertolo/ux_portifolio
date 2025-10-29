import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next';
import Home from './pages/home/Home';
import ProjectDetailPage from './pages/projetoGenerico/ProjetoGenerico';
import DigitalTechPage from './pages/portalDigitalTech/PortalDigitalTech';
import BrotoPage from './pages/broto/brotoPage';
import VagalumenPage from './pages/vagalumen/vagalumenPage';
import SommosPage from './pages/sommos/sommosPage';

export default function App() {


  // O hook 'useTranslation' te dá a função 't' e a instância 'i18n'
  const { t, i18n } = useTranslation();

  // Função para mudar o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto" element={<ProjectDetailPage />} />
          <Route path="/digital-tech" element={<DigitalTechPage />} />
          <Route path="/broto" element={<BrotoPage />} />
          <Route path="/vagalumen-ai" element={<VagalumenPage />} />
          <Route path="/sommos" element={<SommosPage />} />
      </Routes>
    </Router>
  )
}