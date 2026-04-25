import React, { useState } from 'react';
import { Minus, Square, X, Send, Paperclip } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function MailApp({ onClose, onMinimize }) {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <div style={{...styles.windowFrame, ...(isMaximized ? styles.maximized : styles.normal)}}>
      <div style={styles.titleBar}>
        <div style={styles.titleBarLeft}>
          <span style={styles.titleText}>Mail</span>
        </div>
        <div style={styles.titleBarRight}>
          <div style={styles.controlIcon} onClick={onMinimize}><Minus size={16} /></div>
          <div style={styles.controlIcon} onClick={() => setIsMaximized(!isMaximized)}><Square size={13} /></div>
          <div style={{...styles.controlIcon, ...styles.closeIcon}} onClick={onClose}><X size={16} /></div>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.sidebar}>
          <div style={styles.navItemActive}>New Message</div>
          <div style={styles.navItem}>Inbox <span style={{color: '#0078d4', fontSize: '11px', marginLeft: 8}}>•</span></div>
          <div style={styles.navItem}>Sent Items</div>
          <div style={styles.navItem}>Deleted Items</div>
        </div>

        <div style={styles.composer}>
          <div style={styles.composeHeader}>
            <div style={styles.inputGroup}>
              <span style={styles.label}>To:</span>
              <input type="text" value={portfolioData.personal.email} readOnly style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <input type="text" placeholder="Subject" style={styles.inputSubject} />
            </div>
          </div>
          
          <textarea style={styles.textArea} placeholder="Type your message here..."></textarea>
          
          <div style={styles.composerFooter}>
            <button style={styles.sendButton}>
              <Send size={16} style={{marginRight: 6}} />
              Send
            </button>
            <Paperclip size={20} color="#666" style={{cursor: 'pointer'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  windowFrame: {
    backgroundColor: '#f3f2f1',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'all 0.3s ease',
    border: '1px solid #d4d4d4',
  },
  normal: {
    width: '70%',
    height: '70%',
    top: '15%',
    left: '15%',
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
    backgroundColor: '#0078d4',
    color: 'white',
    paddingLeft: '12px',
  },
  titleBarLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    fontSize: '14px',
    fontWeight: '500',
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
    color: 'white',
  },
  closeIcon: {
    '&:hover': {
      backgroundColor: '#e81123',
    }
  },
  content: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e1dfdd',
    padding: '10px 0',
  },
  navItem: {
    padding: '10px 20px',
    fontSize: '14px',
    color: '#333',
    cursor: 'pointer',
  },
  navItemActive: {
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#0078d4',
    backgroundColor: '#f3f2f1',
    borderLeft: '3px solid #0078d4',
  },
  composer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  composeHeader: {
    borderBottom: '1px solid #e1dfdd',
    padding: '10px 20px',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #f3f2f1',
  },
  label: {
    width: '40px',
    color: '#666',
    fontSize: '14px',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    color: '#333',
  },
  inputSubject: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '18px',
    fontWeight: '500',
    color: '#333',
    padding: '4px 0',
  },
  textArea: {
    flex: 1,
    width: '100%',
    border: 'none',
    outline: 'none',
    padding: '20px',
    fontSize: '15px',
    color: '#333',
    resize: 'none',
    fontFamily: 'inherit',
  },
  composerFooter: {
    borderTop: '1px solid #e1dfdd',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: '#f3f2f1',
  },
  sendButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0078d4',
    color: 'white',
    border: 'none',
    padding: '8px 24px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
  }
};
