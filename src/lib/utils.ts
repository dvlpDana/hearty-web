import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Hearty 브랜드 컬러 헬퍼 함수
export const heartyColors = {
  primary: 'bg-warm-orange-500 hover:bg-warm-orange-600',
  primaryText: 'text-warm-orange-500',
  accent: 'bg-soft-pink-500 hover:bg-soft-pink-600',
  accentText: 'text-soft-pink-500',
  warmBg: 'bg-warm-orange-50',
  gradient: 'bg-gradient-to-br from-warm-orange-500 to-warm-orange-300',
  gradientWarm: 'bg-gradient-to-br from-warm-orange-100 to-soft-pink-100',
  gradientHero: 'bg-gradient-to-br from-warm-orange-50 to-gray-50',
} as const;

// 시니어 친화적 텍스트 크기 헬퍼
export const seniorText = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base', // 시니어 권장 크기
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
} as const;
