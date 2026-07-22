import { images, contactInfo, stats } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>About The Hotel</h2>

        <div className="about-tab">Brief Sketch</div>

        <div className="about-card">
          <div className="about-copy">
            <p>
              Hotel Centre Point, Unit of Vijan Motor Service Pvt Ltd., Navi Mumbai. The hotel is
              just a 5 minute drive away from Turbhe railway Station and is well connected to
              other parts of the city. This boutique hotel creates a niche for itself, right from
              the all glass fa&ccedil;ade to the spacious, technologically updated rooms. Our
              service complements the exquisite product and ensures the highest level of
              satisfaction to our beloved guests.
            </p>
            <div className="about-location">
              <strong>Location</strong>
              <span>📍 {contactInfo.address}</span>
            </div>
          </div>
          <div className="about-image">
            <img src={images.about} alt="Centre Point Hotel Navi Mumbai" />
          </div>
        </div>

        <div className="stats-card">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value">
                {s.icon === 'tripadvisor' && <img src={images.tripadvisor} alt="" className="stat-icon" />}
                {s.value}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
