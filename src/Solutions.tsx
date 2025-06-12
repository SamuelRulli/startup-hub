import React from 'react';
import { ArrowLeft, Lightbulb, Rocket, Users, DollarSign, Brain, Target, Globe, Zap, TrendingUp, Shield, Award } from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import Orb from './components/Orb';
import { ScrollReveal, StaggerContainer, StaggerItem, FloatingElement } from './components/ScrollAnimations';
import { MagneticButton, Card3D, TextReveal } from './components/AdvancedAnimations';

interface SolutionsProps {
  onBack: () => void;
}

function Solutions({ onBack }: SolutionsProps) {
  const solutions = [
    {
      title: "Startup Acceleration",
      description: "Our main program for small and early-stage companies.",
      details: "Intensive 6-month program with practical mentorship, product development, and market entry strategy.",
      icon: Rocket,
      gradient: "from-[#fe6b8f] to-[#9f3ccf]",
      features: [
        "Intensive mentorship with market experts",
        "Access to an exclusive network of contacts and partners",
        "Practical workshops and training",
        "Support in product and business model validation"
      ]
    },
    {
      title: "Specialized Mentorship",
      description: "Individualized support for the development of your team and business.",
      details: "Our mentors are experienced professionals who offer strategic and tactical guidance, helping your startup overcome challenges and seize opportunities.",
      icon: Users,
      gradient: "from-[#9f3ccf] to-[#269dff]",
      features: [
        "Business Strategy",
        "Marketing and Sales",
        "Product Development",
        "Investment Fundraising",
        "Team Management"
      ]
    },
    {
      title: "Investor Connection",
      description: "We facilitate access to capital and strategic partnerships.",
      details: "We facilitate the connection between promising startups and our investor network. We prepare your startup for effective presentations and seek the best funding opportunities.",
      icon: DollarSign,
      gradient: "from-[#269dff] to-[#fe6b8f]",
      features: [
        "Angel Investment",
        "Seed Rounds",
        "Series A and B",
        "Strategic Partnerships",
        "Pitch Preparation"
      ]
    }
  ];

  const methodology = [
    {
      title: "AI-Driven Analysis",
      description: "Predictive market analysis using artificial intelligence",
      icon: Brain,
      gradient: "from-[#fe6b8f] to-[#9f3ccf]"
    },
    {
      title: "Strategic Planning",
      description: "Market entry strategy optimization",
      icon: Target,
      gradient: "from-[#9f3ccf] to-[#269dff]"
    },
    {
      title: "Global Network",
      description: "Access to investors, partners, and clients in Brazil and USA markets",
      icon: Globe,
      gradient: "from-[#269dff] to-[#fe6b8f]"
    },
    {
      title: "Rapid Growth",
      description: "Growth opportunity identification",
      icon: TrendingUp,
      gradient: "from-[#fe6b8f] to-[#269dff]"
    },
    {
      title: "Risk Mitigation",
      description: "Risk and cost reduction strategies",
      icon: Shield,
      gradient: "from-[#9f3ccf] to-[#fe6b8f]"
    },
    {
      title: "Excellence",
      description: "Commitment to the highest quality standards",
      icon: Award,
      gradient: "from-[#269dff] to-[#9f3ccf]"
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

      {/* Animated Lightbulbs Background */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        <Lightbulb className="absolute top-20 left-10 w-6 h-6 text-[#fe6b8f] opacity-30 animate-float" />
        <Lightbulb className="absolute top-40 right-20 w-4 h-4 text-[#9f3ccf] opacity-20 animate-flyAcross" style={{ animationDelay: '2s' }} />
        <Lightbulb className="absolute bottom-40 left-20 w-8 h-8 text-[#269dff] opacity-25 animate-orbit" style={{ animationDelay: '5s' }} />
        <Lightbulb className="absolute top-60 left-1/2 w-5 h-5 text-[#fe6b8f] opacity-40 animate-bounce" style={{ animationDelay: '1s' }} />
        <Lightbulb className="absolute bottom-20 right-10 w-6 h-6 text-[#9f3ccf] opacity-30 animate-smallFly" style={{ animationDelay: '3s' }} />
        <Lightbulb className="absolute top-32 right-1/3 w-4 h-4 text-[#269dff] opacity-20 animate-reverseFly" style={{ animationDelay: '7s' }} />
        <Lightbulb className="absolute bottom-60 left-1/3 w-7 h-7 text-[#fe6b8f] opacity-35 animate-wiggle" style={{ animationDelay: '4s' }} />
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
                text="Our Solutions for the Ecosystem"
                className="text-5xl lg:text-6xl font-bold text-white mb-8"
              />
              <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
                <p>
                  At M31 Venture, we offer a comprehensive set of solutions designed to drive growth and 
                  innovation in the startup ecosystem.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Main Solutions */}
          <div className="mb-20">
            <StaggerContainer className="space-y-12" staggerDelay={0.3}>
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={80}>
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <FloatingElement amplitude={4} frequency={2} delay={index * 0.5}>
                            <div className={`bg-gradient-to-r ${solution.gradient} w-20 h-20 rounded-3xl flex items-center justify-center mb-6`}>
                              <Icon className="w-10 h-10 text-white" />
                            </div>
                          </FloatingElement>
                          <h3 className="text-3xl font-bold text-white mb-4">{solution.title}</h3>
                          <p className="text-xl text-gray-300 mb-6 leading-relaxed">{solution.details}</p>
                          <MagneticButton className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                            Learn more →
                          </MagneticButton>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-white mb-4">
                            {solution.title === "Startup Acceleration" ? "Benefits:" : 
                             solution.title === "Specialized Mentorship" ? "Mentorship Areas:" : 
                             "Investment Types:"}
                          </h4>
                          {solution.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] rounded-full"></div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* AI-Driven Methodology */}
          <div>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  AI-Driven <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Methodology</span>
                </h3>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Our methodology integrates artificial intelligence to optimize every stage of the acceleration 
                  process. AI allows us to analyze data, identify trends, and generate actionable insights for faster 
                  and more efficient decision-making.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
              {methodology.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={50}>
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                      <FloatingElement amplitude={3} frequency={3} delay={index * 0.2}>
                        <div className={`bg-gradient-to-r ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </FloatingElement>
                      <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <ScrollReveal direction="up" delay={0.4}>
                <Card3D className="bg-gradient-to-r from-[#fe6b8f]/20 via-[#9f3ccf]/20 to-[#269dff]/20 rounded-3xl p-8 lg:p-12 border border-white/20 backdrop-blur-lg">
                  <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Startup?</h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Join our acceleration program and discover how our AI-driven methodology can accelerate your growth and connect you with the right investors.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <MagneticButton className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300">
                      Apply Now →
                    </MagneticButton>
                    <MagneticButton className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                      Learn About Our AI →
                    </MagneticButton>
                  </div>
                </Card3D>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Solutions;
