import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Award, Mic, Trophy, Briefcase, Calendar, ExternalLink, X, ZoomIn } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  const getIcon = (category) => {
    switch (category) {
      case 'NPTEL / Academic': return <Award className="text-orange-600" size={24} />;
      case 'Course': return <Award className="text-blue-500" size={24} />;
      case 'Podcast': return <Mic className="text-purple-500" size={24} />;
      case 'Hackathon': return <Trophy className="text-yellow-500" size={24} />;
      case 'Training': return <Briefcase className="text-green-500" size={24} />;
      case 'Attendance': return <Calendar className="text-red-500" size={24} />;
      default: return <Award size={24} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'NPTEL / Academic': return '#ea580c'; // orange-600
      case 'Course': return '#3b82f6'; // blue-500
      case 'Podcast': return '#a855f7'; // purple-500
      case 'Hackathon': return '#eab308'; // yellow-500
      case 'Training': return '#22c55e'; // green-500
      case 'Attendance': return '#ef4444'; // red-500
      default: return '#0078D4';
    }
  };

  const getCategoryBgColor = (category) => {
    switch (category) {
      case 'NPTEL / Academic': return 'rgba(234, 88, 12, 0.15)';
      case 'Course': return 'rgba(59, 130, 246, 0.15)';
      case 'Podcast': return 'rgba(168, 85, 247, 0.15)';
      case 'Hackathon': return 'rgba(234, 179, 8, 0.15)';
      case 'Training': return 'rgba(34, 197, 94, 0.15)';
      case 'Attendance': return 'rgba(239, 68, 68, 0.15)';
      default: return 'rgba(0, 120, 212, 0.15)';
    }
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setSelectedCert(null);
  };

  return (
    <div className="animate-fade-up" style={{ padding: '10px' }}>
      <div style={styles.header}>
        <h1 className="gradient-text-primary brand-font" style={styles.title}>Certifications.exe</h1>
        <p style={styles.subtitle}>My professional growth, event participations, and learning milestones.</p>
      </div>

      <div style={styles.categoriesContainer}>
        {certifications.map((cat, idx) => (
          <div key={idx} style={styles.categorySection}>
            <div style={{
              ...styles.categoryHeader,
              borderBottom: `2px dashed ${getCategoryColor(cat.category)}`,
              background: `linear-gradient(90deg, ${getCategoryBgColor(cat.category)}, transparent)`,
              padding: '12px 16px',
              borderRadius: '12px 12px 0 0'
            }}>
              <div style={{
                padding: '8px',
                borderRadius: '10px',
                background: getCategoryBgColor(cat.category),
                boxShadow: `0 4px 12px ${getCategoryBgColor(cat.category)}`
              }}>
                {getIcon(cat.category)}
              </div>
              <h2 style={{
                ...styles.categoryTitle, 
                color: getCategoryColor(cat.category),
                textShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                {cat.category}
              </h2>
            </div>

            <div style={styles.grid}>
              {cat.items.map((item, i) => (
                <div 
                  key={i} 
                  className="premium-glass-card interactive-icon-box" 
                  style={{
                    ...styles.certCard,
                    borderLeft: `5px solid ${getCategoryColor(cat.category)}`,
                    background: `linear-gradient(135deg, ${getCategoryBgColor(cat.category)} 0%, rgba(255,255,255,0.02) 100%)`
                  }}
                  onClick={() => setSelectedCert(item)}
                >
                  <div style={{
                    ...styles.certIconContainer,
                    background: getCategoryBgColor(cat.category),
                    boxShadow: `0 4px 12px ${getCategoryBgColor(cat.category)}`
                  }}>
                    {getIcon(cat.category)}
                    <div style={{...styles.zoomOverlay, background: getCategoryBgColor(cat.category)}}>
                      <ZoomIn size={18} color={getCategoryColor(cat.category)} />
                    </div>
                  </div>
                  <div style={styles.certInfo}>
                    <h3 style={{...styles.certTitle, color: getCategoryColor(cat.category)}}>{item.title}</h3>
                    <p style={styles.certIssuer}>
                      {item.issuer || item.host || item.position || item.company || item.event}
                    </p>
                    <div style={styles.footerRow}>
                      <span style={styles.certDate}>{item.date}</span>
                      <div style={styles.viewBadge}>
                        <ExternalLink size={12} />
                        View
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX / MODAL */}
      {selectedCert && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div 
              style={styles.modalCloseBtn} 
              onClick={closeModal}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,0,0,0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'}
            >
              <X size={24} color="#fff" />
            </div>
            
            <div style={styles.modalImageWrapper}>
              {selectedCert.link && selectedCert.link !== '#' ? (
                <img 
                  src={selectedCert.link} 
                  alt={selectedCert.title} 
                  style={styles.modalImage} 
                />
              ) : (
                <div style={styles.noImagePlaceholder}>
                  <Award size={64} color="#0078D4" />
                  <p style={{ marginTop: '20px', color: '#fff', fontSize: '18px' }}>
                    Preview not available yet.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                    Link will be updated soon.
                  </p>
                </div>
              )}
            </div>

            <div style={styles.modalFooter}>
              <h2 style={styles.modalCertTitle}>{selectedCert.title}</h2>
              <p style={styles.modalCertIssuer}>
                {selectedCert.issuer || selectedCert.host || selectedCert.position || selectedCert.company || selectedCert.event}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  header: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '38px',
    fontWeight: '700',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    maxWidth: '600px',
  },
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
  },
  categorySection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  categoryHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    paddingBottom: '12px',
  },
  categoryTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#1F1F1F',
    letterSpacing: '-0.5px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  certCard: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  },
  certIconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '12px',
    background: 'rgba(0,120,212,0.05)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  zoomOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,120,212,0.4)',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.2s',
  },
  certInfo: {
    flex: 1,
  },
  certTitle: {
    fontSize: '17px',
    fontWeight: '600',
    color: '#1F1F1F',
    marginBottom: '4px',
    lineHeight: '1.3',
  },
  certIssuer: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  certDate: {
    fontSize: '12px',
    color: '#999',
    fontWeight: '500',
  },
  viewBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '11px',
    fontWeight: '700',
    color: '#0078D4',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    backdropFilter: 'blur(15px)',
    zIndex: 10000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    animation: 'fadeIn 0.3s ease',
  },
  modalContent: {
    position: 'relative',
    maxWidth: '1000px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalCloseBtn: {
    position: 'absolute',
    top: '-50px',
    right: '0',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 10001,
    transition: 'all 0.2s',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  modalImageWrapper: {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
  },
  modalImage: {
    maxWidth: '100%',
    maxHeight: '80vh',
    objectFit: 'contain',
  },
  noImagePlaceholder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px',
    textAlign: 'center',
  },
  modalFooter: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#fff',
  },
  modalCertTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '4px',
  },
  modalCertIssuer: {
    fontSize: '16px',
    opacity: 0.7,
  },
};

