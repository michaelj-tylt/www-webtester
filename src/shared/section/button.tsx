import { ReactNode } from 'react';

interface SectionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'purple' | 'blue' | 'green' | 'pink' | 'yellow' | 'teal';
  full?: boolean;
  className?: string;
}

export function SectionButton({ children, onClick, href, variant = 'primary', full = false, className }: SectionButtonProps) {

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25",
    secondary: "bg-gray-600 hover:bg-gray-700 hover:shadow-gray-500/25", 
    purple: "bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/25",
    blue: "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25",
    green: "bg-green-600 hover:bg-green-700 hover:shadow-green-500/25",
    pink: "bg-pink-600 hover:bg-pink-700 hover:shadow-pink-500/25",
    yellow: "bg-yellow-600 hover:bg-yellow-700 hover:shadow-yellow-500/25",
    teal: "bg-teal-600 hover:bg-teal-700 hover:shadow-teal-500/25"
  };
  
  const widthClass = full ? "flex-1 w-full" : "";
  
  const buttonContent = (
    <span className="relative z-30">{children}</span>
  );

  const buttonClasses = `${widthClass} px-6 sm:px-8 py-3 sm:py-4 ${variantClasses[variant]} text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg text-base sm:text-lg relative overflow-hidden ${className || ''}`;

  if (href && !onClick) {
    return (
      <a 
        href={href}
        className={buttonClasses}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={buttonClasses}
    >
      {buttonContent}
    </button>
  );
}