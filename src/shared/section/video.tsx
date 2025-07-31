import { ReactNode } from 'react';

interface SectionVideoProps {
  src?: string;
  placeholder?: ReactNode;
}

export function SectionVideo({ src, placeholder }: SectionVideoProps) {
  if (src) {
    return (
      <video 
        src={src} 
        controls 
        className="w-full h-auto rounded-lg"
      />
    );
  }
  
  return (
    <div className="w-full aspect-video bg-zinc-700 rounded-lg flex items-center justify-center">
      <div className="text-gray-400 text-sm sm:text-base">
        {placeholder || "Video Placeholder"}
      </div>
    </div>
  );
}