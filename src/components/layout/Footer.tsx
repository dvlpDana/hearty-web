// src/components/layout/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const brand = useTranslations('brand');

  return (
    <footer className="border-t bg-gradient-to-b from-orange-50/30 to-pink-50/20">
      <div className="mx-auto container max-w-7xl px-4 py-12 md:py-16">
        {/* 메인 콘텐츠 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 브랜드 섹션 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 로고 */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo_color.png"
                alt={brand('name')}
                width={100}
                height={40}
              />
            </div>

            {/* 브랜드 설명 */}
            <div className="space-y-4">
              <p className="text-xl font-medium text-gray-800 leading-relaxed">
                {brand('slogan')}
              </p>
              <p className="text-base text-gray-600 leading-relaxed max-w-lg">
                {t('description')}
              </p>

              {/* 데코레이션 요소 */}
              <div className="flex items-center space-x-2 pt-2">
                <span className="text-sm text-gray-400 font-medium">
                  {t('tagline')}
                </span>
              </div>
            </div>
          </div>

          {/* 서비스 링크 */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-gradient-to-r from-orange-400 to-pink-400 pb-3">
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                {t('links.service')}
              </span>
            </h4>
            <nav className="space-y-4">
              <Link
                href="/"
                className="group flex items-center text-base text-gray-600 hover:text-orange-500 transition-all duration-300 hover:translate-x-2"
              >
                <div className="w-2 h-2 rounded-full bg-orange-300 mr-3 group-hover:bg-orange-500 transition-colors duration-300"></div>
                {t('links.home')}
              </Link>
            </nav>
          </div>

          {/* 법적 문서 */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-gradient-to-r from-orange-400 to-pink-400 pb-3">
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                {t('links.legal')}
              </span>
            </h4>
            <nav className="space-y-4">
              <Link
                href="/terms"
                className="group flex items-center text-base text-gray-600 hover:text-orange-500 transition-all duration-300 hover:translate-x-2"
              >
                <div className="w-2 h-2 rounded-full bg-orange-300 mr-3 group-hover:bg-orange-500 transition-colors duration-300"></div>
                {t('links.terms')}
              </Link>
              <Link
                href="/privacy"
                className="group flex items-center text-base text-gray-600 hover:text-orange-500 transition-all duration-300 hover:translate-x-2"
              >
                <div className="w-2 h-2 rounded-full bg-orange-300 mr-3 group-hover:bg-orange-500 transition-colors duration-300"></div>
                {t('links.privacy')}
              </Link>
            </nav>
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div className="mt-12 pt-8 border-t border-gradient-to-r from-orange-200 via-pink-200 to-orange-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 flex items-center">
                {t('copyright')}
              </p>
              <p className="text-sm text-gray-400 italic">{t('motto')}</p>
            </div>
            <div className="text-right space-y-2">
              <p className="text-sm text-gray-500 font-medium">
                {t('contactInfo')}
              </p>
              <div className="flex items-center justify-end space-x-2">
                <p className="text-sm text-gray-400">{t('status')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
