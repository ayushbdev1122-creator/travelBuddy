'use client'

import { useState, type FormEvent } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Search01Icon,
} from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'

const stayTypes = ['Cabins', 'Tents', 'Glamping', 'Campervans']

const collections = [
  { number: '01', title: 'Quiet by the lake', count: '38 places', image: 'photo-1470770841072-f978cf4d019e', className: 'collection-lake' },
  { number: '02', title: 'Deep in the forest', count: '52 places', image: 'photo-1448375240586-882707db888b', className: 'collection-forest' },
  { number: '03', title: 'Weekend without Wi-Fi', count: '24 places', image: 'photo-1500530855697-b586d89ba3ee', className: 'collection-offline' },
  { number: '04', title: 'Under the stars', count: '31 places', image: 'photo-1475274047050-1d0c0975c63e', className: 'collection-stars' },
  { number: '05', title: 'Bring your dog', count: '67 places', image: 'photo-1478131143081-80f7f84ca84d', className: 'collection-dog' },
  { number: '06', title: 'Autumn escapes', count: '29 places', image: 'photo-1473448912268-2022ce9509d8', className: 'collection-autumn' },
]

const photos = [
  { label: 'Forest / Eifel', image: 'photo-1478131143081-80f7f84ca84d', className: 'photo-tents' },
  { label: 'Pine / Bavaria', image: 'photo-1448375240586-882707db888b', className: 'photo-pines' },
  { label: 'Meadow / Harz', image: 'photo-1472396961693-142e6e269027', className: 'photo-meadow' },
  { label: 'Night / Brandenburg', image: 'photo-1475274047050-1d0c0975c63e', className: 'photo-night' },
  { label: 'Lake / Saxony', image: 'photo-1470770841072-f978cf4d019e', className: 'photo-lake' },
  { label: 'Ridge / Tyrol', image: 'photo-1464822759023-fed622ff2c3b', className: 'photo-ridge' },
]

function photoUrl(id: string, width = 1000) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
}

