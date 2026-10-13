import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'
import { campInfo, locationUrl, whatsappUrl } from '@/lib/camp-data'

const navigation = [
  { label: 'The camp', href: '#explore' },
  { label: 'Your stay', href: '#stay' },
  { label: 'Gallery', href: '#experience' },
  { label: 'Location', href: '#location' },
]

export function HeroSection() {
  return (
    <section id="explore">
      <div
        className="relative isolate grid min-h-[100svh] grid-rows-[auto_1fr_auto] gap-8 overflow-hidden bg-cover bg-[center_42%] px-5 py-5 text-white sm:gap-10 sm:px-8 sm:py-7 lg:px-[5vw] lg:py-8"
        id="places"
        style={{ backgroundImage: 'url("/camp-photos/mountain-tent.jpeg")' }}
      >
        <div className="absolute inset-0 -z-10 bg-black/25" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#07110d]/85 via-[#07110d]/45 to-[#07110d]/10" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#07110d]/70 via-transparent to-[#07110d]/35" />

        <header className="flex flex-wrap items-center justify-between gap-x-5 gap-y-4">
          <a className="flex shrink-0 items-center gap-2 font-[var(--font-display)] text-xs font-bold tracking-[0.12em] text-white no-underline sm:text-sm" href="#explore" aria-label={`${campInfo.name} home`}>
            <span className="grid size-8 place-items-center rounded-full border border-white/45 text-base tracking-normal">K</span>
            {campInfo.name}
          </a>
          <nav aria-label="Main navigation" className="hidden w-full items-center justify-between gap-4 overflow-x-auto sm:flex sm:w-auto sm:justify-center sm:gap-7 sm:overflow-visible">
            {navigation.map((item, index) => (
              <a className={`shrink-0 text-[11px] transition-colors hover:text-[#d7f27d] sm:text-xs ${index === 0 ? 'text-[#d7f27d]' : 'text-white/85'}`} href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            className="h-9 gap-2 rounded-full border border-white/35 bg-white/10 px-3 text-[10px] text-white backdrop-blur-sm hover:bg-white/20 sm:h-10 sm:px-4 sm:text-xs"
            render={<a href={locationUrl} target="_blank" rel="noreferrer" />}
            variant="outline"
          >
            Get directions <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
          </Button>
        </header>

        <div className="my-auto flex w-full max-w-4xl flex-col gap-4 py-2 sm:gap-6 sm:py-8 lg:ml-[7vw]">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[9px] font-semibold tracking-[0.18em] text-[#d7f27d] sm:text-[10px]">
              <span className="size-1.5 rounded-full bg-primary" /> {campInfo.tagline}
            </p>
            <h1 className="max-w-4xl font-[var(--font-display)] text-[clamp(2.75rem,12vw,4rem)] leading-[0.98] font-medium tracking-normal text-white sm:text-7xl lg:text-8xl">
              {campInfo.heroTitle}<br /><em className="font-[var(--font-editorial)] font-normal tracking-normal">{campInfo.heroTitleAccent}</em>
            </h1>
          </div>

          <div className="max-w-md">
            <p className="max-w-sm text-xs leading-6 text-white/85 sm:text-sm sm:leading-7">{campInfo.subtitle}</p>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-white/70">
              <strong className="text-sm font-semibold text-white">Kedarnath</strong>
              <span className="text-xs">{campInfo.location.replace('Kedarnath, ', '')}</span>
            </p>
            <div className="mt-5 flex flex-col items-start gap-2">
              <Button
                className="h-11 gap-2 rounded-sm bg-primary px-5 text-xs font-semibold text-primary-foreground shadow-lg shadow-black/15 transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:text-sm"
                render={<a href={whatsappUrl} target="_blank" rel="noreferrer" />}
              >
                Contact me on WhatsApp <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </Button>
              <span className="text-[10px] text-white/75">Ask about your stay or available dates.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-t border-white/25 pt-3 text-[8px] font-medium tracking-[0.12em] text-white/75 sm:flex-row sm:items-center sm:justify-between sm:text-[9px]">
          <span>Tented camp · {campInfo.location}</span>
          <span>{campInfo.coordinates}</span>
        </div>
      </div>
    </section>
  )
}
