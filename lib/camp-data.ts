export const locationUrl = 'https://maps.app.goo.gl/X19d6zzUb6sPfvvs8?g_st=aw'
export const whatsappNumber = '919876543210'
export const whatsappMessage = encodeURIComponent("Hi! I'm interested in staying at your Kedarnath camp. Could you share details about the stay and available dates?")
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

export const campInfo = {
  name: 'Kedarnath Camp',
  slug: 'kedarnath-camp',
  location: 'Kedarnath, Uttarakhand, India',
  coordinates: '30.7321° N · 79.0656° E',
  tagline: 'A tent stay in the Himalaya',
  heroTitle: 'Rest easy',
  heroTitleAccent: 'at Kedarnath.',
  subtitle: 'A quiet place to pause, breathe mountain air, and wake up close to the trail.',
  nearbyPlaces: [
    { label: 'Temple', value: '200 metres away' },
    { label: 'Market', value: '100 metres away' },
    { label: 'Famous spot', value: 'Hanuman Mandir near the Astha Path, close to the mandir darshan line' },
  ],
} as const

export const campPackages = [
  {
    id: 'ep',
    name: 'EP',
    price: 500,
    includes: ['heater inside camp', 'hot water for drinking purpose'],
  },
  {
    id: 'cp',
    name: 'CP',
    price: 800,
    includes: ['heater inside camp', 'hot water for drinking purpose', 'hot water for bathing purpose', 'one time meal (dinner)'],
  },
  {
    id: 'ap',
    name: 'AP',
    price: 1100,
    includes: ['welcome tea', 'heater inside camp', 'hot water for drinking purpose', 'hot water for bathing purpose', 'two time meal (dinner, breakfast)'],
  },
] as const

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

export const campFacilities = [
  {
    title: 'Temple nearby',
    detail: 'The temple is located just 200 metres away from the camp.',
  },
  {
    title: 'Market nearby',
    detail: 'The market is within 100 metres of the camp for quick access.',
  },
  {
    title: 'Washrooms nearby',
    detail: 'Within approximately 40–50 metres of the camp.',
  },
  {
    title: 'Warm tent',
    detail: 'A heater or blower is available inside the camp.',
  },
  {
    title: 'Hot water',
    detail: 'Available for drinking and bathing.',
  },
  {
    title: 'First aid',
    detail: 'First-aid facility available at the camp.',
  },
 
] as const
