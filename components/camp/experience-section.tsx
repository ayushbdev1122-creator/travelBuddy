import { galleryPhotos, locationUrl } from "@/lib/camp-data"

export function ExperienceSection() {
  return (
    <section
      className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(260px,0.72fr)_1.5fr] lg:gap-14 lg:px-14 lg:py-28"
      id="experience"
    >
      <div className="flex flex-col items-start">
        <p className="mb-4 text-[10px] font-semibold tracking-[0.16em] text-[#8eae37]">
          What the stay is like
        </p>
        <h2 className="text-5xl leading-[0.98] font-[var(--font-display)] font-medium sm:text-6xl">
          A place to rest
          <br />
          <em className="font-[var(--font-editorial)] font-normal">
            after the journey.
          </em>
        </h2>
        <p className="mt-5 max-w-sm text-xs leading-6 text-[#767d74] sm:text-sm sm:leading-7">
          Take a look inside the tents and see where you’ll be staying. Nights
          in Kedarnath can be cold, so carry warm clothing and check local
          weather and travel conditions before setting out.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-y border-border py-3 text-[9px] font-medium tracking-[0.1em] text-[#596253] uppercase">
          <span>Tented stay</span>
          <span>Mountain</span>
          <span>Kedarnath</span>
        </div>
        <a
          className="group relative mt-6 block aspect-[16/8] w-full overflow-hidden rounded-md bg-cover bg-center"
          href={locationUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="View Kedarnath on Google Maps"
          style={{
            backgroundImage: 'url("/camp-photos/kedarnath-temple.jpeg")',
          }}
        >
          <span className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-3 left-4 text-[9px] font-medium tracking-[0.14em] text-white uppercase">
            Kedarnath, Uttarakhand
          </span>
        </a>
      </div>

      <div className="grid min-h-[480px] auto-rows-[145px] grid-cols-2 gap-2 sm:auto-rows-[175px] sm:gap-3 lg:min-h-[590px] lg:auto-rows-[1fr] lg:grid-cols-3">
        {galleryPhotos.map((photo, index) => (
          <figure
            className={`group relative isolate m-0 min-w-0 overflow-hidden rounded-md bg-cover bg-center ${photo.layout} ${index === 1 ? "bg-[center_72%]" : ""}`}
            key={photo.image}
            style={{ backgroundImage: `url("${photo.image}")` }}
          >
            <span className="absolute inset-0 -z-10 bg-linear-to-t from-black/55 to-transparent" />
            <figcaption className="absolute inset-x-3 bottom-3 text-[8px] font-medium tracking-[0.12em] text-white uppercase sm:inset-x-4 sm:bottom-4">
              {photo.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
