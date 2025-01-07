'use client';

import React, { useState, useEffect, useRef } from 'react';

interface GlowButtonProps {
  /** The content to be rendered inside the button */
  children: React.ReactNode;
  /** Custom className for additional styling */
  className?: string;
  /** Click handler for the button */
  onClick?: () => void;
  /** Width of the button (default: 'auto') */
  width?: string | number;
  /** Height of the button (default: 'auto') */
  height?: string | number;
  /** Start color of the gradient in HSL format (default: '344, 54%, 46%') */
  glowFromColor?: string;
  /** End color of the gradient in HSL format (default: '27, 88%, 64%') */
  glowToColor?: string;
  /** Size of the glow effect in em units (default: 7) */
  glowSize?: number;
  /** Blur amount for the glow in em units (default: 3) */
  glowBlur?: number;
  /** Maximum opacity of the glow effect (default: 0.75) */
  glowOpacity?: number;
  /** Font size in rem + vmin (default: 1) */
  fontSize?: number;
  /** Show wireframe toggle (default: true) */
  showWireframeToggle?: boolean;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  className = '',
  onClick,
  width = 'auto',
  height = 'auto',
  glowFromColor = '344, 54%, 46%',
  glowToColor = '27, 88%, 64%',
  glowSize = 7,
  glowBlur = 3,
  glowOpacity = 0.75,
  fontSize = 1,
  showWireframeToggle = false,
}) => {
  const [glowPosition, setGlowPosition] = useState({ left: '50%', top: '50%' });
  const [isHovered, setIsHovered] = useState(false);
  const [isWireframe, setIsWireframe] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const setGlowPositionHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;

    setGlowPosition({ left: `${x}%`, top: `${y}%` });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const button = buttonRef.current;

    if (button) {
      button.style.setProperty('--glow-left', glowPosition.left);
      button.style.setProperty('--glow-top', glowPosition.top);
      button.style.setProperty('--color-glow-from-raw', glowFromColor);
      button.style.setProperty('--color-glow-to-raw', glowToColor);
      button.style.setProperty('--glow-size', `${glowSize}em`);
      button.style.setProperty('--glow-blur', `${glowBlur}em`);
      button.style.setProperty('--glow-opacity', String(glowOpacity));
    }
  }, [
    glowPosition,
    glowFromColor,
    glowToColor,
    glowSize,
    glowBlur,
    glowOpacity,
  ]);

  return (
    <div className="container">
      {showWireframeToggle && (
        <>
          <label className="wireframeLabel" htmlFor="wireframe">
            Toggle wireframe
          </label>
          <input
            checked={isWireframe}
            className="wireframeToggle"
            id="wireframe"
            type="checkbox"
            onChange={(e) => setIsWireframe(e.target.checked)}
          />
        </>
      )}
      <button
        ref={buttonRef}
        className={`glowButton ${isHovered ? 'hovered' : ''} ${isWireframe ? 'wireframe' : ''} ${className}`}
        style={{ width, height }}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={setGlowPositionHandler}
      >
        <p>{children}</p>
      </button>

      <style>{`
        @property --glow-left {
          syntax: '<length-percentage>';
          inherits: true;
          initial-value: 50%;
        }

        @property --glow-top {
          syntax: '<length-percentage>';
          inherits: true;
          initial-value: 50%;
        }

        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap');

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .glowButton {
          --glow-left: 50%;
          --glow-top: 50%;
          --glow-size: ${glowSize}em;
          --glow-blur: ${glowBlur}em;
          --glow-opacity: ${glowOpacity};
          --color-glow-from-raw: ${glowFromColor};
          --color-glow-to-raw: ${glowToColor};

          padding: 1em 2em 1.05em 2em;
          border-radius: 999px;
          contain: content;
          -webkit-tap-highlight-color: transparent;

          --glass-shadows: inset 0 2px 1px 0 hsla(0, 0%, 100%, 0.4),
            inset 0 2em 2em 0 hsla(0, 0%, 100%, 0.12),
            inset 0 -3px 0.25em 0 hsla(0, 0%, 100%, 0.12),
            inset 0 -0.25em 1em 0 hsla(0, 0%, 100%, 0.12),
            inset 0 -2em 2em 0 hsla(var(--color-background-raw, 0, 0%, 100%), 0.05),
            inset 0 0.25em 0.5em 0 hsla(0, 0%, 100%, 0.2);

          box-shadow:
            var(--glass-shadows),
            0 0 5px hsla(var(--color-glow-from-raw), 0.1),
            0 0 15px hsla(var(--color-glow-to-raw), 0.1);

          background: linear-gradient(
            60deg,
            hsla(var(--color-glow-from-raw), 0.2),
            hsla(var(--color-glow-to-raw), 0.2)
          );
          transition:
            transform 0.1s ease-out,
            box-shadow 0.1s ease-out,
            background-color 0.1s ease-out;
          will-change: transform, box-shadow, background-color;
          transform-origin: bottom center;
          overflow: hidden;
          position: relative;

          font-family: 'Work Sans', sans-serif;
          font-size: calc(${fontSize}rem + 1.5vmin);
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid hsla(0, 0%, 100%, 0.2);
          color: hsl(4, 3%, 99%);
        }

        .glowButton::after {
          content: '';
          width: var(--glow-size);
          height: var(--glow-size);
          position: absolute;
          top: var(--glow-top);
          left: var(--glow-left);
          transform: translate(-50%, -50%);
          z-index: -1;
          border-radius: 50%;
          background: linear-gradient(
            60deg,
            hsl(var(--color-glow-from-raw)),
            hsl(var(--color-glow-to-raw))
          );
          filter: blur(var(--glow-blur));
          opacity: 0;
          transition: opacity 0.2s ease-out;
          pointer-events: none;
        }

        .glowButton.hovered::after {
          opacity: var(--glow-opacity);
        }

        .glowButton:hover,
        .glowButton:focus {
          transform: translatey(-1px);
          background: linear-gradient(
            60deg,
            hsla(var(--color-glow-from-raw), 0.25),
            hsla(var(--color-glow-to-raw), 0.25)
          );
          box-shadow:
            var(--glass-shadows),
            0 0 10px hsla(var(--color-glow-from-raw), 0.2),
            0 0 30px hsla(var(--color-glow-to-raw), 0.2);
        }

        .glowButton:active {
          transform: translatey(1px) scale(0.98);
          background: linear-gradient(
            60deg,
            hsla(var(--color-glow-from-raw), 0.3),
            hsla(var(--color-glow-to-raw), 0.3)
          );
          box-shadow:
            var(--glass-shadows),
            0 0 15px hsla(var(--color-glow-from-raw), 0.3),
            0 0 45px hsla(var(--color-glow-to-raw), 0.3);
          transition:
            transform 0.05s ease-in,
            box-shadow 0.05s ease-in,
            background-color 0.05s ease-in;
        }

        .glowButton p {
          font-weight: 500;
          mix-blend-mode: overlay;
          text-rendering: optimizeSpeed;
          pointer-events: none;
          margin: 0;
        }

        .wireframeLabel {
          font-family: 'Work Sans', sans-serif;
          font-size: 1.1rem;
          color: var(--color-on-background, inherit);
          opacity: 0.9;
          cursor: pointer;
          padding: 1rem 0;
        }

        .wireframeToggle {
          appearance: none;
          cursor: pointer;
          border: var(--color-primary, currentColor) 2px solid;
          width: 2.5rem;
          height: 1.5rem;
          border-radius: 999px;
          position: relative;
          margin-bottom: 1rem;
        }

        .wireframeToggle::before {
          content: '';
          background: var(--color-primary, currentColor);
          border-radius: 999px;
          position: absolute;
          width: 1rem;
          height: 1rem;
          top: 0.125rem;
          left: 0.125rem;
          transform: scale(0.9);
          transition: transform 60ms ease-in;
        }

        .wireframeToggle:checked::before {
          transform: translatex(1rem);
        }

        .wireframe,
        .wireframe::after {
          background: hsla(0, 0%, 100%, 0.05) !important;
          border: var(--color-on-background, currentColor) 1px solid !important;
          box-shadow: none !important;
          color: var(--color-on-background, inherit) !important;
          filter: none !important;
        }

        @media (prefers-color-scheme: dark) {
          .glowButton {
            background: linear-gradient(
              60deg,
              hsla(var(--color-glow-from-raw), 0.15),
              hsla(var(--color-glow-to-raw), 0.15)
            );
            --glass-shadows: inset 0 2px 1px 0 hsla(0, 0%, 100%, 0.2),
              inset 0 2em 2em 0 hsla(0, 0%, 100%, 0.06),
              inset 0 -3px 0.25em 0 hsla(0, 0%, 100%, 0.06),
              inset 0 -0.25em 1em 0 hsla(0, 0%, 100%, 0.06),
              inset 0 -2em 2em 0 hsla(var(--color-background-raw, 0, 0%, 0%), 0.025),
              inset 0 0.25em 0.5em 0 hsla(0, 0%, 100%, 0.1);
          }

          .glowButton:hover {
            background: linear-gradient(
              60deg,
              hsla(var(--color-glow-from-raw), 0.2),
              hsla(var(--color-glow-to-raw), 0.2)
            );
          }

          .glowButton:active {
            background: linear-gradient(
              60deg,
              hsla(var(--color-glow-from-raw), 0.25),
              hsla(var(--color-glow-to-raw), 0.25)
            );
          }
        }
      `}</style>
    </div>
  );
};

export default GlowButton;
