import React, { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <section className="video-section">
      <div className="video-background-container">
        <div className="video-overlay"></div>
        <video 
          ref={videoRef}
          src="/assets/home-video.mp4" 
          loop 
          muted 
          autoPlay 
          playsInline 
          poster="/assets/home-video-poster.jpg"
          className="background-video"
        ></video>
        <div className="video-bg-shadow"></div>
      </div>

      <div className="video-content-container">
        <div className="founder-card">
          <div className="founder-image-wrapper">
            <img 
              src="/assets/home-founder.png" 
              alt="Josef Unger Senior" 
              className="founder-image"
            />
          </div>
          <div className="founder-info">
            <h3 className="founder-name">Josef Unger Senior</h3>
            <p className="founder-title">Founder, Unger Steel Group (Austria)</p>
          </div>
        </div>

        <div className="quote-container">
          <p className="quote-text">
            "Most procurement firms hand us a job and disappear until delivery. 50 Stars stays in the loop, clarifying specs, protecting our timeline, and making sure what we build actually matches what the job site needs. That's the difference between a supplier and a partner."
          </p>
          
          <div className="quote-action-wrap" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <a 
              href="/about" 
              className="btn-quote-who-we-are" 
              onClick={(e) => navigateTo(e, '/about')}
            >
              <span className="btn-text">Who We Are</span>
              <span className="btn-icon">
                <img src="/assets/icon-arrow.svg" alt="Arrow" style={{ width: '14px', height: '10px' }} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <button className="play-pause-btn" onClick={togglePlay} aria-label={isPlaying ? "Pause video" : "Play video"}>
        {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
      </button>
    </section>
  );
};

export default VideoSection;
