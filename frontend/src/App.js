import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Safety from './pages/Safety';
<<<<<<< HEAD
import Traffic from './pages/Traffic';
import Home from './pages/Home';

=======
import Emergency from './components/Emergency/Emergency';
>>>>>>> 63a855b0c029c44d8e84866e87cca76b9bf6d2f3

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
<<<<<<< HEAD
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/home" element={<Home />} />
=======
            <Route path="/" element={<Placeholder name="Dashboard" />} />
            <Route path="/traffic" element={<Placeholder name="Live Traffic Map" />} />
            <Route path="/Safety" element={<Safety />} />
            <Route path="/emergency" element={<Emergency />} />
>>>>>>> 63a855b0c029c44d8e84866e87cca76b9bf6d2f3
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
