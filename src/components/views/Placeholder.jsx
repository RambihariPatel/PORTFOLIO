import React from 'react';

export default function Placeholder({ title }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{title}</h2>
      <p style={styles.paragraph}>
        This is a placeholder for the {title} section. You can replace this component with your own full implementation.
      </p>
      
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <div style={styles.cardGhostTitle}></div>
          <div style={styles.cardGhostLine}></div>
          <div style={styles.cardGhostLine}></div>
          <div style={styles.cardGhostLine} style={{width: '60%'}}></div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    animation: 'fadeIn 0.3s ease-in-out',
  },
  heading: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '10px',
    borderBottom: '2px solid #eaeaea',
    paddingBottom: '10px',
  },
  paragraph: {
    color: '#666',
    fontSize: '16px',
    marginBottom: '30px',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fafafa',
    border: '1px solid #eaeaea',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  cardGhostTitle: {
    height: '24px',
    width: '30%',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
  },
  cardGhostLine: {
    height: '12px',
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
  }
};
