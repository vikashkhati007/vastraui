"use client"
import GlidingRadioButton from '@/components/CustomComponent/Other/GliderRadio'
import React from 'react'

const options = [
    { id: 'radio-free', label: 'Free' },
    { id: 'radio-basic', label: 'Basic' },
    { id: 'radio-premium', label: 'Premium' },
  ]

const GliderRadio = () => {
  return (
    <GlidingRadioButton options={options} onSelect={(e)=>{console.log(e)}} initialSelectedId='radio-free'/>
  )
}

export default GliderRadio