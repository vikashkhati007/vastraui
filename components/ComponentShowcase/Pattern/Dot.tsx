import React from 'react';

import DotPatternBackground from '@/components/CustomComponent/Pattern/Dot';

const DotPatternDemo: React.FC = () => {
  return (
    <DotPatternBackground>
      <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-70 ">
        <h1 className="text-4xl font-bold text-white z-10 ">
          Dot Pattern Background
        </h1>
      </div>
    </DotPatternBackground>
  );
};

export default DotPatternDemo;
