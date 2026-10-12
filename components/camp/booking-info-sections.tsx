import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import Link from 'next/link'
import { dateBasedRates, formatRupees, stayRates } from '@/lib/camp-data'

const sampleFaqs = [
  {
    question: 'How do I check dates and book a stay?',
    answer: 'Send us your dates and group size on WhatsApp. We will confirm availability and the final rate before you make a booking.',
  },
  {
    question: 'Are the prices per person or per tent?',
    answer: 'The shared-tent example is priced per guest, while the private-tent example is priced per tent, per night. These are demo prices only and must be confirmed with the camp.',
  },
  {
    question: 'How many guests can stay in a tent?',
    answer: 'For this sample listing, shared tents fit 2–3 guests and a private tent fits up to 3. Ask the camp to confirm the actual tent layout for your dates.',
  },
  {
    question: 'What is included in the sample rate?',
    answer: 'The example rate assumes a tent stay, bedding, and access to hot water. Meals, heating, and other facilities should be confirmed before booking.',
  },
  {
    question: 'Do rates change during peak yatra dates?',
    answer: 'They may. The sample peak-season rates shown here are ₹1,900 per guest for a shared tent and ₹5,000 per private tent, per night. Confirm dates and final pricing directly with the camp.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Cancellation and refund terms are not set in this demo. Please ask for the camp’s current policy before confirming your stay.',
  },
]

export function RatesSection() {
  return (
    <section className="border-y border-border bg-[#f5f6f0] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24" id="rates">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#8eae37]">Sample rates · demo only</p>
            <h2 className="font-[var(--font-display)] text-4xl leading-none font-medium sm:text-5xl lg:text-6xl">
              Choose your <em className="font-[var(--font-editorial)] font-normal">stay.</em>
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-6 text-[#767d74] sm:text-sm">
            Example prices for layout preview. Confirm actual rates, inclusions, and operating dates with the camp.
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {stayRates.map((rate) => (
            <Link aria-label={`Calculate a ${rate.name.toLowerCase()} stay`} className="group flex flex-col border border-[#e2e5dc] bg-white p-5 text-foreground no-underline transition-colors hover:border-[#8eae37] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#718d22] sm:p-7" href="/booking" key={rate.name}>
              <article className="flex h-full flex-col">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <h3 className="font-[var(--font-display)] text-2xl font-medium">{rate.name}</h3>
                    <p className="mt-2 text-xs text-[#767d74]">{rate.capacityLabel}</p>
                  </div>
                  <p className="m-0 text-right">
                    <strong className="block font-[var(--font-display)] text-3xl font-medium">{formatRupees(dateBasedRates[0].rates[rate.id])}</strong>
                    <span className="text-[10px] text-[#767d74]">per {rate.pricingUnit} / night</span>
                  </p>
                </div>
                <p className="mt-4 text-xs leading-5 text-[#767d74]">{rate.id === 'shared' ? 'A simple shared stay for your mountain visit.' : 'A tent reserved for your group.'}</p>
                <p className="mt-4 text-[9px] font-semibold tracking-[0.12em] text-[#596253] uppercase">Example inclusions</p>
                <ul className="mt-2 grid gap-2 text-xs text-foreground sm:grid-cols-2">
                  <li>Tent and bedding</li>
                  <li>Hot-water access</li>
                  <li>Heating, subject to availability</li>
                  <li>Meals to be confirmed</li>
                </ul>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#596d30] group-hover:text-foreground">Choose this stay <HugeiconsIcon icon={ArrowUpRight01Icon} size={15} /></span>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <Link className="inline-flex min-h-11 items-center justify-center gap-2 bg-primary px-5 text-xs font-semibold text-primary-foreground no-underline transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#718d22]" href="/booking">
            Calculate your stay <HugeiconsIcon icon={ArrowUpRight01Icon} size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-14 lg:py-24" id="faq">
      <div>
        <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#8eae37]">Before you enquire</p>
        <h2 className="font-[var(--font-display)] text-4xl leading-none font-medium sm:text-5xl lg:text-6xl">
          A few useful <em className="font-[var(--font-editorial)] font-normal">answers.</em>
        </h2>
        <p className="mt-5 max-w-sm text-xs leading-6 text-[#767d74] sm:text-sm sm:leading-7">
          These answers are placeholders for the demo. Confirm all stay details with the camp before travelling.
        </p>
      </div>

      <div className="border-t border-border">
        {sampleFaqs.map((faq) => (
          <details className="group border-b border-border" key={faq.question}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-[var(--font-display)] text-base font-medium marker:hidden sm:text-lg">
              <span>{faq.question}</span>
              <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-border text-lg leading-none text-[#596253] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-2xl pb-5 pr-10 text-xs leading-6 text-[#767d74] sm:text-sm">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}