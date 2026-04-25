import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Minus, Square, X, FolderCode, FileJson, ChevronDown, AlignLeft, Play, Terminal as TerminalIcon } from 'lucide-react';

export default function VSCode({ onClose, onMinimize }) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeTab, setActiveTab] = useState('index.js');
  const [terminalOutput, setTerminalOutput] = useState(['Welcome to Portfolio Runtime Environment.', 'Type some code and hit Run!']);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  const defaultJSCode = `// Interactive Environment: Feel free to run or edit this code!
const developer = {
  name: "${portfolioData.personal.firstName} ${portfolioData.personal.lastName}",
  role: "${portfolioData.personal.role}",
  skills: ${JSON.stringify(portfolioData.skills[0]?.technologies.slice(0, 4) || ["React", "JS", "Node"])},
  greet() {
    console.log("Hello! I am " + this.name);
    console.log("I work as a " + this.role);
    console.log("My top skills are: " + this.skills.join(', '));
  }
};

developer.greet();
`;

  const defaultJSONCode = `{
  "name": "${portfolioData.personal.firstName} ${portfolioData.personal.lastName}",
  "status": "Available for opportunities."
}`;

  const [jsCode, setJsCode] = useState(defaultJSCode);

  const runCode = () => {
    setIsTerminalOpen(true);
    setTerminalOutput(prev => [...prev, '\n> Running index.js...']);
    
    // Capture console.log
    const originalLog = console.log;
    let logs = [];
    console.log = (...args) => {
      logs.push(args.join(' '));
    };

    try {
      // Run the code
      // eslint-disable-next-line no-new-func
      const executable = new Function(jsCode);
      executable();
      setTerminalOutput(prev => [...prev, ...logs, '✓ Execution completed.']);
    } catch (err) {
      setTerminalOutput(prev => [...prev, `Error: ${err.message}`]);
    }

    // Restore console.log
    console.log = originalLog;
  };

  return (
    <div style={{...styles.windowFrame, ...(isMaximized ? styles.maximized : styles.normal)}}>
      <div style={styles.titleBar}>
        <div style={styles.titleBarLeft}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" style={styles.appIcon} alt="VS Code" />
          <span style={styles.menuItem}>File</span>
          <span style={styles.menuItem}>Edit</span>
          <span style={styles.menuItem}>Selection</span>
          <span style={styles.menuItem}>View</span>
          <span style={{...styles.menuItem, cursor: 'pointer', color: '#4caf50'}} onClick={runCode}>Run</span>
          <span style={{...styles.menuItem, cursor: 'pointer'}} onClick={() => setIsTerminalOpen(!isTerminalOpen)}>Terminal</span>
        </div>
        <div style={styles.titleText}>{activeTab} - Visual Studio Code</div>
        <div style={styles.titleBarRight}>
          <div style={styles.controlIcon} onClick={onMinimize}><Minus size={16} /></div>
          <div style={styles.controlIcon} onClick={() => setIsMaximized(!isMaximized)}><Square size={13} /></div>
          <div style={{...styles.controlIcon, ...styles.closeIcon}} onClick={onClose}><X size={16} /></div>
        </div>
      </div>

      <div style={styles.editorArea}>
        <div style={styles.activityBar}>
          <FolderCode size={28} color="#ffffff" style={{ opacity: 0.8, cursor: 'pointer', marginBottom: 20 }} />
          <AlignLeft size={28} color="#ffffff" style={{ opacity: 0.4, cursor: 'pointer' }} />
        </div>
        
        <div style={styles.sideBar}>
          <div style={styles.sideBarHeader}>EXPLORER</div>
          <div style={styles.folderRow}>
            <ChevronDown size={16} />
            <span style={{ fontWeight: 'bold' }}>PORTFOLIO</span>
          </div>
          <div 
            style={activeTab === 'index.js' ? styles.fileRowActive : styles.fileRow}
            onClick={() => setActiveTab('index.js')}
          >
            <FolderCode size={16} color="#f7df1e" />
            <span style={{ marginLeft: 6 }}>index.js</span>
          </div>
          <div 
            style={activeTab === 'resume.json' ? styles.fileRowActive : styles.fileRow}
            onClick={() => setActiveTab('resume.json')}
          >
            <FileJson size={16} color="#cbcb41" />
            <span style={{ marginLeft: 6 }}>resume.json</span>
          </div>
        </div>
        
        <div style={styles.mainEditor}>
          <div style={styles.editorTabs}>
            <div style={styles.activeTab}>
              {activeTab === 'index.js' ? <FolderCode size={14} color="#f7df1e" /> : <FileJson size={14} color="#cbcb41" />}
              <span style={{ marginLeft: 6, color: '#e0e0e0' }}>{activeTab}</span>
            </div>
            <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', paddingRight: 15}}>
              {activeTab === 'index.js' && (
                <button onClick={runCode} style={styles.runButton}>
                  <Play size={12} style={{marginRight: 4}} fill="white" /> Run Code
                </button>
              )}
            </div>
          </div>
          
          <div style={styles.codeAreaContainer}>
            {activeTab === 'index.js' ? (
              <textarea 
                style={styles.codeTextArea}
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                spellCheck="false"
              />
            ) : (
              <pre style={styles.codeStaticArea}>
                <code style={{ fontFamily: 'Consolas, monospace', fontSize: '15px', color: '#9cdcfe' }}>
                  {defaultJSONCode.split('\n').map((line, i) => (
                    <div key={i} style={{ paddingLeft: '10px' }}>
                      <span style={{ color: '#858585', marginRight: '15px', userSelect: 'none' }}>{i + 1}</span>
                      {line}
                    </div>
                  ))}
                </code>
              </pre>
            )}
          </div>

          {isTerminalOpen && (
            <div style={styles.terminalContainer}>
              <div style={styles.terminalHeader}>
                <span style={{borderBottom: '1px solid white', paddingBottom: 4, display: 'flex', alignItems: 'center'}}>
                  TERMINAL
                </span>
                <X size={14} style={{cursor: 'pointer'}} onClick={() => setIsTerminalOpen(false)} />
              </div>
              <div style={styles.terminalContent}>
                {terminalOutput.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  windowFrame: {
    backgroundColor: '#1e1e1e',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'all 0.3s ease',
    color: '#cccccc',
    border: '1px solid #333',
  },
  normal: {
    width: '75%',
    height: '75%',
    top: '12%',
    left: '12%',
  },
  maximized: {
    width: '100%',
    height: 'calc(100% - 48px)',
    top: 0,
    left: 0,
    borderRadius: 0,
  },
  titleBar: {
    height: '35px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#323233',
    paddingLeft: '8px',
  },
  titleBarLeft: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  appIcon: {
    width: '18px',
    height: '18px',
    marginRight: '12px',
  },
  menuItem: {
    fontSize: '13px',
    marginRight: '12px',
    cursor: 'default',
    opacity: 0.8,
  },
  titleText: {
    fontSize: '12px',
    opacity: 0.8,
  },
  titleBarRight: {
    display: 'flex',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  controlIcon: {
    width: '46px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#ccc',
  },
  closeIcon: {
    '&:hover': {
      backgroundColor: '#e81123',
      color: '#fff',
    }
  },
  editorArea: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  activityBar: {
    width: '48px',
    backgroundColor: '#333333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
  },
  sideBar: {
    width: '200px',
    backgroundColor: '#252526',
    display: 'flex',
    flexDirection: 'column',
  },
  sideBarHeader: {
    fontSize: '11px',
    padding: '10px 20px',
    letterSpacing: '1px',
  },
  folderRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 2px',
    fontSize: '13px',
    cursor: 'pointer',
  },
  fileRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 20px',
    fontSize: '13px',
    cursor: 'pointer',
  },
  fileRowActive: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 20px',
    fontSize: '13px',
    cursor: 'pointer',
    backgroundColor: '#37373d',
  },
  mainEditor: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    display: 'flex',
    flexDirection: 'column',
  },
  editorTabs: {
    height: '35px',
    backgroundColor: '#252526',
    display: 'flex',
  },
  activeTab: {
    backgroundColor: '#1e1e1e',
    display: 'flex',
    alignItems: 'center',
    padding: '0 15px',
    borderTop: '2px solid #007acc',
    borderRight: '1px solid #252526',
  },
  runButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#007acc',
    color: 'white',
    border: 'none',
    padding: '2px 8px',
    borderRadius: '2px',
    fontSize: '12px',
    cursor: 'pointer',
  },
  codeAreaContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  codeTextArea: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    color: '#ce9178',
    border: 'none',
    outline: 'none',
    padding: '20px',
    fontFamily: 'Consolas, monospace',
    fontSize: '15px',
    resize: 'none',
    whiteSpace: 'pre',
  },
  codeStaticArea: {
    margin: 0,
    padding: '20px',
    backgroundColor: '#1e1e1e',
    overflowY: 'auto',
    flex: 1,
  },
  terminalContainer: {
    height: '200px',
    backgroundColor: '#1e1e1e',
    borderTop: '1px solid #444',
    display: 'flex',
    flexDirection: 'column',
  },
  terminalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px 0',
    fontSize: '12px',
    color: '#ccc',
  },
  terminalContent: {
    flex: 1,
    padding: '10px 20px',
    fontFamily: 'Consolas, monospace',
    fontSize: '13px',
    color: '#eee',
    overflowY: 'auto',
  }
};
