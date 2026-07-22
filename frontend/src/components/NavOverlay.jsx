import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { images, contactInfo, bookingUrl, careersUrl } from '../data/content'
import './NavOverlay.css'

const columns = [
  {
    title: 'Rooms',
    to: '/accommodation',
    links: [
      { label: 'Premium Twin Bedroom', to: '/accommodation' },
      { label: 'Club Master Bedroom', to: '/accommodation' }
    ]
  },
  {
    title: 'Dining',
    to: '/dining',
    links: [{ label: 'Bougainvillea', to: '/dining' }]
  },
  {
    title: 'Facilities',
    to: '/amenities',
    links: [{ label: 'Amenities', to: '/amenities' }]
  },
  {
    title: 'Foints Loyalty Program',
    to: '/foints',
    links: []
  },
  {
    title: 'Other',
    to: '/gallery',
    links: [
      { label: 'Gallery', to: '/gallery' },
      { label: 'Contact Us', to: '/contact' }
    ]
  }
]

export default function NavOverlay({ open, onClose }) {
  const [hotLineOpen, setHotLineOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="nav-overlay">
      <div className="container nav-overlay-top">
        <button className="nav-close" onClick={onClose} aria-label="Close menu">&times;</button>
        <Link to="/" className="brand" onClick={onClose}>
          <img src={images.logo} alt="Centre Point Hotel Navi Mumbai" />
        </Link>
        <div className="nav-overlay-actions">
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn btn-primary" onClick={onClose}>Book Now</a>
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
        </div>
      </div>

      <nav className="nav-overlay-body">
        {columns.map((col) => (
          <div className="nav-col" key={col.title}>
            <Link to={col.to} onClick={onClose}><h4>{col.title}</h4></Link>

            {col.links && col.links.map((link) => (
              <Link key={link.label} to={link.to} onClick={onClose}>{link.label}</Link>
            ))}
            {col.title === 'Other' && (
              <a href={careersUrl} target="_blank" rel="noreferrer" onClick={onClose}>Careers</a>
            )}
          </div>
        ))}
      </nav>

      <div className="nav-overlay-footer">
        <a href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}>{contactInfo.phone1}</a>
        <span className="divider">|</span>
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </div>
    </div>
  )
}
