import React, { useEffect, useState } from 'react';

const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Curtain opening animation duration: 4 seconds
    const curtainTimer = setTimeout(() => {
      setShowText(true);
      // Text fade-in and glow: 2-3 seconds
      setTimeout(() => {
        onComplete();
      }, 3000);
    }, 4000);

    return () => clearTimeout(curtainTimer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-950 to-black overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        {/* Nebula Effects */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/30 via-blue-500/30 to-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/25 via-blue-500/25 to-indigo-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/25 via-blue-400/25 to-blue-300/25 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Left Curtain */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-[#0B1A3E] to-[#0D1F4A] animate-curtain-left"
        style={{
          background: 'linear-gradient(90deg, #0B1A3E 0%, #0D1F4A 100%)',
          boxShadow: 'inset 0 0 50px rgba(0, 191, 255, 0.3)',
        }}
      >
        {/* Mosaic Door Pattern on left curtain */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 border border-cyan-400/20"
              style={{
                left: `${(i % 5) * 20}%`,
                top: `${Math.floor(i / 5) * 20}%`,
                background: `linear-gradient(45deg, rgba(0, 191, 255, 0.1) 0%, rgba(0, 191, 255, 0.05) 50%, rgba(0, 191, 255, 0.1) 100%)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        {/* Lock on left curtain */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 animate-lock-appear z-10">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-yellow-300 shadow-lg">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-4 bg-yellow-800 rounded-sm"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-2 bg-yellow-600 rounded-full mt-1"></div>
          </div>
        </div>
      </div>

      {/* Right Curtain */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#0B1A3E] to-[#0D1F4A] animate-curtain-right"
        style={{
          background: 'linear-gradient(270deg, #0B1A3E 0%, #0D1F4A 100%)',
          boxShadow: 'inset 0 0 50px rgba(0, 191, 255, 0.3)',
        }}
      >
        {/* Mosaic Door Pattern on right curtain */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 border border-cyan-400/20"
              style={{
                right: `${(i % 5) * 20}%`,
                top: `${Math.floor(i / 5) * 20}%`,
                background: `linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(0, 191, 255, 0.05) 50%, rgba(0, 191, 255, 0.1) 100%)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        {/* Lock on right curtain */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 animate-lock-appear z-10">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-yellow-300 shadow-lg">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-4 bg-yellow-800 rounded-sm"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-2 bg-yellow-600 rounded-full mt-1"></div>
          </div>
        </div>
      </div>

      {/* Welcome Text */}
      {showText && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-text-fade-in">
            Welcome to My Portfolio
            <div className="absolute inset-0 text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-glow opacity-0 animate-text-glow">
              Welcome to My Portfolio
            </div>
          </h1>
        </div>
      )}

      <style>{`
        @keyframes curtain-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes curtain-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        @keyframes text-fade-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes text-glow {
          0% { opacity: 0; filter: blur(10px); }
          50% { opacity: 0.5; filter: blur(5px); }
          100% { opacity: 1; filter: blur(0px); }
        }
        @keyframes lock-appear {
          0% { opacity: 0; transform: scale(0.5) rotate(-180deg); }
          50% { opacity: 0.7; transform: scale(1.2) rotate(0deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .animate-curtain-left {
          animation: curtain-left 4s ease-in-out forwards;
        }
        .animate-curtain-right {
          animation: curtain-right 4s ease-in-out forwards;
        }
        .animate-text-fade-in {
          animation: text-fade-in 1s ease-out forwards;
        }
        .animate-text-glow {
          animation: text-glow 2s ease-out 1s forwards;
        }
        .animate-lock-appear {
          animation: lock-appear 2s ease-out 1s forwards;
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
