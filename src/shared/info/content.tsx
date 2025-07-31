import { FC, PropsWithChildren } from 'react';
import { Section } from '@/shared/section';

interface ContentProps extends PropsWithChildren {
  title?: string;
  maxWidth?: 'narrow' | 'medium' | 'wide' | 'full';
  className?: string;
}

export const Content: FC<ContentProps> = ({ 
  title, 
  children, 
  maxWidth = 'wide',
  className = '' 
}) => {
  const maxWidthClasses = {
    narrow: 'max-w-3xl',
    medium: 'max-w-4xl', 
    wide: 'max-w-6xl',
    full: 'max-w-7xl'
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-12 ${className}`}>
      {title && (
        <Section.Heading>
          {title}
        </Section.Heading>
      )}
      {children}
    </div>
  );
};