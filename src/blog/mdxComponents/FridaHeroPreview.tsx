import * as React from 'react'

/**
 * Hero preview "intercept" cards for the Frida post.
 *
 * Two separate dark cards with a gap between them:
 *  1. playground.cpp - the honest C++ calc() function (static).
 *  2. playground - an animated terminal that loops continuously:
 *       honest output -> "frida attaches" marker -> manipulated output (1337)
 *       -> back to honest output.
 *
 * Pure CSS animation (no JS state, SSR-safe). Themed to the site:
 * dark terminal panels with primary-blue (#3eb0ef) accent.
 * Honors prefers-reduced-motion by freezing on the manipulated state.
 */

const css = `
@keyframes fp-line {
  0%, 100% { opacity: 0; transform: translateY(2px); }
  4%, 96%  { opacity: 1; transform: translateY(0); }
}
@keyframes fp-cursor {
  0%, 49%  { opacity: 1; }
  50%, 100% { opacity: 0; }
}
@keyframes fp-pop {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(62,176,239,0); }
  4%       { transform: scale(1.18); box-shadow: 0 0 14px 2px rgba(62,176,239,0.7); }
  18%      { transform: scale(1); box-shadow: 0 0 0 0 rgba(62,176,239,0); }
}

/* 8s loop. Each line owns a slot, staying visible until reset. */
.fp-term .fp-row {
  opacity: 0;
  animation: fp-line 8s linear infinite;
}
.fp-term .fp-row.r0  { animation-delay: 0.0s; }
.fp-term .fp-row.r1  { animation-delay: 0.4s; }
.fp-term .fp-row.r2  { animation-delay: 0.8s; }
.fp-term .fp-row.r3  { animation-delay: 1.6s; }
.fp-term .fp-row.r4  { animation-delay: 2.0s; }
.fp-term .fp-row.r5  { animation-delay: 2.8s; }
.fp-term .fp-row.r6  { animation-delay: 3.2s; }

.fp-term .fp-cursor {
  display: inline-block;
  width: 8px;
  height: 1em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: #3eb0ef;
  animation: fp-cursor 1s step-end infinite;
}

.fp-pill-1337 {
  display: inline-block;
  color: #14161b;
  background: #3eb0ef;
  padding: 0.02rem 0.5rem;
  border-radius: 5px;
  font-weight: 700;
  animation: fp-pop 8s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .fp-term .fp-row,
  .fp-term .fp-cursor,
  .fp-pill-1337 {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
`

const cardStyle: React.CSSProperties = {
  borderRadius: '10px',
  border: '1px solid #23262e',
  background: '#14161b',
  overflow: 'hidden',
  boxShadow: '0 18px 44px -30px rgba(0,0,0,0.55)',
}

const panelTitle = (label: string) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.7rem 1rem',
      background: '#1b1e25',
      borderBottom: '1px solid #23262e',
    }}
  >
    <span
      style={{
        width: 11,
        height: 11,
        borderRadius: '50%',
        background: '#ff5f56',
      }}
    />
    <span
      style={{
        width: 11,
        height: 11,
        borderRadius: '50%',
        background: '#ffbd2e',
      }}
    />
    <span
      style={{
        width: 11,
        height: 11,
        borderRadius: '50%',
        background: '#27c93f',
      }}
    />
    <span
      style={{ marginLeft: '0.6rem', fontSize: '0.74rem', color: '#888d99' }}
    >
      {label}
    </span>
  </div>
)

const FridaHeroPreview: React.FC = () => (
  <figure
    aria-label="Preview: Frida replaces a return value"
    style={{
      margin: '2rem 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.1rem',
      fontFamily: '"JetBrains Mono", "SF Mono", Menlo, monospace',
    }}
  >
    <style>{css}</style>

    {/* Card 1: the honest C++ source being hooked */}
    <div style={cardStyle}>
      {panelTitle('playground.cpp')}
      <div
        style={{
          padding: '1.3rem 1.4rem 1.5rem',
          fontSize: '0.92rem',
          lineHeight: 1.85,
          color: '#d6d9e0',
        }}
      >
        <div>
          <span style={{ color: '#5f6675', fontStyle: 'italic' }}>
            {'// the function we want to spy on'}
          </span>
        </div>
        <div>
          <span style={{ color: '#9ecbff' }}>extern</span>{' '}
          <span style={{ color: '#7fc8e8' }}>&quot;C&quot;</span>{' '}
          <span style={{ color: '#3eb0ef' }}>int</span> calc(
          <span style={{ color: '#3eb0ef' }}>int</span> a,{' '}
          <span style={{ color: '#3eb0ef' }}>int</span> b) {'{'}
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: '#9ecbff' }}>return</span> a + b;
        </div>
        <div>{'}'}</div>

        <div
          style={{
            marginTop: '0.9rem',
            paddingTop: '0.9rem',
            borderTop: '1px dashed #2c2f38',
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: '#5f6675', fontStyle: 'italic' }}>
            {'// calc(42, 43)'}
          </span>
          <span
            style={{
              color: '#767c8a',
              textDecoration: 'line-through',
              textDecorationColor: '#3eb0ef',
            }}
          >
            85
          </span>
          <span style={{ color: '#5f6675' }}>&#10230;</span>
          <span
            style={{
              color: '#14161b',
              background: '#3eb0ef',
              padding: '0.05rem 0.55rem',
              borderRadius: '5px',
              fontWeight: 700,
            }}
          >
            1337
          </span>
        </div>
      </div>
    </div>

    {/* Card 2: the live, animated terminal output */}
    <div style={cardStyle}>
      {panelTitle('playground — live output')}
      <div
        className="fp-term"
        style={{
          padding: '1.2rem 1.4rem 1.4rem',
          fontSize: '0.88rem',
          lineHeight: 2,
          color: '#9aa0ad',
          minHeight: '12.5rem',
        }}
      >
        <div className="fp-row r0">
          <span style={{ color: '#5f6675' }}>calc(0, 1)</span> = 1
        </div>
        <div className="fp-row r1">
          <span style={{ color: '#5f6675' }}>calc(1, 2)</span> = 3
        </div>
        <div className="fp-row r2">
          <span style={{ color: '#5f6675' }}>calc(2, 3)</span> = 5
        </div>
        <div className="fp-row r3" style={{ color: '#3eb0ef' }}>
          $ frida -n playground -l hook.js
        </div>
        <div className="fp-row r4" style={{ color: '#3eb0ef' }}>
          [*] hook attached
        </div>
        <div className="fp-row r5">
          <span style={{ color: '#5f6675' }}>calc(42, 43)</span> ={' '}
          <span className="fp-pill-1337">1337</span>
        </div>
        <div className="fp-row r6">
          <span style={{ color: '#5f6675' }}>calc(43, 44)</span> ={' '}
          <span className="fp-pill-1337">1337</span>
          <span className="fp-cursor" />
        </div>
      </div>
    </div>
  </figure>
)

export default FridaHeroPreview
