import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  CloudSun, 
  Wifi, 
  Volume2, 
  VolumeX,
  Battery, 
  ChevronUp, 
  FolderClosed,
  Code2,
  Mail,
  Globe,
  Music,
  X,
  Gamepad2,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog
} from 'lucide-react';

const playlist = [
  { title: "Epic Motivation", artist: "Motivational Track", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", maxDuration: 60 },
  { title: "Success Anthem", artist: "Focus Beat", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", maxDuration: 90 },
  { title: "Victory Lap", artist: "Energetic Vibe", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", maxDuration: 75 },
  { title: "Power Up", artist: "Rhythmic Flow", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", maxDuration: 120 }
];

export default function Taskbar({ activeApp, openApps, minimizedApps, setActiveApp, toggleMinimize }) {
  const [time, setTime] = useState(new Date());
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showMediaPopup, setShowMediaPopup] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const [temperature, setTemperature] = useState(42);
  const [weatherDesc, setWeatherDesc] = useState("Sunny");
  const [WeatherIcon, setWeatherIcon] = useState(() => CloudSun);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
            if (!apiKey) return;
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
            const data = await res.json();
            
            if (data.main && data.weather) {
              setTemperature(Math.round(data.main.temp));
              const desc = data.weather[0].main; 
              setWeatherDesc(desc);
              
              const id = data.weather[0].id;
              if (id >= 200 && id < 300) setWeatherIcon(() => CloudLightning);
              else if (id >= 300 && id < 600) setWeatherIcon(() => CloudRain);
              else if (id >= 600 && id < 700) setWeatherIcon(() => CloudSnow);
              else if (id >= 700 && id < 800) setWeatherIcon(() => CloudFog);
              else if (id === 800) {
                 const isDay = data.weather[0].icon.includes('d');
                 setWeatherIcon(() => isDay ? Sun : Moon);
              }
              else if (id > 800) setWeatherIcon(() => Cloud);
            }
          } catch (e) {
            console.error("Failed to fetch weather data", e);
          }
        },
        (error) => {
          console.log("Geolocation permission denied or error", error);
        }
      );
    }
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const limit = playlist[currentSongIndex].maxDuration;
      
      if (current >= limit) {
        nextSong();
      } else {
        setCurrentTime(current);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(playlist[currentSongIndex].maxDuration);
    }
  };

  const handleSeek = (e) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentSongIndex].src;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play error:", e));
      }
    }
  }, [currentSongIndex]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

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
      <div style={styles.weatherWidget} className="hide-on-mobile">
        <WeatherIcon size={20} color="#ffb020" style={{ fill: '#ffb020' }} />
        <div style={styles.weatherText}>
          <span style={{ fontWeight: 600 }}>{temperature} °C</span>
          <span style={{ fontSize: '11px', color: '#555' }}>{weatherDesc}</span>
        </div>
      </div>

      <div className="show-on-mobile" style={{ display: 'none', alignItems: 'center', fontSize: '11px', color: '#333', fontWeight: 600 }}>
        <span>{temperature}°C</span>
        <span style={{ margin: '0 4px', color: '#999' }}>|</span>
        <span style={{ whiteSpace: 'nowrap' }}>{formatTime(time)}</span>
      </div>

      <div style={styles.centerApps} className="taskbar-center-mobile">
        <div 
          style={styles.iconWrapper} 
          className="taskbar-icon-mobile"
          onClick={() => setActiveApp(activeApp === 'start' ? null : 'start')}
        >
          <div style={styles.winIcon}>
            <div style={{...styles.winSquare, backgroundColor: '#03a9f4'}}></div>
            <div style={{...styles.winSquare, backgroundColor: '#03a9f4'}}></div>
            <div style={{...styles.winSquare, backgroundColor: '#03a9f4'}}></div>
            <div style={{...styles.winSquare, backgroundColor: '#03a9f4'}}></div>
          </div>
        </div>

        <div style={styles.searchBar} className="hide-on-mobile search-bar-tablet" onClick={() => setActiveApp(activeApp === 'start' ? null : 'start')}>
          <Search size={16} color="#666" />
          <span style={{ marginLeft: '10px', color: '#666', fontSize: '13px' }}>Search</span>
        </div>

        {/* Explorer */}
        <div 
          style={{...styles.iconWrapper, ...(isAppActive('explorer') ? styles.activeApp : {})}}
          className="taskbar-icon-mobile"
          onClick={() => handleIconClick('explorer')}
        >
          <FolderClosed size={24} color="#fcc93d" style={{ fill: '#fcc93d' }} />
          {isAppOpen('explorer') && <div style={styles.runningIndicator} />}
        </div>
        
        {/* VS Code */}
        <div 
          style={{...styles.iconWrapper, ...(isAppActive('vscode') ? styles.activeApp : {})}}
          className="taskbar-icon-mobile"
          onClick={() => handleIconClick('vscode')}
        >
          <Code2 size={24} color="#007acc" />
          {isAppOpen('vscode') && <div style={styles.runningIndicator} />}
        </div>
        
        {/* Mail */}
        <div 
          style={{...styles.iconWrapper, ...(isAppActive('mail') ? styles.activeApp : {})}}
          className="taskbar-icon-mobile"
          onClick={() => handleIconClick('mail')}
        >
          <Mail size={24} color="#0078d4" />
          {isAppOpen('mail') && <div style={styles.runningIndicator} />}
        </div>

        {/* Browser */}
        <div 
          style={{...styles.iconWrapper, ...(isAppActive('browser') ? styles.activeApp : {})}}
          className="taskbar-icon-mobile"
          onClick={() => handleIconClick('browser')}
        >
          <Globe size={24} color="#e53935" />
          {isAppOpen('browser') && <div style={styles.runningIndicator} />}
        </div>

        {/* Tic Tac Toe */}
        <div 
          style={{...styles.iconWrapper, ...(isAppActive('tictactoe') ? styles.activeApp : {})}}
          className="taskbar-icon-mobile"
          onClick={() => handleIconClick('tictactoe')}
        >
          <Gamepad2 size={24} color="#8A2BE2" />
          {isAppOpen('tictactoe') && <div style={styles.runningIndicator} />}
        </div>
      </div>

      <div style={styles.trayArea}>
        <div style={styles.trayIcons}>
          <ChevronUp size={16} color="#333" />
          <Wifi size={16} color="#333" style={{ marginLeft: 8 }} />
          
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div 
              style={{ display: 'flex', alignItems: 'center', marginLeft: 8, cursor: 'pointer' }}
              onClick={() => {
                setShowVolumeSlider(!showVolumeSlider);
                setShowMediaPopup(false);
              }}
              title="Volume"
            >
              {volume === 0 ? <VolumeX size={16} color="#333" /> : <Volume2 size={16} color="#333" />}
            </div>
            
            {showVolumeSlider && (
              <div style={styles.volumeSliderPopup}>
                {volume === 0 ? <VolumeX size={16} color="#333" /> : <Volume2 size={16} color="#333" />}
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={volume} 
                  onChange={handleVolumeChange}
                  style={styles.slider}
                />
              </div>
            )}
          </div>

          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Music 
              size={16} 
              color={isPlaying ? "#0078D4" : "#333"} 
              style={{ marginLeft: 8, cursor: 'pointer' }} 
              onClick={() => {
                setShowMediaPopup(!showMediaPopup);
                setShowVolumeSlider(false);
              }}
              title="Media Player"
            />
            {showMediaPopup && (
              <div style={styles.mediaPopup}>
                <div 
                  style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', opacity: 0.6 }} 
                  onClick={() => setShowMediaPopup(false)}
                >
                  <X size={16} color="#333" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '6px' }}>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #8A2BE2, #0078D4)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <Music size={24} color="#fff" />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#111', whiteSpace: 'nowrap' }}>{playlist[currentSongIndex].title}</span>
                    <span style={{ fontSize: '11px', color: '#666' }}>{playlist[currentSongIndex].artist}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '16px' }}>
                  <div onClick={prevSong} style={{ cursor: 'pointer', transition: 'transform 0.1s' }} onMouseDown={(e) => e.currentTarget.style.transform='scale(0.9)'} onMouseUp={(e) => e.currentTarget.style.transform='scale(1)'}>
                    <ChevronUp size={20} style={{ transform: 'rotate(-90deg)' }} />
                  </div>
                  <div 
                    onClick={toggleMusic} 
                    style={{ width: '40px', height: '40px', background: '#0078D4', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,120,212,0.3)', transition: 'transform 0.1s' }}
                    onMouseDown={(e) => e.currentTarget.style.transform='scale(0.95)'} 
                    onMouseUp={(e) => e.currentTarget.style.transform='scale(1)'}
                  >
                    {isPlaying ? 
                      <div style={{display: 'flex', gap: '3px'}}><div style={{width: '3px', height: '14px', background: '#fff', borderRadius: '2px'}} /><div style={{width: '3px', height: '14px', background: '#fff', borderRadius: '2px'}} /></div> 
                      : 
                      <div style={{width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '12px solid #fff', marginLeft: '3px'}} />
                    }
                  </div>
                  <div onClick={nextSong} style={{ cursor: 'pointer', transition: 'transform 0.1s' }} onMouseDown={(e) => e.currentTarget.style.transform='scale(0.9)'} onMouseUp={(e) => e.currentTarget.style.transform='scale(1)'}>
                    <ChevronUp size={20} style={{ transform: 'rotate(90deg)' }} />
                  </div>
                </div>

                {/* Progress Bar */}
                <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '10px', color: '#666', width: '24px', textAlign: 'right' }}>
                    {Math.floor(currentTime / 60)}:{(Math.floor(currentTime % 60)).toString().padStart(2, '0')}
                  </span>
                  <input 
                    type="range" 
                    min="0" 
                    max={duration || 100} 
                    value={currentTime} 
                    onChange={handleSeek}
                    style={{ flex: 1, accentColor: '#0078D4', height: '4px', cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: '10px', color: '#666', width: '24px' }}>
                    {duration ? `${Math.floor(duration / 60)}:${(Math.floor(duration % 60)).toString().padStart(2, '0')}` : '0:00'}
                  </span>
                </div>
              </div>
            )}
          </div>

          <Battery size={16} color="#333" style={{ marginLeft: 8 }} />
        </div>
        <div style={styles.timeDate} className="hide-on-mobile">
          <span>{formatTime(time)}</span>
          <span style={{ marginTop: '2px' }}>{formatDate(time)}</span>
        </div>
      </div>

      {/* Set default volume using ref callback or just state */}
      <audio 
        ref={(el) => {
          if (el) {
            audioRef.current = el;
            el.volume = volume;
          }
        }} 
        onEnded={nextSong}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={playlist[currentSongIndex].src} type="audio/mpeg" />
      </audio>
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
    width: 'auto', // Changed from 150px to auto
    justifyContent: 'flex-end',
    marginLeft: 'auto',
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
  volumeSliderPopup: {
    position: 'absolute',
    bottom: '40px',
    left: '-50px',
    background: 'rgba(243, 243, 243, 0.95)',
    backdropFilter: 'blur(20px)',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.6)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 10000,
  },
  slider: {
    width: '100px',
    cursor: 'pointer',
    accentColor: '#0078D4',
  },
  mediaPopup: {
    position: 'absolute',
    bottom: '40px',
    right: '-50px',
    width: '240px',
    background: 'rgba(243, 243, 243, 0.95)',
    backdropFilter: 'blur(20px)',
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.6)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 10000,
    animation: 'startMenuSlideUp 0.3s ease',
  }
};
