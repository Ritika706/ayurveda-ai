
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SymptomsPage from './pages/SymptomsPage';
import PlanGeneratorPage from './pages/PlanGeneratorPage';
import ChatbotPage from './pages/ChatbotPage';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/symptoms" element={<SymptomsPage />} />
        <Route path="/plan-generator" element={<PlanGeneratorPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
