'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  action: () => void;
  type?: 'normal' | 'delete' | 'special';
}

interface MenuCardProps {
  items: MenuItem[];
  backgroundColor?: string;
  hoverColor?: string;
  deleteHoverColor?: string;
  specialColor?: string;
  specialHoverColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  separatorColor?: string;
}

export default function MenuCard({
  items,
  backgroundColor = 'bg-gradient-to-br from-[#242832] via-[#242832] to-[#251c28]',
  hoverColor = '#5353ff',
  deleteHoverColor = '#8e2a2a',
  specialColor = '#bd89ff',
  specialHoverColor = 'rgba(56, 45, 71, 0.836)',
  textColor = '#7e8590',
  hoverTextColor = '#ffffff',
  separatorColor = '#42434a',
}: MenuCardProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const getItemStyle = (item: MenuItem) => {
    switch (item.type) {
      case 'special':
        return {
          color: specialColor,
          hoverBg: specialHoverColor,
        };
      case 'delete':
        return {
          color: textColor,
          hoverBg: deleteHoverColor,
        };
      default:
        return {
          color: textColor,
          hoverBg: hoverColor,
        };
    }
  };

  return (
    <div
      className={`w-[200px] ${backgroundColor} rounded-[10px] py-[15px] flex flex-col gap-[10px]`}
    >
      {items.reduce((acc: React.ReactNode[], item, index) => {
        if (index % 2 === 0) {
          acc.push(
            <ul key={index} className="list-none flex flex-col gap-2 px-[10px]">
              {items.slice(index, index + 2).map((subItem, subIndex) => {
                const style = getItemStyle(subItem);

                return (
                  <motion.li
                    key={`${index}-${subIndex}`}
                    className={`flex items-center text-[${style.color}] gap-[10px] p-[4px_7px] rounded-[6px] cursor-pointer`}
                    whileHover={{
                      backgroundColor: style.hoverBg,
                      color: hoverTextColor,
                      x: 1,
                      y: -1,
                    }}
                    whileTap={{ scale: 0.99 }}
                    onClick={subItem.action}
                    onHoverEnd={() => setHoveredItem(null)}
                    onHoverStart={() => setHoveredItem(subItem.label)}
                  >
                    <subItem.icon
                      className="w-[19px] h-[19px] transition-all duration-300"
                      stroke={
                        hoveredItem === subItem.label
                          ? hoverTextColor
                          : style.color
                      }
                    />
                    <p className="font-semibold">{subItem.label}</p>
                  </motion.li>
                );
              })}
            </ul>
          );
        }
        if (index < items.length - 1 && index % 2 !== 0) {
          acc.push(
            <div
              key={`separator-${index}`}
              className={`border-t-[1.5px] border-[${separatorColor}]`}
            />
          );
        }

        return acc;
      }, [])}
    </div>
  );
}
