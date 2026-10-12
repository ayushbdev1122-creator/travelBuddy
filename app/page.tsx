import {
  ExperienceSection,
  FaqSection,
  FacilitiesSection,
  HeroSection,
  IntroSection,
  LocationSection,
  RatesSection,
  SiteFooter,
  StaySection,
} from '@/components/camp/page-sections'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <StaySection />
      <RatesSection />
      <ExperienceSection />
      <FacilitiesSection />
      <LocationSection />
      <FaqSection />
      <SiteFooter />
    </main>
  )
}
