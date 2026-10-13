import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons"
import { campPhotos } from "@/lib/camp-data"

export function StaySection() {
  return (
    <section
      className="bg-primary py-14 text-primary-foreground sm:py-20"
      id="stay"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="mb-7 flex flex-col justify-between gap-5 sm:mb-9 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#465627]">
              Take a look around
            </p>
            <h2 className="text-4xl leading-none font-[var(--font-display)] font-medium sm:text-5xl lg:text-6xl">
              A closer look
              <br />
              <em className="font-[var(--font-editorial)] font-normal">
                at the camp.
              </em>
            </h2>
          </div>
        </div>

        <div className="grid auto-rows-[150px] grid-cols-2 gap-2.5 sm:auto-rows-[190px] sm:gap-3 lg:auto-rows-[190px] lg:grid-cols-3 lg:gap-4">
          {campPhotos.map((photo, index) => (
            <a
              aria-label={`${photo.label}, view camp gallery`}
              className={`group relative isolate min-w-0 overflow-hidden rounded-md bg-cover bg-center text-white ${photo.layout} ${index === 5 ? "bg-[center_72%]" : ""}`}
              href="#experience"
              key={photo.image}
              style={{ backgroundImage: `url("${photo.image}")` }}
            >
              <span className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/10 to-black/10 transition-colors group-hover:from-black/85" />
              <span className="absolute top-3 left-3 text-[9px] tracking-[0.16em] text-white/85">
                0{index + 1}
              </span>
              <span className="absolute top-2.5 right-2.5 grid size-8 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </span>
              <span className="absolute inset-x-3 bottom-3 flex flex-col gap-1 sm:inset-x-4 sm:bottom-4">
                <strong className="text-sm leading-tight font-[var(--font-display)] font-medium sm:text-lg">
                  {photo.label}
                </strong>
                <small className="text-[8px] tracking-[0.12em] text-white/75 uppercase">
                  {photo.detail}
                </small>
              </span>
            </a>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-xs text-[#344321]">
          <span className="text-lg font-[var(--font-display)] font-bold">
            K
          </span>
          <span>Kedarnath, Uttarakhand</span>
          <a
            className="ml-auto inline-flex items-center gap-2 font-semibold"
            href="#location"
          >
            Find the camp <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
