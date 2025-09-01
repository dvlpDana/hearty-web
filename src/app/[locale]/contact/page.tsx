import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Section } from '@/components/custom/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Shield,
  User,
  Building2,
  HelpCircle,
  Settings,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <Section background="default" padding="xl">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold text-foreground">{t('title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 왼쪽: 주요 연락처 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 빠른 문의 방법 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-warm-orange-600">
                  {t('quickContact.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 이메일 */}
                  <a
                    href="mailto:hearty.service.2025@gmail.com"
                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100"
                  >
                    <Mail className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800">
                        {t('quickContact.email.title')}
                      </h4>
                      <span className="text-sm text-blue-600 underline">
                        hearty.service.2025@gmail.com
                      </span>
                      <p className="text-xs text-blue-500">
                        {t('quickContact.email.response')}
                      </p>
                    </div>
                  </a>

                  {/* FAQ */}
                  <Link
                    href="/faq"
                    className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100"
                  >
                    <HelpCircle className="h-8 w-8 text-purple-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-800">
                        {t('quickContact.faq.title')}
                      </h4>
                      <p className="text-sm text-purple-600">
                        {t('quickContact.faq.description')}
                      </p>
                      <span className="text-purple-600 p-0 h-auto text-xs underline">
                        {t('quickContact.faq.button')}
                      </span>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 문의 유형별 안내 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-warm-orange-600">
                  {t('inquiryTypes.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* 계정 관련 */}
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <User className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {t('inquiryTypes.account.title')}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('inquiryTypes.account.description')}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href="/contact/delete-account"
                          className="inline-flex items-center justify-center text-xs px-3 py-2 border rounded-md text-gray-700 border-gray-600 hover:bg-gray-50"
                        >
                          <Trash2 className="h-3 w-3 mr-1" />
                          {t('inquiryTypes.account.deleteAccount')}
                        </Link>
                        <a
                          href="mailto:hearty.service.2025@gmail.com"
                          className="inline-flex items-center justify-center text-xs px-3 py-2 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-50"
                        >
                          <Mail className="h-3 w-3 mr-1" />
                          {t('inquiryTypes.account.emailSupport')}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 개인정보 관련 */}
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <Shield className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {t('inquiryTypes.privacy.title')}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('inquiryTypes.privacy.description')}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t('inquiryTypes.privacy.contact')}:
                        colleksql3@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 오른쪽: 회사 정보 */}
          <div className="space-y-6">
            {/* 회사 정보 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-warm-orange-600 flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  {t('companyInfo.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {t('companyInfo.basic.title')}
                  </h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{t('companyInfo.basic.name')}: 단비랩스(DanbiLabs)</p>
                    <p>{t('companyInfo.basic.business')}: 610-30-95387</p>
                    <p>{t('companyInfo.basic.ceo')}: 심단비</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {t('companyInfo.address.title')}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t('companyInfo.address.detail')}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    {t('companyInfo.privacy.title')}
                  </h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{t('companyInfo.privacy.officer')}: 심단비</p>
                    <p>
                      {t('companyInfo.privacy.email')}: colleksql3@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
