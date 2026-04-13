import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Siren, MapPin, Navigation, Crosshair, HeartPulse, ShieldAlert, PhoneCall, X } from 'lucide-react';

const Emergency = () => {
  const [alertActive, setAlertActive] = useState(false);
  const [incidentData, setIncidentData] = useState({
    locationName: "Scanning...",
    distance: "Calculating...",
    severity: "High"
  });

  const triggerDynamicAlert = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        let detectedRoad = "Main Boulevard";
        if (latitude > 30) detectedRoad = "Canal Road, Lahore";
        if (latitude < 25) detectedRoad = "Shahrah-e-Faisal, Karachi";

        setIncidentData({
          locationName: detectedRoad,
          distance: "450 Meters",
          severity: "Critical"
        });
        setAlertActive(true);
      });
    }
  };

  const contactCards = [
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
    <div className="w-full bg-[#030712] py-20 px-6 min-h-screen relative overflow-hidden font-sans">
      
      <AnimatePresence>
        {alertActive && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setAlertActive(false)} className="absolute inset-0 bg-red-950/40 backdrop-blur-3xl" />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0a0202] border-2 border-red-500/50 rounded-[3rem] p-10 shadow-[0_0_100px_rgba(239,68,68,0.5)] text-center"
            >
              {/* Top Emergency Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 flex">
                <div className="flex-1 bg-red-600 animate-pulse" />
                <div className="flex-1 bg-blue-600 animate-pulse" style={{ animationDelay: '0.2s' }} />
              </div>

              <button 
                onClick={() => setAlertActive(false)}
                className="absolute top-6 right-8 text-slate-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="bg-red-500/10 w-20 h-20 rounded-3xl border border-red-500/20 flex items-center justify-center mx-auto mb-6">
                <Siren size={44} className="text-red-500 animate-bounce" />
              </div>

              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Accident <span className="text-red-500 underline">Reported</span></h3>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-2 mb-4 italic">Live Proximity Sync</p>
              
              <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-6 my-8 text-left space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-red-500" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Location</span>
                  </div>
                  <span className="text-white font-bold text-sm tracking-tight">{incidentData.locationName}</span>
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Navigation size={16} className="text-emerald-500" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Distance</span>
                  </div>
                  <span className="text-emerald-400 font-black text-sm italic">{incidentData.distance}</span>
                </div>
              </div>

              <button 
                onClick={() => setAlertActive(false)} 
                className="w-full py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all active:scale-95"
              >
                Dismiss Alert
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <button 
            onClick={triggerDynamicAlert}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md mb-8 hover:bg-red-500/20 transition-all group"
          >
            <Crosshair size={16} className="text-red-500 animate-spin-slow" />
            <span className="text-[11px] font-bold text-red-400 uppercase tracking-[0.2em]">Accident Alert..!</span>
          </button>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 italic uppercase tracking-tight leading-none">Critical <span className="text-red-600">Assistance</span></h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg italic underline decoration-red-500/20 underline-offset-8">AI Response & Emergency Contact Directory</p>
        </div>

        {/* --- EMERGENCY CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl transition-all duration-500"
            >
              <div className={`absolute inset-0 rounded-[2.5rem] bg-${card.color}-500/0 group-hover:bg-${card.color}-500/5 transition-all duration-500 shadow-2xl group-hover:${card.shadow}`} />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`p-6 rounded-3xl bg-slate-950 border border-white/5 text-${card.color}-500 mb-6 group-hover:${card.bg} group-hover:text-white transition-all duration-500`}>
                  {card.icon}
                </div>

                <h3 className="text-slate-400 font-medium uppercase tracking-widest text-[10px] mb-2">{card.title} Dispatch</h3>
                <p className="text-5xl font-black text-white mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  {card.number}
                </p>
                <div className="h-px w-12 bg-white/10 mb-4 group-hover:w-full transition-all duration-500" />
                <p className="text-xs text-slate-500 leading-relaxed italic px-4">"{card.desc}"</p>
                
                <button className={`mt-8 px-8 py-2.5 rounded-full border border-${card.color}-500/50 text-${card.color}-400 text-[10px] font-bold uppercase tracking-tighter hover:bg-${card.color}-500 hover:text-white transition-all`}>
                   Connect Line
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer System Status */}
        <div className="mt-20 flex justify-center">
          <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-[#030712] animate-pulse" />
              <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-[#030712]" />
              <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#030712]" />
            </div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Dispatch Networks: ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;