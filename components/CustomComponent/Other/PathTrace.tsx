'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface PathAnimationProps {
  width?: number;
  height?: number;
  backColor?: string;
  gradientColors?: string[];
  duration?: number;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  shape?: 'custom' | 'straight' | 'circle';
  loop?: boolean;
  onClick?: () => void;
}

export default function PathAnimation({
  width = 64,
  height = 48,
  backColor = '#00bfff33',
  gradientColors = ['#00bfff', '#1e90ff', '#4682b4'],
  duration = 1.4,
  direction = 'horizontal',
  shape = 'custom',
  loop = true,
  onClick,
}: PathAnimationProps) {
  const pathPoints = useMemo(() => {
    switch (shape) {
      case 'straight':
        return '0,24 64,24';
      case 'circle':
        return '32,0 48,8 56,24 48,40 32,48 16,40 8,24 16,8 32,0';
      default:
        return '0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24';
    }
  }, [shape]);

  const gradientId = useMemo(
    () => `gradient-${Math.random().toString(36).slice(2, 11)}`,
    []
  );

  const gradientCoords = useMemo(() => {
    switch (direction) {
      case 'vertical':
        return { x1: '0%', y1: '0%', x2: '0%', y2: '100%' };
      case 'diagonal':
        return { x1: '0%', y1: '0%', x2: '100%', y2: '100%' };
      default:
        return { x1: '0%', y1: '0%', x2: '100%', y2: '0%' };
    }
  }, [direction]);

  return (
    <div
      className="loading"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <svg height={height} viewBox="0 0 64 48" width={width}>
        <defs>
          <linearGradient id={gradientId} {...gradientCoords}>
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (gradientColors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          id="back"
          points={pathPoints}
          stroke={backColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <motion.polyline
          animate={{ strokeDashoffset: 0 }}
          fill="none"
          id="front"
          initial={{ strokeDashoffset: 192 }}
          points={pathPoints}
          stroke={`url(#${gradientId})`}
          strokeDasharray="48 144"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          transition={{
            duration: duration,
            ease: 'linear',
            repeat: loop ? Infinity : 0,
          }}
        />
      </svg>
      <style>{`
        .loading svg polyline#front {
          animation: pulse ${duration}s linear infinite;
          cursor: ${onClick ? 'pointer' : 'default'};
        }
        @keyframes pulse {
          72.5% {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
