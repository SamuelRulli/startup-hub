import React, { ReactNode } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  staggered?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  staggered = false
}) => {
  const { elementRef, isVisible } = staggered 
    ? useStaggeredAnimation(delay)
    : useScrollAnimation();

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-16`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 -translate-x-16`;
        case 'slideRight':
          return `${baseClasses} opacity-0 translate-x-16`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 scale-75`;
        case 'rotateIn':
          return `${baseClasses} opacity-0 rotate-12 scale-75`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  };

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

interface AnimatedGridProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
}

export const AnimatedGrid: React.FC<AnimatedGridProps> = ({
  children,
  className = '',
  staggerDelay = 100,
  animation = 'slideUp'
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          staggered={true}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
};