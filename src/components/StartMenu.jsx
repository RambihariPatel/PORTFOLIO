import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Search, 
  Settings, 
  Power, 
  User, 
  Layout, 
  Code, 
  Mail, 
  Image as ImageIcon, 
  GraduationCap, 
  Home as HomeIcon,
  Globe,
  Terminal,
  Award,
  Gamepad2
} from 'lucide-react';

export default function StartMenu({ activeTab, setActiveTab, onClose, openApp }) {
  const { personal } = portfolioData;

  const pinnedApps = [
    { name: 'Home', icon: <HomeIcon size={24} color="#0078D4" />, tab: 'Home' },
    { name: 'About', icon: <User size={24} color="#8A2BE2" />, tab: 'About' },
    { name: 'Skills', icon: <Code size={24} color="#00C4CC" />, tab: 'Skills' },
    { name: 'Projects', icon: <Layout size={24} color="#FFD700" />, tab: 'Projects' },
    { name: 'Certifications', icon: <Award size={24} color="#9c27b0" />, tab: 'Certifications' },
    { name: 'Education', icon: <GraduationCap size={24} color="#FF4500" />, tab: 'Education' },
    { name: 'Contact', icon: <Mail size={24} color="#32CD32" />, tab: 'Contact' },
    { name: 'Gallery', icon: <ImageIcon size={24} color="#FF69B4" />, tab: 'Gallery' },
    { name: 'VS Code', icon: <Terminal size={24} color="#007acc" />, appId: 'vscode' },
    { name: 'Browser', icon: <Globe size={24} color="#e53935" />, appId: 'browser' },
    { name: 'Tic Tac Toe', icon: <Gamepad2 size={24} color="#8A2BE2" />, appId: 'tictactoe' },
  ];

  const handleAppClick = (app) => {
    if (app.tab) {
      setActiveTab(app.tab);
    } else if (app.appId && openApp) {
      openApp(app.appId);
    }
    onClose();
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchBar}>
        <Search size={16} color="#666" />
        <input 
          type="text" 
          placeholder="Type here to search" 
          style={styles.searchInput} 
        />
      </div>

      <div style={styles.sectionHeader}>
        <span style={styles.sectionTitle}>Pinned</span>
        <button style={styles.allAppsBtn}>All apps &gt;</button>
      </div>

      <div style={styles.grid}>
        {pinnedApps.map((app, index) => (
          <div 
            key={index} 
            style={styles.appItem} 
            onClick={() => handleAppClick(app)}
          >
            <div style={styles.appIcon}>
              {app.icon}
            </div>
            <span style={styles.appName}>{app.name}</span>
          </div>
        ))}
      </div>

      <div style={styles.sectionHeader}>
        <span style={styles.sectionTitle}>Recommended</span>
        <button style={styles.allAppsBtn}>More &gt;</button>
      </div>

      <div style={styles.recommendedList}>
        <div style={styles.recItem}>
          <div style={styles.recIcon}><Layout size={16} color="#0078D4" /></div>
          <div style={styles.recText}>
            <div style={styles.recName}>Welcome Guide</div>
            <div style={styles.recTime}>Recently added</div>
          </div>
        </div>
        <div style={styles.recItem}>
          <div style={styles.recIcon}><Code size={16} color="#007acc" /></div>
          <div style={styles.recText}>
            <div style={styles.recName}>Projects Portfolio</div>
            <div style={styles.recTime}>2 hours ago</div>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <div style={styles.userInfo}>
          <img src={personal.profileImage} alt="User" style={styles.userAvatar} />
          <span style={styles.userName}>{personal.firstName} {personal.lastName}</span>
        </div>
        <button style={styles.powerBtn}>
          <Power size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'absolute',
    bottom: '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '540px',
    maxHeight: '640px',
    background: 'rgba(243, 243, 243, 0.85)',
    backdropFilter: 'blur(30px) saturate(150%)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '12px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
    padding: '32px 32px 12px 32px',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2000,
    animation: 'startMenuSlideUp 0.4s cubic-bezier(0.1, 0.9, 0.2, 1) forwards',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    borderBottom: '2px solid #0078D4',
    borderRadius: '4px',
    padding: '8px 16px',
    marginBottom: '24px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    width: '100%',
    marginLeft: '12px',
    fontSize: '14px',
    color: '#333',
    background: 'transparent',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    padding: '0 8px',
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#111',
  },
  allAppsBtn: {
    fontSize: '12px',
    color: '#333',
    background: 'rgba(255,255,255,0.5)',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '4px',
    padding: '4px 8px',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '4px',
    marginBottom: '32px',
  },
  appItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px 4px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.2s',
    '&:hover': {
      background: 'rgba(255,255,255,0.6)',
    }
  },
  appIcon: {
    marginBottom: '8px',
  },
  appName: {
    fontSize: '12px',
    color: '#333',
    textAlign: 'center',
  },
  recommendedList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '24px',
    padding: '0 8px',
  },
  recItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px',
    borderRadius: '6px',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(255,255,255,0.6)',
    }
  },
  recIcon: {
    width: '32px',
    height: '32px',
    background: '#fff',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recText: {
    display: 'flex',
    flexDirection: 'column',
  },
  recName: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#111',
  },
  recTime: {
    fontSize: '11px',
    color: '#666',
  },
  footer: {
    marginTop: 'auto',
    background: 'rgba(0,0,0,0.03)',
    margin: '0 -32px -12px -32px',
    padding: '16px 32px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  userAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  userName: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#111',
  },
  powerBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      background: 'rgba(0,0,0,0.05)',
    }
  }
};
