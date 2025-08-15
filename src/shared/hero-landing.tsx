import { AirbnbSlideshow } from "@/shared/airbnb-slideshow";
// import { DemoButton } from "@/shared/demo-button";
// import Image from "next/image";
import { useEffect, useState, RefObject, useRef } from "react";
import theme from '../theme';

interface HeroProps {
  primaryText: string;
  secondaryText: string;
  tertiaryText?: string;
  description: string;
  audience: 'enterprise' | 'small-business' | 'professionals';
  containerRef: RefObject<HTMLDivElement | null>;
}

export function Hero({ primaryText, secondaryText, tertiaryText, description }: Omit<HeroProps, 'containerRef'>) {
  const [showScreenshot, setShowScreenshot] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const shouldShow = scrollTop < viewportHeight * 0.8;
      
      if (shouldShow !== showScreenshot) {
        setShowScreenshot(shouldShow);
        
        if (shouldShow && videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScreenshot]);

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center w-full">
      {/* Text section */}
      <div className="flex-1 lg:pr-12 text-left mb-8 lg:mb-0">
        <div className="space-y-6 sm:space-y-8 lg:space-y-8">
          {/* Main headline with gradient */}
          <h1 className="section-heading">
            <span className="section-gradient-primary">
              {primaryText.split(' ').slice(0, 2).join(' ')}
            </span>
            <br />
            <span className="section-gradient-secondary">
              {primaryText.split(' ').slice(2).join(' ')}
            </span>
          </h1>
          
          {/* Subtitle with elegant styling */}
          <div className="relative">
            <p className="section-subheading">
              {secondaryText}
              {tertiaryText && (
                <>
                  <br />
                  <span className={`${theme.classes.accent}`}>{tertiaryText}</span>
                </>
              )}
            </p>
            {/* Subtle accent line */}
            <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.classes.gradient} rounded-full opacity-60 hidden lg:block`}></div>
          </div>
          
          {description && (
            <p className="section-text">{description}</p>
          )}
        </div>
      </div>
      
      {/* Demo section */}
      <div className={`flex-1 w-full transition-all duration-700 ${showScreenshot ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
        <div className="relative w-full">
          {/* Subtle glow effect behind demo - hidden on mobile */}
          <div className={`hidden sm:block absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform -rotate-1`}></div>
          <div className="relative sm:bg-gradient-to-br sm:from-zinc-900/50 sm:to-zinc-800/30 sm:rounded-2xl sm:backdrop-blur-sm sm:border sm:border-zinc-700/50">
            <AirbnbSlideshow speed={3} />
          </div>
        </div>
      </div>
    </div>
  );
}