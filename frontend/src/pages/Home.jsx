import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmartTrafficHero from '../components/SmartTrafficHero';
import FeatureCards from '../components/FeatureCards';


const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // Mobile: Top Center | Desktop: Top Right
      className="absolute top-4 lg:top-8 left-0 lg:left-auto lg:right-8 w-full lg:w-auto flex justify-center lg:justify-end z-[60] px-4"
    >
      <div className="bg-slate-900/60 backdrop-blur-xl border border-emerald-500/20 px-4 py-2 lg:px-6 lg:py-3 rounded-full lg:rounded-[2rem] shadow-2xl flex items-center gap-3 lg:gap-4 border-b border-white/5">
        
        {/* Status Indicator */}
        <div className="relative flex h-2 w-2 lg:h-3 lg:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 lg:h-3 lg:w-3 bg-emerald-500"></span>
        </div>

        {/* Time Text */}
        <div className="flex flex-col">
          <span className="text-base lg:text-2xl font-mono font-black text-white tracking-tighter tabular-nums leading-none">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
          </span>
          <span className="hidden lg:block text-[8px] font-black text-emerald-500/70 uppercase tracking-[0.3em] mt-1">
            System Online
          </span>
        </div>

        <div className="h-6 lg:h-8 w-[1px] bg-white/10 mx-1" />

        {/* Zone Info */}
        <div className="text-right flex flex-col justify-center">
          <p className="text-[8px] lg:text-[10px] font-bold text-slate-300 uppercase leading-none italic">GMT +5</p>
          <p className="text-[8px] lg:text-[10px] font-black text-emerald-500 uppercase mt-1 leading-none tracking-widest">LIVE</p>
        </div>
      </div>
    </motion.div>
  );
};


const TrafficStatusScanner = () => {
  const zones = [
    { name: "Blue Area", status: "Heavy", color: "text-red-500", load: "92%" },
    { name: "Saddar Road", status: "Clear", color: "text-emerald-500", load: "15%" },
    { name: "Highway-N5", status: "Moderate", color: "text-yellow-500", load: "45%" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-10 bg-slate-900/20 rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 mb-12 lg:mb-20 backdrop-blur-md">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        
        <div className="text-center lg:text-left">
          <h4 className="text-white font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[10px] lg:text-xs">Live Network Scan</h4>
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-slate-500 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest italic">AI monitoring active</p>
          </div>
        </div>
        
        
        <div className="flex gap-3 lg:gap-4 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 no-scrollbar snap-x snap-mandatory">
          {zones.map((zone, i) => (
            <div 
              key={i} 
              className="bg-black/40 p-4 lg:p-5 rounded-2xl lg:rounded-3xl border border-white/5 min-w-[150px] lg:min-w-[180px] flex-shrink-0 snap-center"
            >
              <div className="text-[8px] lg:text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">{zone.name}</div>
              <div className={`text-lg lg:text-xl font-black ${zone.color}`}>{zone.status}</div>
              <div className="w-full bg-slate-800 h-1 lg:h-1.5 mt-2 lg:mt-3 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-current ${zone.color} transition-all duration-1000`} 
                  style={{ width: zone.load }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0f1e] min-h-screen relative overflow-hidden selection:bg-emerald-500/30">
      
      
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <LiveClock />

      <div className="relative pt-20 lg:pt-0">
        <SmartTrafficHero
          onCheckTraffic={() => navigate('/traffic')}
          onLearnMore={() => navigate('/safety')}
        />
      </div>

      <div className="relative z-20 -mt-10 lg:-mt-24 px-4 lg:px-0"> 
        <FeatureCards />
      </div>

      <div className="px-4 lg:px-6">
        <TrafficStatusScanner />
      </div>

      <footer className="py-12 lg:py-16 border-t border-white/5 text-center bg-black/40 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-600 text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] mb-3 leading-relaxed">
            Smart Traffic Management System &bull; Fluxxion Studio
          </p>
          <div className="w-12 lg:w-16 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-6" />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-500 text-[8px] lg:text-[9px] font-bold uppercase tracking-widest italic">
            <span>Optimizing City Flow</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Real-time AI Analysis</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Karachi Network 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}