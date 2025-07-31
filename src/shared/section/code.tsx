import { ReactNode } from 'react';

interface SectionCodeProps {
  children: ReactNode;
}

export function SectionCode({ children }: SectionCodeProps) {
  return (
    <div className="backdrop-blur-md bg-white/5 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 border border-white/10 rounded-lg">
      <div className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-300 font-mono">
        {children}
      </div>
    </div>
  );
}