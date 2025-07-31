import { ReactNode } from 'react';

interface SectionBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  animate?: boolean;
}

export function SectionBadge({ children, icon, animate = false }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
      {icon && (
        <div className={`w-2 h-2 bg-blue-500 rounded-full ${animate ? 'animate-pulse' : ''}`}>
          {icon}
        </div>
      )}
      <span className="text-white text-xs sm:text-sm font-medium">{children}</span>
    </div>
  );
}