import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Loader2 } from 'lucide-react';

export default function LockScreen({ onUnlock }) {
  const [time, setTime] = useState(new Date());
  const [isUnlocking, setIsUnlocking] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleUnlock = (e) => {
    e.stopPropagation();
    if (isUnlocking) return;
    
    setIsUnlocking(true);
    setTimeout(() => {
      onUnlock();
    }, 1500); // 1.5 second spinner delay
  };

  return (
    <>
      <style>
        {`
          @keyframes custom-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .custom-spinner {
            animation: custom-spin 1.5s linear infinite;
          }
        `}
      </style>
      <div style={styles.container} onClick={handleUnlock}>
      <div style={styles.overlay}>
        <div style={styles.timeContainer}>
          <h1 style={styles.time}>{formatTime(time)}</h1>
          <h2 style={styles.date}>{formatDate(time)}</h2>
        </div>
        
        <div style={styles.loginContainer}>
          <img src={personal.profileImage} alt="User" style={styles.avatar} />
          <h3 style={styles.userName}>{personal.firstName} {personal.lastName}</h3>
          
          {isUnlocking ? (
            <div style={styles.spinnerContainer}>
              <Loader2 size={32} color="#fff" className="custom-spinner" />
              <span style={styles.spinnerText}>Welcome</span>
            </div>
          ) : (
            <button 
              style={styles.signInBtn}
              onClick={handleUnlock}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1618588507085-c79565432917?q=80&w=2000&auto=format&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 99999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'fadeIn 0.5s ease',
    cursor: 'pointer'
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(15px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeContainer: {
    position: 'absolute',
    top: '15%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
  },
  time: {
    fontSize: '6rem',
    fontWeight: '600',
    margin: 0,
    lineHeight: 1
  },
  date: {
    fontSize: '1.5rem',
    fontWeight: '400',
    margin: '10px 0 0 0'
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15vh'
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid rgba(255,255,255,0.3)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
  },
  userName: {
    color: '#fff',
    fontSize: '28px',
    fontWeight: '600',
    margin: '24px 0',
    textShadow: '0 2px 6px rgba(0,0,0,0.5)'
  },
  signInBtn: {
    padding: '12px 48px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.5)',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '6px',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
  },
  spinnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    animation: 'fadeIn 0.3s ease'
  },
  spinnerIcon: {
    animation: 'spin 1.5s linear infinite',
  },
  spinnerText: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
  }
};
