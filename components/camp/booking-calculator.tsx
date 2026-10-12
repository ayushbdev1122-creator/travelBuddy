'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { dateBasedRates, formatRupees, getDateRatePeriod, getStayRate, stayRates, whatsappNumber } from '@/lib/camp-data'

const today = new Date()
const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

function countNights(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0
  const start = new Date(`${checkIn}T12:00:00`)
  const end = new Date(`${checkOut}T12:00:00`)
  return Math.max(0, Math.round((end.getTime() - start.getTime()) / 86_400_000))
}

function getNightDate(checkIn: string, nightIndex: number) {
  const date = new Date(`${checkIn}T12:00:00`)
  date.setDate(date.getDate() + nightIndex)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function BookingCalculator() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [stayId, setStayId] = useState<(typeof stayRates)[number]['id']>('shared')

  const selectedStay = stayRates.find((rate) => rate.id === stayId) ?? stayRates[0]
  const nights = countNights(checkIn, checkOut)
  const tentCount = Math.ceil(guests / selectedStay.capacity)
  const billableUnits = selectedStay.pricingUnit === 'guest' ? guests : tentCount
  const nightlyRates = Array.from({ length: nights }, (_, nightIndex) => {
    const date = getNightDate(checkIn, nightIndex)
    return { rate: getStayRate(selectedStay.id, date), period: getDateRatePeriod(date) }
  })
  const total = nightlyRates.reduce((sum, night) => sum + night.rate * billableUnits, 0)
  const standardNights = nightlyRates.filter((night) => night.period === dateBasedRates[0]).length
  const peakNights = nightlyRates.filter((night) => night.period === dateBasedRates[1]).length
  const standardRate = dateBasedRates[0].rates[selectedStay.id]
  const peakRate = dateBasedRates[1].rates[selectedStay.id]
  const canEnquire = nights > 0 && guests > 0
  const bookingMessage = encodeURIComponent(
    `Hi! I'd like to ask about a ${selectedStay.name.toLowerCase()} stay. Check-in: ${checkIn}, check-out: ${checkOut} (${nights} night${nights === 1 ? '' : 's'}), guests: ${guests}. Sample estimate using date-based demo rates: ${formatRupees(total)} (${standardNights} standard-rate nights, ${peakNights} peak-rate nights). Please confirm availability and the final price.`,
  )

  return (
    <main className="min-h-screen bg-background">
      <header className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-8 lg:px-14">
        <Link className="flex items-center gap-2 font-[var(--font-display)] text-xs font-bold tracking-[0.12em] text-foreground no-underline sm:text-sm" href="/">
          <span className="grid size-8 place-items-center rounded-full border border-border text-base tracking-normal">K</span>
          Kedarnath Camp
        </Link>
        <Link className="inline-flex items-center gap-1.5 text-xs text-[#596253] no-underline transition-colors hover:text-foreground" href="/">
          <HugeiconsIcon icon={ArrowLeft01Icon} size={15} /> Back to camp
        </Link>
      </header>

      <div className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8 sm:py-16 lg:px-12">
        <div className="mb-9 max-w-2xl">
          <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#8eae37]">Plan your stay · sample estimate</p>
          <h1 className="font-[var(--font-display)] text-4xl leading-[1.02] font-medium sm:text-6xl">Your dates,<br /><em className="font-[var(--font-editorial)] font-normal">your mountain stay.</em></h1>
          <p className="mt-4 max-w-lg text-xs leading-6 text-[#767d74] sm:text-sm sm:leading-7">Choose dates and group size to see an estimated total. These demo rates are for planning only; availability and final prices must be confirmed with the camp.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-12">
          <form className="grid gap-7" onSubmit={(event) => event.preventDefault()}>
            <fieldset className="grid gap-3 border-0 p-0">
              <legend className="mb-3 font-[var(--font-display)] text-lg font-medium">1. Choose your stay</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {stayRates.map((rate) => {
                  const isSelected = stayId === rate.id
                  const ratePrice = dateBasedRates[0].rates[rate.id]
                  return (
                    <label className={`relative flex cursor-pointer flex-col border p-4 transition-colors ${isSelected ? 'border-[#718d22] bg-[#f1f6e4]' : 'border-border bg-white hover:border-[#a8b195]'}`} key={rate.id}>
                      <input checked={isSelected} className="sr-only" name="stay" onChange={() => setStayId(rate.id)} type="radio" value={rate.id} />
                      <span className="flex items-start justify-between gap-3">
                        <span>
                          <strong className="block font-[var(--font-display)] text-lg font-medium">{rate.name}</strong>
                          <span className="mt-1 block text-[11px] text-[#767d74]">{rate.capacityLabel}</span>
                        </span>
                        <span aria-hidden="true" className={`mt-1 grid size-4 shrink-0 place-items-center rounded-full border ${isSelected ? 'border-[#718d22]' : 'border-[#c7cbc0]'}`}>
                          {isSelected && <span className="size-2 rounded-full bg-[#718d22]" />}
                        </span>
                      </span>
                      <span className="mt-5 font-[var(--font-display)] text-2xl font-medium">{formatRupees(ratePrice)}<span className="ml-1 font-[var(--font-body)] text-[10px] font-normal text-[#767d74]">/ {rate.pricingUnit} / night</span></span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <fieldset className="grid gap-3 border-0 p-0">
              <legend className="mb-3 font-[var(--font-display)] text-lg font-medium">2. Select your dates</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-2 text-[10px] font-semibold tracking-[0.12em] text-[#646b61] uppercase">
                  Check-in
                  <input className="h-12 w-full rounded-none border border-border bg-white px-3 text-sm font-normal tracking-normal text-foreground outline-none focus:border-[#718d22] focus:ring-2 focus:ring-[#c7f34b]/50" min={localDate} onChange={(event) => { setCheckIn(event.target.value); if (checkOut && event.target.value >= checkOut) setCheckOut('') }} required type="date" value={checkIn} />
                </label>
                <label className="grid gap-2 text-[10px] font-semibold tracking-[0.12em] text-[#646b61] uppercase">
                  Check-out
                  <input className="h-12 w-full rounded-none border border-border bg-white px-3 text-sm font-normal tracking-normal text-foreground outline-none focus:border-[#718d22] focus:ring-2 focus:ring-[#c7f34b]/50" min={checkIn || localDate} onChange={(event) => setCheckOut(event.target.value)} required type="date" value={checkOut} />
                </label>
              </div>
            </fieldset>

            <p className="-mt-4 text-[10px] leading-5 text-[#858b81]">Demo rate windows: standard {dateBasedRates[0].startDate}–{dateBasedRates[0].endDate}; peak {dateBasedRates[1].startDate}–{dateBasedRates[1].endDate}. Dates outside these windows use the standard demo rate.</p>

            <label className="grid max-w-sm gap-2 text-[10px] font-semibold tracking-[0.12em] text-[#646b61] uppercase" htmlFor="guest-count">
              Guests
              <input className="h-12 w-full rounded-none border border-border bg-white px-3 text-sm font-normal tracking-normal text-foreground outline-none focus:border-[#718d22] focus:ring-2 focus:ring-[#c7f34b]/50" id="guest-count" max="30" min="1" onChange={(event) => setGuests(Number(event.target.value))} required type="number" value={guests} />
            </label>
          </form>

          <aside aria-live="polite" className="border border-[#dfe1d8] bg-[#f1f6e4] p-5 sm:p-7 lg:sticky lg:top-6">
            <p className="text-[9px] font-semibold tracking-[0.15em] text-[#657b2c] uppercase">Your estimate · demo only</p>
            <h2 className="mt-3 font-[var(--font-display)] text-2xl font-medium">Stay summary</h2>
            <dl className="mt-6 grid gap-4 border-y border-[#d7dfc7] py-5 text-xs">
              <div className="flex justify-between gap-4"><dt className="text-[#767d74]">Stay</dt><dd className="m-0 text-right font-medium">{selectedStay.name}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-[#767d74]">Dates</dt><dd className="m-0 text-right font-medium">{checkIn || 'Select check-in'}{checkOut ? ` – ${checkOut}` : ''}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-[#767d74]">Duration</dt><dd className="m-0 text-right font-medium">{nights > 0 ? `${nights} night${nights === 1 ? '' : 's'}` : 'Select valid dates'}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-[#767d74]">Guests</dt><dd className="m-0 text-right font-medium">{guests}</dd></div>
              {standardNights > 0 && <div className="flex justify-between gap-4"><dt className="text-[#767d74]">Standard-rate nights</dt><dd className="m-0 text-right font-medium">{standardNights}</dd></div>}
              {peakNights > 0 && <div className="flex justify-between gap-4"><dt className="text-[#767d74]">Peak-rate nights</dt><dd className="m-0 text-right font-medium">{peakNights}</dd></div>}
              {selectedStay.pricingUnit === 'tent' && <div className="flex justify-between gap-4"><dt className="text-[#767d74]">Tents required</dt><dd className="m-0 text-right font-medium">{tentCount}</dd></div>}
            </dl>
            <div className="flex items-end justify-between gap-3 pt-5">
              <span className="text-xs text-[#596253]">Estimated total</span>
              <strong className="font-[var(--font-display)] text-3xl font-medium">{formatRupees(total)}</strong>
            </div>
            <p className="mt-2 text-right text-[10px] leading-5 text-[#767d74]">{canEnquire ? `${standardNights ? `${formatRupees(standardRate)} × ${billableUnits} × ${standardNights} standard night${standardNights === 1 ? '' : 's'}` : ''}${standardNights && peakNights ? ' + ' : ''}${peakNights ? `${formatRupees(peakRate)} × ${billableUnits} × ${peakNights} peak night${peakNights === 1 ? '' : 's'}` : ''}` : 'Choose valid check-in and check-out dates to calculate.'}</p>
            {canEnquire ? (
              <a className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-5 text-xs font-semibold text-primary-foreground no-underline transition-colors hover:bg-primary/90" href={`https://wa.me/${whatsappNumber}?text=${bookingMessage}`} rel="noreferrer" target="_blank">
                Ask about this stay <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </a>
            ) : (
              <span className="mt-6 inline-flex min-h-12 w-full items-center justify-center border border-[#d7dfc7] px-5 text-xs font-semibold text-[#858b81]">Select dates to continue</span>
            )}
            <p className="mt-4 text-[10px] leading-5 text-[#767d74]">These date bands and prices are placeholders, not confirmed operating dates or a quote. Confirm availability, inclusions, and final rates with the camp.</p>
          </aside>
        </div>
      </div>
    </main>
  )
}