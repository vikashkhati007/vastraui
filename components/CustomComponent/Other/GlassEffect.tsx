"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface GlassmorphismCardProps {
    icon: React.ReactNode
    title: string
    description: string
}

export default function GlassmorphismCard({ icon, title, description }: GlassmorphismCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
        >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            <div className="relative z-10">
                <motion.div
                    className="mb-4 inline-block rounded-xl bg-purple-500/20 p-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {icon}
                </motion.div>
                <motion.h3
                    className="mb-2 text-xl font-semibold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-gray-300 text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {description}
                </motion.p>
            </div>
        </motion.div>
    )
}
