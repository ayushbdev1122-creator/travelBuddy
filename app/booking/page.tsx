import type { Metadata } from "next"
import { BookingCalculator } from "@/components/camp/booking-calculator"
import { campInfo, campPackages } from "@/lib/camp-data"

export const metadata: Metadata = {
  title: `Estimate Your Stay | ${campInfo.name}`,
  description: `Choose your dates, group size, and package to estimate the cost of your stay at ${campInfo.name}. Contact us to confirm availability and final rates.`,
}

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ package?: string | string[] }>
}) {
  const { package: packageParam } = await searchParams
  const initialPackageId =
    campPackages.find((pkg) => pkg.id === packageParam)?.id ??
    campPackages[0].id

  return <BookingCalculator initialPackageId={initialPackageId} />
}
