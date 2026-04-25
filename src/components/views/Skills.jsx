import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Code2, Server, Layout, Database, Wrench, Cpu } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const getIcon = (type) => {
    switch(type) {
      case 'Layout': return <Layout size={28} color="var(--accent-purple)" />;
      case 'Server': return <Server size={28} color="var(--primary-blue)" />;
      case 'Database': return <Database size={28} color="#4caf50" />;
      case 'Code': return <Code2 size={28} color="#ffb020" />;
      case 'Wrench': return <Wrench size={28} color="#00C4CC" />;
      case 'Cpu': return <Cpu size={28} color="#E81123" />;
      default: return <Code2 size={28} color="#333" />;
    }
  };

  return (
    <div style={styles.container} className="animate-fade-up">
      <h2 className="gradient-text-primary brand-font" style={styles.heading}>Technical Arsenal</h2>
      
      <div style={styles.grid}>
        {skills.map((category, index) => (
          <div key={index} className="premium-glass-card" style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.iconWrapper}>
                {getIcon(category.iconType)}
              </div>
              <h3 className="brand-font" style={styles.cardTitle}>{category.title}</h3>
            </div>
            <div style={styles.tagContainer}>
              {category.technologies.map((tech, i) => (
                <span key={i} className="skill-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
  padding: '40px 15px',
  background: 'linear-gradient(135deg, rgba(43, 49, 63, 1), #0f32ceff)',
  borderRadius: '12px'
},
  heading: {
    fontSize: '38px',
    marginBottom: '40px',
    fontWeight: '700',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    paddingBottom: '20px'
  },
  card: {
    padding: '30px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '25px',
  },
  iconWrapper: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: '12px',
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '22px',
    color: 'var(--text-dark)',
    fontWeight: '600'
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  }
};
