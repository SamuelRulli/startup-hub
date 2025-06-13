import React, { useState } from 'react';
import { Rocket, Globe, Users, Calendar, ArrowRight, Building, Mail, Target, Lightbulb, Handshake, Award, Eye, Heart, Brain, TrendingUp, DollarSign, MessageCircle, PiggyBank, MapPin } from 'lucide-react';
import Contact from './Contact';
import ForInvestors from './ForInvestors';
import Apply from './Apply';
import LandingPage from './LandingPage';
import MobileExperience from './MobileExperience';
import AboutUs from './AboutUs';
import Solutions from './Solutions';
import ForStartups from './ForStartups';
import Program from './Program';
import { AnimatedSection } from './components/AnimatedSection';
import Orb from './components/Orb';
import SplitText from './components/SplitText';
import { ScrollReveal, StaggerContainer, StaggerItem, ScrollProgress, FloatingElement } from './components/ScrollAnimations';
import { MagneticButton, MorphingShape, Card3D, LiquidBlob, ParticleSystem, TextReveal, Scroll3DScene, MagneticField, FloatingIslands } from './components/AdvancedAnimations';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'mobile' | 'home' | 'contact' | 'investors' | 'apply' | 'about' | 'solutions' | 'for-startups' | 'program'>('landing');

  if (currentPage === 'landing') {
    return <LandingPage onEnter={() => setCurrentPage('mobile')} />;
  }

  if (currentPage === 'mobile') {
    return (
      <MobileExperience 
        onBack={() => setCurrentPage('home')} 
        onNavigate={(page: string) => {
          if (page === 'apply') setCurrentPage('apply');
          else if (page === 'contact') setCurrentPage('contact');
          else if (page === 'investors') setCurrentPage('investors');
          else if (page === 'about') setCurrentPage('about');
          else if (page === 'solutions') setCurrentPage('solutions');
          else if (page === 'for-startups') setCurrentPage('for-startups');
          else if (page === 'program') setCurrentPage('program');
          else setCurrentPage('home');
        }} 
      />
    );
  }

  if (currentPage === 'contact') {
    return <Contact onBack={() => setCurrentPage('mobile')} />;
  }

  if (currentPage === 'investors') {
    return <ForInvestors onBack={() => setCurrentPage('mobile')} />;
  }

  if (currentPage === 'apply') {
    return <Apply onBack={() => setCurrentPage('mobile')} />;
  }

  if (currentPage === 'about') {
    return <AboutUs onBack={() => setCurrentPage('mobile')} />;
  }

  if (currentPage === 'solutions') {
    return <Solutions onBack={() => setCurrentPage('mobile')} />;
  }

  if (currentPage === 'for-startups') {
    return <ForStartups onBack={() => setCurrentPage('mobile')} />;
  }

  if (currentPage === 'program') {
    return <Program onBack={() => setCurrentPage('mobile')} />;
  }

  const stats = [
    { number: "50+", label: "Startups Accelerated", icon: Rocket },
    { number: "2", label: "Countries", icon: Globe },
    { number: "$10M+", label: "Funding Raised", icon: Building },
    { number: "100+", label: "Mentors Network", icon: Users }
  ];

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

  const solutions = [
    {
      title: "Startup Acceleration",
      description: "Our main program for small and early-stage companies.",
      icon: Rocket,
    },
    {
      title: "Specialized Mentorship",
      description: "Individualized support for the development of your team and business.",
      icon: Users,
    },
    {
      title: "Investor Connection",
      description: "We facilitate access to capital and strategic partnerships.",
      icon: Handshake,
    }
  ];

  const detailedSolutions = [
    {
      title: "Acceleration Program",
      description: "Our main program is designed for small and early-stage startups seeking a significant boost to enter and establish themselves in the market. We offer a dynamic environment and essential resources for your development.",
      icon: Rocket,
      gradient: "from-[#fe6b8f] to-[#9f3ccf]",
      benefits: [
        "Intensive mentorship with market experts",
        "Access to an exclusive network of contacts and partners",
        "Practical workshops and training",
        "Support in product and business model validation"
      ],
      cta: "Apply Now"
    },
    {
      title: "Personalized Mentorship",
      description: "Our mentors are experienced professionals who offer strategic and tactical guidance, helping your startup overcome challenges and seize opportunities. Mentorship is adapted to the specific needs of each business.",
      icon: MessageCircle,
      gradient: "from-[#9f3ccf] to-[#269dff]",
      benefits: [
        "Business Strategy",
        "Marketing and Sales",
        "Product Development",
        "Investment Fundraising",
        "Team Management"
      ],
      cta: "Meet Our Mentors"
    },
    {
      title: "Access to Smart Capital",
      description: "We facilitate the connection between promising startups and our investor network. We prepare your startup for effective presentations and seek the best funding opportunities.",
      icon: PiggyBank,
      gradient: "from-[#269dff] to-[#fe6b8f]",
      benefits: [
        "Angel Investment",
        "Seed Rounds",
        "Series A and B"
      ],
      cta: "Connect with Investors"
    },
    {
      title: "AI-Driven Methodology",
      description: "Our methodology integrates artificial intelligence to optimize every stage of the acceleration process. AI allows us to analyze data, identify trends, and generate actionable insights for faster and more efficient decision-making.",
      icon: Brain,
      gradient: "from-[#fe6b8f] to-[#269dff]",
      benefits: [
        "Predictive market analysis",
        "Market entry strategy optimization",
        "Growth opportunity identification",
        "Risk and cost reduction"
      ],
      cta: "Learn About Our AI"
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
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Advanced Background Effects */}
      <ParticleSystem className="z-0" />
      <FloatingIslands className="z-0" />
      
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

      {/* Morphing Shapes */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute top-20 right-20 opacity-40">
          <MorphingShape />
        </div>
        <div className="absolute bottom-20 left-20 opacity-30">
          <MorphingShape />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-25">
          <LiquidBlob />
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
        <Rocket className="absolute top-3/4 right-1/4 w-10 h-10 text-[#9f3ccf] opacity-25 rotate-45 animate-spin" style={{ animationDelay: '8s', animationDuration: '20s' }} />
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
          <AnimatedSection animation="slideLeft">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-[#fe6b8f] transition-colors">About Us</a>
              <a href="#solutions" className="text-white hover:text-[#fe6b8f] transition-colors">Solutions</a>
              <a href="#for-startups" className="text-white hover:text-[#fe6b8f] transition-colors">For Startups</a>
              <a href="#program" className="text-white hover:text-[#fe6b8f] transition-colors">Program</a>
              <MagneticButton 
                onClick={() => setCurrentPage('investors')}
                className="text-white hover:text-[#fe6b8f] transition-colors"
              >
                For Investors
              </MagneticButton>
              <MagneticButton 
                onClick={() => setCurrentPage('apply')}
                className="text-white hover:text-[#fe6b8f] transition-colors"
              >
                Apply
              </MagneticButton>
              <MagneticButton 
                onClick={() => setCurrentPage('mobile')}
                className="text-white hover:text-[#fe6b8f] transition-colors"
              >
                Mobile Hub
              </MagneticButton>
              <MagneticButton 
                onClick={() => setCurrentPage('contact')}
                className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Contact
              </MagneticButton>
            </div>
          </AnimatedSection>
        </nav>
      </header>

      {/* Hero Section */}
      <Scroll3DScene className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 opacity-40">
            <Orb 
              hoverIntensity={0.8} 
              rotateOnHover={true} 
              hue={0} 
              forceHoverState={true} 
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="space-y-6">
                <SplitText
                  text="Accelerating the Future of Startups"
                  className="text-5xl lg:text-7xl font-bold text-white leading-tight bg-gradient-to-r from-[#fe6b8f] via-[#9f3ccf] to-[#269dff] bg-clip-text text-transparent"
                  delay={100}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 60, rotationX: -90 }}
                  to={{ opacity: 1, y: 0, rotationX: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                  textAlign="left"
                  onLetterAnimationComplete={() => console.log('Title animation complete!')}
                />
                <AnimatedSection animation="slideUp" delay={800}>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Empowering small and early-stage companies with innovative methodology and artificial intelligence.
                  </p>
                </AnimatedSection>
              </div>

              <MagneticField className="relative">
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton 
                    onClick={() => document.getElementById('for-startups')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Accelerate Your Startup With Us</span>
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                  <MagneticButton 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-[#269dff] text-[#269dff] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#269dff] hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </MagneticButton>
                </div>
              </MagneticField>

              <AnimatedSection animation="fadeIn" delay={400}>
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>August 2025 Batch</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Brazil & USA</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Stats with 3D Cards */}
            <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.15}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <StaggerItem key={index} direction="scale">
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-[#269dff] mb-4" />
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </Scroll3DScene>

      {/* About Us Section */}
      <section id="about" className="relative z-10 px-6 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <TextReveal 
                text="About Us"
                className="text-4xl lg:text-5xl font-bold text-white mb-8"
              />
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Nyx Hub Venture</strong> is more than an acceleration hub; we are the catalyst for 
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
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <TextReveal 
                text="Our Solutions for the Ecosystem"
                className="text-4xl lg:text-5xl font-bold text-white mb-8"
              />
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At Nyx Hub Venture, we offer a comprehensive set of solutions designed to drive growth and innovation in the startup ecosystem.
              </p>
            </div>
          </ScrollReveal>

          {/* Solution Highlights */}
          <div className="mb-20">
            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={50}>
                    <Card3D className="bg-gradient-to-br from-[#fe6b8f]/20 via-[#9f3ccf]/20 to-[#269dff]/20 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                      <Icon className="w-12 h-12 text-[#269dff] mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                      <p className="text-gray-300 mb-6">{solution.description}</p>
                      <div className="flex items-center text-[#fe6b8f] font-semibold group-hover:text-white transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Detailed Solutions */}
          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.3}>
            {detailedSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <StaggerItem key={index} direction="up" distance={60}>
                  <Card3D className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                    <div className="flex items-start space-x-6">
                      <FloatingElement amplitude={3} frequency={4} delay={index * 0.3}>
                        <div className={`bg-gradient-to-r ${solution.gradient} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </FloatingElement>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">
                            {solution.title === "Personalized Mentorship" ? "Mentorship Areas:" : 
                             solution.title === "Access to Smart Capital" ? "Investment Types:" : 
                             solution.title === "AI-Driven Methodology" ? "Advantages:" : "Benefits:"}
                          </h4>
                          <ul className="space-y-2">
                            {solution.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-[#269dff] rounded-full flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <MagneticButton className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                          <span>{solution.cta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </MagneticButton>
                      </div>
                    </div>
                  </Card3D>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* For Startups Section */}
      <section id="for-startups" className="relative z-10 px-6 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <TextReveal 
                text="Accelerate Your Startup With Us"
                className="text-4xl lg:text-5xl font-bold text-white mb-8"
              />
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  If you have an innovative idea or an early-stage startup and are looking for the boost 
                  needed to conquer the market, <strong className="text-white">Nyx Hub Venture</strong> is your place.
                </p>
                <p>
                  We offer a complete acceleration program designed to transform your potential into success.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Video Section */}
          <div className="mb-16">
            <ScrollReveal direction="up" delay={0.3}>
              <Card3D className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 border border-white/20 max-w-5xl mx-auto overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden bg-black/50">
                  <video 
                    className="w-full h-auto rounded-2xl"
                    controls
                    poster="https://storage.googleapis.com/agentpro-cdn/m31/bg.png"
                    preload="metadata"
                  >
                    <source 
                      src="https://storage.googleapis.com/agentpro-cdn/m31/envato_video_gen_Jun_12_2025_1_57_00.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none rounded-2xl"></div>
                  
                  {/* Floating Elements around Video */}
                  <FloatingElement amplitude={3} frequency={2} delay={0}>
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] rounded-full opacity-60"></div>
                  </FloatingElement>
                  <FloatingElement amplitude={4} frequency={3} delay={1}>
                    <div className="absolute -top-6 -right-6 w-6 h-6 bg-gradient-to-r from-[#9f3ccf] to-[#269dff] rounded-full opacity-50"></div>
                  </FloatingElement>
                  <FloatingElement amplitude={2} frequency={2.5} delay={2}>
                    <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-gradient-to-r from-[#269dff] to-[#fe6b8f] rounded-full opacity-40"></div>
                  </FloatingElement>
                  <FloatingElement amplitude={3} frequency={1.8} delay={0.5}>
                    <div className="absolute -bottom-6 -right-4 w-7 h-7 bg-gradient-to-r from-[#fe6b8f] to-[#269dff] rounded-full opacity-55"></div>
                  </FloatingElement>
                </div>
                
                {/* Video Description */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    See How We <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Transform</span> Startups
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Discover our innovative acceleration methodology and see how we help startups achieve extraordinary growth through AI-driven strategies and expert mentorship.
                  </p>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

          <div className="text-center">
            <MagneticButton 
              onClick={() => setCurrentPage('apply')}
              className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <TextReveal 
                text="Connecting Innovation"
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nyx Hub Venture connects the vibrant startup ecosystems of Brazil and the United States, 
                providing unparalleled access to markets, mentorship, and capital.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
            {[
              {
                icon: Rocket,
                title: "Acceleration Program",
                description: "Intensive 6-month program with practical mentorship, product development, and market entry strategy.",
                gradient: "from-[#fe6b8f]/20 to-[#9f3ccf]/20",
                color: "text-[#fe6b8f]"
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Access to investors, partners, and clients in Brazil and USA markets.",
                gradient: "from-[#9f3ccf]/20 to-[#269dff]/20",
                color: "text-[#9f3ccf]"
              },
              {
                icon: Users,
                title: "Specialized Mentorship",
                description: "Learn from successful entrepreneurs and industry leaders who built global companies.",
                gradient: "from-[#269dff]/20 to-[#fe6b8f]/20",
                color: "text-[#269dff]"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={index} direction="up" distance={50}>
                  <Card3D className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border border-white/10`}>
                    <Icon className={`w-12 h-12 ${item.color} mb-6`} />
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </Card3D>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 bg-[#130e23]/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="https://storage.googleapis.com/agentpro-cdn/m31/png.png" 
                    alt="Nyx Hub Venture" 
                    className="h-10 w-auto"
                  />
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Nyx Hub Venture</h3>
                    <p className="text-sm text-gray-400">Startup Acceleration Hub</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Connecting startup ecosystems of Brazil and USA through innovative acceleration programs.
                </p>
                <div className="flex space-x-4">
                  <Mail className="w-5 h-5 text-[#269dff]" />
                  <span className="text-white">contact@nyxhub.ventures</span>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Program</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-[#fe6b8f] transition-colors">Application Process</a></li>
                  <li><a href="#" className="hover:text-[#fe6b8f] transition-colors">Curriculum</a></li>
                  <li><a href="#" className="hover:text-[#fe6b8f] transition-colors">Mentors</a></li>
                  <li><a href="#" className="hover:text-[#fe6b8f] transition-colors">Alumni</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#about" className="hover:text-[#fe6b8f] transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-[#fe6b8f] transition-colors">Team</a></li>
                  <li><a href="#" className="hover:text-[#fe6b8f] transition-colors">Investors</a></li>
                  <li><MagneticButton onClick={() => setCurrentPage('contact')} className="hover:text-[#fe6b8f] transition-colors">Contact</MagneticButton></li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={0.4}>
            <div className="border-t border-white/10 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 Nyx Hub Venture. All rights reserved. | Connecting innovation between Brazil and USA.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
}

export default App;
