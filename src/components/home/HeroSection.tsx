'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/custom/Section';
import Image from 'next/image';
import AppStoreIcon from '@public/icons/app-store.svg';
import PlayStoreIcon from '@public/icons/play-store.svg';

export default function HeroSection() {
  const t = useTranslations('hero');
  const common = useTranslations('common');

  return (
    <Section background="gradient" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 텍스트 콘텐츠 */}
        <div className="space-y-8 text-center lg:text-left">
          {/* 상단 배지 */}
          <div className="flex justify-center lg:justify-start">
            <Badge
              variant="secondary"
              className="bg-warm-orange-100 text-warm-orange-800 border-warm-orange-200 px-4 py-2 text-sm font-medium"
            >
              🎙️ {common('anonymous')} • {common('safe')} • {common('free')}
            </Badge>
          </div>

          {/* 메인 타이틀 */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {t('title')
                .split('\n')
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < t('title').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('subtitle')
                .split('\n')
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < t('subtitle').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
            </p>
          </div>

          {/* CTA 버튼들 */}
          <div className="space-y-6">
            {/* 앱 스토어 배지 */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="#"
                className="transition-transform hover:scale-105 inline-block"
              >
                <div className="bg-black rounded-md px-4 py-2 min-w-[140px] h-12 flex items-center justify-center gap-2">
                  <AppStoreIcon className="w-6 h-6" />
                  <span className="text-white font-medium">
                    {t('appStore')}
                  </span>
                </div>
              </Link>
              <Link
                href="#"
                className="transition-transform hover:scale-105 inline-block"
              >
                <div className="bg-black rounded-md px-4 py-2 min-w-[140px] h-12 flex items-center justify-center gap-2">
                  <PlayStoreIcon className="w-6 h-6" />
                  <span className="text-white font-medium">
                    {t('googlePlay')}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 비주얼 콘텐츠 - 이미지 영역 */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/hero_section.webp"
            alt={common('imageAlt')}
            width={500}
            height={350}
            className="max-w-full h-auto rounded-lg bg-primary-50 object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
