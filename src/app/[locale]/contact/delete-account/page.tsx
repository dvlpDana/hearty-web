import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Section } from '@/components/custom/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Trash2, Clock, Shield, Mail } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'deleteAccount' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function DeleteAccountPage() {
  const t = useTranslations('deleteAccount');

  return (
    <Section background="default" padding="xl">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trash2 className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold text-foreground">{t('title')}</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {/* 주의사항 */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                {t('warning.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700">{t('warning.content')}</p>
            </CardContent>
          </Card>

          {/* 계정 삭제 방법 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-warm-orange-600">
                {t('howTo.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ol className="space-y-3">
                  {Array.from({ length: 4 }, (_, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 bg-warm-orange-100 text-warm-orange-700 rounded-full text-sm font-semibold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-foreground">
                        {t(`howTo.steps.${i}`)}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-blue-700">
                      {t('contact.title')}
                    </span>
                  </div>
                  <p className="text-blue-700 text-sm mb-3">
                    {t('contact.description')}
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    {t('contact.button')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 삭제되는 데이터 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-warm-orange-600">
                {t('deletedData.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200"
                  >
                    <Trash2 className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">
                      {t(`deletedData.items.${i}`)}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 삭제 처리 기간 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-warm-orange-600 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {t('timeline.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="font-bold text-2xl text-blue-600 mb-2">
                      24h
                    </div>
                    <div className="text-sm text-blue-700">
                      {t('timeline.immediate')}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="font-bold text-2xl text-orange-600 mb-2">
                      7d
                    </div>
                    <div className="text-sm text-orange-700">
                      {t('timeline.complete')}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="font-bold text-2xl text-green-600 mb-2">
                      30d
                    </div>
                    <div className="text-sm text-green-700">
                      {t('timeline.backup')}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {t('timeline.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 법적 보관 의무 데이터 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-warm-orange-600 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {t('legalRetention.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                {t('legalRetention.description')}
              </p>
              <div className="space-y-3">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200"
                  >
                    <Shield className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-amber-800 text-sm">
                        {t(`legalRetention.items.${i}.title`)}
                      </div>
                      <div className="text-amber-700 text-xs">
                        {t(`legalRetention.items.${i}.description`)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 복구 불가능 안내 */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-xl text-red-600 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                {t('irreversible.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-foreground">
                  {t('irreversible.description')}
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <ul className="space-y-2">
                    {Array.from({ length: 3 }, (_, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-red-700 text-sm"
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {t(`irreversible.consequences.${i}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 하단 안내 */}
        <Card className="mt-12 bg-muted/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                {t('footer.help')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('footer.contact')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
