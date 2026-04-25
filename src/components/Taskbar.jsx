import React, { useState, useEffect } from 'react';
import { 
  Search, 
  CloudSun, 
  Wifi, 
  Volume2, 
  Battery, 
  ChevronUp, 
  FolderClosed,
  Code2,
  Mail,
  Globe
} from 'lucide-react';

export default function Taskbar({ activeApp, openApps, minimizedApps, setActiveApp, toggleMinimize }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  const isAppOpen = (id) => openApps.includes(id);
  const isAppActive = (id) => activeApp === id;

  const handleIconClick = (id) => {
    if (isAppActive(id)) {
      toggleMinimize(id);
    } else {
      setActiveApp(id);
    }
  };

  return (
    <div style={styles.taskbar}>
      <div style={styles.weatherWidget}>
        <CloudSun size={20} color="#ffb020" style={{ fill: '#ffb020' }} />
        <div style={styles.weatherText}>
          <span style={{ fontWeight: 600 }}>42 °C</span>
          <span style={{ fontSize: '11px', color: '#555' }}>Sunny</span>
        </div>
      </div>

      <div style={styles.centerApps}>
        <div 
          style={styles.iconWrapper} 
          onClick={() => setActiveApp(activeApp === 'start' ? null : 'start')}
        >
          <div style={styles.winIcon}>
            <div style={{...styles.winSquare, backgroundColor: '#03a9f4'}}></div>
            <div style={{...styles.winSquare, backgroundColor: '#03a9f4'}}></div>
            <div style={{...styles.winSquare, backgroundColor: '#03a9f4'}}></div>
            <div style={{...styles.winSquare, backgroundColor: '#03a9f4'}}></div>
          </div>
        </div>

        <div style={styles.searchBar}>
          <Search size={16} color="#666" />
          <span style={{ marginLeft: '10px', color: '#666', fontSize: '13px' }}>Search</span>
        </div>

        {/* Explorer */}
        <div 
          style={{...styles.iconWrapper, ...(isAppActive('explorer') ? styles.activeApp : {})}}
          onClick={() => handleIconClick('explorer')}
        >
          <FolderClosed size={24} color="#fcc93d" style={{ fill: '#fcc93d' }} />
          {isAppOpen('explorer') && <div style={styles.runningIndicator} />}
        </div>
        
        {/* VS Code */}
        <div 
          style={{...styles.iconWrapper, ...(isAppActive('vscode') ? styles.activeApp : {})}}
          onClick={() => handleIconClick('vscode')}
        >
          <Code2 size={24} color="#007acc" />
          {isAppOpen('vscode') && <div style={styles.runningIndicator} />}
        </div>
        
        {/* Mail */}
        <div 
          style={{...styles.iconWrapper, ...(isAppActive('mail') ? styles.activeApp : {})}}
          onClick={() => handleIconClick('mail')}
        >
          <Mail size={24} color="#0078d4" />
          {isAppOpen('mail') && <div style={styles.runningIndicator} />}
        </div>

        {/* Browser */}
        <div 
          style={{...styles.iconWrapper, ...(isAppActive('browser') ? styles.activeApp : {})}}
          onClick={() => handleIconClick('browser')}
        >
          <Globe size={24} color="#e53935" />
          {isAppOpen('browser') && <div style={styles.runningIndicator} />}
        </div>
      </div>

      <div style={styles.trayArea}>
        <div style={styles.trayIcons}>
          <ChevronUp size={16} color="#333" />
          <Wifi size={16} color="#333" style={{ marginLeft: 8 }} />
          <Volume2 size={16} color="#333" style={{ marginLeft: 8 }} />
          <Battery size={16} color="#333" style={{ marginLeft: 8 }} />
        </div>
        <div style={styles.timeDate}>
          <span>{formatTime(time)}</span>
          <span style={{ marginTop: '2px' }}>{formatDate(time)}</span>
        </div>
      </div>
    </div>
  );
}


const styles = {
  taskbar: {
    height: '48px',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'var(--taskbar-bg)',
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(255,255,255,0.4)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px',
    zIndex: 1000,
  },
  weatherWidget: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '150px',
  },
  weatherText: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '8px',
    fontSize: '12px',
    lineHeight: '1.2',
  },
  centerApps: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  iconWrapper: {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  activeApp: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderBottom: '3px solid #005a9e',
  },
  winIcon: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2px',
    width: '20px',
    height: '20px',
  },
  winSquare: {
    borderRadius: '1px',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '20px',
    padding: '0 15px',
    height: '32px',
    width: '150px',
    margin: '0 8px',
    cursor: 'pointer',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
    border: '1px solid rgba(255,255,255,0.8)',
  },
  trayArea: {
    display: 'flex',
    alignItems: 'center',
    width: '150px',
    justifyContent: 'flex-end',
  },
  trayIcons: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    cursor: 'pointer',
  },
  timeDate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    fontSize: '12px',
    cursor: 'pointer',
    padding: '0 8px',
  },
  runningIndicator: {
    position: 'absolute',
    bottom: '2px',
    width: '6px',
    height: '3px',
    backgroundColor: '#888',
    borderRadius: '2px',
    transition: 'width 0.3s ease',
  },
};
