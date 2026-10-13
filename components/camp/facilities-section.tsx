import { HugeiconsIcon } from "@hugeicons/react"
import {
  FirstAidKitIcon,
  HeaterIcon,
  Hospital01Icon,
  GlassWaterIcon,
  Location01Icon,
  Toilet01Icon,
} from "@hugeicons/core-free-icons"
import { campFacilities } from "@/lib/camp-data"

const facilityIcons = {
  "Temple nearby": Location01Icon,
  "Market nearby": Location01Icon,
  "Famous spot": Location01Icon,
  "Washrooms nearby": Toilet01Icon,
  "Warm tent": HeaterIcon,
  "Hot water": GlassWaterIcon,
  "First aid": FirstAidKitIcon,
  "Nearby hospital": Hospital01Icon,
} as const

export function FacilitiesSection() {
  return (
    <section
      className="border-y border-border bg-[#f5f6f0] px-6 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
      id="facilities"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#8eae37]">
              Thoughtful essentials
            </p>
            <h2 className="text-4xl leading-none font-[var(--font-display)] font-medium sm:text-5xl lg:text-6xl">
              Comforts at{" "}
              <em className="font-[var(--font-editorial)] font-normal">
                camp.
              </em>
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-6 text-[#767d74] sm:text-sm">
            Useful facilities close by, so you can focus on your time in
            Kedarnath.
          </p>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {campFacilities.map((facility, index) => (
            <article
              className="flex min-h-36 flex-col gap-4 border border-[#e2e5dc] bg-white p-5 sm:p-6"
              key={facility.title}
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#edf2e2] text-[#596d30]">
                <HugeiconsIcon
                  icon={
                    facilityIcons[facility.title as keyof typeof facilityIcons]
                  }
                  size={19}
                  strokeWidth={1.7}
                />
              </span>
              <div className="flex min-w-0 flex-col">
                <h3 className="text-lg leading-tight font-[var(--font-display)] font-medium text-foreground">
                  {facility.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#767d74]">
                  {facility.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
