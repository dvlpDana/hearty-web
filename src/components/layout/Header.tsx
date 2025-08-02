// src/components/layout/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: t('home') },
    { href: '/terms', label: t('terms') },
    { href: '/privacy', label: t('privacy') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-warm-gray-200 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="mx-auto container max-w-7xl">
        <div className="flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          {/* 로고 영역 */}
          <Link
            href="/"
            className="flex items-center space-x-3 group hover:opacity-90 transition-opacity duration-200"
          >
            <div className="relative">
              <Image
                src="/images/logo_color.png"
                alt="Hearty 로고"
                width={100}
                height={40}
              />
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex space-x-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-lg font-medium rounded-lg transition-all duration-200',
                      'text-warm-gray-700 hover:text-warm-orange-600 hover:bg-warm-orange-50',
                      'focus:outline-none focus:ring-2 focus:ring-warm-orange-200 focus:ring-offset-2'
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* 우측 액션 영역 */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* 모바일 메뉴 */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-2 text-warm-gray-700 hover:text-warm-orange-600 hover:bg-warm-orange-50"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t('menu')}</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-72 bg-white border-l border-warm-gray-200"
              >
                <div className="flex flex-col h-full">
                  {/* 모바일 헤더 */}
                  <div className="flex items-center justify-between pb-6 border-b border-warm-gray-100">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/images/logo_color.png"
                        alt="Hearty 로고"
                        width={80}
                        height={25}
                      />
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="p-2 text-warm-gray-500 hover:text-warm-gray-700"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* 모바일 네비게이션 */}
                  <nav className="flex-1 py-6">
                    <ul className="space-y-2">
                      {navigationItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              'flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200',
                              'text-warm-gray-700 hover:text-warm-orange-600 hover:bg-warm-orange-50',
                              'focus:outline-none focus:ring-2 focus:ring-warm-orange-200 focus:ring-inset'
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
