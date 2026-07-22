import { useState } from 'react'
import { Link } from 'react-router-dom'
import { images, contactInfo, bookingUrl } from '../data/content'
import NavOverlay from './NavOverlay'
import './Header.css'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [hotLineOpen, setHotLineOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <button className="hamburger" onClick={() => setNavOpen(true)} aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>

          <Link to="/" className="brand">
            <img src={images.logo} alt="Centre Point Hotel Navi Mumbai" />
          </Link>

          <div className="header-actions">
            <div
              className="hotline"
              onMouseEnter={() => setHotLineOpen(true)}
              onMouseLeave={() => setHotLineOpen(false)}
            >
              <button className="hotline-toggle" onClick={() => setHotLineOpen((v) => !v)}>
                Hot Line <span className="chevron">⌄</span>
              </button>
              {hotLineOpen && (
                <div className="hotline-panel">
                  <a href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}>{contactInfo.phone1}</a>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              )}
            </div>
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Book Now</a>
          </div>
        </div>
      </header>

      <NavOverlay open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  )
}
