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
      className={`relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 transition-all duration-1000 ease-out overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative z-10 container mx-auto px-4 mt-4 sm:mt-8 max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center overflow-hidden">
            {/* Left Content */}
            <div className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ease-out overflow-hidden ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Main Heading */}
              <div className="mb-6 md:mb-8 overflow-hidden">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 leading-tight tracking-tight text-center lg:text-left break-words">
                  Favour Bernard-Ekwe
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 md:mb-6 h-16 sm:h-20 md:h-24 lg:h-28 flex flex-col justify-center font-medium text-center lg:text-left overflow-hidden">
                  <div className="break-words">
                    <span>Professional Web Developer for </span>
                    <span className="text-white font-semibold border-r-2 border-white">
                      {displayText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtitle */}
              <p className={`text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed text-center lg:text-left transition-all duration-1000 delay-500 ease-out break-words overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                I build clean, modern websites and landing pages for brands, creators, and small businesses — 
                <span className="text-white font-semibold"> delivered in 5–10 days</span>
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12 justify-center lg:justify-start transition-all duration-1000 delay-700 ease-out overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <button
                  onClick={scrollToServices}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-sm text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100 max-w-full"
                >
                  View Services & Pricing
                </button>
                
                <button
                  onClick={openWhatsApp}
                  className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-sm text-base sm:text-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-white transform hover:scale-105 max-w-full"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z"/>
                  </svg>
                  <span className="truncate">Chat on WhatsApp</span>
                </button>
              </div>

              {/* Stats */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-md lg:max-w-none mx-auto lg:mx-0 transition-all duration-1000 delay-900 ease-out overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="text-center lg:text-left overflow-hidden">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">5-10</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Days Delivery</div>
                </div>
                <div className="text-center lg:text-left overflow-hidden">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">50+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Projects Done</div>
                </div>
                <div className="text-center lg:text-left overflow-hidden">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">100%</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Satisfaction</div>
                </div>
                <div className="text-center lg:text-left overflow-hidden">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">24/7</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Right Side - Picture Area */}
            <div className={`order-1 lg:order-2 flex justify-center lg:justify-end mb-6 lg:mb-0 transition-all duration-1000 delay-500 ease-out overflow-hidden ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative overflow-hidden">
                {/* Intersecting Circles Background */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-112 lg:h-112 overflow-hidden">
                  {/* White Circle (More Prominent) */}
                  <div className="absolute top-0 left-4 sm:left-6 md:left-8 w-64 h-64 sm:w-72 sm:h-72 md:w-88 md:h-88 lg:w-96 lg:h-96 bg-white rounded-full opacity-90"></div>
                  
                  {/* Black Circle (Intersecting) */}
                  <div className="absolute top-4 sm:top-6 md:top-8 left-0 w-64 h-64 sm:w-72 sm:h-72 md:w-88 md:h-88 lg:w-96 lg:h-96 bg-black rounded-full opacity-70"></div>
                  
                  {/* Gray Intersection Effect */}
                  <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-64 h-64 sm:w-72 sm:h-72 md:w-88 md:h-88 lg:w-96 lg:h-96 bg-gray-400 rounded-full opacity-30 mix-blend-multiply"></div>
                  
                  {/* Picture Container */}
                  <div className="absolute inset-0 flex items-start justify-center pt-2 sm:pt-3 md:pt-4 z-10 overflow-hidden">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-88 lg:h-88 rounded-full overflow-hidden shadow-2xl">
                      <img 
                        src="/myphoto.png" 
                        alt="Favour Bernard-Ekwe" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Elements - Fixed positioning to prevent overflow */}
                  <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 sm:w-6 sm:h-6 bg-gray-400/30 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-white/30 rounded-full animate-pulse delay-2000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1100 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;