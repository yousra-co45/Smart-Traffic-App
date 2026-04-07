import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Empty Placeholder for Members
const Placeholder = ({ name }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-500 italic">
    <p>{name} Page is under development...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 flex flex-col font-sans selection:bg-emerald-500/30">
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<Placeholder name="Dashboard" />} />
            <Route path="/traffic" element={<Placeholder name="Live Traffic Map" />} />
            <Route path="/safety" element={<Placeholder name="Road Safety Tips" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;