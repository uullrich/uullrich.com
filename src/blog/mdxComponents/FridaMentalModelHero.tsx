import * as React from 'react'

/**
 * "How Frida works" mental-model diagram.
 * Recolored to the site theme: primary blue (#3eb0ef) as the Frida-agent
 * accent, dark code panels, light card-colored background.
 */
const FridaMentalModelHero: React.FC = () => (
  <figure style={{ margin: '2rem 0' }}>
    <svg
      viewBox="0 0 760 300"
      role="img"
      aria-label="How Frida works: driven from your terminal, the Frida agent (hook.js) runs inside the target process address space and hooks the function calc via Interceptor."
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
    >
      <defs>
        <marker
          id="fmm-ah"
          markerWidth="9"
          markerHeight="9"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#333333" />
        </marker>
        <marker
          id="fmm-ahc"
          markerWidth="9"
          markerHeight="9"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#3eb0ef" />
        </marker>
        <marker
          id="fmm-ahcL"
          markerWidth="9"
          markerHeight="9"
          refX="2"
          refY="4"
          orient="auto"
        >
          <path d="M8,0 L0,4 L8,8 Z" fill="#3eb0ef" />
        </marker>
      </defs>

      <rect x="0" y="0" width="760" height="300" fill="#f7f7f7" />
      <text
        x="24"
        y="26"
        fontFamily="monospace"
        fontSize="11"
        letterSpacing="2"
        fill="#1f7bb0"
      >
        HOW FRIDA WORKS &#183; THE MENTAL MODEL
      </text>

      <rect
        x="24"
        y="58"
        width="210"
        height="150"
        rx="10"
        fill="#ffffff"
        stroke="#d6d6d6"
      />
      <text
        x="40"
        y="86"
        fontFamily="monospace"
        fontSize="10.5"
        letterSpacing="1.5"
        fill="#1f7bb0"
      >
        YOUR TERMINAL
      </text>
      <text x="40" y="104" fontFamily="sans-serif" fontSize="12" fill="#5f636b">
        Host &#183; controller
      </text>
      <rect x="40" y="118" width="178" height="74" rx="6" fill="#14161b" />
      <text x="52" y="145" fontFamily="monospace" fontSize="11" fill="#d6d9e0">
        frida -f ./playground
      </text>
      <text x="52" y="164" fontFamily="monospace" fontSize="11" fill="#d6d9e0">
        &#160;&#160;&#160;&#160;&#160;&#160;&#160;-l hook.js
      </text>
      <text x="52" y="183" fontFamily="monospace" fontSize="9.5" fill="#7ee787">
        on your machine
      </text>

      <text
        x="266"
        y="128"
        fontFamily="sans-serif"
        fontSize="11"
        fill="#5f636b"
        textAnchor="middle"
      >
        drives
      </text>
      <line
        x1="234"
        y1="133"
        x2="298"
        y2="133"
        stroke="#333333"
        strokeWidth="1.5"
        markerEnd="url(#fmm-ah)"
      />

      <rect
        x="300"
        y="52"
        width="436"
        height="166"
        rx="12"
        fill="#14161b"
        stroke="#2c2f38"
      />
      <text
        x="318"
        y="78"
        fontFamily="monospace"
        fontSize="10.5"
        letterSpacing="1.2"
        fill="#7fc8e8"
      >
        TARGET PROCESS &#183; playground
      </text>
      <text x="318" y="95" fontFamily="sans-serif" fontSize="11" fill="#868d9c">
        one single address space
      </text>

      <rect
        x="318"
        y="106"
        width="176"
        height="96"
        rx="8"
        fill="#1b1e25"
        stroke="#2c2f38"
      />
      <text
        x="332"
        y="128"
        fontFamily="monospace"
        fontSize="9.5"
        letterSpacing="1"
        fill="#9ecbff"
      >
        NATIVE CODE
      </text>
      <text x="332" y="156" fontFamily="monospace" fontSize="13" fill="#d6d9e0">
        calc(a, b)
      </text>
      <text
        x="332"
        y="176"
        fontFamily="monospace"
        fontSize="10.5"
        fill="#868d9c"
      >
        {'{ return a + b; }'}
      </text>

      <rect
        x="542"
        y="106"
        width="176"
        height="96"
        rx="8"
        fill="#1b1e25"
        stroke="#3eb0ef"
      />
      <text
        x="556"
        y="128"
        fontFamily="monospace"
        fontSize="9.5"
        letterSpacing="1"
        fill="#3eb0ef"
      >
        FRIDA AGENT
      </text>
      <text x="556" y="156" fontFamily="monospace" fontSize="13" fill="#d6d9e0">
        hook.js
      </text>
      <text
        x="556"
        y="176"
        fontFamily="sans-serif"
        fontSize="10.5"
        fill="#868d9c"
      >
        runs IN HERE
      </text>

      <line
        x1="498"
        y1="150"
        x2="538"
        y2="150"
        stroke="#3eb0ef"
        strokeWidth="1.6"
        markerEnd="url(#fmm-ahc)"
        markerStart="url(#fmm-ahcL)"
      />
      <text
        x="518"
        y="213"
        fontFamily="monospace"
        fontSize="10"
        fill="#7fc8e8"
        textAnchor="middle"
      >
        Interceptor.attach() &#183; onEnter / onLeave
      </text>

      <rect x="24" y="244" width="13" height="13" rx="3" fill="#3eb0ef" />
      <text x="46" y="255" fontFamily="sans-serif" fontSize="12" fill="#333333">
        <tspan fontWeight="bold">attach</tspan>: latch onto a process that is
        already running
      </text>
      <rect x="24" y="272" width="13" height="13" rx="3" fill="#333333" />
      <text x="46" y="283" fontFamily="sans-serif" fontSize="12" fill="#333333">
        <tspan fontWeight="bold">spawn (-f)</tspan>: launch the program fresh
        and control it from line one
      </text>
    </svg>
    <figcaption
      style={{
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        color: '#6b6e76',
        marginTop: '0.7rem',
        textAlign: 'center',
      }}
    >
      Your script runs <em>inside</em> the target process, driven from your
      terminal.
    </figcaption>
  </figure>
)

export default FridaMentalModelHero
