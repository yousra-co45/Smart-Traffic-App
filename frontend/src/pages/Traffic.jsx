import React from 'react';
import { motion } from 'framer-motion';

const trafficLevels = [
    { 
        label: 'Low Traffic', 
        description: 'Smooth flow with green routes', 
        colorClass: 'bg-green-500', 
        pulseClass: 'hover:bg-green-400',
        width: 'w-1/3'
    },
    { 
        label: 'Medium Traffic', 
        description: 'Stable flow with some delays', 
        colorClass: 'bg-yellow-500', 
        pulseClass: 'hover:bg-yellow-400',
        width: 'w-2/3'
    },
    { 
        label: 'High Traffic', 
        description: 'Slow movement with red alerts', 
        colorClass: 'bg-red-500', 
        pulseClass: 'hover:bg-red-400',
        width: 'w-full'
    },
];

// Animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function Traffic() {
    // CRA environment variable calling
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    // Embed URL: use a key-free Google Maps iframe if the API key is missing or invalid
    const mapSrc = apiKey
        ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Lahore,Pakistan&zoom=13`
        : 'https://www.google.com/maps?q=Lahore,Pakistan&z=13&output=embed';

    return (
        <motion.div 
            className="p-6 max-w-7xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    Live <span className="text-emerald-500">Traffic</span> Dashboard
                </h1>
                <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
                    Real-time road conditions and simulated congestion indicators for smart city navigation.
                </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
                
                {/* 1. MAP SECTION (Using Iframe to bypass billing) */}
                <motion.div 
                    variants={itemVariants}
                    className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-700 bg-slate-950 relative"
                >
                    <div className="h-[550px] w-full">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'contrast(1.1) brightness(0.9)' }}
                            src={mapSrc}
                            allowFullScreen
                            loading="lazy"
                            title="Google Map Lahore"
                        ></iframe>
                    </div>
                    
                    {/* Overlay Info */}
                    <div className="absolute top-6 left-6 rounded-2xl bg-slate-900/80 border border-slate-700 p-5 backdrop-blur-xl shadow-2xl max-w-[260px]">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Live Feed</h2>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                            Currently showing traffic density for Lahore Central regions.
                        </p>
                    </div>
                </motion.div>

                {/* 2. INDICATORS SIDEBAR */}
                <div className="space-y-5">
                    {trafficLevels.map((level, index) => (
                        <motion.div
                            key={level.label}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className={`rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all ${level.pulseClass}`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-3 h-3 rounded-full ${level.colorClass} shadow-[0_0_10px_rgba(0,0,0,0.5)] animate-pulse`} />
                                <h3 className="text-lg font-bold text-white">{level.label}</h3>
                            </div>
                            <p className="text-sm text-slate-400 mb-4">{level.description}</p>
                            
                            {/* Visual Progress Bar */}
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: level.width.replace('w-', '') }}
                                    className={`h-full ${level.colorClass.replace('bg-', 'bg-opacity-80 bg-')}`}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}

                    {/* Quick Action/Alert Card */}
                    <motion.div variants={itemVariants} className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20">
                        <h4 className="text-emerald-400 font-bold text-sm mb-1">Leader's Tip:</h4>
                        <p className="text-slate-300 text-xs italic">"Always check alternate routes during peak hours (5 PM - 8 PM)."</p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Indicator Guide (Full Width) */}
            <motion.div 
                variants={itemVariants}
                className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/30 p-8 text-center"
            >
                <h2 className="text-xl font-semibold text-white mb-6">System Legend</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {['Low', 'Medium', 'High'].map((status, i) => (
                        <div key={status} className="flex flex-col items-center p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
                            <div className={`w-10 h-10 rounded-full mb-3 flex items-center justify-center ${i===0?'bg-green-500/20 text-green-500':i===1?'bg-yellow-500/20 text-yellow-500':'bg-red-500/20 text-red-500'}`}>
                                {i+1}
                            </div>
                            <span className="text-white font-medium">{status}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}