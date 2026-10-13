export const locationUrl = 'https://maps.app.goo.gl/X19d6zzUb6sPfvvs8?g_st=aw'
export const whatsappNumber = '917302733848'
export const whatsappMessage = encodeURIComponent("Hi, I'd like to ask about a stay at Kedarnath Camp. My dates are [check-in] to [check-out] for [number] guests. Could you confirm availability and the price?")
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

export const campInfo = {
  name: 'Kedarnath Camp',
  slug: 'kedarnath-camp',
  location: 'Kedarnath, Uttarakhand, India',
  coordinates: '30.7321° N · 79.0656° E',
  tagline: 'A tent stay in the Himalayas',
  heroTitle: 'Rest well.',
  heroTitleAccent: 'Wake up in Kedarnath.',
  subtitle: 'A simple tent stay close to the Kedarnath trail. Get some rest, enjoy the mountain air, and get ready for the journey ahead.',
  nearbyPlaces: [
    { label: 'Kedarnath Temple', value: 'Around 200 metres away' },
    { label: 'Local market', value: 'Around 100 metres away' },
    { label: 'Hanuman Mandir', value: 'Near the Astha Path and the temple darshan queue' },
  ],
} as const

export const campPackages = [
  {
    id: 'ep',
    name: 'EP',
    description: 'Room to rest',
    price: 500,
    includes: ['Heater inside the tent', 'Hot water for drinking'],
    confirmWithCamp: [],
  },
  {
    id: 'cp',
    name: 'CP',
    description: 'Stay with dinner',
    price: 800,
    includes: ['Heater inside the tent', 'Hot water for drinking', 'Hot water for bathing', 'Dinner'],
    confirmWithCamp: [],
  },
  {
    id: 'ap',
    name: 'AP',
    description: 'Stay with meals',
    price: 1100,
    includes: ['Welcome tea', 'Hot water for bathing', 'Dinner and breakfast'],
    confirmWithCamp: ['heater', 'hot water for drinking'],
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
    label: 'Regular season',
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
  { label: 'The tents', detail: 'Around the camp', image: '/camp-photos/mountain-tent.jpeg', layout: 'lg:col-start-1 lg:row-start-1 lg:row-span-2' },
  { label: 'Bedding for the night', detail: 'Inside the tent', image: '/camp-photos/tent-opening.jpeg', layout: 'lg:col-start-2 lg:row-start-1' },
  { label: 'Inside the tent', detail: 'Tent accommodation', image: '/camp-photos/tent-bedding.jpeg', layout: 'lg:col-start-3 lg:row-start-1' },
  { label: 'A look around camp', detail: 'Kedarnath, Uttarakhand', image: '/camp-photos/sleeping-bags.jpeg', layout: 'lg:col-start-2 lg:row-start-2' },
  { label: 'The mountain-facing tent', detail: 'Around the camp', image: '/camp-photos/orange-tent.jpeg', layout: 'lg:col-span-2 lg:col-start-1 lg:row-start-3' },
  { label: 'Kedarnath Temple', detail: 'Kedarnath, Uttarakhand', image: '/camp-photos/kedarnath-temple.jpeg', layout: 'lg:col-start-3 lg:row-start-2 lg:row-span-2' },
]

export const galleryPhotos = [
  { label: 'The tents', image: '/camp-photos/mountain-tent.jpeg', layout: 'col-span-2' },
  { label: 'Kedarnath Temple', image: '/camp-photos/kedarnath-temple.jpeg', layout: 'row-span-2' },
  { label: 'Tent bedding', image: '/camp-photos/tent-bedding.jpeg', layout: '' },
  { label: 'Inside the tent', image: '/camp-photos/tent-interior.jpeg', layout: '' },
  { label: 'Inside the camp', image: '/camp-photos/orange-tent.jpeg', layout: 'col-span-2' },
  { label: 'Sleeping bags', image: '/camp-photos/sleeping-bags.jpeg', layout: '' },
]

export const campFacilities = [
  {
    title: 'Temple nearby',
    detail: 'Kedarnath Temple is approximately 200 metres from the camp.',
  },
  {
    title: 'Market nearby',
    detail: 'The local market is around 100 metres away for shops and essentials.',
  },
  {
    title: 'Washrooms nearby',
    detail: 'Washrooms are approximately 40–50 metres from the camp.',
  },
  {
    title: 'Heating inside the tent',
    detail: 'A heater or blower is available inside the tent.',
  },
  {
    title: 'Hot water',
    detail: 'Hot water is available for drinking and bathing. Please confirm availability and timings with the camp.',
  },
  {
    title: 'First aid',
    detail: 'First-aid facilities are available at the camp.',
  },
 
] as const
