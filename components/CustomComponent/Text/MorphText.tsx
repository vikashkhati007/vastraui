'use client';

import React, { useEffect, useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

interface TextMorphAnimationProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  fontSize?: string;
  fontFamily?: string;
}

const TextMorphAnimation: React.FC<TextMorphAnimationProps> = ({
  texts,
  morphTime = 2,
  cooldownTime = 1.5,
  fontSize = '80pt',
  fontFamily = 'Raleway, sans-serif',
}) => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const textIndex = useRef(texts.length - 1);
  const time = useRef(new Date());
  const morph = useRef(0);
  const cooldown = useRef(cooldownTime);

  useEffect(() => {
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[textIndex.current % texts.length];
      text2Ref.current.textContent =
        texts[(textIndex.current + 1) % texts.length];
    }
  }, [texts]);

  const setMorph = (fraction: number) => {
    if (text1Ref.current && text2Ref.current) {
      text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    }
  };

  const doCooldown = () => {
    morph.current = 0;
    if (text1Ref.current && text2Ref.current) {
      text2Ref.current.style.filter = '';
      text2Ref.current.style.opacity = '100%';
      text1Ref.current.style.filter = '';
      text1Ref.current.style.opacity = '0%';
    }
  };

  const doMorph = () => {
    morph.current -= cooldown.current;
    cooldown.current = 0;

    let fraction = morph.current / morphTime;

    if (fraction > 1) {
      cooldown.current = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  };

  useAnimationFrame(() => {
    let newTime = new Date();
    let dt = (newTime.getTime() - time.current.getTime()) / 1000;

    time.current = newTime;

    cooldown.current -= dt;

    if (cooldown.current <= 0) {
      if (morph.current === 0) {
        textIndex.current++;
        if (text1Ref.current && text2Ref.current) {
          text1Ref.current.textContent =
            texts[textIndex.current % texts.length];
          text2Ref.current.textContent =
            texts[(textIndex.current + 1) % texts.length];
        }
      }

      doMorph();
    } else {
      doCooldown();
    }
  });

  return (
    <>
      <div id="container">
        <span ref={text1Ref} id="text1" />
        <span ref={text2Ref} id="text2" />
      </div>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap');

        #container {
          display: flex;
          justify-content: center;
          align-items: center;
          filter: url(#threshold) blur(0.6px);
          width: 100%;
          height: 100%;
        }

        #text1,
        #text2 {
          position: absolute;
          width: 100%;
          display: inline-block;
          font-family: '${fontFamily}';
          font-size: ${fontSize};
          text-align: center;
          user-select: none;
        }
      `}</style>
    </>
  );
};

export default TextMorphAnimation;
