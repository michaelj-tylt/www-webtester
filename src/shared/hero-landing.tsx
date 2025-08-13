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
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      {/* Text section */}
      <div className="flex-1 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0">
        <div className="space-y-8">
          {/* Main headline with gradient */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
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
            <p className="text-xl lg:text-2xl xl:text-3xl text-zinc-300 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
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
            <p className="text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0">{description}</p>
          )}
        </div>
      </div>
      
      {/* Demo section */}
      <div className={`flex-1 transition-all duration-700 ${showScreenshot ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
        <div className="relative">
          {/* Subtle glow effect behind demo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transform -rotate-1"></div>
          <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
            <AirbnbSlideshow speed={2} />
          </div>
        </div>
      </div>
    </div>
  );
}