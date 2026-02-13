import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import EligibilityForm from './components/tools/EligibilityForm';
import SchemeList from './components/schemes/SchemeList';
import { schemes } from './data/schemesData';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { language } = useLanguage();

  // State lifted up or managed in pages - for now, I'll pass props where needed or restructure
  // Ideally SchemeList should fetch data or use context, but keeping it simple as per original

  // Note: Original SchemeList and Dashboard might expect props. 
  // I will wrap them in Page components or pass props here.

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schemes" element={
            <div className="container" style={{ padding: '2rem 1rem' }}>
              <h1 style={{ marginBottom: '2rem' }}>All Schemes</h1>
              <SchemeList schemes={schemes} language={language} />
            </div>
          } />
          <Route path="/eligibility" element={
            <div className="container" style={{ padding: '2rem 1rem', maxWidth: '800px' }}>
              <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Check Eligibility</h1>
              <div className="glass-card">
                <EligibilityForm onFilterChange={(f) => console.log(f)} language={language} />
              </div>
            </div>
          } />
          <Route path="/dashboard" element={
            <div className="container" style={{ padding: '2rem 1rem' }}>
              <Dashboard language={language} />
            </div>
          } />
        </Routes>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        background: '#0F172A',
        color: '#94a3b8',
        marginTop: 'auto'
      }}>
        © 2026 Smart Citizen Portal. Government of India Initiative (Mock).
      </footer>
    </div>
  );
}

export default App;
