"use client"
import React from 'react'

const PatternBackground: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="pattern-background w-full h-full">
      {children}
      <style jsx>{`
        .pattern-background {
          --s: 50px;
          --c: #000000;
          --_s: calc(2*var(--s)) calc(2*var(--s));
          --_g: 35.36% 35.36% at;
          --_c: #0000 66%, rgba(255, 255, 255, 0.1) 68% 70%, #0000 72%;
          background: 
            radial-gradient(var(--_g) 100% 25%,var(--_c)) var(--s) var(--s)/var(--_s), 
            radial-gradient(var(--_g) 0 75%,var(--_c)) var(--s) var(--s)/var(--_s), 
            radial-gradient(var(--_g) 100% 25%,var(--_c)) 0 0/var(--_s), 
            radial-gradient(var(--_g) 0 75%,var(--_c)) 0 0/var(--_s), 
            repeating-conic-gradient(var(--c) 0 25%,#0000 0 50%) 0 0/var(--_s), 
            radial-gradient(var(--_c)) 0 calc(var(--s)/2)/var(--s) var(--s) var(--c);
          background-attachment: fixed;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}

export default PatternBackground

