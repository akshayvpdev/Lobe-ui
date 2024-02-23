import { Features, FeaturesProps } from '@lobehub/ui';
import { MoonStar, Palette, Zap } from 'lucide-react';

const items= [
  {
    description:
      'Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.',
    icon: Palette,
    title: 'Themeable',
  },
  {
    description:
      'voids unnecessary styles props at runtime, making it more performant than other UI libraries.',
    icon: Zap,
    title: 'Fast',
  },
  {
    description:
      'Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.',
    icon: MoonStar,
    title: 'Light & Dark UI',
  },
];

export default function CardBox(){
  return(
    <div className="" style={{height:'150px'}}>
      <h2 style={{marginBottom:'30px'}}>Recent Submit</h2>
          <Features  maxWidth={700} items={items} />;
    </div>

  )
};
