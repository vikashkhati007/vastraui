'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RainbowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const RainbowButton: React.FC<RainbowButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
}) => {
  return (
    <motion.button
      animate={{ scale: 0.975 }}
      className={className}
      disabled={disabled}
      style={{
        fontFamily: 'pkmn, sans-serif',
        fontSize: '2em',
        display: 'inline-flex',
        padding: '0.5em',
        position: 'relative',
        background: 'transparent',
        outline: 'none',
        border: 'none',
        zIndex: 1,
        transition:
          'transform var(--spring-duration) var(--spring-easing), border 0.6s ease-out, box-shadow 0.3s ease-out, background 0.3s ease-out',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.975 }}
      onClick={onClick}
    >
      <motion.span
        style={{
          borderRadius: '0.5em',
          position: 'relative',
          isolation: 'isolate',
          zIndex: 1,
          color: 'white',
        }}
      >
        {children}
        <motion.span
          style={{
            content: '""',
            position: 'absolute',
            inset: '1.5em 0.75em',
            backgroundImage: 'linear-gradient(white)',
            borderRadius: '4em',
            zIndex: -1,
          }}
        />
      </motion.span>
      <RainbowEffect />
    </motion.button>
  );
};

const RainbowEffect = () => {
  return (
    <>
      <motion.div
        animate={{
          opacity: 0.6,
          scale: 1,
          filter: 'blur(1em)',
          // @ts-ignore
          '--mask': ['30deg', '390deg'],
        }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'conic-gradient(from var(--mask) at 50% 50%, #22ffff 0%, #3c64ff 11%, #c03afc 22%, #ff54e8 33%, #ff5959 44%, #ff9a07 55%, #feff07 66%, #58ff07 77%, #07ff77 88%, #22ffff 100%)',
          filter: 'blur(0.5em)',
          zIndex: -2,
          opacity: 0.4,
          scale: '0.96 0.9',
          transition: 'all 0.25s ease',
        }}
        transition={{
          '--mask': {
            repeat: Infinity,
            duration: 2,
            ease: 'linear',
          },
          opacity: { duration: 0.25 },
          scale: { duration: 0.25 },
          filter: { duration: 0.25 },
        }}
      />
      <motion.div
        animate={{
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(30px)',
          boxShadow:
            'inset 0 1px 0px 0px rgba(255, 255, 255, 0.66), inset 0 -1px 0px 0px rgba(255, 255, 255, 0.5)',
        }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '0.875em',
          zIndex: -1,
          transition: 'all 0.25s ease',
        }}
      />
    </>
  );
};

export default RainbowButton;
