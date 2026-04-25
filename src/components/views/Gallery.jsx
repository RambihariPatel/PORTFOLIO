import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const { gallery } = portfolioData;
  const [selectedImage, setSelectedImage] = useState(null);

  // Stop background scrolling or click propagating if needed
  const closeModal = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <div style={{ padding: '10px' }} className="animate-fade-up">
      <h2 className="gradient-text-primary brand-font" style={styles.heading}>Gallery.exe</h2>
      
      <div style={styles.grid}>
        {gallery.map((imgUrl, index) => (
          <div 
            key={index} 
            className="premium-glass-card interactive-icon-box" 
            style={styles.imageContainer}
            onClick={() => setSelectedImage(imgUrl)}
          >
            <div style={styles.hoverOverlay}>
               <ZoomIn size={32} color="white" />
            </div>
            <img src={imgUrl} alt={`Gallery item ${index}`} className="project-image" style={{height: '100%', cursor: 'pointer'}} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalImageWrapper} onClick={(e) => e.stopPropagation()}>
            <div 
              style={styles.modalCloseBtn} 
              onClick={closeModal}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,0,0,0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'}
            >
              <X size={24} color="#fff" />
            </div>
            <img 
              src={selectedImage} 
              alt="Expanded gallery view" 
              style={styles.modalImage} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  heading: {
    fontSize: '38px',
    marginBottom: '40px',
    fontWeight: '700',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  imageContainer: {
    overflow: 'hidden',
    padding: '10px',
    height: '240px',
    borderRadius: '20px',
    position: 'relative',
    cursor: 'pointer',
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,120,212,0.3)',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    borderRadius: '10px'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    backdropFilter: 'blur(10px)',
    zIndex: 99999, // very high to go over the window border
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'fadeUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  modalCloseBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: '50%',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(5px)',
    transition: 'all 0.2s',
    zIndex: 100000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  modalImageWrapper: {
    position: 'relative',
    display: 'inline-block',
    maxWidth: '90%',
    maxHeight: '90vh',
  },
  modalImage: {
    maxWidth: '100%',
    maxHeight: '90vh',
    objectFit: 'contain',
    borderRadius: '12px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
    display: 'block',
  }
};
