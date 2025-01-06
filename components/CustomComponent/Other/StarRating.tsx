"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface StarRatingProps {
  onChange?: (rating: number) => void
  defaultValue?: number
  size?: number
  color?: string
  hoverColor?: string
}

export default function StarRating({
  onChange,
  defaultValue = 0,
  size = 30,
  color = "#666",
  hoverColor = "#ff9e0b"
}: StarRatingProps) {
  const [rating, setRating] = useState(defaultValue)
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleRate = (value: number) => {
    setRating(value)
    onChange?.(value)
  }

  return (
    <div className="flex justify-center gap-[10px] flex-row-reverse">
      {[5, 4, 3, 2, 1].map((value) => (
        <div key={value} className="relative">
          <input
            type="radio"
            id={`rating-${value}`}
            name="rating"
            value={value}
            checked={rating === value}
            onChange={() => handleRate(value)}
            className="absolute appearance-none"
          />
          <motion.label
            htmlFor={`rating-${value}`}
            className="cursor-pointer relative block"
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: rating === value ? [1, 1.1, 1] : 1
            }}
            transition={{
              duration: 0.3,
              repeat: rating === value ? Infinity : 0,
              repeatType: "reverse"
            }}
            onHoverStart={() => setHoveredRating(value)}
            onHoverEnd={() => setHoveredRating(0)}
            title={`${value} star${value === 1 ? '' : 's'}`}
          >
            <svg 
              viewBox="0 0 576 512" 
              style={{ 
                width: `${size}px`,
                height: `${size}px`,
                fill: value <= Math.max(rating, hoveredRating) ? hoverColor : color,
                filter: value <= Math.max(rating, hoveredRating) 
                  ? "drop-shadow(0 0 15px rgba(255, 158, 11, 0.9))"
                  : "none",
                transition: "all 0.3s ease"
              }}
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            
            <AnimatePresence>
              {hoveredRating === value && (
                <>
                  <motion.div
                    className="absolute w-[6px] h-[6px] bg-[#ff9e0b] rounded-full left-1/2"
                    initial={{ opacity: 0, scale: 0, top: "-15px" }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.5],
                      top: ["-15px", "-20px", "-25px"]
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 1 }}
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <motion.div
                    className="absolute w-[6px] h-[6px] bg-[#ff9e0b] rounded-full left-1/2"
                    initial={{ opacity: 0, scale: 0, bottom: "-15px" }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.5],
                      bottom: ["-15px", "-20px", "-25px"]
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 1 }}
                    style={{ transform: "translateX(-50%)" }}
                  />
                </>
              )}
            </AnimatePresence>
          </motion.label>
        </div>
      ))}
    </div>
  )
}

