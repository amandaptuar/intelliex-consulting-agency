import React from 'react';
import './LogoMarquee.css';

export default function LogoMarquee({ imageArray, direction = 'right', speed = 35, bgColor = '#0a1628' }) {
  return (
    <div className="logo-marquee-container" style={{ background: bgColor }}>
      <div className={`logo-marquee-content ${direction}`} style={{ animationDuration: `${speed}s` }}>
        {[1, 2, 3, 4].map((groupIndex) => (
          <div key={groupIndex} className="logo-marquee-group">
            {imageArray.map((src, i) => (
              <React.Fragment key={i}>
                <div className="logo-marquee-item">
                  <img src={src} alt="Client Logo" className="logo-img" />
                </div>
                <span className="logo-marquee-star" style={{ color: '#c9a84c' }}>✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