export default function Page() {
  const [activeType, setActiveType] = useState('Cabins')
  const [destination, setDestination] = useState('')
  const [searchMessage, setSearchMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSearchMessage(
      destination.trim()
        ? `We’re looking for ${activeType.toLowerCase()} near ${destination.trim()}.`
        : `Showing handpicked ${activeType.toLowerCase()} across Germany and Europe.`,
    )
  }

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <main>
      <section className="hero-shell" id="explore">
        <div className="topographic" aria-hidden="true" />
        <header className="site-header page-gutter">
          <a className="wordmark" href="#explore" aria-label="Wildraum home">
            <span className="brand-mark">W</span> WILDRAUM<span className="brand-period">.</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a className="nav-active" href="#explore">Explore</a>
            <a href="#collections">Collections</a>
            <a href="#places">Places</a>
            <a href="#journal">Journal</a>
          </nav>
          <div className="header-actions">
            <a className="host-link" href="#newsletter">List your place</a>
            <Button className="sign-in-button" size="sm">Sign in</Button>
          </div>
        </header>

        <div className="hero-copy page-gutter">
          <div className="hero-heading-wrap">
            <p className="eyebrow"><span /> Camping & outdoor stays <i /> Germany + Europe</p>
            <h1>Find your space<br /><em>outside.</em></h1>
          </div>
          <div className="hero-intro">
            <p>Handpicked camps, cabins and outdoor stays across Germany and Europe.</p>
            <p className="place-count"><strong>280+ places</strong><span>curated by hand</span></p>
          </div>
        </div>

        <div className="hero-image page-gutter" id="places" style={{ backgroundImage: `url("${photoUrl('photo-1470770841072-f978cf4d019e', 2200)}")` }}>
          <div className="hero-image-shade" />
          <div className="stay-tabs" aria-label="Choose a stay type">
            {stayTypes.map((type) => (
              <button
                className={`stay-tab${activeType === type ? ' is-active' : ''}`}
                key={type}
                onClick={() => setActiveType(type)}
                type="button"
                aria-pressed={activeType === type}
              >
                {type}
              </button>
            ))}
          </div>
          <span className="coordinates">51.1657° N · 10.4515° E</span>
          <div className="search-area">
            <form className="search-panel" onSubmit={handleSearch}>
              <label className="search-field destination-field">
                <span>Destination</span>
                <input aria-label="Destination" onChange={(event) => setDestination(event.target.value)} placeholder="Where do you want to go?" value={destination} />
              </label>
              <label className="search-field date-field">
                <span>Dates</span>
                <input aria-label="Dates" onFocus={(event) => (event.currentTarget.type = 'date')} onBlur={(event) => !event.currentTarget.value && (event.currentTarget.type = 'text')} placeholder="Add dates" />
              </label>
              <label className="search-field guests-field">
                <span>Guests</span>
                <select aria-label="Guests" defaultValue="2 guests">
                  <option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option>
                </select>
              </label>
              <Button className="search-button" type="submit">
                <HugeiconsIcon icon={Search01Icon} size={16} strokeWidth={2} /> Search
              </Button>
            </form>
            <a className="map-button" href="#collections"><span className="map-glyph">⌖</span> Open the map <HugeiconsIcon icon={ArrowRight01Icon} size={15} /></a>
          </div>
        </div>
        <div className="search-feedback page-gutter" aria-live="polite">{searchMessage}</div>
      </section>

      <section className="intro-strip page-gutter" id="journal">
        <p className="eyebrow">Less noise. More nature.</p>
        <p className="intro-statement">A little further from the everyday.<br /><em>A lot closer to yourself.</em></p>
        <p className="intro-note">Small, thoughtful places for sleeping under trees, waking up slowly, and remembering what quiet sounds like.</p>
      </section>

      <section className="collections-section" id="collections">
        <div className="section-top page-gutter">
          <div>
            <p className="eyebrow">01 · Collections</p>
            <h2>Choose a <em>feeling,</em><br className="mobile-break" /> not just a destination.</h2>
          </div>
          <p className="section-aside">Six editorial entry points that replace the category menu. Each is a mood before it is a filter.</p>
        </div>
        <div className="collection-grid page-gutter">
          {collections.map((item) => (
            <a className={`collection-card ${item.className}`} href="#places" key={item.number} style={{ backgroundImage: `url("${photoUrl(item.image, 900)}")` }}>
              <span className="collection-number">{item.number}</span>
              <span className="round-arrow" aria-hidden="true"><HugeiconsIcon icon={ArrowUpRight01Icon} size={17} /></span>
              <span className="collection-caption"><strong>{item.title}</strong><small>{item.count}</small></span>
            </a>
          ))}
        </div>
        <div className="collection-foot page-gutter"><span className="brand-mark">W</span><span>Go where the signal fades.</span><a href="#places">Explore all places <HugeiconsIcon icon={ArrowRight01Icon} size={15} /></a></div>
      </section>

      <section className="photography-section page-gutter">
        <div className="photo-intro">
          <p className="eyebrow">02 · The field notes</p>
          <h2>Open air,<br /><em>long light.</em></h2>
          <p className="photo-description">Clear mornings and low golden light. Water, meadow and pine, always with room to breathe, and one warm grade running across the entire library.</p>
          <div className="photo-tags"><span>Sunlit</span><span>Airy</span><span>Editorial</span><span>Wide horizons</span><span>Golden hour</span></div>
          <div className="photo-meta"><div><span>Grade</span><strong>Warm highlights / open shadows</strong></div><div><span>Saturation</span><strong>+6%</strong></div><div><span>Sources</span><strong>Unsplash · 8 photographers</strong></div></div>
          <div className="photo-anchor" style={{ backgroundImage: `url("${photoUrl('photo-1500530855697-b586d89ba3ee', 1000)}")` }}><span>Lake / Brandenburg</span></div>
        </div>
        <div className="photo-mosaic">
          {photos.map((photo) => <figure className={`mosaic-item ${photo.className}`} key={photo.label} style={{ backgroundImage: `url("${photoUrl(photo.image, 1000)}")` }}><figcaption>{photo.label}</figcaption></figure>)}
        </div>
      </section>

      <section className="newsletter-section page-gutter" id="newsletter">
        <div className="newsletter-heading"><p className="eyebrow">A note from outside</p><h2>One quiet place in your inbox<br /><em>every week.</em></h2></div>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <label className="sr-only" htmlFor="newsletter-email">Your email address</label>
          <div className="newsletter-controls"><input id="newsletter-email" type="email" required placeholder="your@email.com" /><Button type="submit">{subscribed ? 'You’re on the list' : <>Take me outside <HugeiconsIcon icon={ArrowRight01Icon} size={16} /></>}</Button></div>
          <p aria-live="polite">{subscribed ? 'Look out for a little fresh air in your inbox.' : 'One email, every Friday. No noise.'}</p>
        </form>
      </section>

      <footer className="site-footer page-gutter">
        <div className="footer-main">
          <div className="footer-brand"><a className="wordmark" href="#explore"><span className="brand-mark">W</span> WILDRAUM<span className="brand-period">.</span></a><p>Curated camping and outdoor stays across Germany and Europe.</p><span className="footer-motto">Less noise. More nature.</span></div>
          <div className="footer-links"><div><span>Explore</span><a href="#places">Cabins</a><a href="#places">Tents</a><a href="#places">Glamping</a><a href="#places">Campervans</a></div><div><span>Collections</span><a href="#collections">Quiet by the lake</a><a href="#collections">Under the stars</a><a href="#collections">Bring your dog</a></div><div><span>Company</span><a href="#journal">About</a><a href="#journal">Journal</a><a href="#newsletter">Hosts</a><a href="mailto:hello@wildraum.eu">Contact</a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Wildraum</span><span>See you outside.</span></div>
      </footer>
    </main>
  )
}
