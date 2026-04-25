import React, { useState } from 'react';
import Taskbar from './components/Taskbar';
import Window from './components/Window';
import VSCode from './components/apps/VSCode';
import MailApp from './components/apps/MailApp';
import BrowserApp from './components/apps/BrowserApp';
import BootScreen from './components/BootScreen';

function App() {
  const [booting, setBooting] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');
  const [activeApp, setActiveApp] = useState('explorer');
  const [minimizedApps, setMinimizedApps] = useState([]);
  const [openApps, setOpenApps] = useState(['explorer']); // Track what's actually "open" in background

  const closeApp = (appId) => {
    setOpenApps(prev => prev.filter(a => a !== appId));
    if (activeApp === appId) setActiveApp(null);
    setMinimizedApps(prev => prev.filter(a => a !== appId));
  };

  const toggleMinimize = (appId) => {
    if (minimizedApps.includes(appId)) {
      setMinimizedApps(prev => prev.filter(a => a !== appId));
      setActiveApp(appId);
    } else {
      setMinimizedApps(prev => [...prev, appId]);
      setActiveApp(null);
    }
  };

  const openApp = (appId) => {
    if (!openApps.includes(appId)) {
      setOpenApps(prev => [...prev, appId]);
    }
    setMinimizedApps(prev => prev.filter(a => a !== appId));
    setActiveApp(appId);
  };

  const isMinimized = (appId) => minimizedApps.includes(appId);

  return (
    <div className="desktop">
      {booting && <BootScreen onComplete={() => setBooting(false)} />}

      <div style={{
        opacity: booting ? 0 : 1,
        transition: 'opacity 0.6s ease',
        display: 'contents'
      }}>
        {/* Render persistent apps */}
        <div style={{ display: openApps.includes('explorer') && !isMinimized('explorer') ? 'block' : 'none' }}>
          <Window 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
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

        <Taskbar
          activeApp={activeApp}
          openApps={openApps}
          minimizedApps={minimizedApps}
          setActiveApp={openApp}
          toggleMinimize={toggleMinimize}
        />
      </div>
    </div>
  );
}

export default App;


