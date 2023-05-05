import { GuessColor } from '../guess-color/GuessColor';
import { Rhymes } from '../rhymes/Rhymes';
import { AnimatedTabs } from '../animated-tabs/AnimatedTabs';
import { SkeletonCard } from '../skeleton/SkeletonCard';

export const Challenges = [
  { name: 'Guess Color', path: 'guess-color', element: <GuessColor /> },
  { name: 'Rhymes', path: 'rhymes', element: <Rhymes /> },
  { name: 'Animated Tabs', path: 'animated-tabs', element: <AnimatedTabs /> },
  { name: 'Skeleton', path: 'skeleton', element: <SkeletonCard /> },
];
