export const locationUrl = 'https://maps.app.goo.gl/X19d6zzUb6sPfvvs8?g_st=aw'
export const whatsappNumber = '919876543210'
export const whatsappMessage = encodeURIComponent("Hi! I'm interested in staying at your Kedarnath camp. Could you share details about the stay and available dates?")
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

export const stayRates = [
  {
    id: 'shared',
    name: 'Shared tent',
    pricingUnit: 'guest',
    capacity: 3,
    capacityLabel: '2–3 guests per tent',
  },
  {
    id: 'private',
    name: 'Private tent',
    pricingUnit: 'tent',
    capacity: 3,
    capacityLabel: 'Up to 3 guests per tent',
  },
] as const

export const dateBasedRates = [
  {
    label: 'Standard season',
    startDate: '2027-05-01',
    endDate: '2027-05-14',
    rates: { shared: 500, private: 700 },
  },
  {
    label: 'Peak Yatra season',
    startDate: '2027-05-15',
    endDate: '2027-06-30',
    rates: { shared: 700, private: 1000 },
  },
] as const

export function getDateRatePeriod(date: string) {
  return dateBasedRates.find((period) => date >= period.startDate && date <= period.endDate) ?? dateBasedRates[0]
}

export function getStayRate(stayId: (typeof stayRates)[number]['id'], date: string) {
  return getDateRatePeriod(date).rates[stayId]
}

export const formatRupees = (amount: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)

export const campPhotos = [
  { label: 'The mountain-facing tent', detail: 'At camp', image: '/camp-photos/mountain-tent.jpeg', layout: 'lg:col-start-1 lg:row-start-1 lg:row-span-2' },
  { label: 'A place to settle in', detail: 'Tent stay', image: '/camp-photos/tent-opening.jpeg', layout: 'lg:col-start-2 lg:row-start-1' },
  { label: 'Bedding for the night', detail: 'Inside the tent', image: '/camp-photos/tent-bedding.jpeg', layout: 'lg:col-start-3 lg:row-start-1' },
  { label: 'Room to rest', detail: 'Camp interior', image: '/camp-photos/sleeping-bags.jpeg', layout: 'lg:col-start-2 lg:row-start-2' },
  { label: 'A warm tent at dusk', detail: 'At camp', image: '/camp-photos/orange-tent.jpeg', layout: 'lg:col-span-2 lg:col-start-1 lg:row-start-3' },
  { label: 'Kedarnath Temple', detail: 'Kedarnath, Uttarakhand', image: '/camp-photos/kedarnath-temple.jpeg', layout: 'lg:col-start-3 lg:row-start-2 lg:row-span-2' },
]

export const galleryPhotos = [
  { label: 'Mountain-facing tent', image: '/camp-photos/mountain-tent.jpeg', layout: 'col-span-2' },
  { label: 'Kedarnath Temple', image: '/camp-photos/kedarnath-temple.jpeg', layout: 'row-span-2' },
  { label: 'Tent bedding', image: '/camp-photos/tent-bedding.jpeg', layout: '' },
  { label: 'A place to rest', image: '/camp-photos/tent-interior.jpeg', layout: '' },
  { label: 'Inside the camp', image: '/camp-photos/orange-tent.jpeg', layout: 'col-span-2' },
  { label: 'Sleeping bags', image: '/camp-photos/sleeping-bags.jpeg', layout: '' },
]
