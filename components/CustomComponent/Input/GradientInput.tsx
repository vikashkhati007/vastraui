'use client';

import React from 'react';

interface GradientSearchInputProps {
  placeholder?: string;
  inputName?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GradientSearchInput({
  placeholder = 'Search...',
  inputName = 'text',
  className = '',
  value,
  onChange,
}: GradientSearchInputProps) {
  return (
    <>
      <div className={className} id="search-container">
        <div className="nebula" />
        <div className="starfield" />
        <div className="cosmic-dust" />
        <div className="cosmic-dust" />
        <div className="cosmic-dust" />

        <div className="stardust" />

        <div className="cosmic-ring" />

        <div id="main">
          <input
            className="input"
            name={inputName}
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={onChange}
          />

          <div id="cosmic-glow" />

          <div className="wormhole-border" />
          <div id="wormhole-icon">
            <svg
              fill="none"
              height="24"
              stroke="#a9c7ff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
          </div>

          <div id="search-icon">
            <svg
              fill="none"
              height="24"
              stroke="url(#cosmic-search)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y1="21" y2="16.65" />
              <defs>
                <linearGradient
                  gradientTransform="rotate(45)"
                  id="cosmic-search"
                >
                  <stop offset="0%" stopColor="#a9c7ff" />
                  <stop offset="100%" stopColor="#6e8cff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .stardust,
        .cosmic-ring,
        .starfield,
        .nebula {
          max-height: 70px;
          max-width: 314px;
          height: 100%;
          width: 100%;
          position: absolute;
          overflow: hidden;
          z-index: 0;
          border-radius: 50px;
          filter: blur(3px);
        }

        .input {
          background-color: #05071b;
          border: none;
          width: 301px;
          height: 56px;
          border-radius: 10px;
          color: #a9c7ff;
          padding-inline: 59px;
          font-size: 18px;
        }

        #search-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .input::placeholder {
          color: #6e8cff;
        }

        .input:focus {
          outline: none;
        }

        #main:focus-within > #input-mask {
          display: none;
        }

        #cosmic-glow {
          pointer-events: none;
          width: 30px;
          height: 20px;
          position: absolute;
          background: #4d6dff;
          top: 10px;
          left: 5px;
          filter: blur(20px);
          opacity: 0.8;
          transition: all 2s;
        }

        #main:hover > #cosmic-glow {
          opacity: 0;
        }

        .stardust {
          max-height: 63px;
          max-width: 307px;
          border-radius: 10px;
          filter: blur(2px);
        }

        .stardust::before {
          content: '';
          z-index: -2;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(83deg);
          position: absolute;
          width: 600px;
          height: 600px;
          background-repeat: no-repeat;
          background-position: 0 0;
          filter: brightness(1.4);
          background-image: conic-gradient(
            rgba(0, 0, 0, 0) 0%,
            #4d6dff,
            rgba(0, 0, 0, 0) 8%,
            rgba(0, 0, 0, 0) 50%,
            #6e8cff,
            rgba(0, 0, 0, 0) 58%
          );
          transition: all 2s;
        }

        .cosmic-ring {
          max-height: 59px;
          max-width: 303px;
          border-radius: 11px;
          filter: blur(0.5px);
        }

        .cosmic-ring::before {
          content: '';
          z-index: -2;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(70deg);
          position: absolute;
          width: 600px;
          height: 600px;
          filter: brightness(1.3);
          background-repeat: no-repeat;
          background-position: 0 0;
          background-image: conic-gradient(
            #05071b,
            #4d6dff 5%,
            #05071b 14%,
            #05071b 50%,
            #6e8cff 60%,
            #05071b 64%
          );
          transition: all 2s;
        }

        .starfield {
          max-height: 65px;
          max-width: 312px;
        }

        .starfield::before {
          content: '';
          z-index: -2;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(82deg);
          position: absolute;
          width: 600px;
          height: 600px;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-image: conic-gradient(
            rgba(0, 0, 0, 0),
            #1c2452,
            rgba(0, 0, 0, 0) 10%,
            rgba(0, 0, 0, 0) 50%,
            #2a3875,
            rgba(0, 0, 0, 0) 60%
          );
          transition: all 2s;
        }

        #search-container:hover > .starfield::before {
          transform: translate(-50%, -50%) rotate(-98deg);
        }

        #search-container:hover > .nebula::before {
          transform: translate(-50%, -50%) rotate(-120deg);
        }

        #search-container:hover > .stardust::before {
          transform: translate(-50%, -50%) rotate(-97deg);
        }

        #search-container:hover > .cosmic-ring::before {
          transform: translate(-50%, -50%) rotate(-110deg);
        }

        #search-container:focus-within > .starfield::before {
          transform: translate(-50%, -50%) rotate(442deg);
          transition: all 4s;
        }

        #search-container:focus-within > .nebula::before {
          transform: translate(-50%, -50%) rotate(420deg);
          transition: all 4s;
        }

        #search-container:focus-within > .stardust::before {
          transform: translate(-50%, -50%) rotate(443deg);
          transition: all 4s;
        }

        #search-container:focus-within > .cosmic-ring::before {
          transform: translate(-50%, -50%) rotate(430deg);
          transition: all 4s;
        }

        .nebula {
          overflow: hidden;
          filter: blur(30px);
          opacity: 0.4;
          max-height: 130px;
          max-width: 354px;
        }

        .nebula:before {
          content: '';
          z-index: -2;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(60deg);
          position: absolute;
          width: 999px;
          height: 999px;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-image: conic-gradient(
            #000,
            #4d6dff 5%,
            #000 38%,
            #000 50%,
            #6e8cff 60%,
            #000 87%
          );
          transition: all 2s;
        }

        #wormhole-icon {
          position: absolute;
          top: 8px;
          right: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          max-height: 40px;
          max-width: 38px;
          height: 100%;
          width: 100%;
          isolation: isolate;
          overflow: hidden;
          border-radius: 10px;
          background: linear-gradient(180deg, #1c2452, #05071b, #2a3875);
          border: 1px solid transparent;
        }

        .wormhole-border {
          height: 42px;
          width: 40px;
          position: absolute;
          overflow: hidden;
          top: 7px;
          right: 7px;
          border-radius: 10px;
        }

        .wormhole-border::before {
          content: '';
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(90deg);
          position: absolute;
          width: 600px;
          height: 600px;
          background-repeat: no-repeat;
          background-position: 0 0;
          filter: brightness(1.35);
          background-image: conic-gradient(
            rgba(0, 0, 0, 0),
            #4d6dff,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0) 50%,
            #6e8cff,
            rgba(0, 0, 0, 0) 100%
          );
          animation: rotate 4s linear infinite;
        }

        #main {
          position: relative;
        }

        #search-icon {
          position: absolute;
          left: 20px;
          top: 15px;
        }

        @keyframes rotate {
          100% {
            transform: translate(-50%, -50%) rotate(450deg);
          }
        }
      `}</style>
    </>
  );
}
