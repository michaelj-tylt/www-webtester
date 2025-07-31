import { ReactNode } from 'react';

interface SectionListProps {
  children: ReactNode;
  variant?: 'bullet' | 'numbered' | 'none';
}

export function SectionList({ children, variant = 'bullet' }: SectionListProps) {
  const listClasses = {
    bullet: "list-disc list-inside",
    numbered: "list-decimal list-inside", 
    none: "list-none"
  };
  
  return (
    <ul className={`${listClasses[variant]} text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 space-y-1 sm:space-y-2 md:space-y-3`}>
      {children}
    </ul>
  );
}