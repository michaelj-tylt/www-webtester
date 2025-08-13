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
      className={`w-full flex items-center justify-center relative z-40 ${className || ''}`}
    >
      <div className={`relative z-40 w-full max-w-7xl mx-auto text-left px-6 lg:px-8 ${isHero ? 'hero-section' : ''}`}>
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