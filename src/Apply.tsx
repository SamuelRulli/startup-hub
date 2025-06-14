import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { ScrollReveal, ScrollProgress } from './components/ScrollAnimations';
import { MagneticButton, Card3D, TextReveal, ParticleSystem, FloatingIslands } from './components/AdvancedAnimations';
import Orb from './components/Orb';

interface ApplyProps {
  onBack: () => void;
}

function Apply({ onBack }: ApplyProps) {
  const [formData, setFormData] = useState({
    startupName: '',
    founderName: '',
    email: '',
    phone: '',
    country: '',
    stage: '',
    sector: '',
    description: '',
    website: '',
    teamSize: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
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
              src="https://storage.googleapis.com/agentpro-cdn/m31/icon.png" 
              alt="Nyx Hub Venture" 
              className="h-12 w-auto"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold">Nyx Hub Venture</h1>
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
        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <ScrollReveal direction="up" delay={0.2}>
              <Card3D className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
                <div className="text-center mb-12">
                  <TextReveal 
                    text="Apply for August 2025 Batch"
                    className="text-4xl lg:text-5xl font-bold text-white mb-6"
                  />
                  <p className="text-xl text-gray-300 mb-8">
                    Join our inaugural batch and become part of the next generation of global startups.
                  </p>
                  
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-400 mb-8">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>August 2025 Batch</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Brazil & USA</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Startup Name *</label>
                      <input
                        type="text"
                        name="startupName"
                        value={formData.startupName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                        placeholder="Enter your startup name"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Founder Name *</label>
                      <input
                        type="text"
                        name="founderName"
                        value={formData.founderName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
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
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                      >
                        <option value="" className="bg-gray-800">Select Country</option>
                        <option value="Brazil" className="bg-gray-800">Brazil</option>
                        <option value="USA" className="bg-gray-800">United States</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Startup Stage *</label>
                      <select
                        name="stage"
                        value={formData.stage}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                      >
                        <option value="" className="bg-gray-800">Select Stage</option>
                        <option value="Idea" className="bg-gray-800">Idea Stage</option>
                        <option value="MVP" className="bg-gray-800">MVP/Prototype</option>
                        <option value="Early Revenue" className="bg-gray-800">Early Revenue</option>
                        <option value="Growth" className="bg-gray-800">Growth Stage</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Industry Sector</label>
                      <input
                        type="text"
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                        placeholder="e.g., FinTech, HealthTech, EdTech"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Team Size</label>
                      <input
                        type="text"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                        placeholder="e.g., 2-5 people"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Website/LinkedIn</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                      placeholder="https://your-website.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Startup Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all resize-none"
                      placeholder="Describe your startup, the problem you're solving, and your solution..."
                    />
                  </div>

                  <MagneticButton
                    onClick={() => handleSubmit}
                    className="w-full bg-gradient-to-r from-[#fe6b8f] via-[#9f3ccf] to-[#269dff] text-white py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>

                  <p className="text-center text-gray-400 text-sm">
                    Applications for the August 2025 batch close on July 15, 2025
                  </p>
                </form>
              </Card3D>
            </ScrollReveal>
          ) : (
            <ScrollReveal direction="scale" delay={0.2}>
              <Card3D className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-4">Application Submitted!</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Thank you for applying to Nyx Hub Venture. We will review your application and get back to you within 2 weeks.
                </p>
                <div className="bg-gradient-to-r from-[#fe6b8f]/20 to-[#269dff]/20 rounded-xl p-6 border border-white/10">
                  <p className="text-white">
                    <strong>Next steps:</strong><br />
                    Our team will analyze your application and contact you for the next steps. 
                    Meanwhile, follow us on social media for program updates.
                  </p>
                </div>
              </Card3D>
            </ScrollReveal>
          )}
        </div>
      </main>
    </div>
  );
}

export default Apply;
