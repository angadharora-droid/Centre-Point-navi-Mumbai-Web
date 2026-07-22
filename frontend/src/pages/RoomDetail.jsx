import { roomAmenityIcons, bookingUrl } from '../data/content'
import './RoomDetail.css'

export default function RoomDetail({ title, images }) {
  return (
    <>
      <section className="room-hero">
        <div className="room-hero-image" style={{ backgroundImage: `url(${images[0]})` }} />
        <div className="room-hero-band">
          <h1>{title}</h1>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="room-hero-btn">Book Now</a>
        </div>
      </section>

      <section className="section room-detail">
        <div className="container">
          <div className="room-photo-grid">
            {images.map((src, i) => (
              <div className="room-photo-item" key={src}>
                <img src={src} alt={`${title} ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="room-amenities">
            {roomAmenityIcons.map((a) => (
              <div className="room-amenity" key={a.name}>
                <img src={a.icon} alt="" className="room-amenity-icon" />
                <span>{a.name}</span>
              </div>
            ))}
          </div>

          <div className="room-detail-cta">
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Book Now</a>
          </div>
        </div>
      </section>
    </>
  )
}
