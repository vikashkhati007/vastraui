import React from 'react';

import MastodonpatternBackground from '@/components/CustomComponent/Pattern/Mastodon';

const PatternBackgroundDemo: React.FC = () => {
  return (
    <MastodonpatternBackground>
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">Pattern Background</h1>
        <p className="text-xl">
          This is a demo of the pattern background component.
        </p>
      </div>
    </MastodonpatternBackground>
  );
};

export default PatternBackgroundDemo;
