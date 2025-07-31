import { FC, PropsWithChildren } from 'react';
import { Section } from '@/shared/section';

interface HeroProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Hero: FC<HeroProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center ${className}`}>
      <Section.Heading hero>
        {title}
      </Section.Heading>
      
      {subtitle && (
        <Section.Subheading>
          {subtitle}
        </Section.Subheading>
      )}
      
      {children}
    </div>
  );
};