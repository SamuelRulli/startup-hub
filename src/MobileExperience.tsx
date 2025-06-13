import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Users, 
  DollarSign, 
  Brain, 
  MessageCircle, 
  Calendar, 
  Globe, 
  Award,
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Home,
  Search,
  Bell,
  User,
  Target,
  Lightbulb
} from 'lucide-react';
import { MagneticButton, Card3D, ParticleSystem } from './components/AdvancedAnimations';
import { FloatingElement, StaggerContainer, StaggerItem } from './components/ScrollAnimations';
import Orb from './components/Orb';

interface MobileExperienceProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

interface AppIcon {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  gradient: string;
  action: () => void;
  category: 'main' | 'tools' | 'social';
}

function MobileExperience({ onBack, onNavigate }: MobileExperienceProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Show welcome notification after 2 seconds
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(notificationTimer);
    };
  }, []);

  const apps: AppIcon[] = [
    {
      id: 'about',
      title: 'About Us',
      subtitle: 'Our Story',
      icon: Target,
      gradient: 'from-[#fe6b8f] to-[#ff4757]',
      action: () => onNavigate('about'),
      category: 'main'
    },
    {
      id: 'solutions',
      title: 'Solutions',
      subtitle: 'Our Services',
      icon: Lightbulb,
      gradient: 'from-[#9f3ccf] to-[#8e44ad]',
      action: () => onNavigate('solutions'),
      category: 'main'
    },
    {
      id: 'for-startups',
      title: 'For Startups',
      subtitle: 'Accelerate Growth',
      icon: Rocket,
      gradient: 'from-[#269dff] to-[#3742fa]',
      action: () => onNavigate('for-startups'),
      category: 'main'
    },
    {
      id: 'for-investors',
      title: 'For Investors',
      subtitle: 'Investment Opportunities',
      icon: DollarSign,
      gradient: 'from-[#2ed573] to-[#1dd1a1]',
      action: () => onNavigate('investors'),
      category: 'main'
    },
    {
      id: 'program',
      title: 'Program',
      subtitle: 'Global Network',
      icon: Globe,
      gradient: 'from-[#ffa502] to-[#ff6348]',
      action: () => onNavigate('program'),
      category: 'main'
    },
    {
      id: 'apply',
      title: 'Apply',
      subtitle: 'Join Our Program',
      icon: Users,
      gradient: 'from-[#5f27cd] to-[#341f97]',
      action: () => onNavigate('apply'),
      category: 'main'
    },
    {
      id: 'contact',
      title: 'Contact',
      subtitle: 'Get in Touch',
      icon: MessageCircle,
      gradient: 'from-[#00d2d3] to-[#54a0ff]',
      action: () => onNavigate('contact'),
      category: 'main'
    }
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const handleAppClick = (app: AppIcon) => {
    setSelectedApp(app.id);
    
    // Add haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Delay the action for animation
    setTimeout(() => {
      app.action();
      setSelectedApp(null);
    }, 300);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <ParticleSystem className="z-0" />
      
      {/* Orb Background */}
      <div style={{ width: '100%', height: '600px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/agentpro-cdn/m31/bg.png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#130e23]/90 via-[#130e23]/70 to-transparent"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe6b8f]/10 via-[#9f3ccf]/10 to-[#269dff]/10"></div>
      
      {/* Dynamic Wallpaper */}
      <div className="absolute inset-0">
        {/* Animated Background Orbs */}
        <FloatingElement amplitude={3} frequency={2} delay={0}>
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-[#fe6b8f]/30 to-[#9f3ccf]/30 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement amplitude={4} frequency={1.5} delay={1}>
          <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-[#9f3ccf]/25 to-[#269dff]/25 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement amplitude={2} frequency={3} delay={2}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-[#269dff]/20 to-[#fe6b8f]/20 rounded-full blur-lg"></div>
        </FloatingElement>
        <FloatingElement amplitude={3} frequency={2.5} delay={1.5}>
          <div className="absolute top-40 left-40 w-32 h-32 bg-gradient-to-r from-[#fe6b8f]/20 to-[#269dff]/20 rounded-full blur-lg"></div>
        </FloatingElement>
        <FloatingElement amplitude={5} frequency={1.8} delay={0.5}>
          <div className="absolute bottom-40 right-40 w-56 h-56 bg-gradient-to-r from-[#269dff]/15 to-[#9f3ccf]/15 rounded-full blur-xl"></div>
        </FloatingElement>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
          <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-white text-lg font-medium">Welcome to Nyx Hub Venture!</div>
                <div className="text-gray-300 text-sm">Click any icon to start your journey</div>
              </div>
            </div>
          </Card3D>
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 px-6 pt-8 pb-4">
        <div className="flex items-center justify-center mb-12">
          <div className="text-center">
            <h1 className="text-white text-3xl font-bold mb-2">Nyx Hub Venture Hub</h1>
            <p className="text-gray-300 text-lg">Interactive Startup Experience</p>
          </div>
        </div>
      </div>

      {/* Floating App Icons */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12" staggerDelay={0.15}>
            {apps.map((app, index) => {
              const Icon = app.icon;
              const isSelected = selectedApp === app.id;
              
              return (
                <StaggerItem key={app.id} direction="scale" distance={0}>
                  <FloatingElement amplitude={4} frequency={2 + index * 0.2} delay={index * 0.3}>
                    <MagneticButton
                      onClick={() => handleAppClick(app)}
                      className={`relative group transition-all duration-500 ${
                        isSelected ? 'scale-110 z-20' : 'hover:scale-105'
                      }`}
                    >
                      <Card3D className="relative">
                        {/* App Icon Container */}
                        <div className={`w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br ${app.gradient} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Icon */}
                          <Icon className="w-12 h-12 lg:w-16 lg:h-16 text-white relative z-10" />
                          
                          {/* Pulse Effect */}
                          {isSelected && (
                            <div className="absolute inset-0 bg-white/30 rounded-3xl animate-ping"></div>
                          )}
                          
                          {/* Glow Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10`}></div>
                        </div>
                        
                        {/* App Label */}
                        <div className="mt-4 text-center">
                          <div className="text-white text-lg lg:text-xl font-bold leading-tight">{app.title}</div>
                          <div className="text-gray-300 text-sm lg:text-base mt-1">{app.subtitle}</div>
                        </div>
                      </Card3D>
                    </MagneticButton>
                  </FloatingElement>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Quick Actions */}
          <div className="mt-16">
            <h3 className="text-white text-2xl font-bold text-center mb-8">Quick Actions</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <FloatingElement amplitude={3} frequency={2} delay={0}>
                <MagneticButton 
                  onClick={() => onNavigate('apply')}
                  className="bg-gradient-to-r from-[#fe6b8f]/20 to-[#9f3ccf]/20 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] rounded-2xl flex items-center justify-center">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white text-xl font-bold">Apply Now</div>
                      <div className="text-gray-300 text-lg">Start your acceleration journey</div>
                    </div>
                  </div>
                </MagneticButton>
              </FloatingElement>
              
              <FloatingElement amplitude={3} frequency={2.5} delay={0.5}>
                <MagneticButton 
                  onClick={() => onNavigate('contact')}
                  className="bg-gradient-to-r from-[#269dff]/20 to-[#9f3ccf]/20 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#269dff] to-[#9f3ccf] rounded-2xl flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white text-xl font-bold">Get in Touch</div>
                      <div className="text-gray-300 text-lg">Connect with our team</div>
                    </div>
                  </div>
                </MagneticButton>
              </FloatingElement>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements Around Phone */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement amplitude={4} frequency={2} delay={0}>
          <div className="absolute top-20 left-20 w-6 h-6 bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] rounded-full opacity-40"></div>
        </FloatingElement>
        <FloatingElement amplitude={3} frequency={2.5} delay={1}>
          <div className="absolute top-40 right-32 w-8 h-8 bg-gradient-to-r from-[#9f3ccf] to-[#269dff] rounded-full opacity-30"></div>
        </FloatingElement>
        <FloatingElement amplitude={5} frequency={1.8} delay={2}>
          <div className="absolute bottom-32 left-32 w-10 h-10 bg-gradient-to-r from-[#269dff] to-[#fe6b8f] rounded-full opacity-35"></div>
        </FloatingElement>
        <FloatingElement amplitude={2} frequency={3} delay={0.5}>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-gradient-to-r from-[#fe6b8f] to-[#269dff] rounded-full opacity-50"></div>
        </FloatingElement>
      </div>
    </div>
  );
}

export default MobileExperience;
