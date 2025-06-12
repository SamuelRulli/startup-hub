import React, { useState } from 'react';
import { ArrowRight, CheckCircle, DollarSign, Handshake, Users, FileText, BarChart3, Search, ArrowLeft } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem, ScrollProgress, FloatingElement } from './components/ScrollAnimations';
import { MagneticButton, Card3D, TextReveal, ParticleSystem, FloatingIslands } from './components/AdvancedAnimations';
import Orb from './components/Orb';

interface ForInvestorsProps {
  onBack: () => void;
}

function ForInvestors({ onBack }: ForInvestorsProps) {
  const [investorFormData, setInvestorFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interestType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInvestorFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Investor form submitted:', investorFormData);
  };

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

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
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
          <MagneticButton 
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-[#fe6b8f] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </MagneticButton>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <TextReveal 
                text="Investment Opportunities"
                className="text-4xl lg:text-6xl font-bold text-white mb-8"
              />
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">M31 Venture</strong> bridges intelligent capital with the most promising 
                  startups in the market. We connect investors to high-potential opportunities, 
                  carefully selected and accelerated by our exclusive methodology.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Investment Types */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Types of <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Opportunities</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
              {[
                {
                  title: "Direct Investment",
                  description: "Capital investment opportunities in startups at different stages of development.",
                  icon: DollarSign,
                  gradient: "from-[#fe6b8f] to-[#9f3ccf]"
                },
                {
                  title: "Co-investment",
                  description: "Opportunity to invest alongside M31 Venture and other strategic investors.",
                  icon: Handshake,
                  gradient: "from-[#9f3ccf] to-[#269dff]"
                },
                {
                  title: "Mentorship & Advisory",
                  description: "Contribute your experience and knowledge as a mentor or advisor to our accelerated startups.",
                  icon: Users,
                  gradient: "from-[#269dff] to-[#fe6b8f]"
                }
              ].map((opportunity, index) => {
                const Icon = opportunity.icon;
                return (
                  <StaggerItem key={index} direction="up" distance={60}>
                    <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
                      <FloatingElement amplitude={5} frequency={3} delay={index * 0.5}>
                        <div className={`bg-gradient-to-r ${opportunity.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </FloatingElement>
                      <h3 className="text-2xl font-bold text-white mb-4">{opportunity.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{opportunity.description}</p>
                    </Card3D>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Connection Process */}
          <div className="mb-20">
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Connection <span className="bg-gradient-to-r from-[#9f3ccf] to-[#269dff] bg-clip-text text-transparent">Process</span>
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
              {[
                {
                  title: "Interest Registration",
                  description: "Fill out our investor form, indicating your areas of interest and investment profile.",
                  icon: FileText,
                  step: "01"
                },
                {
                  title: "Opportunity Presentation",
                  description: "Our team will present a pipeline of startups aligned with your profile, including pitch decks and detailed information.",
                  icon: BarChart3,
                  step: "02"
                },
                {
                  title: "Due Diligence",
                  description: "We accompany and facilitate the due diligence process, providing all necessary information for your decision.",
                  icon: Search,
                  step: "03"
                },
                {
                  title: "Connection & Investment",
                  description: "After your decision, we assist in formalizing the investment and direct connection with startups.",
                  icon: CheckCircle,
                  step: "04"
                }
              ].map((process, index) => (
                <StaggerItem key={index} direction="up" distance={50}>
                  <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                    <div className="absolute -top-4 -left-4 bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {process.step}
                    </div>
                    <process.icon className="w-10 h-10 text-[#269dff] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-xl font-bold text-white mb-3">{process.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                  </Card3D>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Contact Form */}
          <div>
            <ScrollReveal direction="up" delay={0.3}>
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                Investor <span className="bg-gradient-to-r from-[#269dff] to-[#fe6b8f] bg-clip-text text-transparent">Contact Form</span>
              </h3>
            </ScrollReveal>
            
            {!isSubmitted ? (
              <ScrollReveal direction="up" delay={0.4}>
                <Card3D className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 max-w-4xl mx-auto">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={investorFormData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={investorFormData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                          placeholder="Company/fund name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={investorFormData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={investorFormData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Type of Interest *</label>
                      <select
                        name="interestType"
                        value={investorFormData.interestType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                      >
                        <option value="" className="bg-gray-800">Select type of interest</option>
                        <option value="Direct Investment" className="bg-gray-800">Direct Investment</option>
                        <option value="Co-investment" className="bg-gray-800">Co-investment</option>
                        <option value="Mentorship" className="bg-gray-800">Mentorship</option>
                        <option value="Other" className="bg-gray-800">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={investorFormData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all resize-none"
                        placeholder="Tell us more about your interest and investment profile..."
                      />
                    </div>

                    <MagneticButton
                      onClick={() => handleSubmit}
                      className="w-full bg-gradient-to-r from-[#fe6b8f] via-[#9f3ccf] to-[#269dff] text-white py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Submit Interest</span>
                      <ArrowRight className="w-5 h-5" />
                    </MagneticButton>

                    <p className="text-center text-gray-400 text-sm">
                      Our team will contact you within 48 hours to present opportunities aligned with your profile.
                    </p>
                  </form>
                </Card3D>
              </ScrollReveal>
            ) : (
              <ScrollReveal direction="scale" delay={0.2}>
                <Card3D className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 text-center max-w-4xl mx-auto">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-white mb-4">Interest Registered!</h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Thank you for your interest in investing with us. Our team will analyze your profile and contact you soon.
                  </p>
                  <div className="bg-gradient-to-r from-[#fe6b8f]/20 to-[#269dff]/20 rounded-xl p-6 border border-white/10">
                    <p className="text-white">
                      <strong>Next steps:</strong><br />
                      Our investment team will contact you to present opportunities aligned with your profile and discuss potential strategic partnerships.
                    </p>
                  </div>
                </Card3D>
              </ScrollReveal>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ForInvestors;
