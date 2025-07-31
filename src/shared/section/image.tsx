import Image from 'next/image';

interface SectionImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function SectionImage({ src, alt, width = 800, height = 600 }: SectionImageProps) {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={width}
      height={height}
      className="w-full h-auto rounded-lg"
    />
  );
}