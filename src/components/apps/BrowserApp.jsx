import React, { useState } from 'react';
import { Minus, Square, X, ArrowLeft, ArrowRight, RotateCw, Home, Search } from 'lucide-react';

export default function BrowserApp({ onClose, onMinimize }) {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <div style={{...styles.windowFrame, ...(isMaximized ? styles.maximized : styles.normal)}}>
      <div style={styles.titleBar}>
        <div style={styles.titleBarLeft}>
          <div style={styles.tab}>
            <span style={{ fontSize: 12 }}>New Tab - Chrome Wrapper</span>
            <X size={12} style={{ marginLeft: 10, cursor: 'pointer' }} />
          </div>
          <div style={{ marginLeft: 10, fontWeight: 300, cursor: 'pointer' }}>+</div>
        </div>
        <div style={styles.titleBarRight}>
          <div style={styles.controlIcon} onClick={onMinimize}><Minus size={16} /></div>
          <div style={styles.controlIcon} onClick={() => setIsMaximized(!isMaximized)}><Square size={13} /></div>
          <div style={{...styles.controlIcon, ...styles.closeIcon}} onClick={onClose}><X size={16} /></div>
        </div>
      </div>

      <div style={styles.addressBar}>
        <div style={styles.navLayout}>
          <ArrowLeft size={16} color="#666" style={{ margin: '0 8px' }} />
          <ArrowRight size={16} color="#ccc" style={{ margin: '0 8px' }} />
          <RotateCw size={16} color="#666" style={{ margin: '0 8px' }} />
          <Home size={16} color="#666" style={{ margin: '0 8px' }} />
        </div>
        <div style={styles.addressInput}>
          <span style={{color: '#333'}}>https://www.google.com/search?q=your+portfolio</span>
        </div>
      </div>

      <div style={styles.contentArea}>
        <div style={styles.fakeGoogle}>
          <Search size={40} color="#4285F4" style={{ marginBottom: 20 }} />
          <h1>Search the web</h1>
          <div style={styles.fakeSearchBox}>
            your awesome portfolio
          </div>
          <p style={{ marginTop: 20, color: '#666' }}>
            Normally you can place an `<iframe />` here pointing to your blog or LinkedIn!
          </p>
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
    border: '1px solid #999',
  },
  normal: {
    width: '80%',
    height: '80%',
    top: '10%',
    left: '10%',
  },
  maximized: {
    width: '100%',
    height: 'calc(100% - 48px)',
    top: 0,
    left: 0,
    borderRadius: 0,
  },
  titleBar: {
    height: '36px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dee1e6',
  },
  titleBarLeft: {
    display: 'flex',
    alignItems: 'flex-end',
    height: '100%',
    paddingTop: '8px',
    paddingLeft: '8px',
  },
  tab: {
    backgroundColor: '#ffffff',
    padding: '8px 16px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    display: 'flex',
    alignItems: 'center',
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
      color: 'white',
    }
  },
  addressBar: {
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    borderBottom: '1px solid #ccc',
  },
  navLayout: {
    display: 'flex',
    alignItems: 'center',
  },
  addressInput: {
    flex: 1,
    height: '28px',
    backgroundColor: '#f1f3f4',
    borderRadius: '14px',
    margin: '0 8px',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
  },
  contentArea: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  fakeGoogle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fakeSearchBox: {
    width: '500px',
    height: '44px',
    borderRadius: '22px',
    border: '1px solid #dfe1e5',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    color: '#222',
  }
};
