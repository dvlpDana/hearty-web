import React from 'react';
import { useTranslations } from 'next-intl';
import CommonLayout from '@/components/layout/CommonLayout';

const FAQ_LIST = [
  {
    question: 'helpHowToStart',
    answer: 'helpHowToStartContent',
  },
  {
    question: 'helpProfileSetup',
    answer: 'helpProfileSetupContent',
  },
  {
    question: 'helpAgeGroupSelection',
    answer: 'helpAgeGroupSelectionContent',
  },
  {
    question: 'helpRecordVoice',
    answer: 'helpRecordVoiceContent',
  },
  {
    question: 'helpPlayVoice',
    answer: 'helpPlayVoiceContent',
  },
  {
    question: 'helpVoiceQuality',
    answer: 'helpVoiceQualityContent',
  },
  {
    question: 'helpHowMatching',
    answer: 'helpHowMatchingContent',
  },
  {
    question: 'helpMatchingPreference',
    answer: 'helpMatchingPreferenceContent',
  },
  {
    question: 'helpNoMatching',
    answer: 'helpNoMatchingContent',
  },
  {
    question: 'helpSafetyGuidelines',
    answer: 'helpSafetyGuidelinesContent',
  },
  {
    question: 'helpReportUser',
    answer: 'helpReportUserContent',
  },
  {
    question: 'helpPrivacyProtection',
    answer: 'helpPrivacyProtectionContent',
  },
  {
    question: 'helpChangeNickname',
    answer: 'helpChangeNicknameContent',
  },
  {
    question: 'helpDeleteAccount',
    answer: 'helpDeleteAccountContent',
  },
  {
    question: 'helpForgotPassword',
    answer: 'helpForgotPasswordContent',
  },
  {
    question: 'helpAppNotWorking',
    answer: 'helpAppNotWorkingContent',
  },
  {
    question: 'helpAudioPermission',
    answer: 'helpAudioPermissionContent',
  },
  {
    question: 'helpSlowApp',
    answer: 'helpSlowAppContent',
  },
];

export default function FAQPage() {
  const t = useTranslations('faq');
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">{t('helpFrequentlyAsked')}</h1>
      <ul className="space-y-6">
        {FAQ_LIST.map((item, idx) => (
          <li key={item.question}>
            <details className="group border rounded-lg p-4">
              <summary className="font-semibold cursor-pointer text-lg group-open:text-primary">
                {t(item.question)}
              </summary>
              <div className="mt-2 whitespace-pre-line text-gray-700">
                {t(item.answer)}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </main>
  );
}
