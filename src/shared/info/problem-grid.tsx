import { FC } from 'react';
import { Section } from '@/shared/section';

interface ProblemGridProps {
  title: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export const ProblemGrid: FC<ProblemGridProps> = ({ title, items }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
      <Section.Heading>
        {title}
      </Section.Heading>
      
      <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8">
            <Section.Subheading>{item.title}</Section.Subheading>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};