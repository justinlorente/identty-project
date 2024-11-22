import React from 'react';
import useReadingProgress from '@/src/hooks';

const ScrollDown = () => {
  const completion = useReadingProgress();
  return (
    <div className="ScrollDown">
      <div className="ScrollDown-wrapper">
        <div className="ScrollDown-textWrapper">
          <p className="ScrollDown-text">Scroll down</p>
        </div>
        <div className="ScrollDown-progressBar">
          <span className="bar">
            <span
              className="progress"
              style={{ transform: `translateX(${completion - 100}%)` }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollDown;
