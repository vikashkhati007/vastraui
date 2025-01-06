'use client'

import React, { useEffect, useRef, ReactNode } from 'react'

const STAR_COUNT = 50

interface StarryBackgroundProps {
  children?: ReactNode
}

const StarryBackground: React.FC<StarryBackgroundProps> = () => {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (starsRef.current) {
      const stars = starsRef.current.children
      Array.from(stars).forEach((star) => {
        const starTailLength = `${Math.floor(Math.random() * 250 + 500) / 100}em`
        const topOffset = `${Math.floor(Math.random() * 10000) / 100}vh`
        const fallDuration = `${Math.floor(Math.random() * 6000 + 6000) / 1000}s`
        const fallDelay = `${Math.floor(Math.random() * 10000) / 1000}s`

        ;(star as HTMLElement).style.setProperty('--star-tail-length', starTailLength)
        ;(star as HTMLElement).style.setProperty('--top-offset', topOffset)
        ;(star as HTMLElement).style.setProperty('--fall-duration', fallDuration)
        ;(star as HTMLElement).style.setProperty('--fall-delay', fallDelay)
      })
    }
  }, [])

  return (
    <div className='w-full h-full'>
      <div ref={starsRef} className="stars">
        {[...Array(STAR_COUNT)].map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>
      <style jsx>{`
        .stars {
          --primary-color: white;
          position: relative;
          width: 100%;
          height: 120%;
          transform: rotate(-45deg);
        }
        .star {
          --star-color: var(--primary-color);
          --star-tail-length: 6em;
          --star-tail-height: 2px;
          --star-width: calc(var(--star-tail-length) / 6);
          --fall-duration: 9s;
          --tail-fade-duration: var(--fall-duration);

          position: absolute;
          z-index: -10;
          top: var(--top-offset);
          left: 0;
          width: var(--star-tail-length);
          height: var(--star-tail-height);
          color: var(--star-color);
          background: linear-gradient(45deg, currentColor, transparent);
          border-radius: 50%;
          filter: drop-shadow(0 0 6px currentColor);
          transform: translate3d(104em, 0, 0);
          animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;
        }
        .star::before, .star::after {
          position: absolute;
          content: '';
          top: 0;
          left: calc(var(--star-width) / -2);
          width: var(--star-width);
          height: 100%;
          background: linear-gradient(45deg, transparent, currentColor, transparent);
          border-radius: inherit;
          animation: blink 2s linear infinite;
        }
        .star::before {
          transform: rotate(45deg);
        }
        .star::after {
          transform: rotate(-45deg);
        }
        @keyframes fall {
          to {
            transform: translate3d(-30em, 0, 0);
          }
        }
        @keyframes tail-fade {
          0%, 50% {
            width: var(--star-tail-length);
            opacity: 1;
          }
          70%, 80% {
            width: 0;
            opacity: 0.4;
          }
          100% {
            width: 0;
            opacity: 0;
          }
        }
        @keyframes blink {
          50% {
            opacity: 0.6;
          }
        }
        @media screen and (max-width: 750px) {
          .star {
            animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
          }
        }
          `}</style>
        </div>
      )
}

export default StarryBackground
