import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { rooms, images, bookingUrl } from '../data/content'
import './ListingPage.css'

export default function Accommodation() {
  return (
    <>
      <PageHeader eyebrow="Stay" title="Accommodation" image={images.room1} />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Rooms</span>
            <h2 className="section-title">Enjoy Well-Appointed Comfort</h2>
            <p>Enjoy staying at our hotel in well-appointed, spacious rooms that offer modern design and amenities. 40 premium rooms across 2 categories.</p>
          </div>

          <div className="listing-grid">
            {rooms.map((room) => (
              <div className="listing-card" key={room.name}>
                <Link to={room.to} className="listing-card-img">
                  <img src={room.img} alt={room.name} />
                </Link>
                <div className="listing-card-body">
                  <h3><Link to={room.to}>{room.name}</Link></h3>
                  <p className="listing-desc-italic">{room.desc}</p>
                  <p className="listing-size">{room.size}</p>
                  <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
