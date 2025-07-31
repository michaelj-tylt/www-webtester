'use client';
import { useState } from 'react';
import facts from './facts.json';

interface DemoButtonProps {
  theme: keyof typeof facts.themes;
  children?: string;
  className?: string;
}

export function DemoButton({ theme, children = 'Book your demo', className }: DemoButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const themeData = facts.themes[theme];
  const primaryColor = themeData.primary;

  const getButtonClasses = () => {
    switch (primaryColor) {
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25';
      case 'purple':
        return 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/25';
      case 'green':
        return 'bg-green-600 hover:bg-green-700 hover:shadow-green-500/25';
      default:
        return 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25';
    }
  };

  return (
    <button 
      onClick={() => {
        // Just log for now - no modal functionality
        console.log('DemoButton clicked!');
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 ${getButtonClasses()} text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg text-base sm:text-lg ${className || ''}`}
    >
      <span className="relative z-20">{children}</span>
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out z-10"
        style={{
          background: 'linear-gradient(-30deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
          width: '300px',
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
        }}
      />
    </button>
  );
}