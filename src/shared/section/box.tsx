import { ReactNode } from 'react';

interface SectionBoxProps {
  children: ReactNode;
  direction?: 'row' | 'col';
  gap?: 'sm' | 'md' | 'lg';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'stretch';
}

export function SectionBox({ children, direction = 'col', gap = 'md', justify = 'start', align = 'start' }: SectionBoxProps) {
  const directionClasses = {
    row: "flex-row",
    col: "flex-col"
  };
  
  const gapClasses = {
    sm: "gap-2 sm:gap-4",
    md: "gap-4 sm:gap-6 md:gap-8",
    lg: "gap-6 sm:gap-8 md:gap-12 lg:gap-16"
  };
  
  const justifyClasses = {
    start: "justify-start",
    center: "justify-center", 
    end: "justify-end",
    between: "justify-between",
    around: "justify-around"
  };
  
  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end", 
    stretch: "items-stretch"
  };
  
  return (
    <div className={`flex ${directionClasses[direction]} ${gapClasses[gap]} ${justifyClasses[justify]} ${alignClasses[align]} w-full`}>
      {children}
    </div>
  );
}