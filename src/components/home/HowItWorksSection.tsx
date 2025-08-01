'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, UserPlus, Mic, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/custom/Section';
import { cn, heartyColors } from '@/lib/utils';

const stepIcons = [UserPlus, Mic, MessageCircle];
const stepColors = ['bg-orange-500', 'bg-pink-500', 'bg-green-500'];

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks');

  return (
    <Section background="warm" padding="xl">
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-3xl font-bold text-foreground">{t('title')}</h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {Array.from({ length: 3 }).map((_, index) => {
          const Icon = stepIcons[index];
          const colorClass = stepColors[index];

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center space-y-6 max-w-xs">
                {/* 단계 아이콘과 번호 */}
                <div className="relative">
                  <div
                    className={cn(
                      'w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg',
                      colorClass
                    )}
                  >
                    <Icon className="h-10 w-10" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                    <span className="text-sm font-bold text-gray-700">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* 단계 내용 */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {t(`steps.${index}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`steps.${index}.description`)}
                  </p>
                </div>
              </div>

              {/* 화살표 (마지막 단계 제외) */}
              {index < 2 && (
                <ArrowRight className="hidden lg:block h-8 w-8 text-warm-orange-300 flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </Section>
  );
}
