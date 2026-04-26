import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function BootScreen({ onComplete }) {
  const { personal } = portfolioData;
  const [phase, setPhase] = useState('lock'); // lock → signing → exit
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSignIn = () => {
    if (phase !== 'lock') return;
    setPhase('signing');
    
    // Auto transition to desktop after signing in animation
    setTimeout(() => {
      setPhase('exit');
      setTimeout(() => onComplete(), 800);
    }, 3000);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <div 
      style={{ ...styles.overlay, opacity: phase === 'exit' ? 0 : 1 }}
      onClick={handleSignIn}
    >
      {/* Background with mica/blur effect */}
      <div style={{
        ...styles.bg,
        filter: phase === 'signing' ? 'blur(40px) brightness(0.7)' : 'blur(0px) brightness(1)',
        transition: 'filter 1s ease',
      }} />

      {/* Lock Screen UI */}
      {phase === 'lock' && (
        <div style={styles.lockContent}>
          <div style={styles.time}>{formatTime(time)}</div>
          <div style={styles.date}>{formatDate(time)}</div>
          <div style={styles.signInPrompt}>Click anywhere to sign in</div>
        </div>
      )}

      {/* Signing In UI */}
      {phase === 'signing' && (
        <div style={styles.signingContent}>
          <div style={styles.avatarContainer}>
            <img 
              src={personal.profileImage} 
              alt={personal.firstName} 
              style={styles.avatar} 
            />
          </div>
          
          <div style={styles.name}>
            {personal.firstName} {personal.lastName}
          </div>

          <div style={styles.welcomeRow}>
            <div style={styles.welcomeText}>Welcome</div>
          </div>

          <div style={styles.dotsRow}>
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} style={{ ...styles.dot, animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      )}
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
    background: '#000',
    cursor: 'pointer',
    transition: 'opacity 0.8s ease',
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
  },
  lockContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    textShadow: '0 2px 20px rgba(0,0,0,0.3)',
    animation: 'fadeIn 1s ease forwards',
  },
  time: {
    fontSize: '110px',
    fontWeight: '700',
    fontFamily: "'Outfit', sans-serif",
    letterSpacing: '-2px',
  },
  date: {
    fontSize: '24px',
    fontWeight: '400',
    marginTop: '-10px',
    opacity: 0.9,
  },
  signInPrompt: {
    marginTop: '60px',
    fontSize: '16px',
    fontWeight: '300',
    opacity: 0.7,
    letterSpacing: '1px',
    animation: 'pulse 2s infinite',
  },
  signingContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    animation: 'fadeIn 0.6s ease forwards',
  },
  avatarContainer: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    border: '2px solid rgba(255,255,255,0.2)',
    padding: '4px',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  name: {
    color: '#fff',
    fontSize: '32px',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif",
    marginTop: '10px',
  },
  welcomeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '-5px',
  },
  welcomeText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '20px',
    fontWeight: '300',
    letterSpacing: '4px',
    textTransform: 'uppercase',
  },
  dotsRow: {
    display: 'flex',
    gap: '8px',
    marginTop: '5px',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#fff',
    animation: 'win11Dot 1.2s ease-in-out infinite',
  },
};

