import {
  ExperienceSection,
  HeroSection,
  IntroSection,
  LocationSection,
  SiteFooter,
  StaySection,
} from '@/components/camp/page-sections'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <StaySection />
      <ExperienceSection />
      <LocationSection />
      <SiteFooter />
    </main>
  )
}
