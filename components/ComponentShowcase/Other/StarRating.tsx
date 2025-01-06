"use client"
import StarRating from '@/components/CustomComponent/Other/StarRating'
import React from 'react'

const StarRatingComponentDemo = () => {
  return (
         <StarRating 
        onChange={(rating) => console.log(`Rated: ${rating} stars`)}
        defaultValue={0}
        />
  )
}

export default StarRatingComponentDemo