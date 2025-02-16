'use client';

import { useState, useEffect } from 'react';

type AnimationEffect = 'spin' | 'wipe' | 'flicker' | 'wave' | 'throb' | 'pulse';

interface ShimmerButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  initialEffect?: AnimationEffect;
  className?: string;
}

export default function ShimmerButton({
  children = 'Simmer Button',
  disabled = false,
  onClick,
  initialEffect = 'spin',
  className = '',
}: ShimmerButtonProps) {
  const [effect, setEffect] = useState<AnimationEffect>(initialEffect);

  useEffect(() => {
    // Set initial random effect if none specified
    if (!initialEffect) {
      const effects: AnimationEffect[] = [
        'spin',
        'wipe',
        'flicker',
        'wave',
        'throb',
        'pulse',
      ];
      const randomEffect = effects[Math.floor(Math.random() * effects.length)];

      setEffect(randomEffect);
    }
  }, [initialEffect]);

  return (
    <div className="container">
      <button
        className={`shimmer-button ${className}`}
        data-effect={effect}
        disabled={disabled}
        onClick={onClick}
      >
        <span className="text-white">{children}</span>
        <span className="shimmer" />
      </button>

      <style>{`
        @property --mask {
          syntax: '<angle>';
          inherits: false;
          initial-value: 33deg;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .selection {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
        }

        .selection label {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #fff;
          cursor: pointer;
        }

        .shimmer-button {
          --shimmer-hue-1: 213deg;
          --shimmer-sat-1: 95%;
          --shimmer-lit-1: 91%;
          --shimmer-hue-2: 248deg;
          --shimmer-sat-2: 100%;
          --shimmer-lit-2: 86%;
          --shimmer-hue-3: 293deg;
          --shimmer-sat-3: 78%;
          --shimmer-lit-3: 89%;
          --glow-hue: 222deg;
          --shadow-hue: 180deg;
          --spring-duration: 1.33s;
          --spring-easing: linear(
            0,
            0.002,
            0.01 0.9%,
            0.038 1.8%,
            0.156,
            0.312 5.8%,
            0.789 11.1%,
            1.015 14.2%,
            1.096,
            1.157,
            1.199,
            1.224 20.3%,
            1.231,
            1.231,
            1.226,
            1.214 24.6%,
            1.176 26.9%,
            1.057 32.6%,
            1.007 35.5%,
            0.984,
            0.968,
            0.956,
            0.949 42%,
            0.946 44.1%,
            0.95 46.5%,
            0.998 57.2%,
            1.007,
            1.011 63.3%,
            1.012 68.3%,
            0.998 84%,
            1
          );

          color: var(--bg);
          font-weight: 600;
          font-size: 1.2em;
          background-image: linear-gradient(
            315deg,
            hsl(
                var(--shimmer-hue-1),
                var(--shimmer-sat-1),
                var(--shimmer-lit-1)
              )
              0%,
            hsl(
                var(--shimmer-hue-2),
                var(--shimmer-sat-2),
                var(--shimmer-lit-2)
              )
              47%,
            hsl(
                var(--shimmer-hue-3),
                var(--shimmer-sat-3),
                var(--shimmer-lit-3)
              )
              100%
          );
          padding: 0.8em 1.4em;
          position: relative;
          isolation: isolate;
          box-shadow: 0 2px 3px 1px hsl(var(--glow-hue) 50% 20% / 50%);
          border: none;
          outline: none;
          border-radius: 0.66em;
          scale: 1;
          transition: all var(--spring-duration) var(--spring-easing);
          cursor: pointer;
        }

        .shimmer {
          position: absolute;
          inset: -40px;
          border-radius: inherit;
          mix-blend-mode: color-dodge;
          mix-blend-mode: plus-lighter;
          pointer-events: none;
        }

        .shimmer::before,
        .shimmer::after {
          transition: all 0.5s ease;
          opacity: 0;
          content: '';
          border-radius: inherit;
          position: absolute;
          inset: 40px;
        }

        .shimmer::before {
          box-shadow:
            0 0 3px 2px hsl(var(--shimmer-hue-1) 20% 95%),
            0 0 7px 4px hsl(var(--shimmer-hue-1) 20% 80%),
            0 0 13px 8px hsl(var(--shimmer-hue-2) 40% 60%),
            0 0 22px 6px hsl(var(--shimmer-hue-2) 20% 40%);
          z-index: -1;
        }

        .shimmer::after {
          box-shadow:
            inset 0 0 0 1px hsl(var(--shimmer-hue-2) 70% 95%),
            inset 0 0 3px 1px hsl(var(--shimmer-hue-2) 100% 80%),
            inset 0 0 9px 1px hsl(var(--shimmer-hue-2) 100% 70%);
          z-index: 2;
        }

        .shimmer-button[disabled] {
          background: rgb(76 76 92);
          background-image: none;
          cursor: not-allowed;
        }

        .shimmer-button:hover:not(:active):not([disabled]) {
          scale: 1.1;
          transition-duration: calc(var(--spring-duration) * 0.5);
        }

        .shimmer-button:active:not([disabled]) {
          scale: 1.05;
          transition-duration: calc(var(--spring-duration) * 0.5);
        }

        .shimmer-button:focus .shimmer,
        .shimmer-button:active .shimmer {
          animation-play-state: paused !important;
          mask-image: none !important;
        }

        .shimmer-button:hover:not([disabled]),
        .shimmer-button:hover:not([disabled]) .shimmer::before,
        .shimmer-button:hover:not([disabled]) .shimmer::after {
          opacity: 1;
        }

        .shimmer-button:not([disabled]):hover .text {
          animation: text 0.66s ease-in-out 1;
        }

        .shimmer-button:not([disabled]) .shimmer::before,
        .shimmer-button:not([disabled]) .shimmer::after {
          opacity: 1;
        }

        /* Animation Effects */
        @keyframes spin {
          0% {
            --mask: 0deg;
          }
          100% {
            --mask: 360deg;
          }
        }

        @keyframes wipe {
          0% {
            mask-position: 200% center;
          }
          100% {
            mask-position: 0% center;
          }
        }

        @keyframes pulse {
          0%,
          90%,
          100% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
        }

        @keyframes pulse2 {
          0% {
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          14% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes flicker {
          0% {
            opacity: 0.1;
            mask-image: none;
          }
          1% {
            opacity: 1;
          }
          2% {
            opacity: 0.5;
          }
          3% {
            opacity: 0.1;
          }
          4% {
            opacity: 0.7;
          }
          5% {
            opacity: 1;
          }
          7% {
            opacity: 0.7;
            mask-image: linear-gradient(
              90deg,
              transparent 15%,
              black 45%,
              black 55%,
              transparent 85%
            );
          }
          8% {
            opacity: 0.1;
          }
          10% {
            opacity: 0.4;
          }
          13% {
            opacity: 1;
          }
          15% {
            opacity: 0.1;
            mask-image: linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.4) 25%,
              transparent 45%,
              black 65%,
              black 90%,
              transparent 100%
            );
          }
          17% {
            opacity: 0.8;
          }
          19% {
            opacity: 0.3;
          }
          21.5% {
            opacity: 0;
          }
          23% {
            opacity: 1;
          }
          39% {
            opacity: 0.7;
          }
          45% {
            opacity: 0.2;
          }
          49% {
            opacity: 0.9;
          }
          52% {
            opacity: 0.7;
          }
          53.5% {
            opacity: 0.2;
            mask-image: linear-gradient(
              90deg,
              black 15%,
              black 45%,
              rgba(0, 0, 0, 0.4) 75%,
              transparent 85%
            );
          }
          57% {
            opacity: 0.8;
          }
          63% {
            opacity: 1;
          }
          75% {
            opacity: 0.85;
          }
          77% {
            opacity: 1;
          }
          80% {
            opacity: 0.9;
          }
          82% {
            opacity: 0.95;
          }
          83% {
            opacity: 0.85;
          }
          86% {
            opacity: 1;
          }
          89% {
            opacity: 0.85;
          }
          91% {
            opacity: 1;
          }
          92% {
            opacity: 0.9;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes text {
          0% {
            background-position: 100% center;
          }
          100% {
            background-position: -100% center;
          }
        }

        /* Effect-specific styles */
        .shimmer-button:not([disabled]) .shimmer {
          mask-image: conic-gradient(
            from var(--mask, 0deg),
            transparent 0%,
            transparent 10%,
            black 36%,
            black 45%,
            transparent 50%,
            transparent 60%,
            black 85%,
            black 95%,
            transparent 100%
          );
          mask-size: cover;
          animation: spin 3s linear infinite both -0.5s;
        }

        .shimmer-button:not([disabled])[data-effect='wipe'] .shimmer {
          mask-image: linear-gradient(
            90deg,
            transparent 20%,
            black 88%,
            transparent 90%
          );
          mask-size: 200% 200%;
          mask-position: center;
          animation: wipe 1.5s linear infinite both -0.5s;
        }

        .shimmer-button:not([disabled])[data-effect='wave'] .shimmer {
          mask-image: linear-gradient(
            90deg,
            transparent 15%,
            black 45%,
            black 55%,
            transparent 85%
          );
          mask-size: 200% 200%;
          mask-position: center;
          animation: wipe 3s linear infinite both -0.5s;
        }

        .shimmer-button:not([disabled])[data-effect='throb'] .shimmer {
          mask-image: none;
          animation: pulse 3s ease infinite both -0.5s;
        }

        .shimmer-button:not([disabled])[data-effect='pulse'] .shimmer {
          mask-image: none;
          animation: pulse2 3s ease infinite both -0.5s;
        }

        .shimmer-button:not([disabled])[data-effect='flicker'] .shimmer {
          mask-image: none;
          animation: flicker 3.33s ease infinite both -0.5s;
        }
      `}</style>
    </div>
  );
}
