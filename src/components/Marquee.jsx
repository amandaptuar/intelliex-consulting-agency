import React from 'react';
import './Marquee.css';

export default function Marquee({ textArray, direction = 'left', speed = 25, bgColor = '#0a1628', textColor = '#c9a84c' }) {
  const repeatedText = [...textArray, ...textArray, ...textArray, ...textArray];

  return (
    <div className="marquee-container" style={{ background: bgColor }}>
      <div className={`marquee-content ${direction}`} style={{ animationDuration: `${speed}s` }}>
        {[1, 2, 3, 4].map((groupIndex) => (
          <div key={groupIndex} className="marquee-group">
            {textArray.map((text, i) => (
              <React.Fragment key={i}>
                <span 
                  className={`marquee-item ${i % 2 === 0 ? 'solid' : 'outline'}`}
                  style={i % 2 === 0 ? { color: textColor } : { WebkitTextStroke: `1.5px ${textColor}99` }}
                >
                  {text}
                </span>
                <span className="marquee-star" style={{ color: textColor === '#c9a84c' ? '#4338CA' : textColor }}>✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
