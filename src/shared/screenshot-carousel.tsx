'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { Section } from '@/shared/section';

interface ScreenshotCarouselProps {
  className?: string;
}

export const ScreenshotCarousel: FC<ScreenshotCarouselProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const screenshots = [
    {
      src: '/screenshots/1-describe-tasks-in-plain-english.png',
      alt: 'Describe Tasks in Plain English',
      title: 'Describe Tasks in Plain English'
    },
    {
      src: '/screenshots/2-builtin-task-runner.png',
      alt: 'Built-in Task Runner',
      title: 'Built-in Task Runner'
    },
    {
      src: '/screenshots/3-agent-is-starting.png',
      alt: 'Agent is Starting',
      title: 'Agent is Starting'
    },
    {
      src: '/screenshots/4-it-adapts-on-its-own.png',
      alt: 'It Adapts on Its Own',
      title: 'It Adapts on Its Own'
    },
    {
      src: '/screenshots/5-task-completes-with-pass-fail.png',
      alt: 'Task Completes with Pass/Fail',
      title: 'Task Completes with Pass/Fail'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [screenshots.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <div className={`relative w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center ${className}`}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-purple-900/40 backdrop-blur-sm border border-white/10 shadow-2xl w-full aspect-[16/9]">
        {/* Screenshots */}
        <div className="relative w-full h-full">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-contain object-center"
                priority={index === 0}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          ))}
          
          {/* Navigation Arrows inside screenshot container */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous screenshot"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next screenshot"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Title and Dots inside screenshot container */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <Section.Subheading>
              {screenshots[currentIndex].title}
            </Section.Subheading>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-xl blur-xl -z-10"></div>
      </div>
    </div>
  );
};