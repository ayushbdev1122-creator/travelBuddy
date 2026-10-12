import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons'

const locationUrl = 'https://maps.app.goo.gl/X19d6zzUb6sPfvvs8?g_st=aw'
const whatsappNumber = '919876543210'
const whatsappMessage = encodeURIComponent("Hi! I'm interested in staying at your Kedarnath camp. Could you share details about the stay and available dates?")
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const campPhotos = [
  { label: 'The mountain-facing tent', detail: 'At camp', image: '/camp-photos/mountain-tent.jpeg', className: 'collection-lake' },
  { label: 'A place to settle in', detail: 'Tent stay', image: '/camp-photos/tent-opening.jpeg', className: 'collection-forest' },
  { label: 'Bedding for the night', detail: 'Inside the tent', image: '/camp-photos/tent-bedding.jpeg', className: 'collection-offline' },
  { label: 'Room to rest', detail: 'Camp interior', image: '/camp-photos/sleeping-bags.jpeg', className: 'collection-stars' },
  { label: 'A warm tent at dusk', detail: 'At camp', image: '/camp-photos/orange-tent.jpeg', className: 'collection-dog' },
  { label: 'Kedarnath Temple', detail: 'Kedarnath, Uttarakhand', image: '/camp-photos/kedarnath-temple.jpeg', className: 'collection-autumn' },
]

const galleryPhotos = [
  { label: 'Mountain-facing tent', image: '/camp-photos/mountain-tent.jpeg', className: 'photo-tents' },
  { label: 'Kedarnath Temple', image: '/camp-photos/kedarnath-temple.jpeg', className: 'photo-pines' },
  { label: 'Tent bedding', image: '/camp-photos/tent-bedding.jpeg', className: 'photo-meadow' },
  { label: 'A place to rest', image: '/camp-photos/tent-interior.jpeg', className: 'photo-night' },
  { label: 'Inside the camp', image: '/camp-photos/orange-tent.jpeg', className: 'photo-lake' },
  { label: 'Sleeping bags', image: '/camp-photos/sleeping-bags.jpeg', className: 'photo-ridge' },
]

