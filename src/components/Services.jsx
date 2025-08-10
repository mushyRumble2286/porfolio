import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  const [elementRef, isVisible] = useScrollAnimation(0.1);

  const services = [
    {
      title: "Simple Landing Page",
      price: "₦35,000",
      originalPrice: null,
      features: [
        "Single page design",
        "Mobile responsive",
        "Contact form integration",
        "Basic SEO optimization",
        "5-7 days delivery",
        "2 revisions included"
      ],
      popular: false,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Multi-Page Website",
      price: "₦65,000",
      originalPrice: "₦85,000",
      features: [
        "Up to 5 custom pages",
        "Mobile responsive design",
        "Contact & about pages",
        "Advanced SEO optimization",
        "Social media integration",
        "7-10 days delivery",
        "3 revisions included"
      ],
      popular: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Express Delivery",
      price: "+₦15,000",
      originalPrice: null,
      features: [
        "Rush delivery option",
        "Priority support",
        "Same-day start",
        "Express communication",
        "Available for any package",
        "3-4 days delivery"
      ],
      popular: false,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const phoneNumber = "2349078222262";

  const openWhatsApp = (service) => {
    const message = `Hi Favour! I'm interested in your ${service} service. Can we discuss the details?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openPaystack = (service, price) => {
    const message = `Hi Favour! I'd like to book your ${service} service (${price}). Please send me the payment details.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section 
      ref={elementRef}
      id="services" 
      className={`py-16 relative transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight px-2">
            Services & <span className="text-gray-400">Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Professional web development services tailored for your business needs. 
            Quality delivery, modern design, and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-sm shadow-2xl hover:shadow-gray-900/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                service.popular ? 'ring-2 ring-white scale-105' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${400 + index * 200}ms`
              }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-6 py-2 rounded-sm text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-sm flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110 ${
                  service.popular 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}>
                  {service.icon}
                </div>

                {/* Title & Price */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">{service.originalPrice}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => openPaystack(service.title, service.price)}
                    className={`w-full py-3 px-6 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      service.popular
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => openWhatsApp(service.title)}
                    className="w-full py-3 px-6 border-2 border-gray-600 text-gray-300 rounded-sm font-semibold hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Ask Questions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-sm p-8 text-center text-white max-w-4xl mx-auto relative overflow-hidden transition-all duration-1000 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
          <p className="text-lg mb-6 text-gray-300">
            Every project is unique. Contact me for custom needs, e-commerce solutions, or student discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Hosting Setup - FREE</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Student Discounts Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;