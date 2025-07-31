import { FC, PropsWithChildren } from 'react';

interface ScreenSectionProps extends PropsWithChildren {
  className?: string;
  [key: string]: unknown; // Allow additional props like data-section
}

export const ScreenSection: FC<ScreenSectionProps> = ({ children, className = '', ...props }) => {
  return (
    <section 
      className={`w-full h-screen flex flex-col justify-center items-center relative overflow-hidden snap-start snap-always ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
