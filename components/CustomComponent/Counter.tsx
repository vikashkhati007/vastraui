'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
}

export default function CounterComponent({ value, duration = 0.5, className = '' }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    setDisplayValue(value)
  }, [value])

  return (
    <div className={`relative overflow-hidden ${className}`} aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="popLayout" key={displayValue}>
        <motion.span
          key={displayValue}
          className="inline-block"
          initial={{ y: '100%', filter: 'blur(8px)' }}
          animate={{ 
            y: 0, 
            filter: 'blur(0px)',
            transition: { 
              y: { duration, ease: 'easeOut' },
              filter: { duration: duration * 0.8, delay: duration * 0.2 }
            }
          }}
          exit={{ 
            y: '-100%',
            transition: { 
              y: { duration, ease: 'easeIn' },
            }
          }}
        >
          {displayValue}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
