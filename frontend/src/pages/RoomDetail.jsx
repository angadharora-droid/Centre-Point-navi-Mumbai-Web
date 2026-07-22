import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { roomAmenityIcons, bookingUrl } from '../data/content'
import './RoomDetail.css'

export default function RoomDetail({ title, images }) {
  const [slide, setSlide] = useState(0)

  const prev = () => setSlide((s) => (s - 1 + images.length) % images.length)
  const next = () => setSlide((s) => (s + 1) % images.length)

  return (
    <>
      <PageHeader eyebrow="Stay" title={title} image={images[0]} />

      <section className="section room-detail">
        <div className="container">
          <div className="room-gallery">
            {images.map((src, i) => (
              <div
                key={src}
                className={`room-gallery-slide ${i === slide ? 'is-active' : ''}`}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
            <button className="room-gallery-arrow room-gallery-prev" onClick={prev} aria-label="Previous image">&#10094;</button>
            <button className="room-gallery-arrow room-gallery-next" onClick={next} aria-label="Next image">&#10095;</button>
            <div className="room-gallery-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`room-gallery-dot ${i === slide ? 'is-active' : ''}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Show image ${i + 1}`}
                />
              ))}
            </div>
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
