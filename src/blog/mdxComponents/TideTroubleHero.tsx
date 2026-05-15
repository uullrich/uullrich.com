import * as React from 'react'

const TideTroubleHero: React.FC = () => (
  <figure style={{ position: 'relative', margin: 10 }}>
    <style>{`
      .tide-play-btn {
        transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
      }
      .tide-play-btn:hover {
        background: #1d8a7a !important;
        transform: scale(1.07);
        box-shadow: 0 0 0 7px rgba(43,184,168,0.35), 0 14px 52px rgba(0,0,0,0.65) !important;
      }
    `}</style>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(5, 25, 40, 0.38)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <a
        href="https://tide-trouble.uullrich.com"
        target="_blank"
        rel="noopener noreferrer"
        className="tide-play-btn"
        style={{
          background: '#2bb8a8',
          color: '#fff',
          border: 'none',
          borderRadius: '999px',
          padding: '14px 40px',
          fontSize: '18px',
          fontWeight: 800,
          letterSpacing: '0.05em',
          textDecoration: 'none',
          textShadow: 'none',
          backgroundImage: 'none',
          boxShadow:
            '0 0 0 5px rgba(43,184,168,0.25), 0 8px 40px rgba(0,0,0,0.55)',
          whiteSpace: 'nowrap',
        }}
      >
        ▶ Play now
      </a>
    </div>
    <svg
      viewBox="0 0 640 360"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
    >
      <style>{`
        @keyframes rayPulse {
          0%, 100% { opacity: 0.18; }
          50% { opacity: 0.42; }
        }
        @keyframes fishSwim {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-24px); }
        }
        @keyframes fishSwimAlt {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(20px); }
        }
        @keyframes kelpSway {
          0%, 100% { transform: rotate(-2.5deg); }
          50% { transform: rotate(2.5deg); }
        }
        @keyframes kelpSwayAlt {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-2deg); }
        }
        @keyframes diverFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bubbleRise {
          0%   { transform: translateY(0px);   opacity: 0.85; }
          80%  { opacity: 0.4; }
          100% { transform: translateY(-56px); opacity: 0; }
        }
        @keyframes pearlPulse {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 1; }
        }
        @keyframes crabSway {
          0%, 100% { transform: translateX(0px); }
          33%      { transform: translateX(-2.5px); }
          66%      { transform: translateX(2.5px); }
        }
      `}</style>

      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a7a9e" />
          <stop offset="50%" stopColor="#134c66" />
          <stop offset="100%" stopColor="#0a2e44" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#bg)" />

      <g style={{ animation: 'rayPulse 6s ease-in-out infinite' }}>
        <path d="M80 0 L140 0 L100 360 L60 360 Z" fill="#fff" />
        <path d="M280 0 L340 0 L300 360 L260 360 Z" fill="#fff" />
        <path d="M480 0 L540 0 L500 360 L460 360 Z" fill="#fff" />
      </g>

      <g style={{ animation: 'fishSwim 8s ease-in-out infinite' }}>
        <ellipse cx="180" cy="80" rx="14" ry="6" fill="#1d8a7a" opacity="0.7" />
        <path d="M194 80 L204 75 L204 85 Z" fill="#1d8a7a" opacity="0.7" />
      </g>
      <g
        style={{
          animation: 'fishSwimAlt 10s ease-in-out infinite',
          animationDelay: '-3s',
        }}
      >
        <ellipse
          cx="460"
          cy="140"
          rx="12"
          ry="5"
          fill="#6a4ba8"
          opacity="0.65"
        />
        <path d="M472 140 L480 136 L480 144 Z" fill="#6a4ba8" opacity="0.65" />
      </g>

      <g
        fill="#2e8a52"
        style={{
          transformBox: 'fill-box',
          transformOrigin: 'center bottom',
          animation: 'kelpSway 4s ease-in-out infinite',
        }}
      >
        <path
          d="M40 360 Q36 280 44 200 Q40 140 38 80"
          stroke="#2e8a52"
          strokeWidth="4"
          fill="none"
        />
        <ellipse
          cx="40"
          cy="120"
          rx="10"
          ry="3"
          transform="rotate(-25 40 120)"
        />
        <ellipse
          cx="40"
          cy="160"
          rx="10"
          ry="3"
          transform="rotate(25 40 160)"
        />
        <ellipse
          cx="40"
          cy="200"
          rx="10"
          ry="3"
          transform="rotate(-25 40 200)"
        />
      </g>
      <g
        fill="#2e8a52"
        style={{
          transformBox: 'fill-box',
          transformOrigin: 'center bottom',
          animation: 'kelpSwayAlt 5s ease-in-out infinite',
          animationDelay: '-2s',
        }}
      >
        <path
          d="M120 360 Q124 290 116 220 Q120 170 124 120"
          stroke="#2e8a52"
          strokeWidth="4"
          fill="none"
        />
        <ellipse
          cx="120"
          cy="160"
          rx="10"
          ry="3"
          transform="rotate(20 120 160)"
        />
        <ellipse
          cx="120"
          cy="200"
          rx="10"
          ry="3"
          transform="rotate(-20 120 200)"
        />
        <ellipse
          cx="120"
          cy="240"
          rx="10"
          ry="3"
          transform="rotate(20 120 240)"
        />
      </g>

      <rect x="290" y="200" width="160" height="20" rx="10" fill="#d85a3e" />
      <rect x="290" y="200" width="160" height="12" rx="8" fill="#ff7a5a" />
      <circle cx="330" cy="206" r="2" fill="#f5c14a" />
      <circle cx="380" cy="206" r="1.5" fill="#f5c14a" />
      <circle cx="420" cy="206" r="2" fill="#f5c14a" />

      <rect x="0" y="320" width="640" height="40" fill="#d4a85a" />
      <path
        d="M0 322 Q40 318 80 322 Q120 326 160 320 Q200 324 240 320 Q280 326 320 322 Q360 318 400 322 Q440 326 480 320 Q520 324 560 322 Q600 318 640 322 L640 340 L0 340 Z"
        fill="#f0d68a"
      />

      <circle
        cx="240"
        cy="240"
        r="6"
        fill="#fff"
        style={{ animation: 'pearlPulse 2.5s ease-in-out infinite' }}
      />
      <circle
        cx="262"
        cy="240"
        r="6"
        fill="#fff"
        style={{
          animation: 'pearlPulse 2.5s ease-in-out infinite',
          animationDelay: '-1.2s',
        }}
      />

      <path d="M520 180 L532 188 L526 208 L518 208 L514 188 Z" fill="#1d8a7a" />
      <path d="M520 180 L532 188 L526 208 L520 188 Z" fill="#2bb8a8" />

      <g style={{ animation: 'crabSway 2.2s ease-in-out infinite' }}>
        <g transform="translate(360 290)">
          <ellipse cx="0" cy="6" rx="14" ry="8" fill="#ff7a5a" />
          <circle cx="-12" cy="0" r="5" fill="#d85a3e" />
          <circle cx="12" cy="0" r="5" fill="#d85a3e" />
          <line
            x1="-3"
            y1="0"
            x2="-2"
            y2="-8"
            stroke="#d85a3e"
            strokeWidth="1.5"
          />
          <line
            x1="3"
            y1="0"
            x2="2"
            y2="-8"
            stroke="#d85a3e"
            strokeWidth="1.5"
          />
          <circle cx="-2" cy="-10" r="2" fill="#fff" />
          <circle cx="2" cy="-10" r="2" fill="#fff" />
          <circle cx="-2" cy="-10" r="1" fill="#1a1f2e" />
          <circle cx="2" cy="-10" r="1" fill="#1a1f2e" />
        </g>
      </g>

      <g style={{ animation: 'diverFloat 3s ease-in-out infinite' }}>
        <g transform="translate(170 220)">
          <ellipse
            cx="-8"
            cy="40"
            rx="8"
            ry="4"
            fill="#d49b2e"
            transform="rotate(-20 -8 40)"
          />
          <ellipse
            cx="8"
            cy="40"
            rx="8"
            ry="4"
            fill="#f5c14a"
            transform="rotate(20 8 40)"
          />
          <rect
            x="-7"
            y="20"
            width="6"
            height="14"
            rx="2.5"
            fill="#1d8a7a"
            transform="rotate(-10 -4 27)"
          />
          <rect
            x="1"
            y="20"
            width="6"
            height="14"
            rx="2.5"
            fill="#2bb8a8"
            transform="rotate(10 4 27)"
          />
          <path
            d="M-12 -4 Q-12 -12 0 -12 Q12 -12 12 -4 L12 18 Q12 22 8 22 L-8 22 Q-12 22 -12 18 Z"
            fill="#2bb8a8"
          />
          <rect x="-3" y="-2" width="6" height="14" rx="2" fill="#f5c14a" />
          <rect
            x="-18"
            y="-16"
            width="5"
            height="14"
            rx="2.5"
            fill="#2bb8a8"
            transform="rotate(-30 -15 -10)"
          />
          <rect
            x="13"
            y="-16"
            width="5"
            height="14"
            rx="2.5"
            fill="#1d8a7a"
            transform="rotate(30 15 -10)"
          />
          <circle cx="0" cy="-20" r="14" fill="#b8e8ec" />
          <circle cx="0" cy="-18" r="9" fill="#f5c89a" />
          <path
            d="M-8 -28 Q-3 -32 3 -32 Q8 -30 6 -27 Q0 -29 -8 -25 Z"
            fill="#1a1f2e"
          />
          <circle cx="-3" cy="-18" r="1.6" fill="#1a1f2e" />
          <circle cx="3" cy="-18" r="1.6" fill="#1a1f2e" />
          <path
            d="M-3 -13 Q0 -11 3 -13"
            stroke="#1a1f2e"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="-5" cy="-24" rx="3" ry="5" fill="#fff" opacity="0.5" />
          <circle
            cx="0"
            cy="-20"
            r="14"
            fill="none"
            stroke="#7fc8d0"
            strokeWidth="1"
          />
        </g>
      </g>

      <g fill="#fff">
        <circle
          cx="150"
          cy="270"
          r="4"
          style={{ animation: 'bubbleRise 2.5s ease-in infinite' }}
        />
        <circle
          cx="162"
          cy="276"
          r="3"
          style={{
            animation: 'bubbleRise 2.5s ease-in infinite',
            animationDelay: '-0.8s',
          }}
        />
        <circle
          cx="178"
          cy="274"
          r="5"
          style={{
            animation: 'bubbleRise 2.5s ease-in infinite',
            animationDelay: '-1.6s',
          }}
        />
        <circle
          cx="192"
          cy="278"
          r="3.5"
          style={{
            animation: 'bubbleRise 2.5s ease-in infinite',
            animationDelay: '-2.1s',
          }}
        />
      </g>
    </svg>
  </figure>
)

export default TideTroubleHero
