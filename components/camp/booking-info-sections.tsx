import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"
import { campPackages, formatRupees } from "@/lib/camp-data"

const sampleFaqs = [
  {
    question: "How do I check dates and book a stay?",
    answer:
      "Send us your check-in date, check-out date, and group size on WhatsApp. We’ll let you know whether we have space and confirm the price before you book.",
  },
  {
    question: "Are the prices per person or per package?",
    answer:
      "The sample EP, CP, and AP prices shown here are per person. Please confirm the actual rate for your dates and group size directly with the camp.",
  },
  {
    question: "What is included in each package?",
    answer: campPackages
      .map((pkg) => {
        const included = pkg.includes
          .join(", ")
          .replace(/, ([^,]*)$/, ", and $1")
        const confirmation = pkg.confirmWithCamp?.length
          ? ` Please confirm whether ${pkg.confirmWithCamp.join(" and ").toLowerCase()} are also included.`
          : ""
        return `${pkg.name} includes ${included}.${confirmation}`
      })
      .join(" "),
  },
  {
    question: "Do rates change during peak yatra dates?",
    answer:
      "Rates and availability may vary with your travel dates and demand. Contact us with your dates for the applicable price.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Please ask us about the cancellation and refund policy before confirming your booking. The policy has not yet been specified on this website.",
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
              Stay options · sample rates
            </p>
            <h2 className="text-4xl leading-none font-[var(--font-display)] font-medium sm:text-5xl lg:text-6xl">
              Choose the plan
              <br />
              that suits you.
            </h2>
          </div>
        </div>

        <div className="grid items-stretch gap-4 md:grid-cols-3">
          {campPackages.map((pkg) => (
            <article
              className="relative flex min-w-0 flex-col rounded-none border border-[#dfe1d8] bg-white p-5 text-foreground sm:p-6"
              key={pkg.id}
            >
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
              <p className="mt-2 text-xs text-[#596253]">{pkg.description}</p>
              <Link
                aria-label={`Choose the ${pkg.name} package`}
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-none border border-[#cdd1c7] bg-white px-4 text-xs font-semibold text-foreground no-underline transition-colors hover:border-[#8eae37] hover:bg-[#f7f9f1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#718d22]"
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
          <p className="mx-auto max-w-2xl text-xs leading-6 text-[#767d74]">
            Check the inclusions for each plan before choosing. Actual rates,
            meal arrangements, and availability must be confirmed with the camp.
          </p>
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
          Before you arrive
        </p>
        <h2 className="text-4xl leading-none font-[var(--font-display)] font-medium sm:text-5xl lg:text-6xl">
          Questions before
          <br />
          you book?
        </h2>
        <p className="mt-5 max-w-sm text-xs leading-6 text-[#767d74] sm:text-sm sm:leading-7">
          Here are a few things you may want to know before planning your stay.
          Please contact the camp to confirm the latest details.
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
