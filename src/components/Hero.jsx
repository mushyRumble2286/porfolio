import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [elementRef, isVisible] = useScrollAnimation(0.1);
  
  const texts = [
    'Modern Websites',
    'Landing Pages',
    'Brand Experiences',
    'Digital Solutions'
  ];

  const phoneNumber = "2349078222262";

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hi! I'm interested in your web development services.`, '_blank');
  };

  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={elementRef}
      id="home" 
      className={`relative min-h-screen flex items-center justify-center pt-20 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative z-10 container mx-auto px-4 mt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
              style={{ background: 'none', boxShadow: 'none', border: 'none' }}>
              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 leading-tight tracking-tight">
                  Favour Bernard-Ekwe
                </h1>
                <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 h-20 md:h-24 lg:h-28 flex flex-col justify-center font-medium">
                  <div>
                    <span>Professional Web Developer for </span>
                    <span className="text-white font-semibold border-r-2 border-white">
                      {displayText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtitle */}
              <p className={`text-lg md:text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-1000 delay-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                I build clean, modern websites and landing pages for brands, creators, and small businesses — 
                <span className="text-white font-semibold"> delivered in 2–3 days</span>
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <button
                  onClick={scrollToServices}
                  className="group relative px-8 py-4 bg-white text-black font-semibold rounded-sm text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
                >
                  View Services & Pricing
                </button>
                
                <button
                  onClick={openWhatsApp}
                  className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-sm text-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-white transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z"/>
                  </svg>
                  Chat on WhatsApp
                </button>
              </div>

              {/* Stats */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-900 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">2-3</div>
                  <div className="text-gray-400 text-sm">Days Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Right Side - Picture Area */}
            <div
              className={`flex justify-center lg:justify-center transition-all duration-1000 delay-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative rounded-full overflow-visible w-[360px] h-[360px] md:w-[420px] md:h-[420px]">
                {/* Floating Elements */}
                <div className="absolute -left-8 top-1/4 w-4 h-4 bg-white/30 rounded-full animate-pulse-float-1"></div>
                <div className="absolute -right-8 top-1/3 w-6 h-6 bg-gray-400/40 rounded-full animate-pulse-float-2"></div>
                <div className="absolute -bottom-8 left-1/3 w-5 h-5 bg-white/20 rounded-full animate-pulse-float-3"></div>

                {/* Main circular content */}
                <div className="relative w-full h-full rounded-full">
                  {/* White Circle */}
                  <div className="absolute -top-4 left-6 w-[340px] h-[340px] md:w-[400px] md:h-[400px] bg-white rounded-full opacity-90"></div>

                  {/* Black Circle */}
                  <div className="absolute top-4 -left-2 w-[340px] h-[340px] md:w-[400px] md:h-[400px] bg-black rounded-full opacity-70"></div>

                  {/* Gray Intersection */}
                  <div className="absolute top-0 left-2 w-[340px] h-[340px] md:w-[400px] md:h-[400px] bg-gray-400 rounded-full opacity-30 mix-blend-multiply"></div>

                  {/* Picture */}
                  <div className="absolute inset-0 flex items-start justify-center pt-2 -translate-y-2 z-10">
                    <div className="w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden">
                      <img
                        src="/4.jpg"
                        alt="Favour Bernard-Ekwe"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1100 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;