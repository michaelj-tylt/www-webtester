import { FC, PropsWithChildren } from 'react';

interface ScreenSectionProps extends PropsWithChildren {
  className?: string;
  [key: string]: unknown; // Allow additional props like data-section
}

export const ScreenSection: FC<ScreenSectionProps> = ({ children, className = '', ...props }) => {
  return (
    <section 
      className={`w-full min-h-screen flex flex-col justify-center items-center relative py-16 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
