"use client";
import AdvancedCircularProgress from '@/components/CustomComponent/Other/ProgressBar'
import React from 'react'

const ProgressBar = () => {
    const [value, setValue] = React.useState(0)
    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue(Math.floor(Math.random() * 100) + 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [])
  return (
    <AdvancedCircularProgress value={value}/>
  )
}

export default ProgressBar