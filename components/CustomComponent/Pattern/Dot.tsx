'use client';

import React from 'react';

interface DotPatternBackgroundProps {
  dotColor?: string;
  backgroundColor?: string;
  dotSize?: string;
  dotSpace?: string;
  children?: React.ReactNode;
}

const DotPatternBackground: React.FC<DotPatternBackgroundProps> = ({
  dotColor = 'white',
  backgroundColor = 'black',
  dotSize = '1px',
  dotSpace = '22px',
  children,
}) => {
  return (
    <div className="dot-pattern-background">
      {children}
      <style>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <style>{`
        .dot-pattern-background {
          --dot-bg: ${backgroundColor};
          --dot-color: ${dotColor};
          --dot-size: ${dotSize};
          --dot-space: ${dotSpace};
          min-height: 100vh;
          width: 100%;
          background:
            linear-gradient(
                90deg,
                var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
                transparent 1%
              )
              center / var(--dot-space) var(--dot-space),
            linear-gradient(
                var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
                transparent 1%
              )
              center / var(--dot-space) var(--dot-space),
            var(--dot-color);
        }
      `}</style>
    </div>
  );
};

export default DotPatternBackground;
