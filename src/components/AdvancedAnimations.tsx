import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame, AnimatePresence } from 'framer-motion';

// Magnetic Button Component
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

// Morphing Shape Component
export const MorphingShape: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shapes = [
    "M50,10 L90,50 L50,90 L10,50 Z", // Diamond
    "M50,5 C77.6,5 100,27.4 100,55 C100,82.6 77.6,105 50,105 C22.4,105 0,82.6 0,55 C0,27.4 22.4,5 50,5 Z", // Circle
    "M10,10 L90,10 L90,90 L10,90 Z", // Square
    "M50,5 L95,35 L78,90 L22,90 L5,35 Z", // Pentagon
  ];

  return (
    <div className={className}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.path
          d={shapes[0]}
          fill="url(#morphGradient)"
          animate={{ d: shapes }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fe6b8f" />
            <stop offset="50%" stopColor="#9f3ccf" />
            <stop offset="100%" stopColor="#269dff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// 3D Card Component
interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Card3D: React.FC<Card3DProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXValue = (e.clientY - centerY) / 10;
    const rotateYValue = (centerX - e.clientX) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

// Liquid Blob Component
export const LiquidBlob: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={className}>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <motion.path
          d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z"
          fill="url(#blobGradient)"
          animate={{
            d: [
              "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z",
              "M100,15 C150,25 185,65 175,105 C165,145 125,185 85,175 C45,165 15,125 25,85 C35,45 75,15 100,15 Z",
              "M100,25 C135,15 175,55 185,95 C195,135 155,175 115,185 C75,195 35,155 25,115 C15,75 55,35 100,25 Z",
              "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z"
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <radialGradient id="blobGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fe6b8f" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#9f3ccf" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#269dff" stopOpacity="0.4" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

// Particle System Component
export const ParticleSystem: React.FC<{ className?: string }> = ({ className = '' }) => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-gradient-to-r from-[#fe6b8f] to-[#269dff] rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 10,
            opacity: 0,
          }}
          animate={{
            y: -10,
            opacity: [0, 1, 0],
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Text Reveal Animation
interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className = '' }) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// Scroll-triggered 3D Scene
export const Scroll3DScene: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic Field Effect
export const MagneticField: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(254, 107, 143, 0.1) 0%, transparent 50%)`
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />
      {children}
    </div>
  );
};

// Floating Islands Effect
export const FloatingIslands: React.FC<{ className?: string }> = ({ className = '' }) => {
  const islands = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {islands.map((island) => (
        <motion.div
          key={island.id}
          className="absolute rounded-full bg-gradient-to-br from-[#fe6b8f]/20 to-[#269dff]/20 backdrop-blur-sm"
          style={{
            width: island.size,
            height: island.size,
            left: `${island.x}%`,
            top: `${island.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: island.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Ripple Effect
export const RippleEffect: React.FC<{ trigger: boolean; className?: string }> = ({ 
  trigger, 
  className = '' 
}) => {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          className={`absolute inset-0 pointer-events-none ${className}`}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-full h-full rounded-full border-4 border-[#fe6b8f]/50" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
