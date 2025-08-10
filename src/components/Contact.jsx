import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [elementRef, isVisible] = useScrollAnimation(0.1);

  const phoneNumber = "2349078222262"; // Replace with your actual phone number
  const email = "favourbernardekwe@gmail.com"; // Replace with your actual email

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const message = `Hi Favour! I'm interested in your web development services.

Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Service: ${formData.service || 'Not specified'}
Message: ${formData.message || 'I would like to discuss my project with you.'}`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openPaystackForm = () => {
    // For now, this will redirect to WhatsApp with booking intent
    const message = `Hi Favour! I want to book your services and make payment via Paystack.

Service: ${formData.service || 'To be discussed'}
Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}

Please send me the Paystack payment link.`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const sendEmail = () => {
    const subject = `Web Development Inquiry from ${formData.name || 'Website Visitor'}`;
    const body = `Hi Favour,

I'm interested in your web development services.

Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Service: ${formData.service || 'Not specified'}

Message:
${formData.message || 'I would like to discuss my project with you.'}

Best regards,
${formData.name || 'Website Visitor'}`;

    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <section 
      ref={elementRef}
      id="contact" 
      className={`py-20 relative transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-pulse">
            Let's Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch and let's create something amazing together. 
            Fast delivery, modern design, and results that exceed expectations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden transition-all duration-1000 delay-400 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Background Animation */}
              <div className="absolute inset-0">
                <div className="absolute top-2 right-2 w-4 h-4 bg-purple-400/20 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-pink-400/20 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-ping delay-2000"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 animate-pulse">Send Me a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-gray-300 mb-2 font-semibold">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/30 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-gray-700/50 transition-all duration-300 hover:border-purple-400"
                        placeholder="John Doe"
                      />
                      <div className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="relative">
                      <label className="block text-gray-300 mb-2 font-semibold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/30 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-gray-700/50 transition-all duration-300 hover:border-purple-400"
                        placeholder="john@example.com"
                      />
                      <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500"></div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-gray-300 mb-2 font-semibold">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/30 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:bg-gray-700/50 transition-all duration-300 hover:border-purple-400"
                    >
                      <option value="" className="bg-gray-800">Select a service</option>
                      <option value="Simple Landing Page - ₦15,000" className="bg-gray-800">Simple Landing Page - ₦15,000</option>
                      <option value="3-Page Website - ₦25,000" className="bg-gray-800">Multi-Page Website - ₦30,000</option>
                      <option value="24-Hour Express - +₦5,000" className="bg-gray-800">24-Hour Express - +₦5,000</option>
                      <option value="Custom Project" className="bg-gray-800">Custom Project</option>
                    </select>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000"></div>
                  </div>

                  <div className="relative">
                    <label className="block text-gray-300 mb-2 font-semibold">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-700/30 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-gray-700/50 transition-all duration-300 resize-none hover:border-purple-400"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    ></textarea>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-1500"></div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={openPaystackForm}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 animate-pulse"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      Book & Pay
                    </button>
                    
                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 animate-bounce"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z"/>
                      </svg>
                      WhatsApp
                    </button>
                    
                    <button
                      type="button"
                      onClick={sendEmail}
                      className="border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700/30 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden transition-all duration-1000 delay-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {/* Background Animation */}
                <div className="absolute inset-0">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-400/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400/20 rounded-full animate-ping delay-1000"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 animate-pulse">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">WhatsApp</h4>
                        <p className="text-gray-300">+234 907 822 2262</p>
                      </div>
                    </div>

                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse delay-500">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-gray-300">favourbernardekwe@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse delay-1000">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Response Time</h4>
                        <p className="text-gray-300">Within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse delay-1500">
                        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Location</h4>
                        <p className="text-gray-300">Abuja, Nigeria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden transition-all duration-1000 delay-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {/* Background Animation */}
                <div className="absolute inset-0">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-green-400/20 rounded-full animate-ping delay-1000"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 animate-pulse">Quick FAQ</h3>
                  
                  <div className="space-y-4">
                    <div className="group hover:scale-105 transition-transform duration-300">
                      <h4 className="font-semibold text-purple-400 mb-2 animate-pulse">How long does it take?</h4>
                      <p className="text-gray-300 text-sm">Standard delivery is 2-3 days. Express option available for 24 hours.</p>
                    </div>
                    
                    <div className="group hover:scale-105 transition-transform duration-300">
                      <h4 className="font-semibold text-pink-400 mb-2 animate-pulse delay-500">Do you offer revisions?</h4>
                      <p className="text-gray-300 text-sm">Yes! 1-2 revisions included depending on the package.</p>
                    </div>
                    
                    <div className="group hover:scale-105 transition-transform duration-300">
                      <h4 className="font-semibold text-blue-400 mb-2 animate-pulse delay-1000">Payment methods?</h4>
                      <p className="text-gray-300 text-sm">Paystack or bank transfer accepted.</p>
                    </div>
                    
                    <div className="group hover:scale-105 transition-transform duration-300">
                      <h4 className="font-semibold text-green-400 mb-2 animate-pulse delay-1500">Student discounts?</h4>
                      <p className="text-gray-300 text-sm">Yes! Contact me with your student ID for special pricing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;