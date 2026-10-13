"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  campInfo,
  campPackages,
  formatRupees,
  whatsappNumber,
} from "@/lib/camp-data"

const today = new Date()
const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`

function countNights(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0
  const start = new Date(`${checkIn}T12:00:00`)
  const end = new Date(`${checkOut}T12:00:00`)
  return Math.max(0, Math.round((end.getTime() - start.getTime()) / 86_400_000))
}

export function BookingCalculator({
  initialPackageId,
}: {
  initialPackageId: (typeof campPackages)[number]["id"]
}) {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(2)
  const [selectedPackageId, setSelectedPackageId] = useState(initialPackageId)

  const selectedPackage =
    campPackages.find((pkg) => pkg.id === selectedPackageId) ?? campPackages[0]
  const nights = countNights(checkIn, checkOut)
  const total = nights > 0 ? selectedPackage.price * guests * nights : 0
  const canEnquire = nights > 0 && guests > 0
  const bookingMessage = encodeURIComponent(
    `Hi! I'd like to enquire about the ${selectedPackage.name} package. Check-in: ${checkIn}, check-out: ${checkOut} (${nights} night${nights === 1 ? "" : "s"}), guests: ${guests}. Estimated total: ${formatRupees(total)}. Please confirm availability and the final price.`
  )

  return (
    <main className="min-h-screen bg-background">
      <header className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-8 lg:px-14">
        <Link
          className="flex items-center gap-2 text-xs font-[var(--font-display)] font-bold tracking-[0.12em] text-foreground no-underline sm:text-sm"
          href="/"
        >
          <span className="grid size-8 place-items-center rounded-full border border-border text-base tracking-normal">
            K
          </span>
          {campInfo.name}
        </Link>
        <Link
          className="inline-flex items-center gap-1.5 text-xs text-[#596253] no-underline transition-colors hover:text-foreground"
          href="/"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={15} /> Back to camp
        </Link>
      </header>

      <div className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8 sm:py-16 lg:px-12">
        <div className="mb-9 max-w-2xl">
          <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#8eae37]">
            Plan your stay · sample prices
          </p>
          <h1 className="text-4xl leading-[1.02] font-[var(--font-display)] font-medium sm:text-6xl">
            Choose your dates.
            <br />
            <em className="font-[var(--font-editorial)] font-normal">
              We’ll help with the rest.
            </em>
          </h1>
          <p className="mt-4 max-w-lg text-xs leading-6 text-[#767d74] sm:text-sm sm:leading-7">
            Select your dates, number of guests, and preferred package to see an
            estimated cost. Prices shown are for planning purposes only. Contact
            us to confirm availability and the final rate.
          </p>
        </div>

        <h2 className="mb-3 text-lg font-[var(--font-display)] font-medium">
          Choose a package
        </h2>
        <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-3">
          {campPackages.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id
            return (
              <label
                className={`block min-w-0 cursor-pointer rounded-none border p-2.5 transition-colors sm:p-4 ${isSelected ? "border-[#718d22] bg-[#f1f6e4]" : "border-[#dfe1d8] bg-white hover:border-[#a8b195]"}`}
                key={pkg.id}
              >
                <input
                  checked={isSelected}
                  className="sr-only"
                  name="package"
                  onChange={() => setSelectedPackageId(pkg.id)}
                  type="radio"
                  value={pkg.id}
                />
                <p className="text-[11px] font-semibold tracking-[0.1em] text-[#8eae37] uppercase sm:text-[15px] sm:tracking-[0.14em]">
                  {pkg.name}
                </p>
                <p className="mt-2 text-lg leading-tight font-[var(--font-display)] font-medium sm:text-2xl">
                  ₹{pkg.price}{" "}
                  <span className="text-[9px] font-normal text-[#767d74] sm:text-[12px]">
                    / person
                  </span>
                </p>
                <p className="mt-2 text-[10px] text-[#596253] sm:text-xs">
                  {pkg.description}
                </p>
                <p className="mt-1 text-[9px] text-[#767d74] sm:text-[10px]">
                  Sample price
                </p>
              </label>
            )
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-12">
          <form
            className="grid gap-7"
            onSubmit={(event) => event.preventDefault()}
          >
            <fieldset className="grid gap-3 border-0 p-0">
              <div className="grid gap-3">
                <div className="rounded-none border-1 border-[#718d22] border-border bg-white p-4">
                  <p className="mb-3 text-[10px] font-semibold tracking-[0.14em] text-[#8eae37] uppercase">
                    What’s included?
                  </p>
                  <p className="mb-3 text-xs text-[#596253]">
                    The {selectedPackage.name} plan includes:
                  </p>
                  <div className="mb-3 h-px w-full bg-[#dfe1d8]" />
                  <div className="grid gap-2 text-xs text-[#1d1d1d]">
                    {selectedPackage.includes.map((item) => (
                      <div className="flex items-center gap-2" key={item}>
                        <span
                          aria-hidden="true"
                          className="mt-px font-semibold text-[#718d22]"
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {selectedPackage.confirmWithCamp.length > 0 && (
                    <p className="mt-3 border-t border-[#dfe1d8] pt-3 text-[11px] leading-5 text-[#767d74]">
                      Please confirm whether{" "}
                      {selectedPackage.confirmWithCamp.join(" and ")} are also
                      included with the camp.
                    </p>
                  )}
                </div>
              </div>
            </fieldset>

            <fieldset className="grid gap-3 border-0 p-0">
              <legend className="mb-3 text-lg font-[var(--font-display)] font-medium">
                2. Select your dates
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-2 text-[10px] font-semibold tracking-[0.12em] text-[#646b61] uppercase">
                  <span>Check-in</span>
                  <span className="text-[10px] font-normal tracking-normal text-[#767d74] normal-case">
                    When will you arrive?
                  </span>
                  <input
                    className="h-12 w-full rounded-none border border-border bg-white px-3 text-sm font-normal tracking-normal text-foreground outline-none focus:border-[#718d22] focus:ring-2 focus:ring-[#c7f34b]/50"
                    min={localDate}
                    onChange={(event) => {
                      setCheckIn(event.target.value)
                      if (checkOut && event.target.value >= checkOut)
                        setCheckOut("")
                    }}
                    required
                    type="date"
                    value={checkIn}
                  />
                </label>
                <label className="grid gap-2 text-[10px] font-semibold tracking-[0.12em] text-[#646b61] uppercase">
                  <span>Check-out</span>
                  <span className="text-[10px] font-normal tracking-normal text-[#767d74] normal-case">
                    When will you leave?
                  </span>
                  <input
                    className="h-12 w-full rounded-none border border-border bg-white px-3 text-sm font-normal tracking-normal text-foreground outline-none focus:border-[#718d22] focus:ring-2 focus:ring-[#c7f34b]/50"
                    min={checkIn || localDate}
                    onChange={(event) => setCheckOut(event.target.value)}
                    required
                    type="date"
                    value={checkOut}
                  />
                </label>
              </div>
            </fieldset>

            <div className="w-full max-w-none">
              <label
                className="mb-2 block text-[10px] font-semibold tracking-[0.12em] text-[#646b61] uppercase"
                htmlFor="guest-count"
              >
                Guests
              </label>
              <div className="flex w-full items-stretch overflow-hidden border border-border bg-white">
                <button
                  aria-label="Decrease guest count"
                  className="grid h-12 w-12 shrink-0 place-items-center border-r border-border bg-[#f5f5f1] text-xl text-foreground transition-colors hover:bg-[#ecece5]"
                  onClick={(event) => {
                    event.preventDefault()
                    setGuests((current) => Math.max(1, current - 1))
                  }}
                  type="button"
                >
                  −
                </button>
                <input
                  className="h-12 w-full border-0 bg-white px-3 text-center text-sm font-normal tracking-normal text-foreground outline-none focus:outline-none"
                  id="guest-count"
                  max="30"
                  min="1"
                  onChange={(event) =>
                    setGuests(Math.max(1, Number(event.target.value) || 1))
                  }
                  required
                  type="number"
                  value={guests}
                />
                <button
                  aria-label="Increase guest count"
                  className="grid h-12 w-12 shrink-0 place-items-center border-l border-border bg-[#f5f5f1] text-xl text-foreground transition-colors hover:bg-[#ecece5]"
                  onClick={(event) => {
                    event.preventDefault()
                    setGuests((current) => Math.min(30, current + 1))
                  }}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </form>

          <aside
            aria-live="polite"
            className="border border-[#dfe1d8] bg-[#f1f6e4] p-5 sm:p-7 lg:sticky lg:top-6"
          >
            <p className="text-[9px] font-semibold tracking-[0.15em] text-[#657b2c] uppercase">
              Your estimate · sample prices
            </p>
            <h2 className="mt-3 text-2xl font-[var(--font-display)] font-medium">
              Stay summary
            </h2>
            <dl className="mt-6 grid gap-4 border-y border-[#d7dfc7] py-5 text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-[#767d74]">Package</dt>
                <dd className="m-0 text-right font-medium">
                  {selectedPackage.name}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#767d74]">Dates</dt>
                <dd className="m-0 text-right font-medium">
                  {checkIn || "Select check-in"}
                  {checkOut ? ` – ${checkOut}` : ""}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#767d74]">Duration</dt>
                <dd className="m-0 text-right font-medium">
                  {nights > 0
                    ? `${nights} night${nights === 1 ? "" : "s"}`
                    : "Select valid dates"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#767d74]">Guests</dt>
                <dd className="m-0 text-right font-medium">{guests}</dd>
              </div>
            </dl>
            <div className="flex items-end justify-between gap-3 pt-5">
              <span className="text-xs text-[#596253]">Estimated total</span>
              <strong className="text-3xl font-[var(--font-display)] font-medium">
                {formatRupees(total)}
              </strong>
            </div>
            <p className="mt-2 text-right text-[10px] leading-5 text-[#767d74]">
              {canEnquire
                ? `${formatRupees(selectedPackage.price)} × ${guests} guests × ${nights} night${nights === 1 ? "" : "s"}`
                : "Choose valid check-in and check-out dates to calculate."}
            </p>
            {canEnquire ? (
              <a
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-5 text-xs font-semibold text-primary-foreground no-underline transition-colors hover:bg-primary/90"
                href={`https://wa.me/${whatsappNumber}?text=${bookingMessage}`}
                rel="noreferrer"
                target="_blank"
              >
                Ask about this stay{" "}
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </a>
            ) : (
              <span className="mt-6 inline-flex min-h-12 w-full items-center justify-center border border-[#d7dfc7] px-5 text-xs font-semibold text-[#858b81]">
                Select dates to continue
              </span>
            )}
            <p className="mt-4 text-center text-[10px] leading-5 text-[#767d74]">
              This is an estimate based on sample prices, not a confirmed quote.
              The dates shown are examples and do not indicate actual operating
              dates or availability. Confirm your dates, package inclusions, and
              final price with the camp before making travel arrangements.
            </p>
          </aside>
        </div>
      </div>
    </main>
  )
}
