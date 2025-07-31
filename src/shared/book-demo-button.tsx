'use client';

import { FC, useState } from 'react';

interface BookDemoButtonProps {
  onClick: () => void;
  theme: 'purple' | 'slate' | 'emerald' | 'teal';
  className?: string;
}

const themeConfig = {
  purple: {
    hoverColor: '#eab308', // YELLOW - true complementary to purple
    clickColor: '#ca8a04', 
    borderColor: '#facc15'
  },
  slate: {
    hoverColor: '#f97316', // ORANGE - complementary to blue/slate
    clickColor: '#ea580c', 
    borderColor: '#fb923c'
  },
  emerald: {
    hoverColor: '#e11d48', // RED - true complementary to green
    clickColor: '#be185d', 
    borderColor: '#f43f5e'
  },
  teal: {
    hoverColor: '#dc2626', // RED - complementary to teal/cyan
    clickColor: '#b91c1c', 
    borderColor: '#ef4444'
  }
};

// TRUE Color Wheel Complementary Pairs:
// Purple → Yellow
// Blue/Slate → Orange  
// Green/Emerald → Red
// Teal/Cyan → Red

export const BookDemoButton: FC<BookDemoButtonProps> = ({ onClick, theme, className = '' }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const config = themeConfig[theme] || themeConfig.purple; // Fallback to purple if theme not found

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 150);
    onClick();
  };

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPressed(false), 100);
  };

  const getButtonStyle = () => {
    if (isPressed) {
      return {
        backgroundColor: config.clickColor,
        borderColor: config.borderColor,
        transform: 'scale(0.95)',
        boxShadow: `0 25px 50px -12px ${config.hoverColor}60`
      };
    }
    if (isHovered) {
      return {
        backgroundColor: config.hoverColor,
        borderColor: config.borderColor,
        transform: 'scale(1.02)', 
        boxShadow: `0 25px 50px -12px ${config.hoverColor}60`
      };
    }
    return {};
  };

  return (
    <button 
      onClick={handlePress}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={getButtonStyle()}
      className={`relative px-12 py-6 font-bold rounded-2xl text-xl transition-all duration-150 border overflow-hidden bg-black/90 text-white backdrop-blur-sm border-white/20 ${className}`}
    >
      <span className="relative z-10">Book a Demo</span>
    </button>
  );
};