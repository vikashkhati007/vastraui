'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphismCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function GlassmorphismCard({
  icon,
  title,
  description,
}: GlassmorphismCardProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      <div className="relative z-10">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="mb-4 inline-block rounded-xl bg-purple-500/20 p-3"
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <motion.h3
          animate={{ opacity: 1, x: 0 }}
          className="mb-2 text-xl font-semibold text-white"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p
          animate={{ opacity: 1, x: 0 }}
          className="text-gray-300 text-sm"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
