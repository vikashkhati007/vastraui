'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdvancedCircularProgressProps {
  value?: number;
  size?: number;
  strokeWidth?: number;
  gradientStart?: string;
  gradientEnd?: string;
  duration?: number;
  glowColor?: string;
  glowIntensity?: number;
  backgroundColor?: string;
  fontColor?: string;
}

export default function AdvancedCircularProgress({
  value = 10,
  size = 200,
  strokeWidth = 16, // Increased stroke width
  gradientStart = '#60efff',
  gradientEnd = '#00ff87',
  duration = 2,
  glowColor = '#60efff',
  glowIntensity = 8,
  backgroundColor = '#000000',
  fontColor = '#ffffff',
}: AdvancedCircularProgressProps) {
  const [progress, setProgress] = useState(0);
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background: backgroundColor,
        borderRadius: '50%',
        boxShadow:
          '0 0 50px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.1)',
      }}
    >
      <svg
        className="transform -rotate-90"
        height={size}
        style={{ filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))' }}
        width={size}
      >
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor={gradientStart} />
            <stop offset="100%" stopColor={gradientEnd} />
          </linearGradient>
          <filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
            <feGaussianBlur
              result="coloredBlur"
              stdDeviation={glowIntensity / 2}
            />
            <feComposite in="coloredBlur" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>

        {/* Background circle - slightly darker than pure black */}
        <circle
          cx={center}
          cy={center}
          fill="none"
          r={radius}
          stroke="#111111"
          strokeWidth={strokeWidth}
          style={{ filter: 'brightness(0.7)' }}
        />

        {/* Progress circle */}
        <motion.circle
          animate={{ strokeDashoffset: offset }}
          cx={center}
          cy={center}
          fill="none"
          filter="url(#glow)"
          initial={{ strokeDashoffset: circumference }}
          r={radius}
          stroke="url(#progressGradient)"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          transition={{ duration, ease: 'easeInOut' }}
        />
      </svg>

      {/* Counter text */}
      <AnimatePresence>
        <motion.div
          key={progress}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center"
          exit={{ opacity: 0, scale: 0.5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="text-7xl font-bold"
            style={{
              color: fontColor,
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 5px rgba(255, 255, 255, 0.5)',
            }}
          >
            {Math.round(progress)}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
