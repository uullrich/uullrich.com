import * as React from 'react'

/**
 * Hero preview "intercept" card for the Frida post.
 * Shows Interceptor.attach() overwriting a return value (85 -> 1337).
 * Themed to the site: dark terminal panel with primary-blue (#3eb0ef) accent.
 */
const FridaHeroPreview: React.FC = () => (
  <figure
    aria-label="Preview: Frida replaces a return value"
    style={{
      margin: '2rem 0',
      borderRadius: '10px',
      border: '1px solid #23262e',
      background: '#14161b',
      overflow: 'hidden',
      fontFamily: '"JetBrains Mono", "SF Mono", Menlo, monospace',
      boxShadow: '0 18px 44px -30px rgba(0,0,0,0.55)',
    }}
  >
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
        hook.js
      </span>
    </div>

    <div
      style={{
        padding: '1.3rem 1.4rem 1.5rem',
        fontSize: '0.92rem',
        lineHeight: 1.85,
        color: '#d6d9e0',
      }}
    >
      <div>
        <span style={{ color: '#3eb0ef' }}>Interceptor</span>.
        <span style={{ color: '#9ecbff' }}>attach</span>(addr, {'{'}
      </div>
      <div style={{ paddingLeft: '1.5rem' }}>
        <span style={{ color: '#9ecbff' }}>onLeave</span>(retval) {'{'}
      </div>
      <div style={{ paddingLeft: '3rem' }}>
        retval.<span style={{ color: '#9ecbff' }}>replace</span>(
        <span style={{ color: '#7fc8e8' }}>1337</span>)&nbsp;&nbsp;
        <span style={{ color: '#5f6675', fontStyle: 'italic' }}>
          // whatever came out
        </span>
      </div>
      <div style={{ paddingLeft: '1.5rem' }}>{'}'}</div>
      <div>{'});'}</div>

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
          // calc(42, 43)
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
  </figure>
)

export default FridaHeroPreview
