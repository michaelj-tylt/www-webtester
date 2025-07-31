import { ReactNode } from 'react';

interface SectionGridProps {
  children: ReactNode;
  cols?: '1' | '2' | '3' | '4';
  gap?: 'sm' | 'md' | 'lg';
  responsive?: boolean;
}

export function SectionGrid({ children, cols = '2', gap = 'md', responsive = true }: SectionGridProps) {
  const baseGridClasses = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-2', 
    '3': 'grid-cols-3',
    '4': 'grid-cols-4'
  };
  
  const responsiveGridClasses = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3', 
    '4': 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };
  
  const gapClasses = {
    sm: 'gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6',
    md: 'gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8',
    lg: 'gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-10'
  };
  
  const gridClasses = responsive ? responsiveGridClasses[cols] : baseGridClasses[cols];
  
  return (
    <div className={`grid ${gridClasses} ${gapClasses[gap]} mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 w-full max-w-full overflow-hidden`}>
      {children}
    </div>
  );
}