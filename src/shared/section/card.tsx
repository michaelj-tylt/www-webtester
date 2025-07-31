import { ReactNode } from 'react';

interface SectionCardProps {
  children: ReactNode;
  variant?: 'default' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function SectionCard({ children, variant = 'default', padding = 'md', className = '', onClick }: SectionCardProps) {
  const variantClasses = {
    default: "bg-zinc-800/30 border border-zinc-600/30",
    outlined: "border border-zinc-600/50"
  };
  
  const paddingClasses = {
    sm: "p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7",
    md: "p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8", 
    lg: "p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10"
  };
  
  return (
    <div 
      className={`${variantClasses[variant]} ${paddingClasses[padding]} rounded-lg w-full min-w-0 overflow-hidden space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}