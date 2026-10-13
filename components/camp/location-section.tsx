import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'
import { campInfo, locationUrl } from '@/lib/camp-data'

export function LocationSection() {
  return (
    <section className="border-t border-border px-5 py-14 sm:px-8 sm:py-20 lg:px-14" id="location">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-[10px] font-semibold tracking-[0.16em] text-[#8eae37]">Find your way</p>
          <h2 className="font-[var(--font-display)] text-4xl leading-none font-medium sm:text-5xl lg:text-6xl">See you in<br /><em className="font-[var(--font-editorial)] font-normal">Kedarnath.</em></h2>
          <p className="mt-5 max-w-sm text-xs leading-6 text-[#767d74] sm:text-sm sm:leading-7">Use the pinned Google Maps location for directions to the camp.</p>
        </div>
        <div className="flex min-w-0 flex-col items-start gap-5 border-border lg:border-l lg:py-2 lg:pl-10">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.15em] text-[#8eae37] uppercase">Camp location</p>
            <p className="mt-1.5 text-sm text-foreground">{campInfo.location}</p>
          </div>
          <div>
            <p className="text-[9px] font-semibold tracking-[0.15em] text-[#8eae37] uppercase">Map pin</p>
            <p className="mt-1.5 text-sm text-foreground">{campInfo.coordinates}</p>
          </div>
          <Button className="h-11 gap-2 rounded-full bg-primary px-5 text-xs text-primary-foreground hover:bg-primary/90" render={<a href={locationUrl} target="_blank" rel="noreferrer" />}>
            Open Google Maps <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
          </Button>
          <div className="w-full overflow-hidden rounded-md border border-border bg-muted">
            <iframe className="block h-[230px] w-full border-0 sm:h-[270px]" src="https://maps.google.com/maps?q=30.7321225%2C79.065574&z=15&output=embed" title="Map showing the Kedarnath camp location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </div>
    </section>
  )
}
