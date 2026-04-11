import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, ShieldAlert, PhoneCall } from 'lucide-react';

const Emergency = () => {
  const cards = [
    {
      title: "Ambulance",
      number: "1122",
      icon: <HeartPulse size={40} />,
      color: "red",
      shadow: "shadow-red-500/20",
      bg: "bg-red-500",
      desc: "Priority medical & rescue response"
    },
    {
      title: "Police",
      number: "15",
      icon: <ShieldAlert size={40} />,
      color: "blue",
      shadow: "shadow-blue-500/20",
      bg: "bg-blue-500",
      desc: "Law enforcement & incident control"
    },
    {
      title: "Helpline",
      number: "130",
      icon: <PhoneCall size={40} />,
      color: "emerald",
      shadow: "shadow-emerald-500/20",
      bg: "bg-emerald-500",
      desc: "Highway support & general info"
    }
  ];

  return (
    <div className="w-full bg-[#030712] py-24 px-6 relative overflow-hidden font-sans">
      {/* Background Tech Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Response Control System</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Critical <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Assistance</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            One-touch emergency protocols for immediate dispatch. Integrated with Smart City monitoring.
          </p>
        </motion.div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl hover:border-${card.color}-500/50 transition-all duration-500`}
            >
              {/* Card Glow Effect on Hover */}
              <div className={`absolute inset-0 rounded-[2.5rem] bg-${card.color}-500/0 group-hover:bg-${card.color}-500/5 transition-all duration-500 shadow-2xl group-hover:${card.shadow}`} />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Circle */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, delay: index }}
                  className={`p-6 rounded-3xl bg-slate-950 border border-white/5 text-${card.color}-500 mb-6 group-hover:${card.bg} group-hover:text-white transition-all duration-500`}
                >
                  {card.icon}
                </motion.div>

                <h3 className="text-slate-400 font-medium uppercase tracking-widest text-xs mb-2">{card.title} Dispatch</h3>
                <p className="text-5xl font-black text-white mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  {card.number}
                </p>
                <div className="h-px w-12 bg-white/10 mb-4 group-hover:w-full transition-all duration-500" />
                <p className="text-sm text-slate-500 leading-relaxed italic">"{card.desc}"</p>
                
                {/* Quick Call Button Overlay */}
                <button className={`mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-6 py-2 rounded-full border border-${card.color}-500/50 text-${card.color}-400 text-xs font-bold uppercase tracking-tighter`}>
                   Connect Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom System Legend */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/30 border border-white/5">
             <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-red-500" />
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-blue-500" />
                <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-emerald-500" />
             </div>
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Dispatch Networks</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Emergency;