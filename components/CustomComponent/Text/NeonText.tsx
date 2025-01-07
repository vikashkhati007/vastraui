'use client';

import React from 'react';

interface NeonTextEffectProps {
  text: string;
}

export default function NeonTextEffect({ text }: NeonTextEffectProps) {
  return (
    <>
      <div className={`text-effect-wrapper alternative`}>
        <h1 className="text">{text}</h1>
      </div>

      <style>{`
        .text-effect-wrapper,
        .text {
          &::before,
          &::after {
            content: '';
            position: absolute;
            inset: 0;
            pointer-events: none;
          }
        }

        .text-effect-wrapper {
          --spotlight-color: white;
          overflow: hidden;
          position: relative;

          &::before {
            animation: shimmer 5s infinite linear;
            background:
              radial-gradient(circle, var(--spotlight-color), transparent 25%) 0
                0 / 25% 25%,
              radial-gradient(circle, var(--spotlight-color), black 25%) 50% 50% /
                12.5% 12.5%;
            inset-block-start: -100%;
            inset-inline-start: -100%;
            mix-blend-mode: color-dodge;
            z-index: 3;
          }

          &::after {
            backdrop-filter: blur(1px) brightness(90%) contrast(150%);
            z-index: 4;
          }
        }

        @keyframes shimmer {
          100% {
            transform: translate3d(50%, 50%, 0);
          }
        }

        .text {
          --background-color: black;
          --text-color: white;
          --color-1: red;
          --color-2: blue;

          color: transparent;
          text-shadow:
            0 0 0.02em var(--background-color),
            0 0 0.02em var(--text-color),
            0 0 0.02em var(--text-color),
            0 0 0.02em var(--text-color);

          &::before {
            backdrop-filter: blur(0.013em) brightness(400%);
            z-index: 1;
          }

          &::after {
            background: linear-gradient(45deg, var(--color-1), var(--color-2));
            mix-blend-mode: multiply;
            z-index: 2;
          }
        }

        .alternative {
          --spotlight-color: orange;

          &::after {
            backdrop-filter: brightness(90%) contrast(150%);
          }

          .text {
            --angle: 5deg;
            --color-1: hsl(163, 100%, 51%);
            --color-2: hsl(295, 88%, 32%);
            --color-3: hsl(59, 100%, 50%);

            text-shadow:
              0 0 0.03em var(--background-color),
              0 0 0.03em var(--text-color);

            &::before {
              backdrop-filter: brightness(150%) contrast(200%);
            }

            &::after {
              background: linear-gradient(
                var(--angle),
                var(--color-1),
                var(--color-2),
                var(--color-3)
              );
              mix-blend-mode: color-dodge;
            }
          }
        }

        h1 {
          --font-size: clamp(6.25rem, 3.25rem + 15vw, 13.75rem);

          font:
            700 var(--font-size) / 1 'Lato',
            sans-serif;
          text-transform: uppercase;
          text-align: center;
          margin: 0;
        }

        .toggle-label {
          background-color: hsl(240deg, 20%, 50%);
          border-radius: 5px;
          color: #fff;
          padding: 0.5em 1em;
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          z-index: 1000;
          cursor: pointer;

          &:has(:checked) {
            background-color: hsl(350deg, 60%, 50%);
          }
        }

        input {
          position: absolute;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
