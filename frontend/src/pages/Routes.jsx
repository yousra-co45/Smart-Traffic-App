import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Mic aur MicOff icons add kiye hain
import { Navigation, MapPin, Clock, Info, ShieldCheck, Zap, ChevronRight, Mic, MicOff } from 'lucide-react';

const SmartRoutes = () => {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [routeData, setRouteData] = useState({ time: '', load: '', routes: [], color: '', distance: '' });
  
  // Voice States
  const [isListening, setIsListening] = useState(false);

  // --- Voice Recognition Logic ---
  const handleVoiceCommand = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Aapka browser voice recognition support nahi karta. Chrome use karein.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("Voice Input:", transcript);

      // Example parsing: "From Lahore to Karachi"
      if (transcript.includes('from') && transcript.includes('to')) {
        const parts = transcript.split('to');
        const originPart = parts[0].replace('from', '').trim();
        const destPart = parts[1].trim();
        
        setStart(originPart);
        setDestination(destPart);
      } else {
        alert("Please say: 'From [City] to [City]'");
      }
    };

    recognition.start();
  };

  const handleCalculate = (e) => {
    if (e) e.preventDefault();
    if (!start || !destination) return;

    setIsCalculating(true);
    setShowResult(false);

    setTimeout(() => {
      const s = start.toLowerCase();
      const d = destination.toLowerCase();
      let baseMinutes = 0;
      let dist = "";
      let suggestedRoutes = [];

      if ((s.includes('lahore') && d.includes('karachi')) || (s.includes('karachi') && d.includes('lahore'))) {
        baseMinutes = 1140;
        dist = "1,210 km";
        suggestedRoutes = ["Via M-5 Motorway (Fastest)", "Via National Highway N-5", "Via Sukkur-Larkana Route"];
      } else if ((s.includes('lahore') && d.includes('islamabad')) || (s.includes('islamabad') && d.includes('lahore'))) {
        baseMinutes = 270;
        dist = "375 km";
        suggestedRoutes = ["Via M-2 Motorway", "Via GT Road (N-5)", "Via Murree Expressway Link"];
      } else {
        baseMinutes = Math.floor(Math.random() * (45 - 20 + 1)) + 20;
        dist = `${(Math.random() * 15).toFixed(1)} km`;
        suggestedRoutes = ["Primary City Route", "Alternative Bypass", "Inner Sector Road"];
      }

      const loads = [
        { label: 'Low', color: 'text-emerald-500', bg: 'bg-emerald-500/10', multiplier: 1 },
        { label: 'Moderate', color: 'text-yellow-500', bg: 'bg-yellow-500/10', multiplier: 1.2 },
        { label: 'Heavy', color: 'text-red-500', bg: 'bg-red-500/10', multiplier: 1.6 }
      ];
      const selectedLoad = loads[Math.floor(Math.random() * loads.length)];
      
      const totalMins = Math.floor(baseMinutes * selectedLoad.multiplier);
      const displayTime = totalMins > 60 ? `${Math.floor(totalMins / 60)}h ${totalMins % 60}m` : `${totalMins}m`;

      setRouteData({
        time: displayTime,
        distance: dist,
        load: selectedLoad.label,
        color: selectedLoad.color,
        bgColor: selectedLoad.bg,
        routes: suggestedRoutes
      });

      setIsCalculating(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 border-l-4 border-emerald-500 pl-6 flex justify-between items-end">
          <div>
            <h2 className="text-white text-4xl font-black uppercase tracking-tighter italic">
              SMART <span className="text-emerald-500">NAVIGATION</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-1">AI-Powered Path Optimization</p>
          </div>
          
          {/* Voice Command Floating Button */}
          <button 
            onClick={handleVoiceCommand}
            className={`flex items-center gap-3 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all ${
              isListening ? 'bg-red-500 animate-pulse text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            {isListening ? <MicOff size={16} /> : <Mic size={16} />}
            {isListening ? "Listening..." : "Voice Search"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Input Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 bg-slate-900/40 p-8 rounded-[2rem] border border-white/5 backdrop-blur-xl h-fit shadow-2xl"
          >
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Current Origin</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                  <input type="text" required value={start} onChange={(e) => setStart(e.target.value)} placeholder="e.g. Lahore" className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-6 py-4 text-white focus:border-emerald-500 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Destination</label>
                <div className="relative">
                  <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={18} />
                  <input type="text" required value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g. Karachi" className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-6 py-4 text-white focus:border-blue-500 outline-none transition-all" />
                </div>
              </div>

              <button disabled={isCalculating} className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-5 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
                {isCalculating ? "Calculating Routes..." : "Find Best Routes"}
              </button>
              
              {isListening && (
                <p className="text-center text-red-500 text-[10px] font-bold animate-pulse">
                  TRY: "From Lahore to Karachi"
                </p>
              )}
            </form>
          </motion.div>

          {/* Result Panel (Same as your original code) */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode='wait'>
              {!showResult && !isCalculating && (
                <motion.div className="h-80 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[2.5rem] bg-slate-900/10">
                  <Info className="text-slate-800 mb-2" size={32} />
                  <p className="text-slate-700 font-black uppercase tracking-widest text-[10px]">Awaiting Location Input</p>
                </motion.div>
              )}

              {isCalculating && (
                <motion.div className="h-80 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-emerald-500 font-black uppercase tracking-widest text-[10px]">Analyzing Traffic Patterns...</p>
                </motion.div>
              )}

              {showResult && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5">
                      <Clock className="text-emerald-500 mb-2" size={20} />
                      <p className="text-slate-500 text-[9px] font-black uppercase">Travel Time</p>
                      <p className="text-white text-2xl font-black italic">{routeData.time}</p>
                    </div>
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5">
                      <Zap className="text-blue-500 mb-2" size={20} />
                      <p className="text-slate-500 text-[9px] font-black uppercase">Distance</p>
                      <p className="text-white text-2xl font-black italic">{routeData.distance}</p>
                    </div>
                    <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5">
                      <ShieldCheck className="text-purple-500 mb-2" size={20} />
                      <p className="text-slate-500 text-[9px] font-black uppercase">Traffic Load</p>
                      <p className={`${routeData.color} text-2xl font-black italic`}>{routeData.load}</p>
                    </div>
                  </div>

                  <div className="bg-slate-900/40 p-8 rounded-[2.5rem] border border-white/5">
                    <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                      <Navigation size={14} className="text-emerald-500" /> Suggested Routes
                    </h3>
                    <div className="space-y-3">
                      {routeData.routes.map((route, index) => (
                        <div key={index} className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-emerald-500/50 transition-all group cursor-pointer">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black text-xs">
                              {index + 1}
                            </div>
                            <span className="text-slate-300 font-bold italic group-hover:text-white transition-colors">{route}</span>
                          </div>
                          <ChevronRight className="text-slate-600 group-hover:text-emerald-500 transition-colors" size={18} />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartRoutes;