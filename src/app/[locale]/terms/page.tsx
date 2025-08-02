import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Section } from '@/components/custom/Section';
import { serviceTerm as serviceTermKo } from '@/constants/service_ko';
import { serviceTerm as serviceTermEn } from '@/constants/service_en';
import { serviceTerm as serviceTermEs } from '@/constants/service_es';

type Props = {
  params: { locale: string };
  searchParams: { locale?: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'terms' });

  return {
    title: t('title'),
    description: t('title'),
  };
}

export default function TermsPage({ searchParams }: Props) {
  const t = useTranslations('terms');

  // searchParams에서 locale을 가져오거나 기본값 'ko' 사용
  const currentLocale = searchParams.locale || 'ko';

  // locale에 따라 해당하는 약관 선택
  const getTermsContent = () => {
    switch (currentLocale) {
      case 'en':
        return serviceTermEn;
      case 'es':
        return serviceTermEs;
      case 'ko':
      default:
        return serviceTermKo;
    }
  };

  const termsContent = getTermsContent();

  return (
    <Section background="default" padding="xl">
      <div className="max-w-4xl mx-auto">
        {/* 약관 내용 */}
        <div className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: termsContent.content }}
            className="terms-content"
          />
        </div>
      </div>
    </Section>
  );
}
