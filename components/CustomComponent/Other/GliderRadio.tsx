'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Option {
  id: string;
  label: string;
}

interface GlidingRadioButtonProps {
  options: Option[];
  initialSelectedId?: string;
  onSelect: (id: string) => void;
}

export default function GlidingRadioButton({
  options,
  initialSelectedId = options[0].id,
  onSelect,
}: GlidingRadioButtonProps) {
  const [selectedId, setSelectedId] = useState(initialSelectedId);

  const handleChange = (id: string) => {
    setSelectedId(id);
    onSelect(id);
  };

  return (
    <div className="relative flex flex-col pl-2">
      {options.map((option) => (
        <div key={option.id} className="relative">
          <input
            checked={selectedId === option.id}
            className="peer absolute opacity-0 cursor-pointer h-full w-full"
            id={option.id}
            name="radio"
            type="radio"
            onChange={() => handleChange(option.id)}
          />
          <label
            className="cursor-pointer p-4 block text-gray-400 transition-colors duration-300 peer-checked:text-[#f7e479]"
            htmlFor={option.id}
          >
            {option.label}
          </label>
        </div>
      ))}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-700 to-transparent">
        <motion.div
          animate={{
            y:
              selectedId === 'radio-free'
                ? '0%'
                : selectedId === 'radio-basic'
                  ? '100%'
                  : '200%',
          }}
          className="relative h-[33.33%] w-full"
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="absolute h-full w-full bg-gradient-to-b from-transparent via-[#f7e479] to-transparent" />
          <div className="absolute top-1/2 -translate-y-1/2 h-[60%] w-[300%] bg-[#f7e479] blur-[10px]" />
          <div className="absolute h-full w-[150px] bg-gradient-to-r from-[#f7e4791c] to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
