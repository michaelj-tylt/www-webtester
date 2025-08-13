import { AirbnbSlideshow } from "@/shared/airbnb-slideshow";
// import { DemoButton } from "@/shared/demo-button";
// import Image from "next/image";
import { useEffect, useState, RefObject, useRef } from "react";

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
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-20">
      {/* Text section */}
      <div className="flex-1 lg:pr-12 text-left mb-12 sm:mb-16 lg:mb-0">
        <div className="space-y-6 sm:space-y-8 lg:space-y-8">
          {/* Main headline with gradient */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] sm:leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              {primaryText.split(' ').slice(0, 2).join(' ')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              {primaryText.split(' ').slice(2).join(' ')}
            </span>
          </h1>
          
          {/* Subtitle with elegant styling */}
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-300 leading-relaxed font-light max-w-2xl">
              {secondaryText}
              {tertiaryText && (
                <>
                  <br />
                  <span className="text-blue-200">{tertiaryText}</span>
                </>
              )}
            </p>
            {/* Subtle accent line */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-60 hidden lg:block"></div>
          </div>
          
          {description && (
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl">{description}</p>
          )}
        </div>
      </div>
      
      {/* Demo section */}
      <div className={`flex-1 w-full transition-all duration-700 ${showScreenshot ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
        <div className="relative w-full sm:max-w-lg sm:mx-auto lg:max-w-none">
          {/* Subtle glow effect behind demo - hidden on mobile */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transform -rotate-1"></div>
          <div className="relative sm:bg-gradient-to-br sm:from-zinc-900/50 sm:to-zinc-800/30 sm:rounded-2xl p-0 sm:p-6 sm:backdrop-blur-sm sm:border sm:border-zinc-700/50">
            <AirbnbSlideshow speed={3} />
          </div>
        </div>
      </div>
    </div>
  );
}