export default function Page() {
  return (
    <main>
      <section className="hero-shell" id="explore">
        <div className="topographic" aria-hidden="true" />
        <header className="site-header page-gutter">
          <a className="wordmark" href="#explore" aria-label="Kedarnath Camp home">
            <span className="brand-mark">K</span> KEDARNATH CAMP<span className="brand-period">.</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a className="nav-active" href="#explore">The camp</a>
            <a href="#stay">Your stay</a>
            <a href="#experience">Gallery</a>
            <a href="#location">Location</a>
          </nav>
          <div className="header-actions">
            <a className="host-link" href={locationUrl} target="_blank" rel="noreferrer">Get directions</a>
            <a className="map-cta" href="#location" aria-label="Find the camp">Find us <HugeiconsIcon icon={ArrowUpRight01Icon} size={15} /></a>
          </div>
        </header>

        <div className="hero-copy page-gutter">
          <div className="hero-heading-wrap">
            <p className="eyebrow"><span /> Kedarnath, Uttarakhand</p>
            <h1>Rest easy<br /><em>at Kedarnath.</em></h1>
          </div>
          <div className="hero-intro">
            <p>A simple place to pause, settle in, and wake up in the mountains.</p>
            <p className="place-count"><strong>30.7321° N</strong><span>79.0656° E · Kedarnath</span></p>
            <div className="whatsapp-contact">
              <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">
                Contact me on WhatsApp <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </a>
              <span>Ask about your stay or available dates.</span>
            </div>
          </div>
        </div>

        <div className="hero-image page-gutter" id="places" role="img" aria-label="A campsite tent with mountain scenery in Kedarnath" style={{ backgroundImage: 'url("/camp-photos/mountain-tent.jpeg")' }}>
          <div className="hero-image-shade" />
          <div className="stay-tabs" aria-label="Accommodation type">
            <span className="stay-tab is-active">Tented stay</span>
            <span className="stay-tab stay-tab-location">Kedarnath · Uttarakhand</span>
          </div>
          <span className="coordinates">30.7321° N · 79.0656° E</span>
        </div>
      </section>

      <section className="intro-strip page-gutter" id="journal">
        <p className="eyebrow">A pause in the mountains</p>
        <p className="intro-statement">Come for the mountains.<br /><em>Stay for a little rest.</em></p>
        <p className="intro-note">A tent, a place to sleep, and the Kedarnath landscape all around. Keep your plans simple and take in the journey at your own pace.</p>
      </section>

      <section className="collections-section" id="stay">
        <div className="section-top page-gutter">
          <div>
            <p className="eyebrow">01 · A look around</p>
            <h2>Your mountain stay,<br className="mobile-break" /> <em>just as it is.</em></h2>
          </div>
          <p className="section-aside">Real photos from the camp and its setting in Kedarnath, Uttarakhand.</p>
        </div>
        <div className="collection-grid page-gutter">
          {campPhotos.map((item, index) => (
            <a className={`collection-card ${item.className}`} href="#experience" key={item.image} style={{ backgroundImage: `url("${item.image}")` }}>
              <span className="collection-number">0{index + 1}</span>
              <span className="round-arrow" aria-hidden="true"><HugeiconsIcon icon={ArrowUpRight01Icon} size={17} /></span>
              <span className="collection-caption"><strong>{item.label}</strong><small>{item.detail}</small></span>
            </a>
          ))}
        </div>
        <div className="collection-foot page-gutter"><span className="brand-mark">K</span><span>A place to pause in Kedarnath.</span><a href="#location">Find the camp <HugeiconsIcon icon={ArrowRight01Icon} size={15} /></a></div>
      </section>

      <section className="photography-section page-gutter" id="experience">
        <div className="photo-intro">
          <p className="eyebrow">02 · At the camp</p>
          <h2>Mountain air,<br /><em>a warm bed.</em></h2>
          <p className="photo-description">Take a closer look at the tents and bedding. Kedarnath sits high in the mountains, so bring warm layers and check local conditions before you travel.</p>
          <div className="photo-tags"><span>Tented stay</span><span>Mountain setting</span><span>Kedarnath</span><span>Bring warm layers</span></div>
          <div className="photo-meta"><div><span>Stay</span><strong>Tent accommodation</strong></div><div><span>Place</span><strong>Kedarnath</strong></div><div><span>District</span><strong>Rudraprayag, Uttarakhand</strong></div></div>
          <a className="photo-anchor" href={locationUrl} target="_blank" rel="noreferrer" aria-label="View Kedarnath on Google Maps" style={{ backgroundImage: 'url("/camp-photos/kedarnath-temple.jpeg")' }}><span>Kedarnath, Uttarakhand</span></a>
        </div>
        <div className="photo-mosaic">
          {galleryPhotos.map((photo) => <figure className={`mosaic-item ${photo.className}`} key={photo.label} style={{ backgroundImage: `url("${photo.image}")` }}><figcaption>{photo.label}</figcaption></figure>)}
        </div>
      </section>

      <section className="location-section page-gutter" id="location">
        <div className="location-heading">
          <p className="eyebrow">03 · Find your way</p>
          <h2>See you in<br /><em>Kedarnath.</em></h2>
          <p>Use the pinned Google Maps location for directions to the camp.</p>
        </div>
        <div className="location-details">
          <div className="location-coordinate"><span>Camp location</span><strong>Kedarnath, Uttarakhand, India</strong></div>
          <div className="location-coordinate"><span>Map pin</span><strong>30.7321° N · 79.0656° E</strong></div>
          <a className="location-link" href={locationUrl} target="_blank" rel="noreferrer">Open Google Maps <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} /></a>
          <div className="location-map-frame">
            <iframe
              className="location-map"
              src="https://maps.google.com/maps?q=30.7321225%2C79.065574&z=15&output=embed"
              title="Map showing the Kedarnath camp location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <footer className="site-footer page-gutter">
        <div className="footer-main">
          <div className="footer-brand"><a className="wordmark" href="#explore"><span className="brand-mark">K</span> KEDARNATH CAMP<span className="brand-period">.</span></a><p>A tent stay in Kedarnath, Uttarakhand.</p><span className="footer-motto">Kedarnath · Himalaya</span></div>
          <div className="footer-links"><div><span>Explore</span><a href="#stay">The camp</a><a href="#experience">Photo gallery</a></div><div><span>Location</span><a href="#location">Kedarnath</a><a href={locationUrl} target="_blank" rel="noreferrer">Google Maps</a></div><div><span>Coordinates</span><a href={locationUrl} target="_blank" rel="noreferrer">30.7321° N</a><a href={locationUrl} target="_blank" rel="noreferrer">79.0656° E</a></div></div>
        </div>
        <div className="footer-bottom"><span>Kedarnath, Uttarakhand</span><span>See you in the mountains.</span></div>
      </footer>
    </main>
  )
}
