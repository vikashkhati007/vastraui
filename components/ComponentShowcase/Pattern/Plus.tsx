import React from 'react';

import ChessPatternBackground from '@/components/CustomComponent/Pattern/Plus';

const PatternBackgroundDemo: React.FC = () => {
  return (
    <ChessPatternBackground>
      <div className="flex flex-col items-center justify-center min-h-screen text-white shadow-lg bg-black bg-opacity-80">
        <h1 className="text-4xl font-bold mb-4">Pattern Background</h1>
        <p className="text-xl">
          This is a demo of the plus pattern background component.
        </p>
      </div>
    </ChessPatternBackground>
  );
};

export default PatternBackgroundDemo;
