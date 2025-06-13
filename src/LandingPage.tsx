import React, { useRef, useEffect } from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import { MagneticButton, TextReveal } from './components/AdvancedAnimations';
import { FloatingElement } from './components/ScrollAnimations';

interface LandingPageProps {
  onEnter: () => void;
}

function LandingPage({ onEnter }: LandingPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://storage.googleapis.com/agentpro-cdn/m31/bg.png"
      >
        <source 
          src="https://storage.googleapis.com/agentpro-cdn/m31/rocket-2023-11-27-05-26-24-utc.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#130e23]/60 via-transparent to-[#130e23]/60"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <div className="mb-8">
          <FloatingElement amplitude={3} frequency={2} delay={0}>
            <img 
              src="https://storage.googleapis.com/agentpro-cdn/m31/png.png" 
              alt="Nyx Hub Venture" 
              className="h-20 w-auto opacity-90"
            />
          </FloatingElement>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12 max-w-4xl">
          <TextReveal 
            text="Nyx Hub Venture"
            className="text-6xl lg:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-[#fe6b8f] via-[#9f3ccf] to-[#269dff] bg-clip-text text-transparent"
          />
          <TextReveal 
            text="Startup Acceleration Hub"
            className="text-2xl lg:text-3xl text-gray-200 mb-8 font-light"
          />
          <TextReveal 
            text="Accelerating the Future of Innovation"
            className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          />
        </div>

        {/* Call to Action Button */}
        <div className="flex flex-col items-center space-y-6">
          <MagneticButton 
            onClick={onEnter}
            className="group bg-gradient-to-r from-[#fe6b8f] via-[#9f3ccf] to-[#269dff] text-white px-12 py-6 rounded-full text-xl lg:text-2xl font-bold hover:shadow-2xl transition-all duration-500 flex items-center space-x-4 transform hover:scale-105"
          >
            <Rocket className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            <span>Launch Your Startup</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
          </MagneticButton>

          <div className="text-center text-gray-400 text-sm">
            <p>Discover how we accelerate startups to success</p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement amplitude={4} frequency={3} delay={1}>
            <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] rounded-full opacity-60"></div>
          </FloatingElement>
          <FloatingElement amplitude={3} frequency={2.5} delay={2}>
            <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-[#9f3ccf] to-[#269dff] rounded-full opacity-50"></div>
          </FloatingElement>
          <FloatingElement amplitude={5} frequency={1.8} delay={0.5}>
            <div className="absolute bottom-32 left-32 w-8 h-8 bg-gradient-to-r from-[#269dff] to-[#fe6b8f] rounded-full opacity-40"></div>
          </FloatingElement>
          <FloatingElement amplitude={2} frequency={4} delay={3}>
            <div className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-to-r from-[#fe6b8f] to-[#269dff] rounded-full opacity-55"></div>
          </FloatingElement>
          
          {/* Animated Rockets */}
          <FloatingElement amplitude={6} frequency={2} delay={1}>
            <Rocket className="absolute top-1/4 left-10 w-8 h-8 text-[#fe6b8f] opacity-30 rotate-45" />
          </FloatingElement>
          <FloatingElement amplitude={4} frequency={3} delay={2.5}>
            <Rocket className="absolute top-1/3 right-16 w-6 h-6 text-[#9f3ccf] opacity-25 -rotate-12" />
          </FloatingElement>
          <FloatingElement amplitude={3} frequency={2.8} delay={0.8}>
            <Rocket className="absolute bottom-1/4 left-1/4 w-10 h-10 text-[#269dff] opacity-35 rotate-12" />
          </FloatingElement>
        </div>

        {/* Bottom Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <FloatingElement amplitude={2} frequency={1.5} delay={0}>
            <div className="flex flex-col items-center text-gray-400">
              {/* <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent opacity-60 mb-2"></div> */}
              <span className="text-xs uppercase tracking-wider">By ItCygnus Innovation</span>
            </div>
          </FloatingElement>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingElement key={i} amplitude={Math.random() * 5 + 2} frequency={Math.random() * 2 + 1} delay={Math.random() * 3}>
            <div 
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          </FloatingElement>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
