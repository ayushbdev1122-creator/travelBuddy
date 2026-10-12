import { locationUrl } from '@/lib/camp-data'

export function SiteFooter() {
  return (
    <footer className="bg-[#f0eee4] px-5 pt-10 pb-5 sm:px-8 sm:pt-14 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 border-b border-[#d9d9d0] pb-8 sm:grid-cols-[1fr_1.4fr] sm:gap-12 sm:pb-10">
          <div>
            <a className="inline-flex items-center gap-2 font-[var(--font-display)] text-xs font-bold tracking-[0.12em] text-foreground no-underline" href="#explore">
              <span className="font-bold text-lg">K</span> Kedarnath Camp
            </a>
            <p className="mt-3 max-w-xs text-xs leading-5 text-[#70766e]">A tent stay in Kedarnath, Uttarakhand.</p>
            <p className="mt-4 text-[9px] font-semibold tracking-[0.14em] text-[#8e9488] uppercase">Kedarnath · Himalaya</p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-[10px] sm:gap-6">
            <div className="flex flex-col items-start gap-2.5"><span className="mb-1 font-semibold text-[#8eae37]">Explore</span><a href="#stay">The camp</a><a href="#experience">Photo gallery</a></div>
            <div className="flex flex-col items-start gap-2.5"><span className="mb-1 font-semibold text-[#8eae37]">Location</span><a href="#location">Kedarnath</a><a href={locationUrl} target="_blank" rel="noreferrer">Google Maps</a></div>
            <div className="flex flex-col items-start gap-2.5"><span className="mb-1 font-semibold text-[#8eae37]">Coordinates</span><a href={locationUrl} target="_blank" rel="noreferrer">30.7321° N</a><a href={locationUrl} target="_blank" rel="noreferrer">79.0656° E</a></div>
          </div>
        </div>
        <div className="flex justify-between gap-3 pt-4 text-[8px] font-semibold tracking-[0.12em] text-[#8e9488] uppercase"><span>Kedarnath, Uttarakhand</span><span>See you in the mountains.</span></div>
      </div>
    </footer>
  )
}
