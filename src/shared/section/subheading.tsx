import { ReactNode } from 'react';

interface SectionSubheadingProps {
  children: ReactNode;
}

export function SectionSubheading({ children }: SectionSubheadingProps) {
  return <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">{children}</h3>;
}