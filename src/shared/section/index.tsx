import { ReactNode } from 'react';
import { SectionHeading } from './heading';
import { SectionSubheading } from './subheading';
import { SectionText } from './text';
import { SectionImage } from './image';
import { SectionList } from './list';
import { SectionBox } from './box';
import { SectionBadge } from './badge';
import { SectionButton } from './button';
import { SectionButtonGroup } from './button-group';
import { SectionVideo } from './video';
import { SectionCard } from './card';
import { SectionGrid } from './grid';
import { SectionIcon } from './icon';
import { SectionCode } from './code';

interface SectionProps {
  children: ReactNode;
  isHero?: boolean;
  id?: string;
  className?: string;
}

export function Section({ children, isHero, id, className }: SectionProps) {
  return (
    <section 
      id={id}
      className={`snap-start h-screen w-screen flex items-center justify-center relative overflow-hidden ${className || ''}`}
    >
      <div className={`relative z-30 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl text-left px-4 py-6 pb-8 sm:px-6 sm:py-8 sm:pb-10 md:px-8 md:py-10 md:pb-12 lg:px-10 lg:py-12 lg:pb-14 xl:px-12 xl:py-16 xl:pb-20 ${isHero ? 'hero-section' : ''}`}>
        {children}
      </div>
    </section>
  );
}

Section.Heading = SectionHeading;
Section.Subheading = SectionSubheading;
Section.Text = SectionText;
Section.Image = SectionImage;
Section.List = SectionList;
Section.Box = SectionBox;
Section.Badge = SectionBadge;
Section.Button = SectionButton;
Section.ButtonGroup = SectionButtonGroup;
Section.Video = SectionVideo;
Section.Card = SectionCard;
Section.Grid = SectionGrid;
Section.Icon = SectionIcon;
Section.Code = SectionCode;