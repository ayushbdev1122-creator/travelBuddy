import { HugeiconsIcon } from '@hugeicons/react'
import {
  FirstAidKitIcon,
  HeaterIcon,
  Hospital01Icon,
  GlassWaterIcon,
  Location01Icon,
  Toilet01Icon,
} from '@hugeicons/core-free-icons'

const facilities = [
  {
    title: 'Washrooms nearby',
    detail: 'Within approximately 40–50 metres of the camp.',
    icon: Toilet01Icon,
  },
  {
    title: 'Warm tent',
    detail: 'A heater or blower is available inside the camp.',
    icon: HeaterIcon,
  },
  {
    title: 'Hot water',
    detail: 'Available for drinking and bathing.',
    icon: GlassWaterIcon,
  },
  {
    title: 'First aid',
    detail: 'First-aid facility available at the camp.',
    icon: FirstAidKitIcon,
  },
  {
    title: 'Nearby hospital',
    detail: 'A hospital is located nearby for medical support.',
    icon: Hospital01Icon,
  },
]

export function FacilitiesSection() {
  return (
    <section className="border-y border-border bg-[#f5f6f0] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24" id="facilities">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#8eae37]">Thoughtful essentials</p>
            <h2 className="font-[var(--font-display)] text-4xl leading-none font-medium sm:text-5xl lg:text-6xl">
              Comforts at <em className="font-[var(--font-editorial)] font-normal">camp.</em>
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-6 text-[#767d74] sm:text-sm">
            Useful facilities close by, so you can focus on your time in Kedarnath.
          </p>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {facilities.map((facility, index) => (
            <article className="flex min-h-36 gap-4 border border-[#e2e5dc] bg-white p-5 sm:p-6" key={facility.title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#edf2e2] text-[#596d30]">
                <HugeiconsIcon icon={facility.icon} size={19} strokeWidth={1.7} />
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="mb-3 text-[9px] font-medium tracking-[0.14em] text-[#8eae37]">0{index + 1}</span>
                <h3 className="font-[var(--font-display)] text-lg leading-tight font-medium text-foreground">{facility.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#767d74]">{facility.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}