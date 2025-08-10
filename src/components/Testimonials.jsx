import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elementRef, isVisible] = useScrollAnimation(0.1);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      company: "TechVenture",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Favour delivered an absolutely stunning landing page for our startup in just 2 days! The design was modern, conversion-optimized, and exactly what we needed. Highly recommend!",
      project: "Landing Page"
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      company: "Bella Vista",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Our restaurant website exceeded all expectations. Beautiful design, easy navigation, and the online reservation system works perfectly. Customer inquiries increased by 40%!",
      project: "3-Page Website"
    },
    {
      name: "Emily Rodriguez",
      role: "Fashion Designer",
      company: "ER Couture",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The portfolio website Favour created perfectly captures my brand aesthetic. The attention to detail and smooth animations make my work shine. Professional service from start to finish.",
      project: "Portfolio Website"
    },
    {
      name: "David Okafor",
      role: "Fitness Coach",
      company: "FitLife Nigeria",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Fast, professional, and affordable! My fitness landing page looks incredible and has helped me get more clients. The 24-hour express option was a lifesaver for my launch.",
      project: "Express Landing Page"
    },
    {
      name: "Aisha Bello",
      role: "E-commerce Entrepreneur",
      company: "Afro Chic Boutique",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Favour transformed my business with a beautiful e-commerce website. Sales increased by 60% in the first month! Great communication and delivered exactly what I envisioned.",
      project: "E-commerce Website"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-white' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const phoneNumber = "2349078222262";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hi Favour! I saw the amazing testimonials on your website. I'd like to discuss my project with you.`, '_blank');
  };

  return (
    <section 
      ref={elementRef}
      id="testimonials" 
      className={`py-16 md:py-20 relative transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative z-10 container mx-auto px-4 overflow-hidden">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight px-2">
            What Clients <span className="text-gray-400">Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        {/* Auto-Sliding Testimonial Carousel */}
        <div className={`max-w-4xl mx-auto mb-12 md:mb-16 transition-all duration-1000 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-sm shadow-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden transition-all duration-500 hover:shadow-gray-900/50">
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-gray-400 mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mx-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Content with Slide Animation */}
              <div className="text-center transition-all duration-500 ease-in-out">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed italic px-2">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Stars */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Client Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-gray-600/50 filter grayscale flex-shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-white text-base sm:text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm font-semibold">
                      {testimonials[currentIndex].project}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 px-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-6 sm:w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-sm p-4 sm:p-6 shadow-lg hover:shadow-gray-900/50 transition-all duration-1000 transform hover:-translate-y-2 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${600 + index * 100}ms`
              }}
            >
              {/* Stars */}
              <div className="flex mb-3 sm:mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text.substring(0, 100)}..."
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 border-2 border-gray-600/50 filter grayscale flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-white text-sm sm:text-base truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm truncate">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-sm p-6 sm:p-8 text-white max-w-2xl mx-auto relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Join These Happy Clients?</h3>
            <p className="text-base sm:text-lg mb-6 text-gray-300 px-2">
              Let's create something amazing for your business. Fast delivery, modern design, and results that speak for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={openWhatsApp}
                className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-sm font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z"/>
                </svg>
                Start Your Project
              </button>
              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-600 text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-sm font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;