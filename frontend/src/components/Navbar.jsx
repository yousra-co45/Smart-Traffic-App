import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Map, ShieldCheck, Activity } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2 text-trafficGreen font-bold text-xl"
        >
          <Car size={28} />
          <span>SmartCity <span className="text-white">Traffic</span></span>
        </motion.div>

        <div className="flex gap-6 text-gray-300 font-medium">
          <Link to="/" className="hover:text-trafficGreen transition-colors flex items-center gap-1">
            <Activity size={18} /> Home
          </Link>
          <Link to="/traffic" className="hover:text-trafficRed transition-colors flex items-center gap-1">
            <Map size={18} /> Live Traffic
          </Link>
          <Link to="/safety" className="hover:text-trafficYellow transition-colors flex items-center gap-1">
            <ShieldCheck size={18} /> Safety
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;