'use client';
import React from 'react';

interface PatternBackgroundProps {
  children: React.ReactNode;
}

const ChessPatternBackground: React.FC<PatternBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="pattern-background">
      {children}
      <style>{`
        .pattern-background {
          background:
            radial-gradient(
              circle,
              transparent 20%,
              black 20%,
              black 80%,
              transparent 80%,
              transparent
            ),
            radial-gradient(
                circle,
                transparent 20%,
                black 20%,
                black 80%,
                transparent 80%,
                transparent
              )
              25px 25px,
            linear-gradient(#555555 4px, transparent 4px) 0 -2px,
            linear-gradient(90deg, #555555 4px, transparent 4px) -2px 0;
          background-color: black;
          background-size:
            50px 50px,
            50px 50px,
            25px 25px,
            25px 25px;
          background-attachment: fixed;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default ChessPatternBackground;
