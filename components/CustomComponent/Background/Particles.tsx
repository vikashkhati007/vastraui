"use client";
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    directionX: number;
    directionY: number;
    color: string;
}

const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#5f27cd'];

export const ParticlesBackground: React.FC = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const initialParticles = Array.from({ length: 100 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 15 + 10,
            directionX: Math.random() * 3 - 1.5,
            directionY: Math.random() * 3 - 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));
        setParticles(initialParticles);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full opacity-70 mix-blend-screen"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: particle.color,
                    }}
                    animate={{
                        x: [0, particle.directionX * 30, 0],
                        y: [0, particle.directionY * 30, 0],
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                />
            ))}
        </div>
    );
};

export default ParticlesBackground;
