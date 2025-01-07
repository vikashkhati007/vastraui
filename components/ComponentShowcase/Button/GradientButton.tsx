import React from 'react';

import GradientButton from '@/components/CustomComponent/Button/GradientButton';

const GradientButtonShowcase = () => {
  return (
    <section className="flex flex-col gap-5 justify-center items-center">
      <GradientButton gradient="blue" size="xl">
        Blue Gradient
      </GradientButton>
      <GradientButton gradient="neonYellow" size="lg">
        Neon Yellow Gradient
      </GradientButton>
      <GradientButton gradient="red" size="lg">
        Red Gradient
      </GradientButton>
    </section>
  );
};

export default GradientButtonShowcase;
