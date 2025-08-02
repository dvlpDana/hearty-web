// src/app/[locale]/metadata.ts
import { Metadata } from 'next';

const i18nMeta: Record<string, Metadata> = {
  ko: {
    title: 'Hearty - 세대를 넘나드는 따뜻한 음성 소통 플랫폼',
    description:
      '10대부터 80대까지, 모든 세대가 익명으로 음성 메시지를 주고받으며 따뜻한 마음을 나누는 소통 플랫폼입니다.',
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
      title: 'Hearty - 세대를 넘나드는 따뜻한 음성 소통 플랫폼',
      description:
        '10대부터 80대까지, 모든 세대가 익명으로 음성 메시지를 주고받으며 따뜻한 마음을 나누는 소통 플랫폼입니다.',
      url: 'https://hearty-web.vercel.app',
      siteName: 'Hearty',
      locale: 'ko_KR',
      type: 'website',
      images: [
        {
          url: '/images/og-image-ko.jpg',
          width: 1200,
          height: 630,
          alt: 'Hearty - 세대를 넘나드는 따뜻한 음성 소통 플랫폼',
        },
        {
          url: '/images/og-image-square.jpg',
          width: 1200,
          height: 1200,
          alt: 'Hearty 앱 아이콘',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hearty - 세대를 넘나드는 따뜻한 음성 소통 플랫폼',
      description:
        '10대부터 80대까지, 모든 세대가 익명으로 음성 메시지를 주고받으며 따뜻한 마음을 나누는 소통 플랫폼입니다.',
      creator: '@hearty_kr',
      images: ['/images/og-image-ko.jpg'],
    },
    alternates: {
      canonical: 'https://hearty-web.vercel.app',
      languages: {
        'ko-KR': 'https://hearty-web.vercel.app/ko',
        'en-US': 'https://hearty-web.vercel.app/en',
        'es-ES': 'https://hearty-web.vercel.app/es',
      },
    },
  },
  en: {
    title: 'Hearty - Cross-Generational Voice Communication Platform',
    description:
      'A warm communication platform where all generations from teens to 80s+ can anonymously share voice messages as mentors, peers, and friends.',
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
      title: 'Hearty - Cross-Generational Voice Communication Platform',
      description:
        'A warm communication platform where all generations from teens to 80s+ can anonymously share voice messages as mentors, peers, and friends.',
      url: 'https://hearty-web.vercel.app/en',
      siteName: 'Hearty',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/og-image-en.jpg',
          width: 1200,
          height: 630,
          alt: 'Hearty - Cross-Generational Voice Communication Platform',
        },
        {
          url: '/images/og-image-square.jpg',
          width: 1200,
          height: 1200,
          alt: 'Hearty App Icon',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hearty - Cross-Generational Voice Communication Platform',
      description:
        'A warm communication platform where all generations from teens to 80s+ can anonymously share voice messages as mentors, peers, and friends.',
      creator: '@hearty_global',
      images: ['/images/og-image-en.jpg'],
    },
    alternates: {
      canonical: 'https://hearty-web.vercel.app/en',
      languages: {
        'ko-KR': 'https://hearty-web.vercel.app/ko',
        'en-US': 'https://hearty-web.vercel.app/en',
        'es-ES': 'https://hearty-web.vercel.app/es',
      },
    },
    other: {
      'google-site-verification': 'your-google-verification-code',
    },
  },
  es: {
    title: 'Hearty - Plataforma de Comunicación de Voz Intergeneracional',
    description:
      'Una plataforma de comunicación cálida donde todas las generaciones, desde adolescentes hasta mayores de 80 años, pueden compartir mensajes de voz de forma anónima como mentores, compañeros y amigos.',
    keywords: [
      'mayores',
      'mensaje de voz',
      'comunicación',
      'comunidad',
      'anónimo',
      'radio',
      'conversación cálida',
      'app para mayores',
      'chat de voz',
    ],
    authors: [{ name: 'Equipo Hearty' }],
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
      title: 'Hearty - Plataforma de Comunicación de Voz Intergeneracional',
      description:
        'Una plataforma de comunicación cálida donde todas las generaciones, desde adolescentes hasta mayores de 80 años, pueden compartir mensajes de voz de forma anónima como mentores, compañeros y amigos.',
      url: 'https://hearty-web.vercel.app/es',
      siteName: 'Hearty',
      locale: 'es_ES',
      type: 'website',
      images: [
        {
          url: '/images/og-image-es.jpg',
          width: 1200,
          height: 630,
          alt: 'Hearty - Plataforma de Comunicación de Voz Intergeneracional',
        },
        {
          url: '/images/og-image-square.jpg',
          width: 1200,
          height: 1200,
          alt: 'Icono de la App Hearty',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hearty - Plataforma de Comunicación de Voz Intergeneracional',
      description:
        'Una plataforma de comunicación cálida donde todas las generaciones, desde adolescentes hasta mayores de 80 años, pueden compartir mensajes de voz de forma anónima como mentores, compañeros y amigos.',
      creator: '@hearty_es',
      images: ['/images/og-image-es.jpg'],
    },
    alternates: {
      canonical: 'https://hearty-web.vercel.app/es',
      languages: {
        'ko-KR': 'https://hearty-web.vercel.app/ko',
        'en-US': 'https://hearty-web.vercel.app/en',
        'es-ES': 'https://hearty-web.vercel.app/es',
      },
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
        url: 'https://hearty-web.vercel.app/terms',
      },
    },
    en: {
      title: 'Terms of Service - Hearty',
      description:
        'Check the Terms of Service for Hearty. Important information you need to know when using our senior voice communication service.',
      openGraph: {
        title: 'Terms of Service - Hearty',
        description: 'Check the Terms of Service for Hearty.',
        url: 'https://hearty-web.vercel.app/en/terms',
      },
    },
    es: {
      title: 'Términos de Servicio - Hearty',
      description:
        'Consulta los Términos de Servicio de Hearty. Información importante que necesitas saber al usar nuestro servicio de comunicación de voz para mayores.',
      openGraph: {
        title: 'Términos de Servicio - Hearty',
        description: 'Consulta los Términos de Servicio de Hearty.',
        url: 'https://hearty-web.vercel.app/es/terms',
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
        url: 'https://hearty-web.vercel.app/privacy',
      },
    },
    en: {
      title: 'Privacy Policy - Hearty',
      description:
        "Check Hearty's Privacy Policy. Learn how we safely protect the personal information of senior users.",
      openGraph: {
        title: 'Privacy Policy - Hearty',
        description: "Check Hearty's Privacy Policy.",
        url: 'https://hearty-web.vercel.app/en/privacy',
      },
    },
    es: {
      title: 'Política de Privacidad - Hearty',
      description:
        'Consulta la Política de Privacidad de Hearty. Aprende cómo protegemos de forma segura la información personal de los usuarios mayores.',
      openGraph: {
        title: 'Política de Privacidad - Hearty',
        description: 'Consulta la Política de Privacidad de Hearty.',
        url: 'https://hearty-web.vercel.app/es/privacy',
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
      ? '세대를 넘나드는 따뜻한 음성 소통 플랫폼'
      : 'Cross-Generational Voice Communication Platform',
    url: `https://hearty-web.vercel.app${locale === 'en' ? '/en' : ''}`,
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
      url: 'https://hearty-web.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hearty',
      url: 'https://hearty-web.vercel.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hearty-web.vercel.app/images/logo.png',
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
          '세대간소통',
          '음성메시지',
          '익명소통',
          '시니어친화적',
          '따뜻한대화',
          '세대공감',
        ]
      : [
          'intergenerational communication',
          'voice messages',
          'anonymous chat',
          'senior-friendly',
          'warm conversation',
          'generational empathy',
        ],
  };
};

// SEO 최적화를 위한 추가 헬퍼 함수들
export const getHreflangAlternates = (currentLocale: string) => {
  switch (currentLocale) {
    case 'ko':
      return 'https://hearty-web.vercel.app/ko';
    case 'en':
      return 'https://hearty-web.vercel.app/en';
    case 'es':
      return 'https://hearty-web.vercel.app/es';
    default:
      return 'https://hearty-web.vercel.app';
  }
};

export const getBreadcrumbStructuredData = (
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
    home: 'https://hearty-web.vercel.app/ko',
    terms: 'https://hearty-web.vercel.app/ko/terms',
    privacy: 'https://hearty-web.vercel.app/ko/privacy',
  },
  en: {
    home: 'https://hearty-web.vercel.app/en',
    terms: 'https://hearty-web.vercel.app/en/terms',
    privacy: 'https://hearty-web.vercel.app/en/privacy',
  },
  es: {
    home: 'https://hearty-web.vercel.app/es',
    terms: 'https://hearty-web.vercel.app/es/terms',
    privacy: 'https://hearty-web.vercel.app/es/privacy',
  },
};
