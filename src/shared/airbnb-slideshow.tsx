'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

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

export function AirbnbSlideshow({ speed: initialSpeed = 2 }: AirbnbSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slidesData, setSlidesData] = useState<SlidesData | null>(null);
  const [currentMessage, setCurrentMessage] = useState('');
  const [speed, setSpeed] = useState(initialSpeed);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    // Auto-advance slides using the speed prop
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev >= 19) return 1; // Loop back to start
        return prev + 1;
      });
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    // Handle escape key for fullscreen
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyDown);
    }

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
      <p className="text-base text-zinc-300 min-h-[3rem] flex items-center justify-center">
        {currentMessage}
      </p>
      
      {/* Speed Control */}
      <div className="flex items-center justify-center mt-3 space-x-3">
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
      
      <div className="flex justify-center mt-2 space-x-1">
        {Array.from({ length: 19 }, (_, index) => (
          <div
            key={index + 1}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index + 1 === currentSlide ? 'bg-blue-400' : 'bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col space-y-4">
        <div 
          className="relative overflow-hidden rounded-lg shadow-xl cursor-pointer h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 bg-zinc-800" 
          onClick={() => setIsFullscreen(true)}
        >
          <Image
            key={currentSlide}
            src={getImagePath(currentSlide)}
            alt={`Airbnb demo step ${currentSlide}`}
            width={800}
            height={600}
            className="object-contain w-full h-full hover:scale-105 transition-transform"
            priority={currentSlide <= 3}
            unoptimized
            onError={() => console.error('Image failed to load:', getImagePath(currentSlide))}
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            Click to expand
          </div>
        </div>
        {renderControls()}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && mounted && createPortal(
        <div 
          className="fixed inset-0 bg-zinc-900"
          style={{ zIndex: 2147483647 }}
          onClick={() => setIsFullscreen(false)}
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
          background: #60a5fa;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #60a5fa;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
}