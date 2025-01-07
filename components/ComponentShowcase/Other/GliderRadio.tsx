'use client';
import React from 'react';

import GlidingRadioButton from '@/components/CustomComponent/Other/GliderRadio';

const options = [
  { id: 'radio-free', label: 'Free' },
  { id: 'radio-basic', label: 'Basic' },
  { id: 'radio-premium', label: 'Premium' },
];

const GliderRadio = () => {
  return (
    <GlidingRadioButton
      initialSelectedId="radio-free"
      options={options}
      onSelect={(e) => {
        console.log(e);
      }}
    />
  );
};

export default GliderRadio;
