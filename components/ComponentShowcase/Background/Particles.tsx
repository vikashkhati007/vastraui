import React from 'react';

import ParticlesBackground from '@/components/CustomComponent/Background/Particles';

const ParticlesShowcase = () => {
  return (
    <div
      className="overflow-hidden"
      style={{ height: '100vh', width: '100vw' }}
    >
      <ParticlesBackground />
    </div>
  );
};

export default ParticlesShowcase;
