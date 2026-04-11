import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Safety from './pages/Safety';
import Home from './pages/Home';
import Traffic from './pages/Traffic';
import Emergency from './pages/Emergency';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 flex flex-col font-sans selection:bg-emerald-500/30">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/Safety" element={<Safety />} />
            <Route path="/emergency" element={<Emergency/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
