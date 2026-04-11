import React from 'react';
import { motion } from 'framer-motion';

const trafficLevels = [
    { 
        label: 'Low Traffic', 
        description: 'Smooth flow with green routes', 
        colorClass: 'bg-emerald-500', 
        percentage: 33,
        glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]'
    },
    { 
        label: 'Medium Traffic', 
        description: 'Stable flow with some delays', 
        colorClass: 'bg-amber-500', 
        percentage: 66,
        glow: 'shadow-[0_0_20px_rgba(245,158,11,0.3)]'
    },
    { 
        label: 'High Traffic', 
        description: 'Slow movement with red alerts', 
        colorClass: 'bg-rose-500', 
        percentage: 100,
        glow: 'shadow-[0_0_20px_rgba(244,63,94,0.3)]'
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

export default function Traffic() {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    // Enhanced URL with proper template literal
    const mapSrc = apiKey
        ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Lahore,Pakistan&zoom=13`
        : `https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <motion.div 
            className="p-6 max-w-7xl mx-auto min-h-screen text-slate-200"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">Live System Status</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                    Live <span className="text-emerald-500">Traffic</span> Hub
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                    AI-driven road diagnostics and real-time congestion mapping for modern urban mobility.
                </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
                
                {/* 1. ENHANCED MAP VIEWPORT */}
                <motion.div 
                    variants={itemVariants}
                    className="rounded-[3.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.4)] border border-slate-800 bg-slate-950 relative group"
                >
                    <div className="h-[650px] w-full">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.3) invert(0.92) contrast(1.2) brightness(0.9)' }}
                            src={mapSrc}
                            allowFullScreen
                            loading="lazy"
                            title="Lahore Traffic Map"
                        ></iframe>
                    </div>
                    
                    {/* Map Overlay Badge */}
                    <div className="absolute bottom-8 left-8 p-4 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Current Sector</p>
                        <p className="text-white font-bold italic">Lahore Metropolitan District</p>
                    </div>
                </motion.div>

                {/* 2. ANALYTICS SIDEBAR */}
                <div className="space-y-6">
                    {trafficLevels.map((level) => (
                        <motion.div
                            key={level.label}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className={`rounded-[2.5rem] border border-slate-800/50 bg-slate-900/40 p-8 backdrop-blur-md transition-all hover:bg-slate-800/40`}
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">{level.label}</h3>
                                    <p className="text-xs text-slate-500 font-medium">{level.description}</p>
                                </div>
                                <div className={`w-4 h-4 rounded-full ${level.colorClass} ${level.glow} animate-pulse`} />
                            </div>
                            
                            <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${level.percentage}%` }}
                                    className={`h-full ${level.colorClass}`}
                                    transition={{ duration: 2, ease: "circOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Leadership Insight Card */}
                    <motion.div 
                        variants={itemVariants} 
                        className="p-8 rounded-[3rem] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all" />
                        <h4 className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Strategic Protocol</h4>
                        <p className="text-slate-200 text-sm leading-relaxed font-semibold italic">
                           "System throughput is optimized when transit windows are synchronized. Monitor the red sectors for bypass opportunities."
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}