import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function BootScreen({ onComplete }) {
  const { personal } = portfolioData;
  const [phase, setPhase] = useState('enter'); // enter → loading → welcome → exit

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase('loading'), 600);   // show loader
    const t2 = setTimeout(() => setPhase('welcome'), 2800);  // show Welcome
    const t3 = setTimeout(() => setPhase('exit'), 4000);     // start fade out
    const t4 = setTimeout(() => onComplete(), 4700);         // unmount

    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  return (
    <div style={{ ...styles.overlay, opacity: phase === 'exit' ? 0 : 1 }}>

      {/* Blurred background */}
      <div style={styles.bg} />

      {/* Center content */}
      <div style={styles.center}>

        {/* Avatar ring glow */}
        <div style={{
          ...styles.avatarRing,
          transform: phase === 'enter' ? 'scale(0.7)' : 'scale(1)',
          opacity: phase === 'enter' ? 0 : 1,
        }}>
          <div style={styles.avatarGlow} />
          <img src="/boot-laptop.png" alt="AI Coder" style={styles.avatar} />
        </div>

        {/* Name */}
        <div style={{
          ...styles.name,
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'translateY(12px)' : 'translateY(0)',
        }}>
          {personal.firstName} {personal.lastName}
        </div>

        {/* Role */}
        <div style={{
          ...styles.role,
          opacity: phase === 'enter' ? 0 : 1,
        }}>
          {personal.role}
        </div>

        {/* Loader dots */}
        {phase === 'loading' && (
          <div style={styles.dotsRow}>
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} style={{ ...styles.dot, animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        )}

        {/* Welcome text */}
        {phase === 'welcome' && (
          <div style={styles.welcome}>Welcome</div>
        )}

      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(10, 10, 20, 0.92)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    transition: 'opacity 0.7s ease',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.18) 0%, rgba(168,85,247,0.1) 40%, transparent 75%)',
    pointerEvents: 'none',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '18px',
    position: 'relative',
    zIndex: 1,
  },
  avatarRing: {
    position: 'relative',
    width: '210px',
    height: '210px',
    borderRadius: '28px',
    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
    border: '2px solid rgba(168, 85, 247, 0.55)',
    boxShadow: '0 0 0 8px rgba(99,102,241,0.1), 0 0 60px rgba(99,102,241,0.4)',
    overflow: 'hidden',
  },
  avatarGlow: {
    position: 'absolute',
    inset: '-8px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(168,85,247,0.3), transparent 70%)',
    filter: 'blur(12px)',
    animation: 'pulse 2.5s ease-in-out infinite',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: '0',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  name: {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: "'Outfit', sans-serif",
    letterSpacing: '0.5px',
    transition: 'all 0.7s ease 0.2s',
    textShadow: '0 2px 20px rgba(168,85,247,0.4)',
  },
  role: {
    color: 'rgba(168,85,247,0.85)',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '2px',
    textTransform: 'uppercase',
    transition: 'opacity 0.6s ease 0.4s',
    marginTop: '-8px',
  },
  dotsRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '12px',
    alignItems: 'center',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.75)',
    animation: 'win11Dot 1.2s ease-in-out infinite',
  },
  welcome: {
    marginTop: '12px',
    color: 'rgba(255,255,255,0.9)',
    fontSize: '22px',
    fontWeight: '300',
    fontFamily: "'Outfit', sans-serif",
    letterSpacing: '6px',
    textTransform: 'uppercase',
    animation: 'fadeIn 0.6s ease forwards',
  },
};
