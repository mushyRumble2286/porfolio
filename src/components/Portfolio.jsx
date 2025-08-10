import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [elementRef, isVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      id: 1,
      title: "TechStart Landing Page",
      category: "landing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern SaaS landing page with conversion optimization",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Restaurant Website",
      category: "website",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Full restaurant website with online menu and reservations",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Fashion Brand Portfolio",
      category: "portfolio",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegant portfolio showcase for fashion designer",
      tech: ["Next.js", "Styled Components", "Sanity CMS"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Fitness App Landing",
      category: "landing",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "High-converting landing page for fitness mobile app",
      tech: ["React", "Tailwind CSS", "AOS"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "E-commerce Store",
      category: "website",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Creative Agency Site",
      category: "website",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Creative agency website with stunning animations",
      tech: ["Vue.js", "GSAP", "Three.js"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'landing', name: 'Landing Pages' },
    { id: 'website', name: 'Websites' },
    { id: 'portfolio', name: 'Portfolios' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      ref={elementRef}
      id="portfolio" 
      className={`py-16 md:py-20 relative transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight px-2">
            My <span className="text-gray-400">Work</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Here are some of my recent projects. Each one is crafted with attention to detail, 
            modern design principles, and optimized for performance.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 px-2 transition-all duration-1000 delay-400 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-sm font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 text-gray-300 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-sm overflow-hidden hover:bg-gray-800/50 transition-all duration-1000 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${600 + index * 100}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="bg-white/90 text-black p-3 rounded-sm hover:bg-white transition-colors transform hover:scale-110"
                    aria-label="View Live Site"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.codeUrl}
                    className="bg-gray-800/90 text-white p-3 rounded-sm hover:bg-gray-700 transition-colors transform hover:scale-110"
                    aria-label="View Code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-800/50 text-gray-300 text-xs sm:text-sm rounded-sm border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-sm p-6 sm:p-8 max-w-2xl mx-auto relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              Let's create something amazing together. Get in touch and let's discuss your vision.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-sm font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;