import React from 'react';

import StarryBackground from '@/components/CustomComponent/Background/StarFalling';

const StarryBackgroundDemo: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div>Starry Background</div>
      <StarryBackground />
    </div>
  );
};

export default StarryBackgroundDemo;
