'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Home,
  Search,
  Star,
  MoreVertical,
  RefreshCw,
  ArrowLeft,
} from 'lucide-react';
import { cn } from '@nextui-org/theme';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
}

interface RadialMenuProps {
  items?: MenuItem[];
  className?: string;
  darkMode?: boolean;
  onChange?: (index: number) => void;
}

export default function RadialMenu({
  items = [
    { icon: <ArrowLeft className="w-5 h-5" />, label: 'Back' },
    { icon: <Home className="w-5 h-5" />, label: 'Home' },
    { icon: <Search className="w-5 h-5" />, label: 'Search' },
    { icon: <Star className="w-5 h-5" />, label: 'Star' },
    { icon: <MoreVertical className="w-5 h-5" />, label: 'More' },
    { icon: <RefreshCw className="w-5 h-5" />, label: 'Refresh' },
  ],
  className,
  darkMode = false,
  onChange,
}: RadialMenuProps) {
  const [isActive, setIsActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectorRef = useRef<HTMLDivElement>(null);

  const handleKnobClick = () => {
    setIsActive(!isActive);
    if (!isActive) {
      selectorRef.current?.style.setProperty('--angle', '-90deg');
      setSelectedIndex(0);
    }
  };

  const handleItemSelect = (index: number) => {
    setSelectedIndex(index);
    onChange?.(index);
  };

  useEffect(() => {
    if (selectorRef.current) {
      // Calculate angle based on the number of items (360/6 = 60 degrees per item)
      // Subtract 90 to align with the top position
      const anglePerItem = 360 / items.length;
      const angle = selectedIndex * anglePerItem - 90;

      selectorRef.current.style.setProperty('--angle', `${angle}deg`);
    }
  }, [selectedIndex, items.length]);

  return (
    <div
      ref={selectorRef}
      className={cn(
        'selector',
        isActive && 'active',
        darkMode && 'dark',
        className
      )}
    >
      <div
        className="knob"
        role="button"
        tabIndex={0}
        onClick={handleKnobClick}
        onKeyDown={(e) => e.key === 'Enter' && handleKnobClick()}
      />
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              transform: isActive
                ? `rotate(${index * (360 / items.length)}deg)`
                : 'none',
              transitionDelay: isActive ? `${index * 0.05}s` : '0s',
            }}
          >
            <span>{item.label}</span>
            <input
              checked={selectedIndex === index}
              name="choice"
              type="radio"
              onChange={() => handleItemSelect(index)}
            />
            <div className="icon-wrapper">{item.icon}</div>
          </li>
        ))}
      </ul>

      <style>{`
        @property --angle {
          syntax: '<angle>';
          inherits: true;
          initial-value: -90deg;
        }

        .selector {
          --radius: 120px;
          --shadow-width: calc(var(--radius) / 13);
          --knob-color: linear-gradient(
            to bottom,
            var(--color-accent-off, hsl(267 16% 43%)),
            var(--color-accent-off-darker, hsl(258 29% 39%))
          );
          --color-accent-on-code: var(--angle) 100% 72%;
          --color-accent-on-darker-code: var(--angle) 98% 61%;
          --color-accent-on: hsl(var(--color-accent-on-code));
          --color-accent-on-darker: hsl(var(--color-accent-on-darker-code));
          --inner-bg: hsl(0deg 0% 90.98%);
          --outer-bg: hsl(223.81 0% 93%);
          --border-bg: hsl(0deg 0% 85%);
          --color-grey: hsl(0 0% 87%);
          --is-active: 0;
          --icon-offset: 100;
          --selector-width: 90;
          --border-width: 0;
          --item-opacity: 0;
          --spring-easing: cubic-bezier(0.44, -0.9, 0.31, 1.55);
          --angle-offset: 90deg;

          width: var(--radius);
          aspect-ratio: 1/1;
          position: relative;
          border-radius: 9999px;
          background: var(--color-dark-grey, hsl(0 0% 95.69%));
          box-shadow:
            inset rgba(0, 0, 0, 0.13) 0px 0px 2px -1px,
            inset rgba(0, 0, 0, 0.13) 0px 2px 8px -2px,
            inset rgba(0, 0, 0, 0.13) 0px 8px 34px -2px;
        }

        .selector.dark {
          --inner-bg: hsl(200deg 15% 10.98%);
          --outer-bg: hsl(200deg 19% 6%);
          --border-bg: hsl(200deg 10% 8%);
          --color-grey: hsl(0 0% 10%);
        }

        .selector.active {
          --is-active: 1;
          --selector-width: 260;
          --border-width: 13;
          --icon-offset: 7;
          --item-opacity: 1;
          transition:
            --color-accent-on 0.3s ease 0.2s,
            --color-accent-on-darker 0.3s ease 0.2s,
            --color-accent-on-code 0.3s ease 0.2s,
            --color-accent-on-darker-code 0.3s ease 0.2s;
        }

        .selector.active .knob {
          --knob-color: linear-gradient(
            to top,
            var(--color-accent-on),
            var(--color-accent-on-darker)
          );
        }

        .knob {
          position: absolute;
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          transform: rotate(calc(var(--angle) + var(--angle-offset)));
          transition: transform 0.4s var(--spring-easing);
          z-index: 2;
          cursor: pointer;
          border-radius: 9999px;
        }

        .knob:before,
        .knob:after {
          content: '';
          display: block;
          position: absolute;
        }

        .knob:after {
          width: 4%;
          height: 14%;
          background: var(--knob-color);
          box-shadow:
            0 0 1px rgba(0, 0, 0, 0.4),
            0 0 2px 1px rgba(0, 0, 0, 0.2),
            inset 0 1px 2px var(--color-accent-on),
            inset 0 -1px 2px var(--color-accent-on-darker),
            0 0 calc(var(--is-active) * 4px) var(--color-accent-on),
            0 0 calc(var(--is-active) * 16px)
              hsl(var(--color-accent-on-code) / 0.5);
          top: 16px;
          border-radius: 9999px;
          transition:
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .knob:hover {
          --knob-color: linear-gradient(
            to top,
            var(--color-accent-on),
            var(--color-accent-on-darker)
          );
        }

        ul {
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        ul:before {
          content: '';
          position: absolute;
          width: calc(var(--selector-width) * 1%);
          height: calc(var(--selector-width) * 1%);
          border-radius: 9999px;
          background: var(--inner-bg);
          transition:
            width 0.3s ease,
            height 0.3s ease,
            box-shadow 0.3s ease;
          box-shadow:
            inset 0 0 10px rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.18) 0px 0px 1px -1px inset,
            rgba(0, 0, 0, 0.16) 0px 2px 5px -2px inset,
            rgba(0, 0, 0, 0.063) 0px 8px 24px -4px inset;
        }

        ul:after {
          content: '';
          position: absolute;
          width: calc(
            100% + calc(var(--radius) / 9) + calc(var(--border-width) * 2px)
          );
          height: calc(
            100% + calc(var(--radius) / 9) + calc(var(--border-width) * 2px)
          );
          border-radius: 9999px;
          background: var(--border-bg);
          transition:
            width 0.35s var(--spring-easing) 0.2s,
            height 0.35s var(--spring-easing) 0.2s,
            box-shadow 0.35s var(--spring-easing) 0.2s;
          box-shadow:
            0 0 calc(var(--is-active) * 2px)
              hsl(var(--color-accent-on-darker-code) / 0.6),
            0 0 calc(var(--is-active) * 6px)
              hsl(var(--color-accent-on-code) / 0.6),
            0 0 0 var(--shadow-width) var(--outer-bg),
            var(--shadow);
        }

        li {
          position: absolute;
          width: 25%;
          height: 120%;
          left: 0;
          right: 0;
          top: -70%;
          margin: auto;
          transform-origin: bottom center;
          display: flex;
          align-items: start;
          justify-content: center;
          opacity: var(--item-opacity);
          transition:
            transform 0.5s ease,
            opacity 0.5s ease;
        }

        li:before {
          content: '';
          position: absolute;
          width: 100%;
          aspect-ratio: 1/1;
          background: var(--color-accent-on);
          box-shadow: 0 0 6px var(--color-accent-on-darker);
          transform: translateY(175%) scaleX(1.5);
          filter: blur(12px) opacity(0);
          transition: opacity 0.2s ease 0.2s;
          pointer-events: none;
        }

        .icon-wrapper {
          position: absolute;
          width: 100%;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          top: calc(var(--icon-offset) * 1%);
          opacity: 0.4;
          color: ${darkMode ? 'white' : 'black'};
          transition: opacity 0.3s ease;
        }

        input[type='radio'] {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
          z-index: 1;
        }

        input[type='radio']:checked + .icon-wrapper {
          opacity: 1;
        }

        input[type='radio']:checked ~ li:before {
          filter: blur(12px) opacity(1);
        }

        span {
          display: none;
        }
      `}</style>
    </div>
  );
}
