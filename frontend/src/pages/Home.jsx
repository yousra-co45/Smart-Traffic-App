import React from 'react';
import { useNavigate } from 'react-router-dom';
import SmartTrafficHero from '../components/SmartTrafficHero';
import FeatureCards from '../components/FeatureCards';

// --- Live Status Section ---
const TrafficStatusScanner = () => {
  const zones = [
    { name: "Blue Area", status: "Heavy", color: "text-red-500", load: "92%" },
    { name: "Saddar Road", status: "Clear", color: "text-emerald-500", load: "15%" },
    { name: "Highway-N5", status: "Moderate", color: "text-yellow-500", load: "45%" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-slate-900/20 rounded-[2.5rem] border border-white/5 mb-20 backdrop-blur-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs">Live Network Scan</h4>
          <p className="text-slate-500 text-[10px] mt-1 font-bold uppercase tracking-widest">AI monitoring active</p>
        </div>
        <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-4 md:pb-0">
          {zones.map((zone, i) => (
            <div key={i} className="bg-black/40 p-5 rounded-3xl border border-white/5 min-w-[180px] flex-shrink-0">
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">{zone.name}</div>
              <div className={`text-xl font-black ${zone.color}`}>{zone.status}</div>
              <div className="w-full bg-slate-800 h-1.5 mt-3 rounded-full overflow-hidden">
                <div className={`h-full bg-current ${zone.color} transition-all duration-1000`} style={{ width: zone.load }} />
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
    <div className="bg-[#0a0f1e] min-h-screen">
      {/* 1. Hero Section */}
      <SmartTrafficHero
        onCheckTraffic={() => navigate('/traffic')}
        onLearnMore={() => navigate('/safety')}
      />

      {/* 2. Features Section */}
      <div className="relative z-20 -mt-24"> 
        <FeatureCards />
      </div>

      {/* 3. Live Status */}
      <TrafficStatusScanner />

      {/* 4. Professional Footer (No Lead Names) */}
      <footer className="py-16 border-t border-slate-900 text-center bg-black/20">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] mb-2">
          Smart Traffic Management System
        </p>
        <div className="w-10 h-1 bg-emerald-500 mx-auto rounded-full opacity-50 mb-4" />
        <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest italic">
          Optimizing City Flow &bull; 2026
        </p>
      </footer>
    </div>
  );
}