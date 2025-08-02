import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Section } from '@/components/custom/Section';
import { privacyTerm as privacyTermKo } from '@/constants/privacy_ko';
import { privacyTerm as privacyTermEn } from '@/constants/privacy_en';
import { privacyTerm as privacyTermEs } from '@/constants/privacy_es';

type Props = {
  params: { locale: string };
  searchParams: { locale?: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: t('title'),
    description: t('title'),
  };
}

export default function PrivacyPage({ searchParams }: Props) {
  const t = useTranslations('privacy');

  // searchParams에서 locale을 가져오거나 기본값 'ko' 사용
  const currentLocale = searchParams.locale || 'ko';

  // locale에 따라 해당하는 개인정보처리방침 선택
  const getPrivacyContent = () => {
    switch (currentLocale) {
      case 'en':
        return privacyTermEn;
      case 'es':
        return privacyTermEs;
      case 'ko':
      default:
        return privacyTermKo;
    }
  };

  const privacyContent = getPrivacyContent();

  return (
    <Section background="default" padding="xl">
      <div className="max-w-4xl mx-auto">
        {/* 개인정보처리방침 내용 */}
        <div className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: privacyContent.content }}
            className="privacy-content"
          />
        </div>
      </div>
    </Section>
  );
}
