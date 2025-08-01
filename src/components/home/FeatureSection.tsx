'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import {
  Users,
  Mic,
  Target,
  Accessibility,
  MessageCircle,
  Shield,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section } from '@/components/custom/Section';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const featureIcons = [Users, Mic, Target, Accessibility, MessageCircle, Shield];
const featureColors = [
  'bg-orange-100 text-orange-600',
  'bg-pink-100 text-pink-600',
  'bg-blue-100 text-blue-600',
  'bg-green-100 text-green-600',
  'bg-purple-100 text-purple-600',
  'bg-indigo-100 text-indigo-600',
];

export default function FeaturesSection() {
  const t = useTranslations('features');
  const common = useTranslations('common');

  return (
    <Section background="default" padding="xl">
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-3xl font-bold text-foreground">{t('title')}</h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* 메인 피처 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {Array.from({ length: 6 }).map((_, index) => {
          const Icon = featureIcons[index];
          const colorClass = featureColors[index];

          return (
            <Card
              key={index}
              className={cn(
                'card-hearty text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
                'border-2 hover:border-warm-orange-200'
              )}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div
                    className={cn(
                      'w-16 h-16 rounded-full flex items-center justify-center shadow-sm',
                      colorClass
                    )}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold">
                  {t(`items.${index}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {t(`items.${index}.description`)}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 이미지 영역과 추가 설명 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 이미지 영역 */}
        <div className="relative">
          <Image
            src="/images/feature_section.webp"
            alt={common('imageAlt')}
            width={500}
            height={350}
            className="max-w-full h-auto rounded-lg bg-primary-50 object-cover"
          />
        </div>

        {/* 추가 기능 하이라이트 */}
        <div className="space-y-6">
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => {
              const icons = [Mic, Users, Shield];
              const Icon = icons[index];
              const colors = ['orange', 'pink', 'green'];
              const color = colors[index];

              return (
                <div
                  key={index + 1}
                  className={`flex items-center gap-3 p-4 bg-${color}-50 rounded-xl`}
                >
                  <div
                    className={`w-8 h-8 bg-${color}-500 rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base">
                      {t(`items.${index + 1}.title`)}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t(`items.${index + 1}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
