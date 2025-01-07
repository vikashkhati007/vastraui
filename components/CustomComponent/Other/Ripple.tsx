'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  children?: React.ReactNode;
  centerContent?: React.ReactNode;
  centerClassName?: string;
}

interface RippleCircleProps {
  size: number;
  delay: number;
  opacity: number;
}

function RippleCircle({ size, delay, opacity }: RippleCircleProps) {
  return (
    <motion.div
      animate={{
        width: size,
        height: size,
        opacity: 0,
      }}
      className="absolute rounded-full border border-black dark:border-white "
      initial={{ width: 0, height: 0, opacity }}
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

export default function Ripple({
  mainCircleSize = 300, // Increased size
  mainCircleOpacity = 0.3, // Slightly increased opacity
  numCircles = 8,
  children,
  centerContent,
  centerClassName = 'text-4xl md:text-6xl font-bold text-white whitespace-nowrap',
}: RippleProps) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        className="relative"
        style={{ width: mainCircleSize * 3, height: mainCircleSize * 3 }}
      >
        {/* Ripple circles */}
        {Array.from({ length: numCircles }).map((_, index) => (
          <RippleCircle
            key={index}
            delay={index * 1.2}
            opacity={mainCircleOpacity}
            size={mainCircleSize * 3 - index * (mainCircleSize / numCircles)}
          />
        ))}

        {/* Center content */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center ${centerClassName}`}
        >
          {centerContent || <h1>{children}</h1>}
        </div>
      </div>
    </div>
  );
}
