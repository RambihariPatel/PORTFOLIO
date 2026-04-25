import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <div style={{ padding: '10px' }} className="animate-fade-up">
      <h2 className="gradient-text-cyan brand-font" style={styles.heading}>Education Timeline</h2>
      
      <div style={styles.timeline}>
        {education.map((edu, index) => (
          <div key={index} className="interactive-icon-box" style={styles.timelineItem}>
            <div style={styles.iconContainer}>
              <GraduationCap size={22} color="var(--primary-blue)" />
            </div>
            <div className="premium-glass-card" style={styles.card}>
              <h3 className="brand-font" style={styles.degree}>{edu.degree}</h3>
              <h4 style={styles.institution}>{edu.institution}</h4>
              <div style={styles.metaData}>
                <span style={styles.metaItem}><Calendar size={14} style={{marginRight: 6}} color={"var(--accent-purple)"}/> {edu.year}</span>
                <span style={styles.metaItem}><MapPin size={14} style={{marginRight: 6}} color={"#e53935"}/> {edu.location}</span>
              </div>
              <p style={styles.description}>{edu.description}</p>
            </div>
          </div>
        ))}
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
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '35px',
    position: 'relative',
    paddingLeft: '20px',
    borderLeft: '2px solid rgba(0, 120, 212, 0.2)',
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: '40px',
  },
  iconContainer: {
    position: 'absolute',
    left: '-37px',
    top: '10px',
    width: '46px',
    height: '46px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '4px solid rgba(0, 120, 212, 0.1)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  card: {
    padding: '28px',
  },
  degree: {
    fontSize: '22px',
    color: 'var(--text-dark)',
    marginBottom: '8px',
    fontWeight: '600'
  },
  institution: {
    fontSize: '17px',
    color: 'var(--primary-blue)',
    marginBottom: '15px',
    fontWeight: '500'
  },
  metaData: {
    display: 'flex',
    gap: '20px',
    marginBottom: '16px',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: 'var(--text-light)',
    backgroundColor: 'rgba(0,0,0,0.03)',
    padding: '4px 12px',
    borderRadius: '20px'
  },
  description: {
    fontSize: '15px',
    color: 'var(--text-light)',
    lineHeight: '1.7',
  }
};
