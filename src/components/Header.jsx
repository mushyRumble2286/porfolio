import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden max-w-full" style={{maxWidth: '100vw', overflowX: 'hidden'}}>
      {/* Professional Glassmorphism Background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-lg border-b border-gray-800/50 shadow-2xl overflow-hidden max-w-full"></div>
      
      <nav className="relative container mx-auto px-4 py-4 overflow-hidden max-w-full" style={{maxWidth: '100vw', overflowX: 'hidden'}}>
        <div className="flex items-center justify-between overflow-hidden max-w-full">
          {/* Logo */}
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white tracking-tight truncate max-w-full">
            Favour Bernard-Ekwe
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 overflow-hidden">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group whitespace-nowrap px-2"
            >
              Home
              <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-white group-hover:w-[70%] origin-left transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group whitespace-nowrap px-2"
            >
              Services
              <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-white group-hover:w-[70%] origin-left transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group whitespace-nowrap px-2"
            >
              Portfolio
              <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-white group-hover:w-[70%] origin-left transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group whitespace-nowrap px-2"
            >
              Reviews
              <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-white group-hover:w-[70%] origin-left transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative bg-white text-black px-4 lg:px-6 py-2 rounded-sm hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-medium whitespace-nowrap"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2 rounded-sm hover:bg-white/10 flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800/50 overflow-hidden max-w-full">
            {/* Mobile Menu Background */}
            <div className="absolute left-2 right-2 top-full mt-4 bg-black/90 backdrop-blur-lg rounded-sm border border-gray-800/50 shadow-2xl overflow-hidden max-w-full" style={{maxWidth: 'calc(100vw - 16px)'}}>
              <div className="flex flex-col space-y-1 p-4 overflow-hidden max-w-full">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-left font-medium py-3 px-4 rounded-sm max-w-full truncate"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-left font-medium py-3 px-4 rounded-sm max-w-full truncate"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-left font-medium py-3 px-4 rounded-sm max-w-full truncate"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-left font-medium py-3 px-4 rounded-sm max-w-full truncate"
                >
                  Reviews
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-black px-6 py-3 rounded-sm hover:bg-gray-200 transition-all duration-300 text-center font-medium mt-2 transform hover:scale-105 max-w-full"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;