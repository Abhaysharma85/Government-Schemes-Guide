import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import EligibilityForm from './components/tools/EligibilityForm';
import SchemeList from './components/schemes/SchemeList';
import SplashScreen from './components/layout/SplashScreen';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/layout/ProtectedRoute';
import { schemes } from './data/schemesData';
import { useLanguage } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import ChatPage from './pages/ChatPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const isChatPage = location.pathname === '/chat';

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <AuthProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-light)', color: 'var(--text-dark)', transition: 'background 0.3s, color 0.3s' }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<LoginPage />} />

            <Route path="/schemes" element={
              <div className="container" style={{ padding: '2rem 1rem' }}>
                <h1 style={{ marginBottom: '2rem', color: 'var(--primary-color)' }}>All Schemes</h1>
                <SchemeList schemes={schemes} language={language} />
              </div>
            } />

            <Route path="/eligibility" element={
              <div className="container" style={{ padding: '2rem 1rem', maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '2rem', textAlign: 'center', color: 'var(--primary-color)' }}>Check Eligibility</h1>
                <div className="glass-card">
                  <EligibilityForm onFilterChange={(f) => console.log(f)} language={language} />
                </div>
              </div>
            } />

            <Route path="/dashboard" element={
              <ProtectedRoute>
                <div className="container" style={{ padding: '2rem 1rem' }}>
                  <Dashboard language={language} />
                </div>
              </ProtectedRoute>
            } />

            <Route path="/chat" element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            } />
          </Routes>
        </main>

        {!isChatPage && (
          <footer style={{
            textAlign: 'left',
            padding: '2rem',
            background: 'var(--primary-color)',
            color: 'var(--bg-light)',
            marginTop: 'auto',
            transition: 'background 0.3s, color 0.3s'
          }}>
            © 2026 Smart Citizen Portal. Government of India Initiative (Mock).
          </footer>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
