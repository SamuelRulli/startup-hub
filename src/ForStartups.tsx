import React from 'react';
import { ArrowLeft, Rocket, Users, Brain, Target, Calendar, Award, CheckCircle, TrendingUp, Lightbulb, Globe, Zap } from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import Orb from './components/Orb';
import { ScrollReveal, StaggerContainer, StaggerItem, FloatingElement } from './components/ScrollAnimations';
import { MagneticButton, Card3D, TextReveal } from './components/AdvancedAnimations';

interface ForStartupsProps {
  onBack: () => void;
}

function ForStartups({ onBack }: ForStartupsProps) {
  const accelerationProgram = {
    title: "Acceleration Program",
    description: "Our main program is designed for small and early-stage startups seeking a significant boost to enter and establish themselves in the market. We offer a dynamic environment and essential resources for your development.",
    duration: "6 months",
    benefits: [
      "Intensive mentorship with market experts",
      "Access to an exclusive network of contacts and partners",
      "Practical workshops and training",
      "Support in product and business model validation"
    ],
    features: [
      {
        title: "Personalized Mentorship",
        description: "Learn from successful entrepreneurs and industry leaders who built global companies.",
        icon: Users,
        gradient: "from-[#fe6b8f] to-[#9f3ccf]"
      },
      {
        title: "AI-Driven Methodology",
        description: "We use artificial intelligence to optimize your market immersion, ensuring rapid and efficient growth.",
        icon: Brain,
        gradient: "from-[#9f3ccf] to-[#269dff]"
      },
      {
        title: "Access to Smart Capital",
        description: "We facilitate the connection between promising startups and our investor network.",
        icon: Target,
        gradient: "from-[#269dff] to-[#fe6b8f]"
      }
    ]
  };

  const programStructure = [
    {
      phase: "Phase 1",
      title: "Foundation & Validation",
      duration: "Weeks 1-8",
      description: "Business model validation, market research, and product-market fit analysis.",
      activities: [
        "Business model canvas development",
        "Market research and competitor analysis",
        "Customer discovery and validation",
        "MVP development planning"
      ],
      icon: Lightbulb,
      gradient: "from-[#fe6b8f] to-[#9f3ccf]"
    },
    {
      phase: "Phase 2",
      title: "Development & Growth",
      duration: "Weeks 9-16",
      description: "Product development, team building, and initial market entry strategies.",
      activities: [
        "Product development and testing",
        "Team expansion and hiring",
        "Marketing strategy implementation",
        "Initial customer acquisition"
      ],
      icon: TrendingUp,
      gradient: "from-[#9f3ccf] to-[#269dff]"
    },
    {
      phase: "Phase 3",
      title: "Scale & Investment",
      duration: "Weeks 17-24",
      description: "Scaling operations, fundraising preparation, and investor connections.",
      activities: [
        "Scaling operations and processes",
        "Fundraising preparation and pitch deck",
        "Investor meetings and presentations",
        "Partnership development"
      ],
      icon: Rocket,
      gradient: "from-[#269dff] to-[#fe6b8f]"
    }
  ];

  const successMetrics = [
    {
      metric: "50+",
      label: "Startups Accelerated",
      icon: Rocket,
      gradient: "from-[#fe6b8f] to-[#9f3ccf]"
    },
    {
      metric: "$10M+",
      label: "Funding Raised",
      icon: Target,
      gradient: "from-[#9f3ccf] to-[#269dff]"
    },
    {
      metric: "100+",
      label: "Mentors Network",
      icon: Users,
      gradient: "from-[#269dff] to-[#fe6b8f]"
    },
    {
      metric: "2",
      label: "Countries",
      icon: Globe,
      gradient: "from-[#fe6b8f] to-[#269dff]"
    }
  ];

  const applicationProcess = [
    {
      step: "01",
      title: "Application",
      description: "Submit your startup application with business plan and team information.",
      icon: CheckCircle
    },
    {
      step: "02",
      title: "Evaluation",
      description: "Our team evaluates your application based on innovation, market potential, and team strength.",
      icon: Target
    },
    {
      step: "03",
      title: "Interview",
      description: "Selected candidates participate in interviews with our mentors and investment committee.",
      icon: Users
    },
    {
      step: "04",
      title: "Acceleration",
      description: "Accepted startups begin the 6-month acceleration program with full support.",
      icon: Rocket
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
                alt="Nyx Hub Venture" 
                className="h-12 w-auto"
              />
              <div className="text-white">
                <h1 className="text-2xl font-bold">Nyx Hub Venture</h1>
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
                text="Accelerate Your Startup With Us"
                className="text-5xl lg:text-6xl font-bold text-white mb-8"
              />
              <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
                <p>
                  If you have an innovative idea or an early-stage startup and are looking for the boost needed to conquer 
                  the market, <strong className="text-white">Nyx Hub Venture</strong> is your place.
                </p>
                <p className="mt-4">
                  We offer a complete acceleration program designed to transform your potential into success.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Success Metrics */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Our <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Impact</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
              {successMetrics.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={50}>
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                      <FloatingElement amplitude={3} frequency={3} delay={index * 0.2}>
                        <div className={`bg-gradient-to-r ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </FloatingElement>
                      <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                      <div className="text-gray-300">{item.label}</div>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Acceleration Program Overview */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <Card3D className="bg-gradient-to-r from-[#fe6b8f]/20 via-[#9f3ccf]/20 to-[#269dff]/20 rounded-3xl p-8 lg:p-12 border border-white/20 backdrop-blur-lg">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{accelerationProgram.title}</h3>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">{accelerationProgram.description}</p>
                    <div className="flex items-center space-x-4 mb-6">
                      <Calendar className="w-6 h-6 text-[#fe6b8f]" />
                      <span className="text-lg text-white font-semibold">Duration: {accelerationProgram.duration}</span>
                    </div>
                    <MagneticButton className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                      Apply Now →
                    </MagneticButton>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white mb-4">Benefits:</h4>
                    {accelerationProgram.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#fe6b8f] flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

          {/* Program Features */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                What Makes Us <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Different</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
              {accelerationProgram.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={60}>
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
                      <FloatingElement amplitude={5} frequency={3} delay={index * 0.5}>
                        <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </FloatingElement>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Program Structure */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Program <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Structure</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="space-y-8" staggerDelay={0.2}>
              {programStructure.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={60}>
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="grid lg:grid-cols-3 gap-6 items-start">
                        <div className="lg:col-span-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className={`bg-gradient-to-r ${phase.gradient} w-12 h-12 rounded-xl flex items-center justify-center`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-sm text-[#fe6b8f] font-semibold">{phase.phase}</div>
                              <div className="text-xl font-bold text-white">{phase.title}</div>
                              <div className="text-sm text-gray-400">{phase.duration}</div>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                        </div>
                        <div className="lg:col-span-2">
                          <h4 className="text-lg font-bold text-white mb-4">Key Activities:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {phase.activities.map((activity, activityIndex) => (
                              <div key={activityIndex} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] rounded-full flex-shrink-0"></div>
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Application Process */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Application <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Process</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
              {applicationProcess.map((step, index) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={50}>
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                      <div className="text-4xl font-bold text-[#fe6b8f] mb-4">{step.step}</div>
                      <FloatingElement amplitude={3} frequency={3} delay={index * 0.2}>
                        <div className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </FloatingElement>
                      <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.4}>
              <Card3D className="bg-gradient-to-r from-[#fe6b8f]/20 via-[#9f3ccf]/20 to-[#269dff]/20 rounded-3xl p-8 lg:p-12 border border-white/20 backdrop-blur-lg">
                <h3 className="text-3xl font-bold text-white mb-6">Ready to Launch Your Startup?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join our next cohort and transform your innovative idea into a successful business. 
                  Applications for our August 2025 batch are now open.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300">
                    Apply Now →
                  </MagneticButton>
                  <MagneticButton className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                    Download Program Guide
                  </MagneticButton>
                </div>
                <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>August 2025 Batch</span>
                  <span>•</span>
                  <span>Brazil & USA</span>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ForStartups;
