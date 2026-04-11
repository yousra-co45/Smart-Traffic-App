import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, ShieldAlert, PhoneCall } from 'lucide-react';

const Emergency = () => {
  return (
    <div className="w-full bg-[#020617] py-16 px-4 relative font-sans overflow-hidden text-slate-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            Emergency Services
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-bold">Immediate Assistance</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* ===== Ambulance ===== */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex flex-col items-center p-8 rounded-2xl bg-slate-900/70 backdrop-blur-sm border border-white/10 hover:border-red-500/40 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: ["0px 0px 0px rgba(239,68,68,0)", "0px 0px 15px rgba(239,68,68,0.3)", "0px 0px 0px rgba(239,68,68,0)"]
              }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="p-4 rounded-full bg-red-500/10 text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300"
            >
              <HeartPulse size={36} strokeWidth={2} />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-1">Ambulance</h3>
            <p className="text-3xl font-bold text-red-400 tracking-tight">1122</p>
          </motion.button>

          {/* ===== Police ===== */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex flex-col items-center p-8 rounded-2xl bg-slate-900/70 backdrop-blur-sm border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: ["0px 0px 0px rgba(59,130,246,0)", "0px 0px 15px rgba(59,130,246,0.3)", "0px 0px 0px rgba(59,130,246,0)"]
              }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              className="p-4 rounded-full bg-blue-500/10 text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300"
            >
              <ShieldAlert size={36} strokeWidth={2} />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-1">Police</h3>
            <p className="text-3xl font-bold text-blue-400 tracking-tight">15</p>
          </motion.button>

          {/* ===== Helpline ===== */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex flex-col items-center p-8 rounded-2xl bg-slate-900/70 backdrop-blur-sm border border-white/10 hover:border-green-500/40 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: ["0px 0px 0px rgba(16,185,129,0)", "0px 0px 15px rgba(16,185,129,0.3)", "0px 0px 0px rgba(16,185,129,0)"]
              }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.4, ease: "easeInOut" }}
              className="p-4 rounded-full bg-green-500/10 text-green-500 mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300"
            >
              <PhoneCall size={36} strokeWidth={2} />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-1">Helpline</h3>
            <p className="text-3xl font-bold text-green-400 tracking-tight">130</p>
          </motion.button>

        </div>
      </div>
    </div>
  );
};

export default Emergency;