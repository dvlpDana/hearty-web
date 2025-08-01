import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'warm' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const backgroundVariants = {
  default: 'bg-white',
  warm: 'bg-warm-orange-50',
  gradient: 'bg-gradient-to-br from-warm-orange-50 via-white to-soft-pink-50',
};

const paddingVariants = {
  none: 'py-0',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
};

export function Section({
  children,
  className,
  background = 'default',
  padding = 'lg',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full',
        backgroundVariants[background],
        paddingVariants[padding],
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">{children}</div>
    </section>
  );
}
