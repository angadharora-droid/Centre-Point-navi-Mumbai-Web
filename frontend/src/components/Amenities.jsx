import { Link } from 'react-router-dom'
import { amenities } from '../data/content'
import './Amenities.css'

const icons = {
  'Free WiFi': '📶',
  'Left Luggage Room': '🧳',
  'Valet Parking': '🚗',
  Concierge: '🛎'
}

export default function Amenities() {
  return (
    <section className="amenities section">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Amenities</h2>

        <div className="amenities-bar">
          <span className="amenities-label">Facilities and Amenities</span>
          <span className="amenities-sep" />
          <ul className="amenities-list">
            {amenities.map((a) => (
              <li key={a.name}>
                <span className="amenity-icon">{icons[a.name] || '•'}</span>
                {a.name.toUpperCase()}
              </li>
            ))}
          </ul>
          <Link to="/amenities" className="btn btn-primary btn-pill amenities-view-all">View All</Link>
        </div>
      </div>
      <hr className="section-divider" />
    </section>
  )
}
