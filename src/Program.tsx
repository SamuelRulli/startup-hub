import React from 'react';
import { ArrowLeft, Globe, Calendar, Users, Target, Award, CheckCircle, MapPin, Clock, Star, Rocket, Brain, DollarSign } from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import Orb from './components/Orb';
import { ScrollReveal, StaggerContainer, StaggerItem, FloatingElement } from './components/ScrollAnimations';
import { MagneticButton, Card3D, TextReveal } from './components/AdvancedAnimations';

interface ProgramProps {
  onBack: () => void;
}

function Program({ onBack }: ProgramProps) {
  const programOverview = {
    title: "Global Acceleration Program",
    description: "Connecting startup ecosystems of Brazil and USA through innovative acceleration programs.",
    duration: "6 months",
    locations: ["Brazil", "USA"],
    nextBatch: "August 2025",
    features: [
      "Bi-national mentorship network",
      "Cross-border market access",
      "AI-driven acceleration methodology",
      "Direct investor connections"
    ]
  };

  const programPhases = [
    {
      phase: "Phase 1",
      title: "Foundation & Market Research",
      duration: "Weeks 1-8",
      location: "Brazil & USA",
      description: "Deep dive into market validation, business model refinement, and competitive analysis across both markets.",
      activities: [
        "Business model canvas development",
        "Brazil and USA market research",
        "Competitor analysis and positioning",
        "Customer discovery interviews",
        "Product-market fit validation",
        "Legal structure optimization"
      ],
      icon: Target,
      gradient: "from-[#fe6b8f] to-[#9f3ccf]"
    },
    {
      phase: "Phase 2",
      title: "Product Development & Team Building",
      duration: "Weeks 9-16",
      location: "Hybrid Program",
      description: "Focus on product development, team expansion, and building operational foundations for both markets.",
      activities: [
        "MVP development and testing",
        "Team hiring and expansion",
        "Operational process design",
        "Technology stack optimization",
        "Quality assurance implementation",
        "Initial customer acquisition"
      ],
      icon: Users,
      gradient: "from-[#9f3ccf] to-[#269dff]"
    },
    {
      phase: "Phase 3",
      title: "Scale & Investment Preparation",
      duration: "Weeks 17-24",
      location: "Global Network",
      description: "Scaling operations, fundraising preparation, and connecting with our global investor network.",
      activities: [
        "Scaling strategy development",
        "Fundraising preparation",
        "Investor pitch deck creation",
        "Due diligence preparation",
        "Partnership development",
        "Global expansion planning"
      ],
      icon: Rocket,
      gradient: "from-[#269dff] to-[#fe6b8f]"
    }
  ];

  const globalNetwork = [
    {
      country: "Brazil",
      city: "São Paulo",
      description: "Latin America's largest startup ecosystem with access to 200M+ consumers.",
      features: [
        "Local mentor network",
        "Government incentives",
        "Regional market access",
        "Portuguese-speaking markets"
      ],
      stats: {
        startups: "15,000+",
        funding: "$2.5B+",
        unicorns: "20+"
      },
      gradient: "from-[#fe6b8f] to-[#9f3ccf]"
    },
    {
      country: "USA",
      city: "Silicon Valley",
      description: "World's leading innovation hub with unparalleled access to capital and talent.",
      features: [
        "Top-tier investor network",
        "Global market access",
        "Advanced technology ecosystem",
        "International expansion support"
      ],
      stats: {
        startups: "50,000+",
        funding: "$150B+",
        unicorns: "500+"
      },
      gradient: "from-[#9f3ccf] to-[#269dff]"
    }
  ];

  const mentorshipAreas = [
    {
      title: "Business Strategy",
      description: "Strategic planning and business model optimization",
      icon: Target,
      gradient: "from-[#fe6b8f] to-[#9f3ccf]"
    },
    {
      title: "Technology & AI",
      description: "Technical architecture and AI implementation",
      icon: Brain,
      gradient: "from-[#9f3ccf] to-[#269dff]"
    },
    {
      title: "Investment & Funding",
      description: "Fundraising strategy and investor relations",
      icon: DollarSign,
      gradient: "from-[#269dff] to-[#fe6b8f]"
    },
    {
      title: "Global Expansion",
      description: "International market entry and scaling",
      icon: Globe,
      gradient: "from-[#fe6b8f] to-[#269dff]"
    }
  ];

  const applicationCriteria = [
    {
      title: "Innovation Potential",
      description: "Unique value proposition with disruptive potential",
      weight: "30%"
    },
    {
      title: "Market Opportunity",
      description: "Large addressable market in Brazil and/or USA",
      weight: "25%"
    },
    {
      title: "Team Strength",
      description: "Experienced and committed founding team",
      weight: "25%"
    },
    {
      title: "Scalability",
      description: "Business model with global scaling potential",
      weight: "20%"
    }
  ];

  const timeline = [
    {
      date: "March 2025",
      event: "Applications Open",
      description: "Submit your application for the August 2025 cohort"
    },
    {
      date: "May 2025",
      event: "Selection Process",
      description: "Evaluation, interviews, and final selection"
    },
    {
      date: "June 2025",
      event: "Acceptance Notifications",
      description: "Selected startups receive acceptance letters"
    },
    {
      date: "August 2025",
      event: "Program Begins",
      description: "6-month acceleration program starts"
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

      {/* Animated Globes Background */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        <Globe className="absolute top-20 left-10 w-6 h-6 text-[#fe6b8f] opacity-30 animate-float" />
        <Globe className="absolute top-40 right-20 w-4 h-4 text-[#9f3ccf] opacity-20 animate-flyAcross" style={{ animationDelay: '2s' }} />
        <Globe className="absolute bottom-40 left-20 w-8 h-8 text-[#269dff] opacity-25 animate-orbit" style={{ animationDelay: '5s' }} />
        <Globe className="absolute top-60 left-1/2 w-5 h-5 text-[#fe6b8f] opacity-40 animate-bounce" style={{ animationDelay: '1s' }} />
        <Globe className="absolute bottom-20 right-10 w-6 h-6 text-[#9f3ccf] opacity-30 animate-smallFly" style={{ animationDelay: '3s' }} />
        <Globe className="absolute top-32 right-1/3 w-4 h-4 text-[#269dff] opacity-20 animate-reverseFly" style={{ animationDelay: '7s' }} />
        <Globe className="absolute bottom-60 left-1/3 w-7 h-7 text-[#fe6b8f] opacity-35 animate-wiggle" style={{ animationDelay: '4s' }} />
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
                text="Global Acceleration Program"
                className="text-5xl lg:text-6xl font-bold text-white mb-8"
              />
              <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
                <p>
                  {programOverview.description}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Program Overview */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <Card3D className="bg-gradient-to-r from-[#fe6b8f]/20 via-[#9f3ccf]/20 to-[#269dff]/20 rounded-3xl p-8 lg:p-12 border border-white/20 backdrop-blur-lg">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">Program Overview</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-4">
                        <Clock className="w-6 h-6 text-[#fe6b8f]" />
                        <span className="text-lg text-white">Duration: {programOverview.duration}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-[#9f3ccf]" />
                        <span className="text-lg text-white">Locations: {programOverview.locations.join(" & ")}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Calendar className="w-6 h-6 text-[#269dff]" />
                        <span className="text-lg text-white">Next Batch: {programOverview.nextBatch}</span>
                      </div>
                    </div>
                    <MagneticButton className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                      Apply Now →
                    </MagneticButton>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white mb-4">Program Features:</h4>
                    {programOverview.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#fe6b8f] flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

          {/* Global Network */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Our <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Global Network</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.3}>
              {globalNetwork.map((location, index) => (
                <StaggerItem key={index} direction="up" distance={60}>
                  <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`bg-gradient-to-r ${location.gradient} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">{location.country}</h4>
                        <p className="text-lg text-gray-300">{location.city}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{location.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{location.stats.startups}</div>
                        <div className="text-sm text-gray-400">Startups</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{location.stats.funding}</div>
                        <div className="text-sm text-gray-400">Funding</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{location.stats.unicorns}</div>
                        <div className="text-sm text-gray-400">Unicorns</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-lg font-bold text-white">Key Benefits:</h5>
                      {location.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card3D>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Program Phases */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Program <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Structure</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="space-y-8" staggerDelay={0.2}>
              {programPhases.map((phase, index) => {
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
                          <div className="flex items-center space-x-2 mb-4">
                            <MapPin className="w-4 h-4 text-[#9f3ccf]" />
                            <span className="text-sm text-gray-300">{phase.location}</span>
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

          {/* Mentorship Areas */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Mentorship <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Areas</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
              {mentorshipAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={50}>
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                      <FloatingElement amplitude={3} frequency={3} delay={index * 0.2}>
                        <div className={`bg-gradient-to-r ${area.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </FloatingElement>
                      <h4 className="text-lg font-bold text-white mb-3">{area.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{area.description}</p>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Application Criteria */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Application <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Criteria</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.2}>
              {applicationCriteria.map((criteria, index) => (
                <StaggerItem key={index} direction="up" distance={50}>
                  <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">{criteria.title}</h4>
                      <span className="text-[#fe6b8f] font-bold text-lg">{criteria.weight}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{criteria.description}</p>
                  </Card3D>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Application <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Timeline</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
              {timeline.map((item, index) => (
                <StaggerItem key={index} direction="up" distance={50}>
                  <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                    <div className="text-[#fe6b8f] font-bold text-lg mb-2">{item.date}</div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.event}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </Card3D>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.4}>
              <Card3D className="bg-gradient-to-r from-[#fe6b8f]/20 via-[#9f3ccf]/20 to-[#269dff]/20 rounded-3xl p-8 lg:p-12 border border-white/20 backdrop-blur-lg">
                <h3 className="text-3xl font-bold text-white mb-6">Ready to Go Global?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join our global acceleration program and connect your startup to the vibrant ecosystems 
                  of Brazil and the United States. Applications are now open for our August 2025 cohort.
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
                  <span>Applications close: May 2025</span>
                  <span>•</span>
                  <span>Program starts: August 2025</span>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Program;
