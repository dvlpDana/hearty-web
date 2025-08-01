// src/components/custom/AnimatedElements.tsx
import React from 'react';
import { cn } from '@/lib/utils';

// 음성 웨이브 애니메이션
export function VoiceWave({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-end justify-center gap-1 h-16', className)}>
      {[20, 32, 48, 28, 24].map((height, i) => (
        <div
          key={i}
          className="w-2 bg-gradient-to-t from-warm-orange-500 to-warm-orange-300 rounded-full animate-wave"
          style={{
            height: `${height}px`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

// 하트 애니메이션
export function FloatingHearts({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative w-48 h-48 flex items-center justify-center',
        className
      )}
    >
      {[
        {
          emoji: '❤️',
          position: 'top-4 left-4',
          size: 'text-4xl',
          delay: '0s',
        },
        {
          emoji: '💖',
          position: 'bottom-4 right-4',
          size: 'text-3xl',
          delay: '1s',
        },
        {
          emoji: '💝',
          position: 'bottom-4 left-1/2 -translate-x-1/2',
          size: 'text-2xl',
          delay: '2s',
        },
      ].map((heart, i) => (
        <span
          key={i}
          className={cn('absolute animate-float', heart.position, heart.size)}
          style={{
            animationDelay: heart.delay,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}

// 하트비트 애니메이션
export function HeartBeat({ className }: { className?: string }) {
  return (
    <span className={cn('text-3xl animate-heartbeat', className)}>❤️</span>
  );
}
