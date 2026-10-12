import type { Metadata } from 'next'
import { BookingCalculator } from '@/components/camp/booking-calculator'

export const metadata: Metadata = {
  title: 'Estimate Your Stay | Kedarnath Camp',
  description: 'Choose dates, guests, and a stay option to calculate a sample Kedarnath camp estimate.',
}

export default function BookingPage() {
  return <BookingCalculator />
}