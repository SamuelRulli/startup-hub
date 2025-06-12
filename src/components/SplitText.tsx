import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  onLetterAnimationComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const container = containerRef.current;
    const elements = container.querySelectorAll('.split-char, .split-word, .split-line');

    if (elements.length === 0) return;

    // Set initial state
    gsap.set(elements, from);

    // Animate elements
    const tl = gsap.timeline({
      onComplete: () => {
        if (onLetterAnimationComplete) {
          onLetterAnimationComplete();
        }
      }
    });

    tl.to(elements, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
    });

  }, [isVisible, delay, duration, ease, from, to, onLetterAnimationComplete]);

  const splitText = (text: string, type: string) => {
    if (type === 'chars') {
      return text.split('').map((char, index) => (
        <span key={index} className="split-char inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else if (type === 'words') {
      return text.split(' ').map((word, index) => (
        <span key={index} className="split-word inline-block">
          {word}
          {index < text.split(' ').length - 1 && '\u00A0'}
        </span>
      ));
    } else if (type === 'lines') {
      return text.split('\n').map((line, index) => (
        <div key={index} className="split-line">
          {line}
        </div>
      ));
    }
    return text;
  };

  return (
    <div 
      ref={containerRef} 
      className={`${className}`}
      style={{ textAlign }}
    >
      {splitText(text, splitType)}
    </div>
  );
};

export default SplitText;
