import { ReactNode } from 'react';

interface SectionIconProps {
  children?: ReactNode;
  type?: 'check' | 'x' | 'custom';
  color?: 'green' | 'red' | 'blue' | 'gray';
}

export function SectionIcon({ children, type = 'custom', color = 'gray' }: SectionIconProps) {
  const colorClasses = {
    green: 'text-green-400',
    red: 'text-red-400', 
    blue: 'text-blue-400',
    gray: 'text-gray-400'
  };
  
  const icons = {
    check: '✓',
    x: '✗',
    custom: children
  };
  
  return (
    <span className={`${colorClasses[color]} flex-shrink-0`}>
      {icons[type]}
    </span>
  );
}

export default SectionIcon;