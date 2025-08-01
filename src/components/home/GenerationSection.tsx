'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/custom/Section';
import { cn } from '@/lib/utils';

const generationGradients = [
  'from-orange-100 to-orange-200',
  'from-pink-100 to-pink-200',
  'from-green-100 to-green-200',
];

const generationAvatars = ['🌳', '🤝', '🌱'];

export default function GenerationsSection() {
  const t = useTranslations('generations');

  return (
    <Section background="warm" padding="xl">
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-3xl font-bold text-foreground">{t('title')}</h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, index) => {
          const gradientClass = generationGradients[index];
          const avatar = generationAvatars[index];

          return (
            <Card
              key={index}
              className={cn(
                'card-hearty text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
                'border-2 hover:border-warm-orange-200 overflow-hidden'
              )}
            >
              {/* 상단 그라데이션 헤더 */}
              <div
                className={cn(
                  'bg-gradient-to-r h-24 flex items-center justify-center',
                  gradientClass
                )}
              >
                <span className="text-4xl">{avatar}</span>
              </div>

              <CardHeader className="pb-4">
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="text-xs font-medium border-warm-orange-200 text-warm-orange-700"
                  >
                    {t(`items.${index}.ageGroup`)}
                  </Badge>
                  <CardTitle className="text-lg font-semibold">
                    {t(`items.${index}.role`)}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`items.${index}.description`)}
                </p>

                {/* 특징 목록 */}
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-left"
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">
                        {t(`items.${index}.features.${featureIndex}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 하단 이미지 영역 */}
      <div className="mt-16">
        <div className="bg-gradient-to-r from-warm-orange-50 via-pink-50 to-green-50 rounded-2xl p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-8">
              {/* 세대 간 소통을 나타내는 일러스트 */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👵</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
                  <div className="w-6 h-1 bg-orange-300 rounded-full"></div>
                  <div className="w-4 h-1 bg-orange-200 rounded-full"></div>
                </div>
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">💝</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-4 h-1 bg-green-200 rounded-full"></div>
                  <div className="w-6 h-1 bg-green-300 rounded-full"></div>
                  <div className="w-8 h-1 bg-green-400 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
