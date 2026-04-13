import React, { useEffect } from 'react';

const Car = ({ x, y, width, height, color, lightColor, direction, delay, duration }) => {
  const isVertical = direction === 'down' || direction === 'up';
  const animClass =
    direction === 'right'
      ? 'sth-car--right'
      : direction === 'left'
        ? 'sth-car--left'
        : direction === 'down'
          ? 'sth-car--down'
          : 'sth-car--up';

  const windowFill = 'rgba(255,255,255,0.18)';
  const wheelFill = '#060914';
  const bodyFill = color;
  const headlightFill = lightColor || '#fde68a';
  const headlightStyle =
    direction === 'left'
      ? { x: 0, y: Math.max(2, Math.round(height * 0.25)) }
      : { x: Math.max(0, width - 6), y: Math.max(2, Math.round(height * 0.25)) };

  return (
    <g transform={`translate(${x} ${y})`}>
      <g
        className={`sth-car ${animClass}`}
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`
        }}
      >
        <g className="sth-carBob">
          <g transform={isVertical ? `rotate(90 ${width / 2} ${height / 2})` : undefined}>
            <rect x="0" y="0" width={width} height={height} rx={Math.max(6, Math.round(height * 0.35))} fill={bodyFill} />
            <rect x={Math.round(width * 0.2)} y={Math.round(height * 0.18)} width={Math.round(width * 0.28)} height={Math.round(height * 0.28)} rx="3" fill={windowFill} />
            <rect x={Math.round(width * 0.55)} y={Math.round(height * 0.18)} width={Math.round(width * 0.25)} height={Math.round(height * 0.28)} rx="3" fill={windowFill} />
            <circle cx={Math.round(width * 0.22)} cy={height} r={Math.max(5, Math.round(height * 0.24))} fill={wheelFill} />
            <circle cx={Math.round(width * 0.78)} cy={height} r={Math.max(5, Math.round(height * 0.24))} fill={wheelFill} />
            <rect
              className="sth-headlight"
              x={headlightStyle.x}
              y={headlightStyle.y}
              width="6"
              height={Math.max(6, Math.round(height * 0.5))}
              rx="2"
              fill={headlightFill}
              opacity="0.9"
            />
          </g>
        </g>
      </g>
    </g>
  );
};

export default function SmartTrafficHero({ onCheckTraffic, onLearnMore }) {
  useEffect(() => {
    const id = 'smart-traffic-hero__styles';
    if (document.getElementById(id)) return undefined;

    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
@keyframes carMove1 { from { transform: translateX(-180px); } to { transform: translateX(760px); } }
@keyframes carMove2 { from { transform: translateX(760px); } to { transform: translateX(-180px); } }
@keyframes carMoveV1 { from { transform: translateY(-80px); } to { transform: translateY(620px); } }
@keyframes carMoveV2 { from { transform: translateY(620px); } to { transform: translateY(-80px); } }
@keyframes trafficBlink { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }
@keyframes pulseGlow { 0% { transform: scale(1); } 100% { transform: scale(1.18); } }
@keyframes fadeSlideUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
@keyframes signalPulse { 0% { box-shadow: 0 0 0 rgba(34,197,94,0); } 50% { box-shadow: 0 0 0 10px rgba(34,197,94,0.14); } 100% { box-shadow: 0 0 0 rgba(34,197,94,0); } }
@keyframes btnPop { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
@keyframes dashMove { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -40; } }
@keyframes floatBadge { 0% { transform: translateY(0); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0); } }
@keyframes gridPulse { 0% { opacity: 0.07; } 50% { opacity: 0.14; } 100% { opacity: 0.07; } }
@keyframes skylineDrift { 0% { transform: translateX(0); } 100% { transform: translateX(-80px); } }
@keyframes roadGlow { 0% { opacity: 0.35; } 50% { opacity: 0.6; } 100% { opacity: 0.35; } }
@keyframes intersectionPulse { 0% { transform: scale(0.92); opacity: 0.05; } 45% { transform: scale(1.06); opacity: 0.16; } 100% { transform: scale(0.92); opacity: 0.05; } }
@keyframes scanSweep { 0% { transform: translateX(-40%); opacity: 0; } 20% { opacity: 0.18; } 50% { opacity: 0.14; } 80% { opacity: 0.18; } 100% { transform: translateX(40%); opacity: 0; } }
@keyframes carBob { 0% { transform: translateY(0); } 50% { transform: translateY(-1.8px); } 100% { transform: translateY(0); } }
@keyframes headlightFlicker { 0% { opacity: 0.85; } 60% { opacity: 0.85; } 70% { opacity: 0.55; } 74% { opacity: 0.9; } 78% { opacity: 0.62; } 100% { opacity: 0.85; } }
@keyframes shimmer { 0% { transform: translateX(-120%); opacity: 0; } 15% { opacity: 0.35; } 50% { opacity: 0.22; } 85% { opacity: 0.35; } 100% { transform: translateX(120%); opacity: 0; } }
@keyframes particleFloat { 0% { transform: translate3d(0, 0, 0); opacity: 0.16; } 50% { transform: translate3d(0, -10px, 0); opacity: 0.26; } 100% { transform: translate3d(0, 0, 0); opacity: 0.16; } }

.sth-gridPulse { animation: gridPulse 4.2s ease-in-out infinite; }
.sth-dash { animation: dashMove 1.2s linear infinite; }
.sth-trafficBlink { animation: trafficBlink 1.1s ease-in-out infinite; }
.sth-fade { opacity: 0; animation: fadeSlideUp 0.9s ease forwards; will-change: transform, opacity; }
.sth-badgeFloat { animation: floatBadge 2.6s ease-in-out infinite; will-change: transform; }
.sth-signalDot { animation: signalPulse 1.4s ease-in-out infinite; }
.sth-ctaPulse { animation: pulseGlow 1.8s ease-in-out infinite alternate; transform-origin: center; }
.sth-car { will-change: transform; }
.sth-carBob { animation: carBob 0.9s ease-in-out infinite; will-change: transform; }
.sth-headlight { animation: headlightFlicker 2.6s ease-in-out infinite; }
.sth-roadGlow { animation: roadGlow 2.8s ease-in-out infinite; }
.sth-intersectionPulse { transform-origin: 300px 300px; animation: intersectionPulse 2.4s ease-in-out infinite; }
.sth-skyline { animation: skylineDrift 12s linear infinite; will-change: transform; }
.sth-scan { animation: scanSweep 4.6s ease-in-out infinite; will-change: transform, opacity; mix-blend-mode: screen; }
.sth-btnShimmer { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.sth-btnShimmer::before { content: ""; position: absolute; top: -20%; bottom: -20%; width: 56%; left: 0; background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.55), rgba(255,255,255,0)); transform: translateX(-120%); animation: shimmer 2.6s ease-in-out infinite; }
.sth-particle { animation: particleFloat 3.6s ease-in-out infinite; will-change: transform, opacity; }
.sth-car--right { animation-name: carMove1; animation-timing-function: linear; animation-iteration-count: infinite; }
.sth-car--left { animation-name: carMove2; animation-timing-function: linear; animation-iteration-count: infinite; }
.sth-car--down { animation-name: carMoveV1; animation-timing-function: linear; animation-iteration-count: infinite; }
.sth-car--up { animation-name: carMoveV2; animation-timing-function: linear; animation-iteration-count: infinite; }
.sth-btnPrimary { transition: transform 140ms ease, filter 140ms ease; }
.sth-btnPrimary:hover { transform: scale(1.03); filter: brightness(1.06); }
.sth-btnPrimary:active { animation: btnPop 260ms ease; }
.sth-btnGhost { transition: background-color 140ms ease, border-color 140ms ease, transform 140ms ease; }
.sth-btnGhost:hover { background-color: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.22); transform: translateY(-1px); }
.sth-btnGhost:active { transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  .sth-gridPulse, .sth-dash, .sth-trafficBlink, .sth-badgeFloat, .sth-signalDot, .sth-ctaPulse, .sth-car, .sth-carBob, .sth-headlight, .sth-roadGlow, .sth-intersectionPulse, .sth-skyline, .sth-scan, .sth-particle {
    animation: none !important;
  }
}
`;

    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  const handleCheck = () => { if (typeof onCheckTraffic === 'function') onCheckTraffic(); };
  const handleLearn = () => { if (typeof onLearnMore === 'function') onLearnMore(); };

  const rootStyle = {
    background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 100%)',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 16,
    minHeight: 560
  };

  const contentWrap = {
    position: 'relative',
    zIndex: 10,
    padding: '56px 28px',
    maxWidth: 1100,
    margin: '0 auto'
  };

  // --- FIXED STATS STYLES ---
  const statsWrap = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'flex-start', // Items ko left se start karein
    marginTop: 34,
    paddingTop: 18,
    borderTop: '1px solid rgba(148,163,184,0.16)',
    width: '100%' // Container width 100%
  };

  const statItem = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '120px', // Minimum space for each stat
    flex: '0 1 auto'   // Zyada space na le
  };

  const statNumber = (color) => ({
    fontSize: 22,
    fontWeight: 900,
    color
  });

  const statLabel = {
    marginTop: 6,
    fontSize: 10, // Text thoda chota kiya taake fit ho jaye
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(226, 232, 240, 0.62)',
    fontWeight: 700
  };

  const divider = {
    width: 1,
    height: 30, // Height specify ki divider ke liye
    background: 'rgba(148,163,184,0.16)'
  };

  return (
    <div style={rootStyle}>
      {/* Background and Animations (Unchanged SVG content) */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <svg className="sth-gridPulse" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <defs>
            <pattern id="sthGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="#38bdf8" strokeWidth="0.4" opacity="0.55" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sthGrid)" />
        </svg>
      </div>

      <svg width="100%" height="100%" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        {/* City Skyline & Roads */}
        <g className="sth-skyline" opacity="0.38">
          <path d="M0,135 L40,120 L65,132 L92,110 L120,135 L150,98 L175,136 L210,112 L238,136 L275,92 L300,136 L330,115 L360,136 L395,100 L420,136 L455,112 L480,136 L515,105 L540,136 L570,118 L600,136 L600,0 L0,0 Z" fill="#050713" />
        </g>
        <rect x="0" y="272" width="600" height="56" fill="#1a2030" />
        <rect x="272" y="0" width="56" height="600" fill="#1a2030" />
        <line x1="0" y1="300" x2="600" y2="300" stroke="rgba(255,255,255,0.78)" strokeWidth="4" strokeDasharray="14 14" className="sth-dash" />
        <line x1="300" y1="0" x2="300" y2="600" stroke="rgba(255,255,255,0.78)" strokeWidth="4" strokeDasharray="14 14" className="sth-dash" />
        
        {/* Cars */}
        <Car x={-180} y={284} width={70} height={22} color="#3b82f6" direction="right" delay={0} duration={12} />
        <Car x={-180} y={268} width={74} height={22} color="#f97316" direction="left" delay={0} duration={14} />
      </svg>

      {/* Hero Content */}
      <div style={contentWrap}>
        <div className="sth-fade" style={{ animationDelay: '0s' }}>
          <div className="sth-badgeFloat" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 999, background: 'rgba(15, 23, 42, 0.5)', border: '1px solid rgba(148, 163, 184, 0.22)', color: 'rgba(226, 232, 240, 0.92)', letterSpacing: '0.16em', fontWeight: 700, fontSize: 12 }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#22c55e', boxShadow: '0 0 18px rgba(34,197,94,0.5)' }} />
            <span>system live</span>
          </div>
        </div>

        <div className="sth-fade" style={{ animationDelay: '0.15s' }}>
          <h1 style={{ margin: '18px 0 0', fontSize: 58, lineHeight: 1.02, letterSpacing: '-0.02em', color: '#ffffff', fontWeight: 900 }}>
            <div>Smart Traffic</div>
            <div style={{ display: 'inline-block', background: 'linear-gradient(90deg, #38bdf8, #818cf8, #a78bfa)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Control System</div>
          </h1>
        </div>

        <div className="sth-fade" style={{ animationDelay: '0.3s' }}>
          <p style={{ margin: '16px 0 0', maxWidth: 650, fontSize: 18, lineHeight: 1.6, color: 'rgba(226, 232, 240, 0.78)' }}>
            AI-powered monitoring and signal optimization to reduce congestion, improve flow, and keep roads safer for everyone.
          </p>
        </div>

        {/* Buttons */}
        <div className="sth-fade" style={{ animationDelay: '0.5s', marginTop: 26 }}>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button onClick={handleCheck} className="sth-btnPrimary sth-ctaPulse" style={{ borderRadius: 14, padding: '14px 20px', fontSize: 15, fontWeight: 800, background: 'linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)', color: '#07101f', border: 'none', cursor: 'pointer' }}>Check Traffic ↗</button>
            <button onClick={handleLearn} className="sth-btnGhost" style={{ borderRadius: 14, padding: '14px 20px', fontSize: 15, fontWeight: 800, background: 'rgba(255,255,255,0.02)', color: 'rgba(226, 232, 240, 0.88)', border: '1px solid rgba(255,255,255,0.16)', cursor: 'pointer' }}>Learn More</button>
          </div>
        </div>

        {/* --- FIXED STATS SECTION --- */}
        <div className="sth-fade" style={{ animationDelay: '0.7s' }}>
          <div style={statsWrap}>
            <div style={statItem}>
              <div style={statNumber('#38bdf8')}>98%</div>
              <div style={statLabel}>Uptime</div>
            </div>
            
            <div style={divider} />
            
            <div style={statItem}>
              <div style={statNumber('#818cf8')}>240+</div>
              <div style={statLabel}>Intersections</div>
            </div>
            
            <div style={divider} />
            
            <div style={statItem}>
              <div style={statNumber('#34d399')}>42%</div>
              <div style={statLabel}>Efficiency</div>
            </div>
            
            <div style={divider} />
            
            <div style={statItem}>
              <div style={statNumber('#f59e0b')}>Live</div>
              <div style={statLabel}>Data Feed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}