import React, { useEffect, useState } from 'react';
import './IntroAnimation.css';

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
        {/* Nebula Effects */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/30 via-blue-500/30 to-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/25 via-blue-500/25 to-indigo-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/25 via-blue-400/25 to-blue-300/25 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Left Theater Door - Cinematic Style */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 animate-curtain-left"
        style={{
          background: `
            linear-gradient(135deg, #1e293b 0%, #0f172a 30%, #1e293b 70%, #0f172a 100%),
            radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
          `,
          boxShadow: `
            inset 0 0 100px rgba(6, 182, 212, 0.1),
            inset -20px 0 40px rgba(0, 0, 0, 0.3),
            0 0 100px rgba(6, 182, 212, 0.2),
            -10px 0 30px rgba(0, 0, 0, 0.5)
          `,
          transform: 'perspective(1000px) rotateY(5deg)',
          transformOrigin: 'left center',
        }}
      >
        {/* BlueSpace Door Texture */}
        <div className="absolute inset-0 opacity-80">
          {/* Blue Grain Pattern */}
          <div className="absolute inset-0" style={{
            background: `
              repeating-linear-gradient(
                45deg,
                rgba(15, 23, 42, 0.4) 0px,
                rgba(30, 58, 138, 0.5) 2px,
                rgba(15, 23, 42, 0.4) 4px,
                rgba(59, 130, 246, 0.6) 6px,
                rgba(15, 23, 42, 0.4) 8px
              ),
              linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 165, 233, 0.2) 50%, rgba(6, 182, 212, 0.1) 100%)
            `,
            boxShadow: 'inset 0 0 50px rgba(15, 23, 42, 0.4)',
          }}></div>

          {/* Cyan Highlights */}
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 30%, transparent 70%, rgba(255, 255, 255, 0.05) 100%),
              radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
            `,
          }}></div>
        </div>
        {/* Glowing Door Frame */}
        <div className="absolute inset-2 border-2 border-white/40 animate-glow-pulse"
             style={{ boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}>
        </div>
        {/* Classic Keyhole Lock on left curtain */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 animate-lock-appear z-10">
          <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-yellow-400 flex items-center justify-center shadow-lg relative">
            <div className="relative">
              <div className="w-0.5 h-3 bg-yellow-700 rounded-sm"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Theater Door - Cinematic Style */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 animate-curtain-right"
        style={{
          background: `
            linear-gradient(225deg, #1e293b 0%, #0f172a 30%, #1e293b 70%, #0f172a 100%),
            radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
          `,
          boxShadow: `
            inset 0 0 100px rgba(6, 182, 212, 0.1),
            inset 20px 0 40px rgba(0, 0, 0, 0.3),
            0 0 100px rgba(6, 182, 212, 0.2),
            10px 0 30px rgba(0, 0, 0, 0.5)
          `,
          transform: 'perspective(1000px) rotateY(-5deg)',
          transformOrigin: 'right center',
        }}
      >
        {/* BlueSpace Door Texture */}
        <div className="absolute inset-0 opacity-80">
          {/* Blue Grain Pattern */}
          <div className="absolute inset-0" style={{
            background: `
              repeating-linear-gradient(
                135deg,
                rgba(15, 23, 42, 0.4) 0px,
                rgba(30, 58, 138, 0.5) 2px,
                rgba(15, 23, 42, 0.4) 4px,
                rgba(59, 130, 246, 0.6) 6px,
                rgba(15, 23, 42, 0.4) 8px
              ),
              linear-gradient(225deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 165, 233, 0.2) 50%, rgba(6, 182, 212, 0.1) 100%)
            `,
            boxShadow: 'inset 0 0 50px rgba(15, 23, 42, 0.4)',
          }}></div>

          {/* Cyan Highlights */}
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(225deg, rgba(255, 255, 255, 0.1) 0%, transparent 30%, transparent 70%, rgba(255, 255, 255, 0.05) 100%),
              radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
            `,
          }}></div>
        </div>
        {/* Glowing Door Frame */}
        <div className="absolute inset-2 border-2 border-white/40 animate-glow-pulse"
             style={{ boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}>
        </div>
        {/* Classic Keyhole Lock on right curtain */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 animate-lock-appear z-10">
          <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-yellow-400 flex items-center justify-center shadow-lg relative">
            <div className="relative">
              <div className="w-0.5 h-3 bg-yellow-700 rounded-sm"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Text */}
      {showText && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white animate-text-fade-in relative z-10 animate-text-shimmer"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  textShadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.2)',
                  background: 'linear-gradient(45deg, #ffffff, #e0f2fe, #bae6fd, #ffffff)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.3))'
                }}>
              Welcome to My Portfolio
            </h1>
            <div className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-glow opacity-0 animate-text-glow"
                 style={{
                   fontFamily: "'Dancing Script', cursive",
                   textShadow: '0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.6), 0 0 90px rgba(6, 182, 212, 0.4)',
                   filter: 'blur(0px)'
                 }}>
              Welcome to My Portfolio
            </div>
            {/* Additional glow layers for more beauty */}
            <div className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cyan-300 animate-text-glow opacity-0"
                 style={{
                   fontFamily: "'Dancing Script', cursive",
                   textShadow: '0 0 40px rgba(6, 182, 212, 1), 0 0 80px rgba(6, 182, 212, 0.8), 0 0 120px rgba(6, 182, 212, 0.6)',
                   animationDelay: '0.5s',
                   filter: 'blur(1px)'
                 }}>
              Welcome to My Portfolio
            </div>
            <div className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-200 animate-text-glow opacity-0"
                 style={{
                   fontFamily: "'Dancing Script', cursive",
                   textShadow: '0 0 50px rgba(59, 130, 246, 0.8), 0 0 100px rgba(59, 130, 246, 0.6), 0 0 150px rgba(59, 130, 246, 0.4)',
                   animationDelay: '1s',
                   filter: 'blur(2px)'
                 }}>
              Welcome to My Portfolio
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroAnimation;
