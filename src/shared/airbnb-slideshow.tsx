'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import theme from '../theme';

interface SlideData {
  slide: number;
  message: string;
}

interface SlidesData {
  slides: SlideData[];
}

interface AirbnbSlideshowProps {
  speed?: number; // Speed in seconds
}

export function AirbnbSlideshow({ speed: initialSpeed = 3 }: AirbnbSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slidesData, setSlidesData] = useState<SlidesData | null>(null);
  const [currentMessage, setCurrentMessage] = useState('');
  const [speed, setSpeed] = useState(initialSpeed);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Load slides data
    fetch('/airbnb-demo-slides.json')
      .then(response => response.json())
      .then((data: SlidesData) => {
        setSlidesData(data);
        // Set initial message
        const firstSlide = data.slides.find(slide => slide.slide === 1);
        if (firstSlide) {
          setCurrentMessage(firstSlide.message);
        }
      });
  }, []);

  useEffect(() => {
    if (!slidesData) return;

    // Find message for current slide or use the last available message
    let messageToShow = currentMessage;
    const slideWithMessage = slidesData.slides.find(slide => slide.slide === currentSlide);
    
    if (slideWithMessage) {
      messageToShow = slideWithMessage.message;
    } else {
      // Find the last message before this slide
      const previousMessages = slidesData.slides.filter(slide => slide.slide < currentSlide);
      if (previousMessages.length > 0) {
        messageToShow = previousMessages[previousMessages.length - 1].message;
      }
    }
    
    setCurrentMessage(messageToShow);
  }, [currentSlide, slidesData, currentMessage]);

  useEffect(() => {
    // Auto-advance slides using the speed prop, but only if not paused
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev >= 19) return 1; // Loop back to start
        return prev + 1;
      });
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [speed, isPaused]);

  useEffect(() => {
    // Handle keyboard events
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        }
      } else if (event.key === ' ' || event.code === 'Space') {
        event.preventDefault();
        setIsPaused(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  const getImagePath = (slideNumber: number) => {
    const paddedNumber = slideNumber.toString().padStart(2, '0');
    return `/screenshots/airbnb-demo/${paddedNumber}.png`;
  };

  const renderControls = () => (
    <div className="text-center">
      <p className="hidden sm:flex text-base text-zinc-300 min-h-[3rem] items-center justify-center">
        {currentMessage}
      </p>
      
      {/* Speed Control - hidden on mobile */}
      <div className="hidden sm:flex items-center justify-center mt-3 space-x-3">
        <span className="text-sm text-zinc-400">Speed:</span>
        <span className="text-xs text-zinc-500">Slow</span>
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.1"
          value={5.5 - speed}
          onChange={(e) => setSpeed(5.5 - parseFloat(e.target.value))}
          className="w-24 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
        />
        <span className="text-xs text-zinc-500">Fast</span>
        <span className="text-sm text-zinc-300 min-w-[3rem]">{speed.toFixed(1)}s</span>
      </div>
      
      {/* Progress dots - smaller on mobile */}
      <div className="flex justify-center mt-2 space-x-1">
        {Array.from({ length: 19 }, (_, index) => (
          <div
            key={index + 1}
            className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-colors ${
              index + 1 === currentSlide ? theme.classes.accentBg : 'bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col space-y-1 sm:space-y-2">
        <div 
          className="relative overflow-hidden rounded-lg shadow-xl cursor-pointer h-40 sm:h-64 md:h-72 lg:h-80 xl:h-96 bg-zinc-800" 
          onClick={() => {
            if (isMobile) {
              setIsFullscreen(true);
            } else {
              setIsPaused(prev => !prev);
            }
          }}
          onTouchEnd={() => {
            if (isMobile) {
              setIsFullscreen(true);
            } else {
              setIsPaused(prev => !prev);
            }
          }}
        >
          <Image
            key={currentSlide}
            src={getImagePath(currentSlide)}
            alt={`Airbnb demo step ${currentSlide}`}
            width={800}
            height={600}
            className="object-contain w-full h-full"
            priority={currentSlide <= 3}
            unoptimized
            onError={() => console.error('Image failed to load:', getImagePath(currentSlide))}
          />
          <div className="hidden sm:block absolute top-2 right-2 bg-black bg-opacity-70 text-white px-3 py-2 rounded text-sm z-10 pointer-events-none">
            {isPaused ? 'Click to play' : 'Click to pause'}
          </div>
          <div className="hidden sm:block absolute top-2 left-2 bg-black bg-opacity-70 text-white px-3 py-2 rounded text-sm z-10 cursor-pointer"
               onClick={(e) => {
                 e.stopPropagation();
                 setIsFullscreen(true);
               }}
               onTouchEnd={(e) => {
                 e.stopPropagation();
                 setIsFullscreen(true);
               }}>
            🔍 Expand
          </div>
        </div>
        {renderControls()}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && mounted && createPortal(
        <div 
          className="fixed inset-0 bg-zinc-900"
          style={{ zIndex: 2147483647 }}
          onClick={() => setIsPaused(prev => !prev)}
          onTouchEnd={() => setIsPaused(prev => !prev)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
            className="absolute top-4 right-4 text-white text-2xl hover:text-zinc-300 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            style={{ zIndex: 2147483647 }}
          >
            ✕
          </button>
          
          <div className="w-full h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <div className={`relative ${isMobile ? 'rotate-90 w-[80vh] h-[50vw]' : ''}`}>
                <Image
                  key={currentSlide}
                  src={getImagePath(currentSlide)}
                  alt={`Airbnb demo step ${currentSlide}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto max-h-full object-contain"
                  unoptimized
                  priority
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded text-base z-10 pointer-events-none">
                  {isPaused ? 'Click to play' : 'Click to pause'}
                </div>
              </div>
            </div>
            
            <div 
              className="absolute bottom-0 left-0 right-0 bg-zinc-900 bg-opacity-90 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {renderControls()}
            </div>
          </div>
        </div>,
        document.body
      )}
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent-color);
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent-color);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
}