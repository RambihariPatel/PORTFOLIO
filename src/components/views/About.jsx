import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  return (
    <div style={{ padding: '10px' }} className="animate-fade-up">
      <h2 className="gradient-text-primary brand-font" style={styles.heading}>About Me</h2>
      <hr style={styles.divider} />
      <div style={styles.content}>
        {/* Left: Bio Card */}
        <div className="premium-glass-card" style={styles.card}>
          <p style={styles.text}>
            {personal.bio}
          </p>

          {/* Highlight Badges */}
          <div style={styles.badgeRow}>
            {['Full Stack Dev', 'React Enthusiast', 'Problem Solver', 'AI Explorer'].map((badge) => (
              <span key={badge} style={styles.badge}>{badge}</span>
            ))}
          </div>
        </div>

        {/* Right: Illustration */}
        <div style={styles.imageWrapper}>
          <img
            src="/about-illustration.png"
            alt="Developer Illustration"
            style={styles.illustration}
          />
          <div style={styles.imageGlow} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  heading: {
    fontSize: '38px',
    marginBottom: '40px',
    fontWeight: '700',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap',
  },
  card: {
    padding: '40px',
    flex: '1 1 380px',
    minWidth: '0',
  },
  text: {
    color: 'var(--text-light)',
    fontSize: '18px',
    lineHeight: '1.9',
    whiteSpace: 'pre-line',
    marginBottom: '28px',
  },
  badgeRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '8px',
  },
  badge: {
    padding: '6px 16px',
    borderRadius: '999px',
    background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.25))',
    border: '1px solid rgba(168,85,247,0.4)',
    color: 'var(--accent-primary, #a78bfa)',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    backdropFilter: 'blur(6px)',
  },
  imageWrapper: {
    flex: '0 0 280px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: '100%',
    maxWidth: '280px',
    height: 'auto',
    borderRadius: '24px',
    border: '1px solid rgba(168,85,247,0.3)',
    boxShadow: '0 0 40px rgba(99,102,241,0.3), 0 8px 32px rgba(0,0,0,0.4)',
    objectFit: 'cover',
    position: 'relative',
    zIndex: 1,
  },
  imageGlow: {
    position: 'absolute',
    width: '60%',
    height: '60%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)',
    filter: 'blur(30px)',
    zIndex: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  },
};
