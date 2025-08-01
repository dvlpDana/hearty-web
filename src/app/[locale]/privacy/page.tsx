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
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: t('title'),
    description: t('title'),
  };
}

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <Section background="default" padding="xl">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold text-foreground">{t('title')}</h1>
          <p className="text-sm text-muted-foreground">{t('lastUpdated')}</p>
        </div>

        {/* 개인정보처리방침 내용 */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-warm-orange-600">
                {t('sections.purpose.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-foreground mb-6">
                {t('sections.purpose.content')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-warm-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-warm-orange-700 mb-2 text-sm">
                    2. 서비스 제공
                  </h4>
                  <p className="text-xs text-foreground leading-relaxed">
                    음성 메시지 매칭, 관심사 기반 사용자 연결, 콘텐츠 제공,
                    맞춤형 서비스 제공
                  </p>
                </div>

                <div className="bg-warm-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-warm-orange-700 mb-2 text-sm">
                    3. 서비스 개선 및 개발
                  </h4>
                  <p className="text-xs text-foreground leading-relaxed">
                    서비스 이용 통계 분석, 서비스 개선 및 신규 서비스 개발
                  </p>
                </div>

                <div className="bg-warm-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-warm-orange-700 mb-2 text-sm">
                    4. 마케팅 및 광고
                  </h4>
                  <p className="text-xs text-foreground leading-relaxed">
                    이벤트 및 광고성 정보 제공, 서비스 소식 안내 (동의한 경우에
                    한함)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-warm-orange-600">
                제2조 (처리하는 개인정보의 항목)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-foreground mb-6">
                회사는 다음의 개인정보 항목을 처리하고 있습니다.
              </p>

              <div className="space-y-6">
                <div className="border border-warm-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-warm-orange-600 mb-3 text-sm">
                    필수항목
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-xs text-foreground">
                      <span className="w-2 h-2 bg-warm-orange-500 rounded-full"></span>
                      연령대 (50대, 60대, 70대 이상)
                    </li>
                    <li className="flex items-center gap-2 text-xs text-foreground">
                      <span className="w-2 h-2 bg-warm-orange-500 rounded-full"></span>
                      성별 (선택사항)
                    </li>
                    <li className="flex items-center gap-2 text-xs text-foreground">
                      <span className="w-2 h-2 bg-warm-orange-500 rounded-full"></span>
                      닉네임
                    </li>
                    <li className="flex items-center gap-2 text-xs text-foreground">
                      <span className="w-2 h-2 bg-warm-orange-500 rounded-full"></span>
                      서비스 이용 기록
                    </li>
                  </ul>
                </div>

                <div className="border border-soft-pink-200 rounded-lg p-4">
                  <h4 className="font-semibold text-soft-pink-600 mb-3 text-sm">
                    선택항목
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-xs text-foreground">
                      <span className="w-2 h-2 bg-soft-pink-500 rounded-full"></span>
                      관심사 정보 (건강, 취미, 음악 등)
                    </li>
                    <li className="flex items-center gap-2 text-xs text-foreground">
                      <span className="w-2 h-2 bg-soft-pink-500 rounded-full"></span>
                      프로필 사진 (서비스 내에서만 사용)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-warm-orange-600">
                제3조 (개인정보 보호책임자)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3 text-sm">
                    개인정보 보호책임자
                  </h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>성명: 김민수</p>
                    <p>직책: CTO</p>
                    <p>연락처: privacy@hearty.kr</p>
                    <p>전화: 02-1234-5678</p>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3 text-sm">
                    개인정보 보호담당부서
                  </h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>부서명: 개인정보보호팀</p>
                    <p>담당자: 이영희</p>
                    <p>연락처: privacy@hearty.kr</p>
                    <p>전화: 02-1234-5679</p>
                  </div>
                </div>
              </div>
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
              이 개인정보처리방침은 2025년 1월 1일부터 적용됩니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
