import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { FolderKanban, FileText } from 'lucide-react';
import {
  SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss,
  SiReact, SiMysql, SiExpress, SiNodedotjs, SiGit, SiGithub, SiOpenai
} from 'react-icons/si';
import { TbMathFunction } from 'react-icons/tb';

export default function Home({ setActiveTab }) {
  const { personal } = portfolioData;

  // Inner orbit — 6 icons
  const innerIcons = [
    { icon: SiHtml5,      color: '#E34F26', angle: 0,   label: 'HTML5' },
    { icon: SiCss3,       color: '#1572B6', angle: 60,  label: 'CSS3' },
    { icon: SiJavascript, color: '#F7DF1E', angle: 120, label: 'JavaScript' },
    { icon: SiReact,      color: '#61DAFB', angle: 180, label: 'React' },
    { icon: SiNodedotjs,  color: '#339933', angle: 240, label: 'Node.js' },
    { icon: SiGit,        color: '#F05032', angle: 300, label: 'Git' },
  ];

  // Outer orbit — 7 icons
  const outerIcons = [
    { icon: SiBootstrap,  color: '#7952B3', angle: 0,        label: 'Bootstrap' },
    { icon: SiTailwindcss,color: '#06B6D4', angle: 51.4,     label: 'Tailwind' },
    { icon: SiMysql,      color: '#4479A1', angle: 102.8,    label: 'SQL' },
    { icon: SiExpress,    color: '#444444', angle: 154.2,    label: 'Express' },
    { icon: SiGithub,     color: '#181717', angle: 205.7,    label: 'GitHub' },
    { icon: TbMathFunction, color: '#8A2BE2', angle: 257.1,  label: 'DSA' },
    { icon: SiOpenai,     color: '#10a37f', angle: 308.5,    label: 'Gen AI' },
  ];

  return (
    <div style={styles.container} className="animate-fade-up">
      <div style={styles.leftSide}>
        <div style={styles.greeting}>
          <span style={styles.wave}>👋</span> <span style={{ fontWeight: 500, color: '#666' }}>Hello World, I am</span>
        </div>
        <h1 className="gradient-text-primary" style={styles.name}>{personal.firstName} {personal.lastName}</h1>
        <p style={styles.title} className="brand-font">{personal.role}</p>
        
        <div style={styles.foldersContainer}>
          <div className="interactive-icon-box" style={styles.folderBox} onClick={() => setActiveTab('Contact')}>
            <div style={styles.folderIconBg}>
              <FolderKanban size={48} color="#fcc93d" style={{ fill: '#fcc93d', filter: 'drop-shadow(0 4px 6px rgba(252,201,61,0.4))' }} />
            </div>
            <span style={styles.folderText}>ContactMe.exe</span>
          </div>
          <div className="interactive-icon-box" style={styles.folderBox} onClick={() => {
            fetch(personal.resumeUrl)
              .then(res => res.blob())
              .then(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Rambihari_Patel_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
              })
              .catch(() => {
                // Fallback: direct open
                window.open(personal.resumeUrl, '_blank');
              });
          }}>
            <div style={styles.folderIconBg}>
              <FileText size={48} color="#e53935" style={{ fill: '#e53935', filter: 'drop-shadow(0 4px 6px rgba(229,57,53,0.4))' }} />
            </div>
            <span style={styles.folderText}>Resume.pdf</span>
          </div>
        </div>
      </div>

      <div style={styles.rightSide}>
        <div style={styles.orbitContainer}>
          {/* Orbit ring lines */}
          <div style={styles.orbitRing1}></div>
          <div style={styles.orbitRing2}></div>

          {/* Profile center */}
          <div style={styles.profileCircle}>
            <img
              src={personal.profileImage}
              alt="Profile"
              style={styles.profileImg}
            />
            <div style={styles.profileGlow}></div>
          </div>

          {/* Inner orbit — HTML CSS JS React Node Git */}
          {innerIcons.map((item, index) => {
            const radius = 135;
            const rad = item.angle * (Math.PI / 180);
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <div
                key={`inner-${index}`}
                className="interactive-icon-box"
                title={item.label}
                style={{
                  ...styles.orbitalIcon,
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  background: 'rgba(255,255,255,0.92)',
                  boxShadow: `0 4px 20px ${item.color}44`,
                  border: `1.5px solid ${item.color}55`,
                }}
              >
                <item.icon size={22} color={item.color} />
              </div>
            );
          })}

          {/* Outer orbit — Bootstrap Tailwind SQL Express GitHub DSA GenAI */}
          {outerIcons.map((item, index) => {
            const radius = 240;
            const rad = item.angle * (Math.PI / 180);
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <div
                key={`outer-${index}`}
                className="interactive-icon-box"
                title={item.label}
                style={{
                  ...styles.orbitalIcon,
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255,255,255,0.88)',
                  boxShadow: `0 4px 16px ${item.color}33`,
                  border: `1.5px solid ${item.color}44`,
                }}
              >
                <item.icon size={20} color={item.color} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    padding: '20px 40px',
  },
  leftSide: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: '40px',
  },
  greeting: {
    fontSize: '22px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: "'Outfit', sans-serif"
  },
  wave: {
    fontSize: '32px',
    animation: 'wave 2s infinite',
    transformOrigin: '70% 70%',
    display: 'inline-block'
  },
  name: {
    fontSize: '72px',
    fontWeight: '800',
    margin: '0 0 10px 0',
    lineHeight: '1.1',
    letterSpacing: '-1px'
  },
  title: {
    fontSize: '26px',
    color: '#8A2BE2',
    fontWeight: '500',
    marginBottom: '50px'
  },
  foldersContainer: {
    display: 'flex',
    gap: '35px'
  },
  folderBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  folderIconBg: {
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
    border: '1px solid rgba(255,255,255,0.8)'
  },
  folderText: {
    marginTop: '15px',
    fontSize: '15px',
    color: '#444',
    fontWeight: '600',
    fontFamily: "'Outfit', sans-serif"
  },
  rightSide: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orbitContainer: {
    position: 'relative',
    width: '560px',
    height: '560px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orbitRing1: {
    position: 'absolute',
    width: '480px',
    height: '480px',
    border: '1px dashed rgba(99,102,241,0.25)',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
    animation: 'spin 60s linear infinite',
  },
  orbitRing2: {
    position: 'absolute',
    width: '310px',
    height: '310px',
    border: '1px dashed rgba(0, 120, 212, 0.25)',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
    animation: 'spin 40s linear infinite reverse',
  },
  profileCircle: {
    width: '175px',
    height: '175px',
    borderRadius: '40%',
    backgroundColor: '#fff',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '0 20px 50px rgba(0,120,212,0.2)',
    border: '6px solid white'
  },
  profileGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '40%',
    background: 'linear-gradient(135deg, #0078D4, #8A2BE2)',
    filter: 'blur(20px)',
    opacity: 0.4,
    zIndex: -1,
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '35%'
  },
  orbitalIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '56px',
    height: '56px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,255,255,0.8)',
    zIndex: 5,
  }
};
