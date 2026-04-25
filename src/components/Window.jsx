import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Minus, Square, X, ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';
import Home from './views/Home';
import About from './views/About';
import Education from './views/Education';
import Skills from './views/Skills';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Gallery from './views/Gallery';

export default function Window({ activeTab, setActiveTab, onClose, onMinimize }) {
  const [isMaximized, setIsMaximized] = useState(false);

  const renderContent = () => {
    switch(activeTab) {
      case 'Home': return <Home setActiveTab={setActiveTab} />;
      case 'About': return <About />;
      case 'Education': return <Education />;
      case 'Skills': return <Skills />;
      case 'Projects': return <Projects />;
      case 'Contact': return <Contact />;
      case 'Gallery': return <Gallery />;
      default: return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div style={{...styles.windowFrame, ...(isMaximized ? styles.maximized : styles.normal)}}>
      <div style={styles.titleBar}>
        <div style={styles.titleBarLeft}>
          <div style={styles.tabContainer}>
            <div style={styles.tabActive}>
              <span>This PC</span>
            </div>
          </div>
          <div style={{ marginLeft: 8, fontSize: 18, color: '#333' }}>+</div>
        </div>

        <div style={styles.titleBarRight}>
          <div style={styles.controlIcon} onClick={onMinimize}><Minus size={16} /></div>
          <div style={styles.controlIcon} onClick={() => setIsMaximized(!isMaximized)}><Square size={13} /></div>
          <div style={{...styles.controlIcon, ...styles.closeIcon}} onClick={onClose}><X size={16} /></div>
        </div>
      </div>

      <div style={styles.addressBar}>
        <div style={styles.navIcons}>
          <ArrowLeft size={18} color="#999" style={{ margin: '0 8px' }} />
          <ArrowRight size={18} color="#999" style={{ margin: '0 8px' }} />
          <RotateCw size={16} color="#333" style={{ margin: '0 8px' }} />
        </div>
        <div style={styles.addressInputContainer}>
          <span style={{ margin: '0 8px', color: '#666' }}>This PC &gt; {activeTab}</span>
        </div>
        <div style={styles.searchInputContainer}>
          <span style={{ margin: '0 8px', color: '#999', fontSize: 13 }}>Search This PC</span>
        </div>
      </div>

      <div style={styles.mainArea}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div style={styles.contentArea}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

const styles = {
  windowFrame: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'all 0.3s ease',
  },
  normal: {
    width: '92%',
    height: '88%',
    top: '4%',
    left: '4%',
  },
  maximized: {
    width: '100%',
    height: 'calc(100% - 48px)',
    top: 0,
    left: 0,
    borderRadius: 0,
  },
  titleBar: {
    height: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '8px',
    backgroundColor: '#e6e6e6', 
  },
  titleBarLeft: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    flex: 1,
  },
  tabContainer: {
    display: 'flex',
    height: '100%',
    alignItems: 'flex-end',
  },
  tabActive: {
    backgroundColor: '#ffffff',
    height: '32px',
    padding: '0 16px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: '500',
    color: '#333',
    boxShadow: '0 -2px 5px rgba(0,0,0,0.02)',
  },
  titleBarRight: {
    display: 'flex',
    height: '100%',
  },
  controlIcon: {
    width: '46px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#333',
  },
  closeIcon: {
    '&:hover': {
      backgroundColor: '#e81123',
      color: '#fff',
    }
  },
  addressBar: {
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e0e0e0',
  },
  navIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  addressInputContainer: {
    flex: 1,
    height: '32px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    margin: '0 12px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    backgroundColor: '#ffffff',
  },
  searchInputContainer: {
    width: '200px',
    height: '32px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  mainArea: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#fafafa',
  },
  contentArea: {
    flex: 1,
    overflowY: 'auto',
    backgroundColor: '#ffffff',
    padding: '30px',
  }
};
