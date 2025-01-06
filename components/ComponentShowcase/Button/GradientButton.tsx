import GradientButton from '@/components/CustomComponent/Button/GradientButton'
import React from 'react'

const GradientButtonShowcase = () => {
  return (
    <section className='flex flex-col gap-5 justify-center items-center'>
      <GradientButton size="xl" gradient="blue" >
        Blue Gradient
      </GradientButton>
      <GradientButton size="lg" gradient="neonYellow" >
        Neon Yellow Gradient
      </GradientButton>
      <GradientButton size="lg" gradient="red" >
        Red Gradient
      </GradientButton>
      </section>
  )
}

export default GradientButtonShowcase