import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Taskbar from './components/Taskbar';
import Window from './components/Window';
import VSCode from './components/apps/VSCode';
import MailApp from './components/apps/MailApp';
import BrowserApp from './components/apps/BrowserApp';
import BootScreen from './components/BootScreen';
import StartMenu from './components/StartMenu';
import TicTacToe from './components/apps/TicTacToe';
import LockScreen from './components/LockScreen';


function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [booting, setBooting] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');
  const [activeApp, setActiveApp] = useState('explorer');
  const [minimizedApps, setMinimizedApps] = useState([]);
  const [openApps, setOpenApps] = useState(['explorer']);
  const [isLocked, setIsLocked] = useState(false);
  const idleTimer = useRef(null);
  const [initialized, setInitialized] = useState(false);

  // Sync URL to State
  useEffect(() => {
    const path = location.pathname.toLowerCase().substring(1);
    
    const tabMap = {
      'home': 'Home', 'about': 'About', 'skills': 'Skills',
      'projects': 'Projects', 'certifications': 'Certifications',
      'education': 'Education', 'contact': 'Contact', 'gallery': 'Gallery'
    };
    
    const appMap = {
      'vscode': 'vscode', 'mail': 'mail', 'browser': 'browser', 'tictactoe': 'tictactoe'
    };

    if (path === '' || tabMap[path]) {
      const tab = tabMap[path] || 'Home';
      if (activeTab !== tab) setActiveTab(tab);
      
      setOpenApps(prev => prev.includes('explorer') ? prev : [...prev, 'explorer']);
      if (activeApp !== 'explorer') setActiveApp('explorer');
      
      if (path !== '' && booting && !initialized) setBooting(false);
    } else if (appMap[path]) {
      const app = appMap[path];
      setOpenApps(prev => prev.includes(app) ? prev : [...prev, app]);
      if (activeApp !== app) setActiveApp(app);
      
      if (booting && !initialized) setBooting(false);
    }
    
    if (!initialized) setInitialized(true);
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab.toLowerCase()}`);
  };

  const handleAppOpen = (appId) => {
    if (appId === 'start') {
      setActiveApp(activeApp === 'start' ? null : 'start');
      return;
    }
    
    setOpenApps(prev => prev.includes(appId) ? prev : [...prev, appId]);
    setMinimizedApps(prev => prev.filter(a => a !== appId));
    setActiveApp(appId);
    
    if (appId !== 'explorer') {
      navigate(`/${appId}`);
    } else {
      navigate(`/${activeTab.toLowerCase()}`);
    }
  };

  const resetIdleTimer = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (!isLocked && openApps.length === 0) {
      idleTimer.current = setTimeout(() => {
        setIsLocked(true);
      }, 15000);
    }
  }, [isLocked, openApps.length]);

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart'];
    const handleActivity = () => resetIdleTimer();
    
    events.forEach(e => window.addEventListener(e, handleActivity));
    resetIdleTimer();
    
    return () => {
      events.forEach(e => window.removeEventListener(e, handleActivity));
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [resetIdleTimer]);

  const closeApp = (appId) => {
    setOpenApps(prev => {
      const newApps = prev.filter(a => a !== appId);
      // If we close the current app, fallback to desktop (/) or another app
      if (activeApp === appId) {
        if (newApps.length > 0) {
          handleAppOpen(newApps[newApps.length - 1]);
        } else {
          setActiveApp(null);
          navigate('/');
        }
      }
      return newApps;
    });
    setMinimizedApps(prev => prev.filter(a => a !== appId));
  };

  const toggleMinimize = (appId) => {
    if (minimizedApps.includes(appId)) {
      setMinimizedApps(prev => prev.filter(a => a !== appId));
      setActiveApp(appId);
      navigate(appId === 'explorer' ? `/${activeTab.toLowerCase()}` : `/${appId}`);
    } else {
      setMinimizedApps(prev => [...prev, appId]);
      setActiveApp(null);
    }
  };

  const isMinimized = (appId) => minimizedApps.includes(appId);

  const [contextMenu, setContextMenu] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.pageX, y: e.pageY });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setContextMenu(null);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const ripple = {
      id: Date.now(),
      x: e.pageX,
      y: e.pageY,
    };
    setRipples(prev => [...prev, ripple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 1000);
  };

  const handleDesktopClick = (e) => {
    setContextMenu(null);
    if (activeApp === 'start') setActiveApp(null);
    addRipple(e);
  };


  return (
    <div className="desktop" onContextMenu={handleContextMenu} onClick={handleDesktopClick}>
      {booting && <BootScreen onComplete={() => setBooting(false)} />}
      
      {isLocked && !booting && <LockScreen onUnlock={() => setIsLocked(false)} />}
      
      {ripples.map(ripple => (
        <div 
          key={ripple.id} 
          className="click-ripple" 
          style={{ top: ripple.y, left: ripple.x }} 
        />
      ))}
      
      {isRefreshing && (
        <div className="refresh-overlay">
          <div className="animate-rotate">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#0078D4'}}>
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
            </svg>
          </div>
        </div>
      )}

      {contextMenu && (
        <div 
          className="context-menu" 
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="context-menu-item" onClick={handleRefresh}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>
            Refresh
          </div>
          <div className="context-menu-separator" />
          <div className="context-menu-item">View</div>
          <div className="context-menu-item">Sort by</div>
          <div className="context-menu-separator" />
          <div className="context-menu-item" onClick={() => window.location.reload()}>Reload Page</div>
        </div>
      )}

      <div style={{
        opacity: booting ? 0 : 1,
        transition: 'opacity 0.6s ease',
        display: 'contents'
      }}>
        {/* Render persistent apps */}
        <div style={{ display: openApps.includes('explorer') && !isMinimized('explorer') ? 'block' : 'none' }}>
          <Window 
            activeTab={activeTab} 
            setActiveTab={handleTabChange} 
            onClose={() => closeApp('explorer')} 
            onMinimize={() => toggleMinimize('explorer')} 
          />
        </div>
        
        {openApps.includes('vscode') && (
          <div style={{ display: !isMinimized('vscode') ? 'block' : 'none' }}>
            <VSCode onClose={() => closeApp('vscode')} onMinimize={() => toggleMinimize('vscode')} />
          </div>
        )}

        {openApps.includes('mail') && (
          <div style={{ display: !isMinimized('mail') ? 'block' : 'none' }}>
            <MailApp onClose={() => closeApp('mail')} onMinimize={() => toggleMinimize('mail')} />
          </div>
        )}

        {openApps.includes('browser') && (
          <div style={{ display: !isMinimized('browser') ? 'block' : 'none' }}>
            <BrowserApp onClose={() => closeApp('browser')} onMinimize={() => toggleMinimize('browser')} />
          </div>
        )}

        {openApps.includes('tictactoe') && (
          <div style={{ display: !isMinimized('tictactoe') ? 'block' : 'none' }}>
            <TicTacToe onClose={() => closeApp('tictactoe')} onMinimize={() => toggleMinimize('tictactoe')} />
          </div>
        )}

        {activeApp === 'start' && (
          <StartMenu 
            activeTab={activeTab} 
            setActiveTab={handleTabChange} 
            onClose={() => setActiveApp(null)} 
            openApp={handleAppOpen}
          />
        )}

        <Taskbar

          activeApp={activeApp}
          openApps={openApps}
          minimizedApps={minimizedApps}
          setActiveApp={handleAppOpen}
          toggleMinimize={toggleMinimize}
        />
      </div>
    </div>
  );
}

export default App;


