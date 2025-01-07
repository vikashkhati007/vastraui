'use client';
import React from 'react';

import StarRating from '@/components/CustomComponent/Other/StarRating';

const StarRatingComponentDemo = () => {
  return (
    <StarRating
      defaultValue={0}
      onChange={(rating) => console.log(`Rated: ${rating} stars`)}
    />
  );
};

export default StarRatingComponentDemo;
