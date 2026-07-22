import PageHeader from '../components/PageHeader'
import { amenityDetails, roomFeatures, images } from '../data/content'
import './ListingPage.css'

export default function AmenitiesPage() {
  return (
    <>
      <PageHeader eyebrow="Amenities" title="Facilities &amp; Amenities" image={images.room2} />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Luxurious Amenities</span>
            <h2 className="section-title">Everything For A Comfortable Stay</h2>
            <p>Whether you&rsquo;re in town for business, leisure, or a special occasion, this hotel provides everything you need for a comfortable and luxurious stay.</p>
          </div>

          <div className="listing-grid">
            {amenityDetails.map((a) => (
              <div className="listing-card" key={a.name}>
                <div className="listing-card-img">
                  <img src={a.img} alt={a.name} />
                </div>
                <div className="listing-card-body">
                  <h3>{a.name}</h3>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="subheading">Room Features</h3>
          <ul className="pill-list">
            {roomFeatures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
