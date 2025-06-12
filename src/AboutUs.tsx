import React from 'react';
import { ArrowLeft, Target, Users, Brain, DollarSign, Lightbulb, Handshake, Award, Eye, Heart, Rocket } from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import Orb from './components/Orb';
import { ScrollReveal, StaggerContainer, StaggerItem, FloatingElement } from './components/ScrollAnimations';
import { MagneticButton, Card3D, TextReveal } from './components/AdvancedAnimations';

interface AboutUsProps {
  onBack: () => void;
}

function AboutUs({ onBack }: AboutUsProps) {
  const differentials = [
    {
      title: "Complete & Specialized Team",
      description: "Our multidisciplinary team is ready to transform your ideas into reality, offering support from concept to execution.",
      icon: Users,
      gradient: "from-[#fe6b8f] to-[#9f3ccf]"
    },
    {
      title: "AI-Accelerated Methodology",
      description: "We use artificial intelligence to optimize your market immersion, ensuring rapid and efficient growth.",
      icon: Brain,
      gradient: "from-[#9f3ccf] to-[#269dff]"
    },
    {
      title: "Access to Investors",
      description: "We connect your startup to an exclusive network of investors, opening doors to capital and strategic partnerships.",
      icon: DollarSign,
      gradient: "from-[#269dff] to-[#fe6b8f]"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly seek new approaches and technologies to drive the future.",
      icon: Lightbulb,
      gradient: "from-[#fe6b8f] to-[#9f3ccf]"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership and teamwork to achieve extraordinary results.",
      icon: Handshake,
      gradient: "from-[#9f3ccf] to-[#269dff]"
    },
    {
      title: "Excellence",
      description: "We commit to the highest quality standards in everything we do.",
      icon: Award,
      gradient: "from-[#269dff] to-[#fe6b8f]"
    },
    {
      title: "Transparency",
      description: "We maintain clarity and honesty in all our interactions.",
      icon: Eye,
      gradient: "from-[#fe6b8f] to-[#269dff]"
    },
    {
      title: "Impact",
      description: "Our goal is to generate significant value for startups, investors, and society.",
      icon: Heart,
      gradient: "from-[#9f3ccf] to-[#fe6b8f]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-10 w-80 h-80 opacity-60">
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={330} forceHoverState={false} />
        </div>
        <div className="absolute bottom-20 left-10 w-64 h-64 opacity-50">
          <Orb hoverIntensity={0.3} rotateOnHover={false} hue={270} forceHoverState={true} />
        </div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 opacity-40">
          <Orb hoverIntensity={0.4} rotateOnHover={true} hue={210} forceHoverState={false} />
        </div>
        <div className="absolute bottom-40 right-1/4 w-32 h-32 opacity-30">
          <Orb hoverIntensity={0.2} rotateOnHover={true} hue={300} forceHoverState={false} />
        </div>
      </div>

      {/* Animated Rockets Background */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        <Rocket className="absolute top-20 left-10 w-6 h-6 text-[#fe6b8f] opacity-30 animate-float" />
        <Rocket className="absolute top-40 right-20 w-4 h-4 text-[#9f3ccf] opacity-20 animate-flyAcross" style={{ animationDelay: '2s' }} />
        <Rocket className="absolute bottom-40 left-20 w-8 h-8 text-[#269dff] opacity-25 animate-orbit" style={{ animationDelay: '5s' }} />
        <Rocket className="absolute top-60 left-1/2 w-5 h-5 text-[#fe6b8f] opacity-40 animate-bounce" style={{ animationDelay: '1s' }} />
        <Rocket className="absolute bottom-20 right-10 w-6 h-6 text-[#9f3ccf] opacity-30 animate-smallFly" style={{ animationDelay: '3s' }} />
        <Rocket className="absolute top-32 right-1/3 w-4 h-4 text-[#269dff] opacity-20 animate-reverseFly" style={{ animationDelay: '7s' }} />
        <Rocket className="absolute bottom-60 left-1/3 w-7 h-7 text-[#fe6b8f] opacity-35 animate-wiggle" style={{ animationDelay: '4s' }} />
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

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <AnimatedSection animation="slideRight">
            <button
              onClick={onBack}
              className="flex items-center space-x-3 text-white hover:text-[#fe6b8f] transition-colors group"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg font-medium">Back to Home</span>
            </button>
          </AnimatedSection>
          <AnimatedSection animation="slideLeft">
            <div className="flex items-center space-x-4">
              <img 
                src="https://storage.googleapis.com/agentpro-cdn/m31/png.png" 
                alt="M31 Venture" 
                className="h-12 w-auto"
              />
              <div className="text-white">
                <h1 className="text-2xl font-bold">M31 Venture</h1>
                <p className="text-sm text-gray-300">Startup Acceleration Hub</p>
              </div>
            </div>
          </AnimatedSection>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <TextReveal 
                text="About Us"
                className="text-5xl lg:text-6xl font-bold text-white mb-8"
              />
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">M31 Venture</strong> is more than an acceleration hub; we are the catalyst for 
                  the success of innovative startups. We were born from the passion to transform promising ideas 
                  into sustainable and high-impact businesses.
                </p>
                <p>
                  Our commitment is to the growth and consolidation of small and early-stage companies in the competitive market scenario.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <div className="mb-16">
            <ScrollReveal direction="up" delay={0.3}>
              <Card3D className="bg-gradient-to-r from-[#fe6b8f]/20 via-[#9f3ccf]/20 to-[#269dff]/20 rounded-3xl p-8 lg:p-12 border border-white/20 backdrop-blur-lg">
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-[#269dff] mr-4" />
                  <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To be the leading acceleration hub for startups, recognized for our 
                  innovative methodology, the success of our partners, and the positive impact on 
                  the global entrepreneurial ecosystem.
                </p>
              </Card3D>
            </ScrollReveal>
          </div>

          {/* Our Differentials */}
          <div className="mb-16">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Our <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Differentials</span>
              </h3>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
              {differentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={60}>
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
                      <FloatingElement amplitude={5} frequency={3} delay={index * 0.5}>
                        <div className={`bg-gradient-to-r ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </FloatingElement>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Values */}
          <div>
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Our <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Values</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={50}>
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                      <FloatingElement amplitude={3} frequency={3} delay={index * 0.2}>
                        <div className={`bg-gradient-to-r ${value.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </FloatingElement>
                      <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
