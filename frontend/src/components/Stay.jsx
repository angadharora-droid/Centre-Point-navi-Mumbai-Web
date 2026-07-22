import { useState } from 'react'
import { Link } from 'react-router-dom'
import { rooms, bookingUrl } from '../data/content'
import './Stay.css'

export default function Stay() {
  const [filter, setFilter] = useState('All Rooms')

  const filtered = rooms.filter((r) => filter === 'All Rooms' || r.tag === filter)

  return (
    <section className="stay section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Stay</h2>
          <p>Enjoy staying at our hotel in well-appointed, spacious rooms that offer modern design and amenities.</p>
        </div>

        <div className="stay-tabs">
          {['All Rooms', 'Premium', 'Club'].map((tab) => (
            <button
              key={tab}
              className={`stay-tab ${filter === tab ? 'is-active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="stay-grid">
          {filtered.map((room) => (
            <div className="room-card" key={room.name}>
              <Link to={room.to} className="room-card-img">
                <img src={room.img} alt={room.name} />
              </Link>
              <div className="room-card-body">
                <h3><Link to={room.to}>{room.name}</Link></h3>
                <p className="room-desc">{room.desc}</p>
                <p className="room-size">{room.size}</p>
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
