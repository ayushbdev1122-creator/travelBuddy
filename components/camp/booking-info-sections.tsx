import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"
import { campPackages, formatRupees } from "@/lib/camp-data"

const sharedInclusions = campPackages[0].includes.filter((inclusion) =>
  campPackages.every((pkg) => pkg.includes.includes(inclusion))
)

const sampleFaqs = [
  {
    question: "How do I check dates and book a stay?",
    answer:
      "Send us your dates and group size on WhatsApp. We will confirm availability and the final rate before you make a booking.",
  },
  {
    question: "Are the prices per person or per package?",
    answer:
      "The EP, CP, and AP plans are all priced per person. These are sample package rates and should be confirmed with the camp before booking.",
  },
  {
    question: "What is included in the package?",
    answer:
      "Each package includes the stay features shown on the page. EP includes heater and hot water for drinking, CP adds bathing water and dinner, while AP includes welcome tea, bathing water, and dinner plus breakfast.",
  },
  {
    question: "Do rates change during peak yatra dates?",
    answer:
      "The current page uses package-based demo pricing and should be confirmed directly with the camp for the exact dates of your stay.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellation and refund terms are not set in this demo. Please ask for the camp’s current policy before confirming your stay.",
  },
]

export function RatesSection() {
  return (
    <section
      className="border-y border-border bg-[#f5f6f0] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
      id="rates"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#8eae37]">
              Sample rates · demo only
            </p>
            <h2 className="text-4xl leading-none font-[var(--font-display)] font-medium sm:text-5xl lg:text-6xl">
              Choose your{" "}
              <em className="font-[var(--font-editorial)] font-normal">
                stay.
              </em>
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-6 text-[#767d74] sm:text-sm">
            Example prices for layout preview. Confirm actual rates, inclusions,
            and operating dates with the camp.
          </p>
        </div>

        <div className="grid items-stretch gap-4 md:grid-cols-3">
          {campPackages.map((pkg) => (
            <article
              className={`relative flex min-w-0 flex-col rounded-none border bg-white p-5 text-foreground sm:p-6 ${pkg.id === "cp" ? "border-2 border-[#8eae37] border-border md:-translate-y-1" : "border-[#dfe1d8]"}`}
              key={pkg.id}
            >
              {pkg.id === "cp" && (
                <span className="absolute -top-3 right-5 rounded-full border border-[#b9d58a] bg-[#f1f6e4] px-3 py-1 text-[10px] font-semibold text-[#596d30]">
                  Most popular
                </span>
              )}
              <div className="flex min-h-10 items-start justify-between gap-3">
                <h3 className="text-2xl font-[var(--font-display)] font-medium">
                  {pkg.name}
                </h3>
              </div>
              <p className="mt-5 flex items-baseline gap-2">
                <strong className="text-4xl font-[var(--font-display)] font-medium sm:text-[42px]">
                  {formatRupees(pkg.price)}
                </strong>
                <span className="text-xs leading-5 text-[#767d74]">
                  per person
                </span>
              </p>
              <Link
                aria-label={`Choose the ${pkg.name} package`}
                className={`mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-none px-4 text-xs font-semibold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#718d22] ${pkg.id === "cp" ? "bg-primary text-primary-foreground hover:bg-primary/85" : "border border-[#cdd1c7] bg-white text-foreground hover:border-[#8eae37] hover:bg-[#f7f9f1]"}`}
                href={`/booking?package=${pkg.id}`}
              >
                Choose {pkg.name}{" "}
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={15} />
              </Link>
              <ul className="mt-6 grid flex-1 content-start gap-3 border-t border-border pt-5 text-xs leading-5 text-foreground">
                {pkg.includes.map((item) => (
                  <li className="flex items-start gap-2.5" key={item}>
                    <span
                      aria-hidden="true"
                      className="mt-px font-semibold text-[#718d22]"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-7 border-t border-border pt-6 text-center">
          <p className="mb-4 text-[10px] font-semibold text-[#596253]">
            Included with every package
          </p>
          <ul className="m-0 flex list-none flex-wrap justify-center gap-2 p-0">
            {sharedInclusions.map((inclusion) => (
              <li
                className="rounded-full bg-[#eeefe8] px-4 py-2 text-xs text-foreground"
                key={inclusion}
              >
                {inclusion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section
      className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-14 lg:py-24"
      id="faq"
    >
      <div>
        <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#8eae37]">
          Before you enquire
        </p>
        <h2 className="text-4xl leading-none font-[var(--font-display)] font-medium sm:text-5xl lg:text-6xl">
          A few useful{" "}
          <em className="font-[var(--font-editorial)] font-normal">answers.</em>
        </h2>
        <p className="mt-5 max-w-sm text-xs leading-6 text-[#767d74] sm:text-sm sm:leading-7">
          These answers are placeholders for the demo. Confirm all stay details
          with the camp before travelling.
        </p>
      </div>

      <div className="border-t border-border">
        {sampleFaqs.map((faq) => (
          <details className="group border-b border-border" key={faq.question}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-base font-[var(--font-display)] font-medium marker:hidden sm:text-lg">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="grid size-7 shrink-0 place-items-center rounded-full border border-border text-lg leading-none text-[#596253] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-2xl pr-10 pb-5 text-xs leading-6 text-[#767d74] sm:text-sm">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
