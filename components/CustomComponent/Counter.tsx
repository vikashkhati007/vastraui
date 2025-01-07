'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
}

export default function CounterComponent({
  value,
  duration = 0.5,
  className = '',
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  return (
    <div
      aria-atomic="true"
      aria-live="polite"
      className={`relative overflow-hidden ${className}`}
    >
      <AnimatePresence key={displayValue} mode="popLayout">
        <motion.span
          key={displayValue}
          animate={{
            y: 0,
            filter: 'blur(0px)',
            transition: {
              y: { duration, ease: 'easeOut' },
              filter: { duration: duration * 0.8, delay: duration * 0.2 },
            },
          }}
          className="inline-block"
          exit={{
            y: '-100%',
            transition: {
              y: { duration, ease: 'easeIn' },
            },
          }}
          initial={{ y: '100%', filter: 'blur(8px)' }}
        >
          {displayValue}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
