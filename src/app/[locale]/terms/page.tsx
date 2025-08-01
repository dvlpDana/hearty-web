import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Section } from '@/components/custom/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  params: { locale: string };
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

export default function TermsPage() {
  const t = useTranslations('terms');

  return (
    <Section background="default" padding="xl">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold text-foreground">{t('title')}</h1>
          <p className="text-sm text-muted-foreground">{t('lastUpdated')}</p>
        </div>

        {/* 약관 내용 */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-warm-orange-600">
                {t('sections.purpose.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-foreground">
                {t('sections.purpose.content')}
              </p>
            </CardContent>
          </Card>

          {/* 추가 약관 섹션들을 위한 placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-warm-orange-600">
                제2조 (정의)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-warm-orange-50 p-4 rounded-lg border-l-4 border-warm-orange-500">
                <p className="text-sm font-semibold text-warm-orange-700 mb-2">
                  1. "서비스"
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  회사가 제공하는 시니어 음성 소통 플랫폼 및 관련 제반 서비스를
                  의미합니다.
                </p>
              </div>

              <div className="bg-warm-orange-50 p-4 rounded-lg border-l-4 border-warm-orange-500">
                <p className="text-sm font-semibold text-warm-orange-700 mb-2">
                  2. "이용자"
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을
                  의미합니다.
                </p>
              </div>

              <div className="bg-warm-orange-50 p-4 rounded-lg border-l-4 border-warm-orange-500">
                <p className="text-sm font-semibold text-warm-orange-700 mb-2">
                  3. "회원"
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  회사와 서비스 이용계약을 체결하고 이용자 아이디를 부여받은
                  자를 의미합니다.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-warm-orange-600">
                제3조 (서비스의 제공)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-foreground mb-4">
                회사가 제공하는 서비스는 다음과 같습니다:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-warm-orange-500 font-bold">•</span>
                  익명 음성 메시지 송수신 서비스
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-warm-orange-500 font-bold">•</span>
                  관심사 기반 사용자 매칭 서비스
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-warm-orange-500 font-bold">•</span>
                  음성-텍스트 변환 서비스
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-warm-orange-500 font-bold">•</span>
                  커뮤니티 및 그룹 대화 서비스
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 부칙 */}
        <Card className="mt-12 bg-muted/30">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">[부칙]</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              이 약관은 2025년 1월 1일부터 적용됩니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
