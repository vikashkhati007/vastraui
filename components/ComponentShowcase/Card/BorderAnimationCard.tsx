import BorderAnimationCardComponent from '@/components/CustomComponent/Cards/BorderAnimationCard'
import React from 'react'

const BorderAnimationCardDemo = () => {
  return (
 <BorderAnimationCardComponent>
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-2xl font-bold">Border Animation Card</h1>
      <p className="text-sm">
        This card component has a border animation when hovered.
      </p>
    </div>
  </BorderAnimationCardComponent>
  )
}

export default BorderAnimationCardDemo