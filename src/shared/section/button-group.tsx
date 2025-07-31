import { ReactNode, Children, cloneElement, isValidElement } from 'react';

interface SectionButtonGroupProps {
  children: ReactNode;
  direction?: 'row' | 'col';
  full?: boolean;
  gap?: 'sm' | 'md' | 'lg';
  justify?: 'start' | 'center' | 'end';
}

export function SectionButtonGroup({ children, direction = 'row', full = false, gap = 'md', justify = 'start' }: SectionButtonGroupProps) {
  const directionClasses = {
    row: "flex-col sm:flex-row",
    col: "flex-col"
  };
  
  const gapClasses = {
    sm: "gap-2 sm:gap-3",
    md: "gap-4 sm:gap-6", 
    lg: "gap-6 sm:gap-8"
  };
  
  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end"
  };
  
  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && full) {
      return cloneElement(child, { full: true } as { full?: boolean });
    }
    return child;
  });
  
  return (
    <div className={`flex ${directionClasses[direction]} ${gapClasses[gap]} ${justifyClasses[justify]}`}>
      {enhancedChildren}
    </div>
  );
}