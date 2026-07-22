import { Link } from 'react-router-dom'
import { diningVenues } from '../data/content'
import './Dining.css'

export default function Dining() {
  return (
    <section className="dining section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Dining Options</h2>
          <p>24 Hours In Room Dining</p>
        </div>

        <div className={`dining-grid ${diningVenues.length === 1 ? 'is-single' : ''}`}>
          {diningVenues.map((venue) => (
            <div className="dining-card" key={venue.name} style={{ backgroundImage: `url(${venue.img})` }}>
              <div className="dining-card-overlay">
                <h3>{venue.name}</h3>
                <p className="dining-card-desc">{venue.desc}</p>
                <div className="dining-card-actions">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-primary btn-pill">Book a Table</a>
                  <Link to="/dining" className="btn btn-primary btn-pill">Explore</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
