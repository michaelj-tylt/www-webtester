import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  hero?: boolean;
  card?: boolean;
  noAnimation?: boolean;
  size?: 'xl' | 'lg' | 'md' | 'sm';
}

export function SectionHeading({ children, hero = false, card = false, size }: SectionHeadingProps) {
  let textSize;
  
  if (size) {
    switch (size) {
      case 'xl':
        textSize = "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl";
        break;
      case 'lg':
        textSize = "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl";
        break;
      case 'md':
        textSize = "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl";
        break;
      case 'sm':
        textSize = "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl";
        break;
    }
  } else if (hero) {
    textSize = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl";
  } else if (card) {
    textSize = "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl";
  } else {
    textSize = "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl";
  }
  

  // Temporarily disable SplitText to fix scroll issues
  return <div className={`${textSize} text-white mb-8 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-tight font-bold text-center`} style={{ fontFamily: 'Oswald, ui-sans-serif, system-ui, sans-serif' }}>{children}</div>;
}