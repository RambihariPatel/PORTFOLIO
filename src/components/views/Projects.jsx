import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <div style={styles.container} className="animate-fade-up">
      <h2 className="gradient-text-cyan brand-font" style={styles.heading}>Featured Projects</h2>
      
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className="premium-glass-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div style={styles.content}>
              <h3 className="brand-font" style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              
              <div style={styles.tags}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className="skill-tag">{tech}</span>
                ))}
              </div>
              
              <div style={styles.links}>
                <a href={project.liveLink} target="_blank" rel="noreferrer" style={styles.link}>
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a href={project.repoLink} target="_blank" rel="noreferrer" style={{...styles.link, ...styles.codeLink}}>
                  <Code size={18} /> Source Code
                </a>
              </div>
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
  background: 'linear-gradient(135deg, #0f172a, #020617)',
  borderRadius: '12px'
},
  heading: {
    fontSize: '38px',
    marginBottom: '40px',
    fontWeight: '700',
  },
  grid: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '20px',
  paddingBottom: '20px'
},
  content: {
    padding: '18px',
  },
  projectTitle: {
  fontSize: '18px',
  color: '#d0e17b',   // dark bg के लिए fix
  marginBottom: '8px',
  fontWeight: '600'
},
  description: {
  fontSize: '13px',
  color: 'rgba(173, 28, 142, 1)',
  lineHeight: '1.5',
  marginBottom: '16px',
},
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '15px',
  },
  links: {
    display: 'flex',
    gap: '20px',
    paddingTop: '15px',
    borderTop: '1px solid rgba(0,0,0,0.05)'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: 'var(--primary-blue)',
    fontSize: '15px',
    fontWeight: '600',
    transition: 'opacity 0.2s'
  },
  codeLink: {
    color: 'var(--text-dark)',
  }
};  
