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
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <Mail className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800">
                        {t('quickContact.email.title')}
                      </h4>
                      <p className="text-sm text-blue-600">
                        hearty.service.2025@gmail.com
                      </p>
                      <p className="text-xs text-blue-500">
                        {t('quickContact.email.response')}
                      </p>
                    </div>
                  </div>

                  {/* 전화 */}
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <Phone className="h-8 w-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800">
                        {t('quickContact.phone.title')}
                      </h4>
                      <p className="text-sm text-green-600">1588-0000</p>
                      <p className="text-xs text-green-500">
                        {t('quickContact.phone.hours')}
                      </p>
                    </div>
                  </div>

                  {/* 카카오톡 */}
                  <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <MessageCircle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">
                        {t('quickContact.kakao.title')}
                      </h4>
                      <p className="text-sm text-yellow-600">@hearty_support</p>
                      <p className="text-xs text-yellow-500">
                        {t('quickContact.kakao.description')}
                      </p>
                    </div>
                  </div>

                  {/* FAQ */}
                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <HelpCircle className="h-8 w-8 text-purple-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-800">
                        {t('quickContact.faq.title')}
                      </h4>
                      <p className="text-sm text-purple-600">
                        {t('quickContact.faq.description')}
                      </p>
                      <Button
                        variant="link"
                        className="text-purple-600 p-0 h-auto text-xs"
                      >
                        {t('quickContact.faq.button')}
                      </Button>
                    </div>
                  </div>
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
                        <Link href="/contact/delete-account">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs"
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            {t('inquiryTypes.account.deleteAccount')}
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Mail className="h-3 w-3 mr-1" />
                          {t('inquiryTypes.account.emailSupport')}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* 기술 지원 */}
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <Settings className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {t('inquiryTypes.technical.title')}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('inquiryTypes.technical.description')}
                      </p>
                      <Button variant="outline" size="sm" className="text-xs">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {t('inquiryTypes.technical.contact')}
                      </Button>
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

            {/* 응답시간 안내 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-warm-orange-600 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {t('responseTime.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-blue-800">
                      {t('responseTime.email.title')}
                    </div>
                    <div className="text-sm text-blue-600">
                      {t('responseTime.email.time')}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-green-800">
                      {t('responseTime.phone.title')}
                    </div>
                    <div className="text-sm text-green-600">
                      {t('responseTime.phone.time')}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <MessageCircle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="font-semibold text-yellow-800">
                      {t('responseTime.kakao.title')}
                    </div>
                    <div className="text-sm text-yellow-600">
                      {t('responseTime.kakao.time')}
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
                    <p>{t('companyInfo.privacy.phone')}: 01031070596</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 운영시간 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-warm-orange-600 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {t('businessHours.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm font-medium">
                      {t('businessHours.weekdays')}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {t('businessHours.weekdaysTime')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-sm font-medium">
                      {t('businessHours.saturday')}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {t('businessHours.saturdayTime')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium">
                      {t('businessHours.sunday')}
                    </span>
                    <span className="text-sm text-red-600">
                      {t('businessHours.sundayTime')}
                    </span>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-xs text-amber-700">
                      {t('businessHours.note')}
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
