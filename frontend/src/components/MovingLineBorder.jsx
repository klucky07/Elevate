// components/MovingLineBorderCard.jsx
import React from 'react';

const MovingLineBorderCard = ({ children, className = "" }) => {
  return (
    <div className={`moving-line-border-card ${className}`}>
      {/* Moving lines on each side */}
      <div className="moving-lines">
        {/* Top line - moves left to right */}
        <div className="line line-top"></div>
        
        {/* Right line - moves top to bottom */}
        <div className="line line-right"></div>
        
        {/* Bottom line - moves right to left */}
        <div className="line line-bottom"></div>
        
        {/* Left line - moves bottom to top */}
        <div className="line line-left"></div>
      </div>
      
      {/* Card content */}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default MovingLineBorderCard;