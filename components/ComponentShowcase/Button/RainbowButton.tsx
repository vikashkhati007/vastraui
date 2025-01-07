import React from 'react';

import RainbowButtonComponent from '@/components/CustomComponent/Button/RainbowButton';

const RainbowButtonShowcase = () => {
  return (
    <section className="flex flex-col gap-5">
      <RainbowButtonComponent>Rainbow Button</RainbowButtonComponent>
    </section>
  );
};

export default RainbowButtonShowcase;
