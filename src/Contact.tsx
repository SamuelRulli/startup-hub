import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Send, ArrowLeft, Rocket, CheckCircle } from 'lucide-react';
import { AnimatedSection, AnimatedGrid } from './components/AnimatedSection';
import Orb from './components/Orb';

interface ContactProps {
  onBack: () => void;
}

function Contact({ onBack }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      title: "Endereço",
      content: ["Avenida Paulista, 1578 - Bela Vista", "São Paulo, SP - 01310-200", "Brasil"],
      icon: MapPin,
      gradient: "from-[#fe6b8f] to-[#9f3ccf]"
    },
    {
      title: "Telefone",
      content: ["+55 (11) 3456-7890"],
      icon: Phone,
      gradient: "from-[#9f3ccf] to-[#269dff]"
    },
    {
      title: "Email",
      content: ["contato@m31venture.com"],
      icon: Mail,
      gradient: "from-[#269dff] to-[#fe6b8f]"
    },
    {
      title: "Horário de Atendimento",
      content: ["Segunda a Sexta: 9h às 18h", "(Horário de Brasília)"],
      icon: Clock,
      gradient: "from-[#fe6b8f] to-[#269dff]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Orb Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Main Contact Orb */}
        <div className="absolute top-20 right-20 w-80 h-80">
          <Orb hoverIntensity={0.8} rotateOnHover={true} hue={300} forceHoverState={true} />
        </div>
        
        {/* Secondary Orbs */}
        <div className="absolute bottom-40 left-20 w-56 h-56">
          <Orb hoverIntensity={0.5} rotateOnHover={false} hue={220} forceHoverState={false} />
        </div>
        
        <div className="absolute top-1/3 left-1/4 w-40 h-40">
          <Orb hoverIntensity={0.6} rotateOnHover={true} hue={180} forceHoverState={true} />
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
            </button>
          </AnimatedSection>
          <AnimatedSection animation="slideLeft">
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={onBack}
                className="text-white hover:text-[#fe6b8f] transition-colors"
              >
                Voltar ao Início
              </button>
            </div>
          </AnimatedSection>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Fale <span className="bg-gradient-to-r from-[#fe6b8f] to-[#269dff] bg-clip-text text-transparent">Conosco</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Entre em contato conosco para descobrir como podemos acelerar sua startup rumo ao sucesso. 
                Nossa equipe está pronta para ajudar você a transformar sua ideia em realidade.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <AnimatedSection animation="slideRight" delay={200}>
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Informações de <span className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] bg-clip-text text-transparent">Contato</span>
                  </h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <AnimatedSection key={index} animation="fadeIn" delay={index * 100} staggered={true}>
                          <div className="flex items-start space-x-4">
                            <div className={`bg-gradient-to-r ${info.gradient} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                              {info.content.map((line, lineIndex) => (
                                <p key={lineIndex} className="text-gray-300">{line}</p>
                              ))}
                            </div>
                          </div>
                        </AnimatedSection>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>

              {/* Social Media */}
              <AnimatedSection animation="slideRight" delay={400}>
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Redes <span className="bg-gradient-to-r from-[#9f3ccf] to-[#269dff] bg-clip-text text-transparent">Sociais</span>
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/company/m31venture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#fe6b8f] to-[#9f3ccf] w-12 h-12 rounded-xl flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://instagram.com/m31venture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#9f3ccf] to-[#269dff] w-12 h-12 rounded-xl flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection animation="slideRight" delay={600}>
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Nossa <span className="bg-gradient-to-r from-[#269dff] to-[#fe6b8f] bg-clip-text text-transparent">Localização</span>
                  </h3>
                  <div className="bg-gray-800 rounded-2xl p-6 text-center">
                    <MapPin className="w-12 h-12 text-[#269dff] mx-auto mb-4" />
                    <p className="text-gray-300">
                      Estamos localizados no coração de São Paulo, na icônica Avenida Paulista, 
                      próximo aos principais centros de negócios e inovação da cidade.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection animation="slideLeft" delay={300}>
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl font-bold text-white mb-8">
                      Envie sua <span className="bg-gradient-to-r from-[#fe6b8f] to-[#269dff] bg-clip-text text-transparent">Mensagem</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Nome Completo *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                          placeholder="Seu nome completo"
                        />
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                          placeholder="seu@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Assunto *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all"
                        >
                          <option value="" className="bg-gray-800">Selecione o assunto</option>
                          <option value="startup-acceleration" className="bg-gray-800">Aceleração de Startup</option>
                          <option value="investment" className="bg-gray-800">Oportunidades de Investimento</option>
                          <option value="mentorship" className="bg-gray-800">Mentoria</option>
                          <option value="partnership" className="bg-gray-800">Parcerias</option>
                          <option value="press" className="bg-gray-800">Imprensa</option>
                          <option value="other" className="bg-gray-800">Outros</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Mensagem *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#269dff] focus:outline-none focus:ring-2 focus:ring-[#269dff]/20 transition-all resize-none"
                          placeholder="Digite sua mensagem aqui..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#fe6b8f] via-[#9f3ccf] to-[#269dff] text-white py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensagem</span>
                      </button>

                      <p className="text-center text-gray-400 text-sm">
                        Responderemos sua mensagem em até 24 horas
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold text-white mb-4">Mensagem Enviada!</h2>
                    <p className="text-xl text-gray-300 mb-8">
                      Obrigado por entrar em contato conosco. Nossa equipe analisará sua mensagem e retornará em breve.
                    </p>
                    <div className="bg-gradient-to-r from-[#fe6b8f]/20 to-[#269dff]/20 rounded-xl p-6 border border-white/10">
                      <p className="text-white">
                        <strong>Próximos passos:</strong><br />
                        Nossa equipe entrará em contato em até 24 horas. Enquanto isso, 
                        acompanhe nossas redes sociais para novidades sobre o ecossistema de startups.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 bg-gradient-to-r from-[#9f3ccf] to-[#269dff] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
