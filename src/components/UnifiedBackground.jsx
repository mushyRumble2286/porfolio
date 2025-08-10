const UnifiedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Main Black Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Animated Water-like Wave Effect */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(128, 128, 128, 0.1)" />
              <stop offset="50%" stopColor="rgba(169, 169, 169, 0.15)" />
              <stop offset="100%" stopColor="rgba(105, 105, 105, 0.1)" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(105, 105, 105, 0.08)" />
              <stop offset="50%" stopColor="rgba(128, 128, 128, 0.12)" />
              <stop offset="100%" stopColor="rgba(169, 169, 169, 0.08)" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(169, 169, 169, 0.06)" />
              <stop offset="50%" stopColor="rgba(105, 105, 105, 0.1)" />
              <stop offset="100%" stopColor="rgba(128, 128, 128, 0.06)" />
            </linearGradient>
          </defs>
          
          {/* Wave Layer 1 */}
          <path 
            d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z" 
            fill="url(#waveGradient1)"
            className="animate-wave-slow"
          />
          
          {/* Wave Layer 2 */}
          <path 
            d="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z" 
            fill="url(#waveGradient2)"
            className="animate-wave-medium"
          />
          
          {/* Wave Layer 3 */}
          <path 
            d="M0,600 C200,550 400,650 600,600 C800,550 1000,650 1200,600 L1200,800 L0,800 Z" 
            fill="url(#waveGradient3)"
            className="animate-wave-fast"
          />
        </svg>
      </div>
      
      {/* Subtle Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-gray-400/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gray-300/30 rounded-full animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-gray-500/15 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-gray-400/25 rounded-full animate-float-slow delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/5 w-1 h-1 bg-gray-300/20 rounded-full animate-float-medium delay-2000"></div>
        <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-gray-500/20 rounded-full animate-float-fast delay-3000"></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <style jsx>{`
        @keyframes wave-slow {
          0%, 100% { 
            d: path("M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z");
          }
          50% { 
            d: path("M0,450 C300,350 600,550 1200,450 L1200,800 L0,800 Z");
          }
        }
        
        @keyframes wave-medium {
          0%, 100% { 
            d: path("M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z");
          }
          50% { 
            d: path("M0,520 C400,420 800,620 1200,520 L1200,800 L0,800 Z");
          }
        }
        
        @keyframes wave-fast {
          0%, 100% { 
            d: path("M0,600 C200,550 400,650 600,600 C800,550 1000,650 1200,600 L1200,800 L0,800 Z");
          }
          50% { 
            d: path("M0,580 C200,530 400,630 600,580 C800,530 1000,630 1200,580 L1200,800 L0,800 Z");
          }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.4; }
          50% { transform: translateY(-10px) translateX(-5px); opacity: 0.3; }
          75% { transform: translateY(-30px) translateX(15px); opacity: 0.5; }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          33% { transform: translateY(-15px) translateX(-10px); opacity: 0.5; }
          66% { transform: translateY(-25px) translateX(8px); opacity: 0.4; }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.25; }
          50% { transform: translateY(-35px) translateX(-15px); opacity: 0.6; }
        }
        
        .animate-wave-slow {
          animation: wave-slow 8s ease-in-out infinite;
        }
        
        .animate-wave-medium {
          animation: wave-medium 6s ease-in-out infinite reverse;
        }
        
        .animate-wave-fast {
          animation: wave-fast 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default UnifiedBackground;