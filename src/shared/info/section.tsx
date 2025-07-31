import { FC, PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
  background?: 'primary' | 'secondary' | 'tertiary';
  baseColor?: 'blue' | 'green' | 'purple' | 'yellow' | 'indigo';
}

export const Section: FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'primary',
  baseColor = 'blue'
}) => {
  const getBgClass = () => {
    if (baseColor === 'blue') {
      switch (background) {
        case 'primary':
          return 'bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800';
        case 'secondary':
          return 'bg-gradient-to-br from-blue-900 via-slate-900 to-gray-900';
        case 'tertiary':
          return 'bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900';
      }
    } else if (baseColor === 'green') {
      switch (background) {
        case 'primary':
          return 'bg-gradient-to-br from-zinc-900 via-green-950/30 to-zinc-900';
        case 'secondary':
          return 'bg-gradient-to-br from-zinc-800 via-green-950/20 to-zinc-800';
        case 'tertiary':
          return 'bg-gradient-to-br from-zinc-700 via-green-950/25 to-zinc-700';
      }
    } else if (baseColor === 'purple') {
      switch (background) {
        case 'primary':
          return 'bg-gradient-to-br from-black via-gray-950 to-black';
        case 'secondary':
          return 'bg-gradient-to-br from-purple-950 via-slate-950 to-gray-950';
        case 'tertiary':
          return 'bg-gradient-to-br from-gray-950 via-purple-950 to-slate-950';
      }
    } else if (baseColor === 'indigo') {
      switch (background) {
        case 'primary':
          return 'bg-gradient-to-br from-gray-950 via-indigo-950 to-slate-950';
        case 'secondary':
          return 'bg-gradient-to-br from-indigo-950 via-gray-950 to-zinc-950';
        case 'tertiary':
          return 'bg-gradient-to-br from-slate-950 via-indigo-950 to-gray-950';
      }
    }
    
    // Default fallback
    return 'bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800';
  };

  return (
    <section 
      className={`h-dvh snap-start flex items-center justify-center overflow-hidden ${getBgClass()} ${className}`}
    >
      <div className="w-full h-full flex items-center justify-center py-4 sm:py-8 md:py-12 overflow-y-auto">
        {children}
      </div>
    </section>
  );
};