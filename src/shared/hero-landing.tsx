import { Section } from "@/shared/section";
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

export function Hero({ primaryText, secondaryText, tertiaryText, description, containerRef }: HeroProps) {
  const [showScreenshot, setShowScreenshot] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;
      const shouldShow = scrollTop < viewportHeight * 0.8;
      
      if (shouldShow !== showScreenshot) {
        setShowScreenshot(shouldShow);
        
        if (shouldShow && videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef, showScreenshot]);

  return (
    <>
      {/* Text section */}
      <div className="fixed top-0 left-0 right-0 z-20 flex items-end md:items-center justify-center px-8 h-[50vh] md:h-[50vh]">
        <div className="max-w-xs md:max-w-2xl mx-auto text-center pb-4 md:pb-0">
          <div className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-8 md:mb-6 leading-tight font-bold">
            {primaryText}
          </div>
          <div className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-white mb-8 md:mb-6 leading-tight font-bold">
            {secondaryText}
            {tertiaryText && (
              <>
                <br />
                {tertiaryText}
              </>
            )}
          </div>
          {description && (
            <Section.Text size="sm">{description}</Section.Text>
          )}
        </div>
      </div>
      
      {/* Video section */}
      <div className={`fixed bottom-0 left-0 right-0 z-30 transition-opacity duration-500 h-[50vh] md:h-[50vh] ${showScreenshot ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative overflow-hidden h-full flex items-center justify-center px-4 md:px-16">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="object-contain w-full h-full"
          >
            <source src="/slideshow.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}