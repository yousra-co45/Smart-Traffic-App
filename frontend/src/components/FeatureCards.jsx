import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeatureCards = () => {
  const features = [
    { 
      title: "Smart Routing", 
      desc: "AI-calculated paths to bypass traffic jams and save fuel.", 
      link: "/routing", 
      color: "from-blue-500"
    },
    { 
      title: "Road Safety", 
      desc: "Interactive safety protocols and real-time road guidelines.", 
      link: "/safety", 
      color: "from-emerald-500"
    },
    { 
      title: "Emergency Hub", 
      desc: "Instant connection to medical, police, and rescue services.", 
      link: "/emergency", 
      color: "from-rose-500"
    }
  ];

  return (
    <div className="bg-[#0a0f1e] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-white text-3xl font-black uppercase tracking-tighter">
            System <span className="text-emerald-500 text-glow">Modules</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Feature Icon Indicator (Design Element) */}
              <div className={`w-10 h-1 bg-gradient-to-r ${f.color} to-transparent mb-8 rounded-full`} />

              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {f.title}
              </h3>
              
              <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8">
                {f.desc}
              </p>

              <Link 
                to={f.link} 
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-emerald-500 transition-colors"
              >
                Launch Module 
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;