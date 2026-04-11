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
  .sth-gridPulse,
  .sth-dash,
  .sth-trafficBlink,
  .sth-badgeFloat,
  .sth-signalDot,
  .sth-ctaPulse,
  .sth-car,
  .sth-carBob,
  .sth-headlight,
  .sth-roadGlow,
  .sth-intersectionPulse,
  .sth-skyline,
  .sth-scan,
  .sth-particle {
    animation: none !important;
  }
}
`;

    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  const handleCheck = () => {
    if (typeof onCheckTraffic === 'function') onCheckTraffic();
  };

  const handleLearn = () => {
    if (typeof onLearnMore === 'function') onLearnMore();
  };

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

  const badgeOuter = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 14px',
    borderRadius: 999,
    background: 'rgba(15, 23, 42, 0.5)',
    border: '1px solid rgba(148, 163, 184, 0.22)',
    color: 'rgba(226, 232, 240, 0.92)',
    letterSpacing: '0.16em',
    fontWeight: 700,
    fontSize: 12
  };

  const dotStyle = {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: '#22c55e',
    boxShadow: '0 0 18px rgba(34,197,94,0.5)'
  };

  const headlineStyle = {
    margin: '18px 0 0',
    fontSize: 58,
    lineHeight: 1.02,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    fontWeight: 900
  };

  const gradientText = {
    display: 'inline-block',
    background: 'linear-gradient(90deg, #38bdf8, #818cf8, #a78bfa)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  };

  const subtitleStyle = {
    margin: '16px 0 0',
    maxWidth: 650,
    fontSize: 18,
    lineHeight: 1.6,
    color: 'rgba(226, 232, 240, 0.78)'
  };

  const btnRow = {
    display: 'flex',
    gap: 14,
    flexWrap: 'wrap',
    marginTop: 26
  };

  const btnBase = {
    borderRadius: 14,
    padding: '14px 16px',
    fontSize: 15,
    fontWeight: 800,
    letterSpacing: '0.02em',
    cursor: 'pointer',
    border: '1px solid transparent',
    outline: 'none'
  };

  const btnPrimary = {
    ...btnBase,
    background: 'linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)',
    color: '#07101f',
    boxShadow: '0 16px 50px rgba(14,165,233,0.15)'
  };

  const btnGhost = {
    ...btnBase,
    background: 'rgba(255,255,255,0.02)',
    color: 'rgba(226, 232, 240, 0.88)',
    borderColor: 'rgba(255,255,255,0.16)'
  };

  const statsWrap = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 18,
    alignItems: 'stretch',
    marginTop: 34,
    paddingTop: 18,
    borderTop: '1px solid rgba(148,163,184,0.16)'
  };

  const statItem = {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 18,
    minWidth: 160
  };

  const statNumber = (color) => ({
    fontSize: 22,
    fontWeight: 900,
    color
  });

  const statLabel = {
    marginTop: 6,
    fontSize: 12,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(226, 232, 240, 0.62)',
    fontWeight: 700
  };

  const divider = {
    width: 1,
    background: 'rgba(148,163,184,0.16)'
  };

  return (
    <div style={rootStyle}>
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

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0 }}
        aria-hidden="true"
        focusable="false"
      >
        <g className="sth-skyline" opacity="0.38">
          <path
            d="M0,135 L40,120 L65,132 L92,110 L120,135 L150,98 L175,136 L210,112 L238,136 L275,92 L300,136 L330,115 L360,136 L395,100 L420,136 L455,112 L480,136 L515,105 L540,136 L570,118 L600,136 L600,0 L0,0 Z"
            fill="#050713"
          />
          <path
            d="M18,132 h20 v-40 h18 v40 h12 v-18 h18 v18 h22 v-54 h14 v54 h18 v-28 h18 v28 h22 v-42 h16 v42 h18 v-24 h14 v24 h22 v-60 h16 v60 h18 v-34 h16 v34 h20 v-46 h14 v46 h22 v-26 h14 v26 h34"
            fill="#070a18"
            opacity="0.85"
          />
        </g>

        <rect x="0" y="272" width="600" height="56" fill="#1a2030" />
        <rect x="272" y="0" width="56" height="600" fill="#1a2030" />

        <rect x="0" y="272" width="600" height="4" fill="#f59e0b" opacity="0.5" />
        <rect x="0" y="324" width="600" height="4" fill="#f59e0b" opacity="0.5" />
        <rect x="272" y="0" width="4" height="600" fill="#f59e0b" opacity="0.5" />
        <rect x="324" y="0" width="4" height="600" fill="#f59e0b" opacity="0.5" />

        <line x1="0" y1="300" x2="600" y2="300" stroke="rgba(255,255,255,0.78)" strokeWidth="4" strokeDasharray="14 14" className="sth-dash" />
        <line x1="300" y1="0" x2="300" y2="600" stroke="rgba(255,255,255,0.78)" strokeWidth="4" strokeDasharray="14 14" className="sth-dash" />

        <rect x="272" y="272" width="56" height="56" fill="#202841" opacity="0.95" />
        <circle cx="300" cy="300" r="46" fill="#38bdf8" opacity="0.12" className="sth-intersectionPulse" />
        <circle cx="300" cy="300" r="86" fill="#818cf8" opacity="0.05" className="sth-intersectionPulse" />

        <g className="sth-roadGlow" opacity="0.55">
          <rect x="0" y="269" width="600" height="3" fill="#38bdf8" opacity="0.12" />
          <rect x="0" y="328" width="600" height="3" fill="#818cf8" opacity="0.1" />
          <rect x="269" y="0" width="3" height="600" fill="#38bdf8" opacity="0.12" />
          <rect x="328" y="0" width="3" height="600" fill="#818cf8" opacity="0.1" />
        </g>

        <g opacity="0.9">
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={`cwTop${i}`} x={250 + i * 16} y="256" width="10" height="18" rx="2" fill="#ffffff" opacity="0.55" />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={`cwBottom${i}`} x={250 + i * 16} y="326" width="10" height="18" rx="2" fill="#ffffff" opacity="0.55" />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={`cwLeft${i}`} x="256" y={250 + i * 16} width="18" height="10" rx="2" fill="#ffffff" opacity="0.55" />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={`cwRight${i}`} x="326" y={250 + i * 16} width="18" height="10" rx="2" fill="#ffffff" opacity="0.55" />
          ))}
        </g>

        <g transform="translate(360 228)">
          <rect x="0" y="0" width="10" height="112" rx="5" fill="#101624" opacity="0.95" />
          <rect x="-10" y="18" width="30" height="72" rx="10" fill="#0c1222" stroke="rgba(255,255,255,0.12)" />
          <circle cx="5" cy="32" r="7" fill="#ef4444" opacity="0.9" />
          <circle cx="5" cy="54" r="7" fill="#f59e0b" opacity="0.9" />
          <circle cx="5" cy="76" r="7" fill="#22c55e" className="sth-trafficBlink" />
        </g>

        <Car x={-180} y={284} width={70} height={22} color="#3b82f6" lightColor="#fde68a" direction="right" delay={0} duration={12} />
        <Car x={-180} y={312} width={76} height={24} color="#8b5cf6" lightColor="#fde68a" direction="right" delay={-6} duration={12} />

        <Car x={-180} y={268} width={74} height={22} color="#f97316" lightColor="#fde68a" direction="left" delay={0} duration={14} />
        <Car x={-180} y={340} width={78} height={24} color="#ec4899" lightColor="#fde68a" direction="left" delay={-7} duration={14} />

        <Car x={284} y={-80} width={70} height={22} color="#06b6d4" lightColor="#fde68a" direction="down" delay={0} duration={13} />
        <Car x={312} y={-80} width={76} height={24} color="#22c55e" lightColor="#fde68a" direction="down" delay={-6.5} duration={13} />

        <Car x={268} y={-80} width={72} height={22} color="#e11d48" lightColor="#fde68a" direction="up" delay={0} duration={15} />
        <Car x={340} y={-80} width={78} height={24} color="#a855f7" lightColor="#fde68a" direction="up" delay={-7.5} duration={15} />

      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 65% 70% at 50% 45%, rgba(10,15,30,0.82) 40%, transparent 100%)',
          pointerEvents: 'none'
        }}
      />

      <div
        className="sth-scan"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.14) 35%, rgba(129,140,248,0.18) 50%, rgba(56,189,248,0.14) 65%, rgba(56,189,248,0) 100%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, idx) => {
          const left = 8 + ((idx * 73) % 84);
          const top = 14 + ((idx * 41) % 68);
          const size = 2 + (idx % 3);
          const delay = (idx % 6) * -0.6;
          const duration = 3.4 + (idx % 5) * 0.7;
          return (
            <div
              key={`p${idx}`}
              className="sth-particle"
              style={{
                position: 'absolute',
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                borderRadius: 999,
                background: idx % 3 === 0 ? 'rgba(56,189,248,0.9)' : idx % 3 === 1 ? 'rgba(129,140,248,0.9)' : 'rgba(167,139,250,0.9)',
                opacity: 0.18,
                filter: 'blur(0.2px)',
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              }}
            />
          );
        })}
      </div>

      <div style={contentWrap}>
        <div className="sth-fade" style={{ animationDelay: '0s' }}>
          <div className="sth-badgeFloat" style={badgeOuter}>
            <span className="sth-signalDot" style={dotStyle} />
            <span>system live</span>
          </div>
        </div>

        <div className="sth-fade" style={{ animationDelay: '0.15s' }}>
          <h1 style={headlineStyle}>
            <div>Smart Traffic</div>
            <div style={gradientText}>Control System</div>
          </h1>
        </div>

        <div className="sth-fade" style={{ animationDelay: '0.3s' }}>
          <p style={subtitleStyle}>
            AI-powered monitoring and signal optimization to reduce congestion, improve flow, and keep roads safer for everyone.
          </p>
        </div>

        <div className="sth-fade" style={{ animationDelay: '0.5s' }}>
          <div style={btnRow}>
            <button
              type="button"
              className="sth-btnPrimary sth-ctaPulse"
              style={{ ...btnPrimary, position: 'relative', overflow: 'hidden' }}
              onClick={handleCheck}
              aria-label="Check Traffic"
            >
              <span className="sth-btnShimmer" aria-hidden="true" />
              <span style={{ position: 'relative', zIndex: 1 }}>Check Traffic ↗</span>
            </button>
            <button
              type="button"
              className="sth-btnGhost"
              style={btnGhost}
              onClick={handleLearn}
              aria-label="Learn More"
            >
              Learn More
            </button>
          </div>
        </div>

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
              <div style={statLabel}>Less Congestion</div>
            </div>
            <div style={divider} />
            <div style={{ ...statItem, paddingRight: 0 }}>
              <div style={statNumber('#f59e0b')}>Live</div>
              <div style={statLabel}>Data Feed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
