import FeaturesSection from '@/components/home/FeatureSection';
import GenerationsSection from '@/components/home/GenerationSection';
import HeroSection from '@/components/home/HeroSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import CommonLayout from '@/components/layout/CommonLayout';

export default function HomePage() {
  return (
    <CommonLayout>
      <HeroSection />
      <FeaturesSection />
      <GenerationsSection />
      <HowItWorksSection />
    </CommonLayout>
  );
}
