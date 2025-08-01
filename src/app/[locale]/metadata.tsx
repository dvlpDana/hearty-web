// src/app/[locale]/metadata.ts
import { Metadata } from 'next';

const i18nMeta: Record<string, Metadata> = {
  ko: {
    title: 'Hearty - 마음을 나누는 시니어 음성 소통 앱',
    description:
      '시니어들이 익명으로 따뜻한 음성 메시지를 주고받는 소통 플랫폼입니다. 라디오 DJ처럼 편안하게 이야기를 나누세요.',
    keywords: [
      '시니어',
      '음성메시지',
      '소통',
      '커뮤니티',
      '익명',
      '라디오',
      '따뜻한대화',
      '시니어 앱',
      '음성 채팅',
    ],
    authors: [{ name: 'Hearty Team' }],
    creator: 'Hearty',
    publisher: 'Hearty',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
    openGraph: {
      title: 'Hearty - 마음을 나누는 시니어 음성 소통 앱',
      description:
        '시니어들이 익명으로 따뜻한 음성 메시지를 주고받는 소통 플랫폼입니다.',
      url: 'https://hearty.kr',
      siteName: 'Hearty',
      locale: 'ko_KR',
      type: 'website',
      images: [
        {
          url: '/images/og-image-ko.jpg',
          width: 1200,
          height: 630,
          alt: 'Hearty - 마음을 나누는 시니어 음성 소통 앱',
        },
        {
          url: '/images/og-image-square-ko.jpg',
          width: 1200,
          height: 1200,
          alt: 'Hearty 앱 아이콘',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hearty - 마음을 나누는 시니어 음성 소통 앱',
      description:
        '시니어들이 익명으로 따뜻한 음성 메시지를 주고받는 소통 플랫폼입니다.',
      creator: '@hearty_kr',
      images: ['/images/og-image-ko.jpg'],
    },
    alternates: {
      canonical: 'https://hearty.kr',
      languages: {
        'ko-KR': 'https://hearty.kr',
        'en-US': 'https://hearty.kr/en',
      },
    },
    other: {
      'naver-site-verification': 'your-naver-verification-code',
      'google-site-verification': 'your-google-verification-code',
    },
  },
  en: {
    title: 'Hearty - Senior Voice Communication App for Sharing Hearts',
    description:
      'A communication platform where seniors can anonymously exchange warm voice messages. Chat comfortably like radio DJs.',
    keywords: [
      'senior',
      'voice message',
      'communication',
      'community',
      'anonymous',
      'radio',
      'warm conversation',
      'senior app',
      'voice chat',
    ],
    authors: [{ name: 'Hearty Team' }],
    creator: 'Hearty',
    publisher: 'Hearty',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
    openGraph: {
      title: 'Hearty - Senior Voice Communication App for Sharing Hearts',
      description:
        'A communication platform where seniors can anonymously exchange warm voice messages.',
      url: 'https://hearty.kr/en',
      siteName: 'Hearty',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/og-image-en.jpg',
          width: 1200,
          height: 630,
          alt: 'Hearty - Senior Voice Communication App for Sharing Hearts',
        },
        {
          url: '/images/og-image-square-en.jpg',
          width: 1200,
          height: 1200,
          alt: 'Hearty App Icon',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hearty - Senior Voice Communication App for Sharing Hearts',
      description:
        'A communication platform where seniors can anonymously exchange warm voice messages.',
      creator: '@hearty_global',
      images: ['/images/og-image-en.jpg'],
    },
    alternates: {
      canonical: 'https://hearty.kr/en',
      languages: {
        'ko-KR': 'https://hearty.kr',
        'en-US': 'https://hearty.kr/en',
      },
    },
    other: {
      'google-site-verification': 'your-google-verification-code',
    },
  },
};

// 페이지별 메타데이터
const pageSpecificMeta: Record<string, Record<string, Partial<Metadata>>> = {
  terms: {
    ko: {
      title: '서비스 이용약관 - Hearty',
      description:
        'Hearty 서비스 이용약관을 확인하세요. 시니어 음성 소통 서비스 이용 시 알아야 할 중요한 내용들입니다.',
      openGraph: {
        title: '서비스 이용약관 - Hearty',
        description: 'Hearty 서비스 이용약관을 확인하세요.',
        url: 'https://hearty.kr/terms',
      },
    },
    en: {
      title: 'Terms of Service - Hearty',
      description:
        'Check the Terms of Service for Hearty. Important information you need to know when using our senior voice communication service.',
      openGraph: {
        title: 'Terms of Service - Hearty',
        description: 'Check the Terms of Service for Hearty.',
        url: 'https://hearty.kr/en/terms',
      },
    },
  },
  privacy: {
    ko: {
      title: '개인정보처리방침 - Hearty',
      description:
        'Hearty의 개인정보처리방침을 확인하세요. 시니어 사용자의 개인정보를 안전하게 보호하는 방법을 안내합니다.',
      openGraph: {
        title: '개인정보처리방침 - Hearty',
        description: 'Hearty의 개인정보처리방침을 확인하세요.',
        url: 'https://hearty.kr/privacy',
      },
    },
    en: {
      title: 'Privacy Policy - Hearty',
      description:
        "Check Hearty's Privacy Policy. Learn how we safely protect the personal information of senior users.",
      openGraph: {
        title: 'Privacy Policy - Hearty',
        description: "Check Hearty's Privacy Policy.",
        url: 'https://hearty.kr/en/privacy',
      },
    },
  },
  download: {
    ko: {
      title: '앱 다운로드 - Hearty',
      description:
        'Hearty 앱을 다운로드하고 따뜻한 음성 소통을 시작하세요. App Store와 Google Play에서 무료로 다운로드 가능합니다.',
      openGraph: {
        title: '앱 다운로드 - Hearty',
        description: 'Hearty 앱을 다운로드하고 따뜻한 음성 소통을 시작하세요.',
        url: 'https://hearty.kr/download',
      },
    },
    en: {
      title: 'Download App - Hearty',
      description:
        'Download the Hearty app and start warm voice communication. Available for free on App Store and Google Play.',
      openGraph: {
        title: 'Download App - Hearty',
        description:
          'Download the Hearty app and start warm voice communication.',
        url: 'https://hearty.kr/en/download',
      },
    },
  },
};

export const getMetadata = (locale: string, page?: string): Metadata => {
  const baseMeta = i18nMeta[locale] || i18nMeta.ko;

  if (page && pageSpecificMeta[page] && pageSpecificMeta[page][locale]) {
    const pageMeta = pageSpecificMeta[page][locale];
    return {
      ...baseMeta,
      ...pageMeta,
      openGraph: {
        ...baseMeta.openGraph,
        ...pageMeta.openGraph,
      },
      twitter: {
        ...baseMeta.twitter,
        ...pageMeta.twitter,
      },
    };
  }

  return baseMeta;
};

// 구조화된 데이터 (JSON-LD) 생성 함수
export const generateStructuredData = (locale: string) => {
  const isKorean = locale === 'ko';

  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: isKorean ? 'Hearty - 마음의 소리' : 'Hearty - Voice of the Heart',
    description: isKorean
      ? '시니어들이 익명으로 따뜻한 음성 메시지를 주고받는 소통 플랫폼'
      : 'A communication platform where seniors can anonymously exchange warm voice messages',
    url: `https://hearty.kr${locale === 'en' ? '/en' : ''}`,
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: ['Android', 'iOS'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
    },
    author: {
      '@type': 'Organization',
      name: 'Hearty',
      url: 'https://hearty.kr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hearty',
      url: 'https://hearty.kr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hearty.kr/images/logo.png',
      },
    },
    inLanguage: locale === 'ko' ? 'ko-KR' : 'en-US',
    audience: {
      '@type': 'Audience',
      name: isKorean ? '시니어' : 'Seniors',
      audienceType: isKorean ? '50세 이상 성인' : 'Adults 50 years and older',
    },
    featureList: isKorean
      ? [
          '익명 음성 소통',
          '라디오 DJ 경험',
          '시니어 특화 디자인',
          '관심사 기반 매칭',
        ]
      : [
          'Anonymous Voice Communication',
          'Radio DJ Experience',
          'Senior-Friendly Design',
          'Interest-Based Matching',
        ],
  };
};

// SEO 최적화를 위한 추가 헬퍼 함수들
export const getHreflangAlternates = (currentLocale: string) => {
  return {
    'ko-KR': 'https://hearty.kr',
    'en-US': 'https://hearty.kr/en',
    'x-default': 'https://hearty.kr',
  };
};

export const getBreadcrumbStructuredData = (
  locale: string,
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

// 사이트맵 생성을 위한 URL 구조
export const siteUrls = {
  ko: {
    home: 'https://hearty.kr',
    terms: 'https://hearty.kr/terms',
    privacy: 'https://hearty.kr/privacy',
    download: 'https://hearty.kr/download',
  },
  en: {
    home: 'https://hearty.kr/en',
    terms: 'https://hearty.kr/en/terms',
    privacy: 'https://hearty.kr/en/privacy',
    download: 'https://hearty.kr/en/download',
  },
};