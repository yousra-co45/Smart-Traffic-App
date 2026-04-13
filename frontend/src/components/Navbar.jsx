import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Map, ShieldCheck, Activity, Navigation, AlertCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <Activity size={18} /> },
    { name: "Traffic", path: "/traffic", icon: <Map size={18} /> },
    { name: "Routes", path: "/routing", icon: <Navigation size={18} /> },
    { name: "Safety", path: "/safety", icon: <ShieldCheck size={18} /> },
    { name: "Emergency", path: "/emergency", icon: <AlertCircle size={18} /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-white/5 p-4 sticky top-0 z-[100]">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-emerald-500 font-black text-xl tracking-tighter">
          <Car size={26} className="bg-emerald-500 text-slate-900 rounded p-1" />
          <span>SMART<span className="text-white">CITY</span></span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors ${
                location.pathname === link.path ? 'text-emerald-500' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button (Visible on Mobile Only) */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)} // Menu close on click
                  className={`flex items-center gap-4 p-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all ${
                    location.pathname === link.path 
                      ? 'bg-emerald-500 text-black' 
                      : 'text-slate-400 hover:bg-white/5'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;