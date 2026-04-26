import React from 'react';
import { 
  Home, 
  User, 
  GraduationCap, 
  Settings, 
  Image, 
  Briefcase, 
  Contact,
  Award
} from 'lucide-react';


const navItems = [
  { name: 'Home', icon: Home, color: '#e53935' },
  { name: 'About', icon: User, color: '#1e88e5' },
  { name: 'Education', icon: GraduationCap, color: '#546e7a' },
  { name: 'Skills', icon: Settings, color: '#546e7a' },
  { name: 'Gallery', icon: Image, color: '#039be5' },
  { name: 'Projects', icon: Briefcase, color: '#fbc02d' },
  { name: 'Certifications', icon: Award, color: '#9c27b0' },
  { name: 'Contact', icon: Contact, color: '#00acc1' },

];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div style={styles.sidebar}>
      {navItems.map((item) => (
        <div 
          key={item.name}
          onClick={() => setActiveTab(item.name)}
          style={{
            ...styles.navItem,
            ...(activeTab === item.name ? styles.navItemActive : {})
          }}
        >
          {activeTab === item.name && <div style={styles.activeIndicator} />}
          <item.icon size={18} color={item.color} style={{ minWidth: '18px' }} />
          <span style={{ marginLeft: '12px' }}>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: '240px',
    height: '100%',
    backgroundColor: '#f3f3f3',
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #e0e0e0',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    cursor: 'pointer',
    position: 'relative',
    fontSize: '14px',
    color: 'var(--text-dark)',
    transition: 'background-color 0.2s',
  },
  navItemActive: {
    backgroundColor: '#e5e5e5',
    fontWeight: 500,
  },
  activeIndicator: {
    position: 'absolute',
    left: '4px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '3px',
    height: '16px',
    backgroundColor: '#0067c0',
    borderRadius: '4px',
  }
};
