import { FC } from 'react';
import { Section } from '@/shared/section';

interface ComparisonProps {
  title: string;
  items: Array<{
    title: string;
    subtitle?: string;
    points: string[];
    variant?: 'negative' | 'positive';
  }>;
}

export const Comparison: FC<ComparisonProps> = ({ title, items }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
      <Section.Heading>
        {title}
      </Section.Heading>
      
      <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`border rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 ${
              item.variant === 'negative' 
                ? 'bg-zinc-800/30 border-zinc-600/30' 
                : 'bg-zinc-700/30 border-zinc-500/30'
            }`}
          >
            <Section.Subheading>{item.title}</Section.Subheading>
            {item.subtitle && (
              <p className="text-sm sm:text-base text-zinc-400 mb-3 sm:mb-4 md:mb-6">{item.subtitle}</p>
            )}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {item.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    item.variant === 'negative' ? 'bg-zinc-500' : 'bg-zinc-300'
                  }`}></div>
                  <span className="text-sm sm:text-base text-zinc-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};