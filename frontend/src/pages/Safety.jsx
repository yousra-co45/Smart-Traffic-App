import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert, Bike, Car, Baby, Eye, PhoneOff,
  HeartPulse, ShieldCheck, LifeBuoy, Sparkles
} from 'lucide-react';

const safetyTips = [
  {
    id: 1,
    title: "Always Wear a Seatbelt",
    desc: "Seatbelts reduce the risk of death by 45%. It’s your first line of defense in any collision.",
    icon: <ShieldAlert className="w-7 h-7 text-emerald-400" />,
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    glow: "group-hover:shadow-emerald-500/20"
  },
  {
    id: 2,
    title: "Helmets Save Lives",
    desc: "ISI-marked helmets protect your brain in 90% of accidents. Never ride without one.",
    icon: <Bike className="w-7 h-7 text-blue-400" />,
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    glow: "group-hover:shadow-blue-500/20"
  },
  {
    id: 3,
    title: "No Distractions",
    desc: "Mobile usage increases accident chances by 4x. Keep your eyes on the road, not the screen.",
    icon: <PhoneOff className="w-7 h-7 text-red-400" />,
    gradient: "from-red-500/20 via-red-500/5 to-transparent",
    glow: "group-hover:shadow-red-500/20"
  },
  {
    id: 4,
    title: "Speed Limits",
    desc: "Speeding is the leading cause of fatalities. Better late than never—follow the signs.",
    icon: <Car className="w-7 h-7 text-amber-400" />,
    gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    glow: "group-hover:shadow-amber-500/20"
  },
  {
    id: 5,
    title: "Pedestrian Safety",
    desc: "Use Zebra Crossings. Look right, left, and right again before stepping onto the road.",
    icon: <Baby className="w-7 h-7 text-purple-400" />,
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    glow: "group-hover:shadow-purple-500/20"
  },
  {
    id: 6,
    title: "Night Driving",
    desc: "Use high beams responsibly. Ensure all lights work to avoid blinding oncoming traffic.",
    icon: <Eye className="w-7 h-7 text-cyan-400" />,
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    glow: "group-hover:shadow-cyan-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Safety = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-emerald-500/30 overflow-hidden relative font-sans">

      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full opacity-50" />

      <div className="max-w-7xl mx-auto py-24 px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <header className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
              <span className="flex items-center gap-2 text-emerald-400 text-xs font-black tracking-[0.4em] uppercase">
                <Sparkles size={14} className="animate-pulse" /> Safety Protocol v2.0
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
              Drive <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-emerald-200 to-emerald-500">Smart</span>
            </h1>

            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light opacity-80">
              Interactive road safety awareness modules designed to minimize hazards and promote responsible commuting.
            </p>
          </motion.div>
        </header>

        {/* Tips Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {safetyTips.map((tip) => (
            <motion.div
              key={tip.id}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`group relative p-8 rounded-[2.5rem] border border-white/5 bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-emerald-500/40 ${tip.glow} shadow-2xl shadow-black/50`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tip.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-slate-950/50 rounded-[1.5rem] border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl backdrop-blur-sm">
                    {tip.icon}
                  </div>
                  <div className="text-white/5 font-black text-6xl group-hover:text-emerald-500/10 transition-colors leading-none tracking-tighter italic">
                    0{tip.id}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors tracking-tight">
                  {tip.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-medium text-[15px] opacity-70 group-hover:opacity-100 group-hover:text-slate-200 transition-all">
                  {tip.desc}
                </p>

                <div className="relative h-[2px] w-full bg-white/5 mt-10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent group-hover:via-emerald-500 transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Center Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-40 relative"
        >
          {/* Note: 'group' class removed from the div above to prevent multiple button triggers */}

          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 rounded-[3.5rem] blur-2xl opacity-50" />

          <div className="relative p-10 md:p-20 rounded-[3.5rem] border border-white/5 bg-slate-950/40 backdrop-blur-3xl shadow-3xl shadow-black">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

              <div className="text-center lg:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  Urgent Assistance
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic leading-tight">Emergency Center</h2>
                <p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
                  Immediate response units are available 24/7. Select a service to trigger an alert.
                </p>
              </div>

              {/* Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">

                {/* Ambulance */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="group relative flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 hover:border-red-500/50 transition-all duration-300 shadow-2xl"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="p-5 rounded-full bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-red-500/30"
                  >
                    <HeartPulse size={30} strokeWidth={2.5} />
                  </motion.div>
                  <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white">Ambulance</span>
                </motion.button>

                {/* Police */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="group relative flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 hover:border-blue-500/50 transition-all duration-300 shadow-2xl"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.3, ease: "easeInOut" }}
                    className="p-5 rounded-full bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-blue-500/30"
                  >
                    <ShieldCheck size={30} strokeWidth={2.5} />
                  </motion.div>
                  <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white">Police</span>
                </motion.button>

                {/* Helpline */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="group relative flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 hover:border-emerald-500/50 transition-all duration-300 shadow-2xl"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.6, ease: "easeInOut" }}
                    className="p-5 rounded-full bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-emerald-500/30"
                  >
                    <LifeBuoy size={30} strokeWidth={2.5} />
                  </motion.div>
                  <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white">Helpline</span>
                </motion.button>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Safety;