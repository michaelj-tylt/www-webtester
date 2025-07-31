import { ReactNode } from 'react';

interface SectionTextProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function SectionText({ children, size = 'md' }: SectionTextProps) {
  const sizeClasses = {
    sm: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl",
    md: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
    lg: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
  };
  
  return <p className={`${sizeClasses[size]} text-gray-200 leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8`}>{children}</p>;
}